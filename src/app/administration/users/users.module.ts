import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { NavigationModule } from '../navigation/navigation.module';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [UsersComponent, FilterComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NavigationModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSortModule,
    NgxPaginationModule,
  ],
})
export class UsersModule {}
