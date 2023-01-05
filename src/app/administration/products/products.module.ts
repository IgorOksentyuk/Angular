import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

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
    Ng2SearchPipeModule,
    FormsModule,
  ],
  exports: [ProductsComponent, MatProgressSpinnerModule, FilterComponent],
})
export class ProductsModule {}
