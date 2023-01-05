import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NavigationModule } from '../navigation/navigation.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavigationModule,
    MatProgressSpinnerModule,
  ],
  exports: [ProductsComponent, MatProgressSpinnerModule],
})
export class ProductsModule {}
