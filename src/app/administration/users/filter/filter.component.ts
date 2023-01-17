import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { debounceTime, Subscription } from 'rxjs';

import { FilterService } from 'src/app/services/filter.service';
import {
  FilterUserConfiguration,
  TypeOfFilterDate,
} from '../models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  dateMore = TypeOfFilterDate.More;
  dateLess = TypeOfFilterDate.Less;
  subscription: Subscription;

  @Output()
  filterChangeEvent = new EventEmitter<FilterUserConfiguration>();

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.subscription = this.filterService.userConfiguration$
      .pipe(debounceTime(1000))
      .subscribe((filterUserConfig) => {
        this.filterChangeEvent.emit(filterUserConfig);
      });
  }

  date(event: any): void {
    this.filterService.setDate(event.target.value);
  }

  dateType(event: any): void {
    this.filterService.setTypeDate(event.target.value);
  }

  search(event: any): void {
    this.filterService.setUserSearchValue(event.target.value);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
