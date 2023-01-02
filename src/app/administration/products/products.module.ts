import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, NavigationModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
