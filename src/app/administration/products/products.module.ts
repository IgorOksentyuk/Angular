import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';

import { NavigationModule } from '../navigation/navigation.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [ProductsComponent, FilterComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavigationModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSortModule,
    NgxPaginationModule,
  ],
  exports: [ProductsComponent, MatProgressSpinnerModule, FilterComponent],
})
export class ProductsModule {}
