import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { NavigationModule } from '../navigation/navigation.module';
import { FilterComponent } from './filter/filter.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [UsersComponent, FilterComponent, CreateUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NavigationModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSortModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
})
export class UsersModule {}
