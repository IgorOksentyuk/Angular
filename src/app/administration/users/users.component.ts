import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sort } from '@angular/material/sort';

import { LoadingService } from 'src/app/services/loading.service';
import { UsersService } from 'src/app/services/users.service';

import { User } from 'src/app/models/user.model';
import {
  FilterUserConfiguration,
  TypeOfFilterDate,
} from './models/filter.model';
import { CreateUserComponent } from './create-user/create-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  subscription: Subscription;
  users: User[] = [];
  filteredUsers: User[] = [];
  currentSort: Sort;
  loading$ = this.loadingSvc._loading$;
  page: number = 1;
  displayedUsers: number = 5;

  constructor(
    private loadingSvc: LoadingService,
    private usersService: UsersService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadingSvc.showLoader();
    this.postUsers();

    this.usersService.createEvents$.subscribe((user) => {
      this.users.push(user);
      this.filteredUsers.push(user);
    });
  }

  postUsers() {
    this.subscription = this.usersService.getAll().subscribe((res) => {
      this.users = res;
      this.filteredUsers = res;

      this.loadingSvc.hideLoader();
    });
  }

  onPageChange(event: any) {
    this.page = event;
  }

  onFilterChange(filterConfig: FilterUserConfiguration) {
    this.filteredUsers = this.users.filter((user) => {
      if (
        filterConfig.dateType === TypeOfFilterDate.More &&
        Date.parse(user.createdAt) <= Date.parse(filterConfig.date)
      ) {
        return false;
      }
      if (
        filterConfig.dateType === TypeOfFilterDate.Less &&
        Date.parse(user.createdAt) >= Date.parse(filterConfig.date)
      ) {
        return false;
      }

      if (
        user.username.toLowerCase().includes(filterConfig.search.toLowerCase())
      ) {
        return true;
      }

      return false;
    });

    if (this.currentSort) {
      this.sortData(this.currentSort);
    }
  }

  sortData(sort: Sort) {
    this.currentSort = sort;
    const data = this.filteredUsers.slice();
    if (!sort.active || sort.direction === '') {
      this.filteredUsers = data;
      return;
    }

    this.filteredUsers = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'username':
          return compare(a.username, b.username, isAsc);

        case 'createdAt':
          return compare(a.createdAt, b.createdAt, isAsc);

        default:
          return 0;
      }
    });
  }

  addUser() {
    this.dialogRef.open(CreateUserComponent, { width: '570px' });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
