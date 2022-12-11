import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from '../services/products.service';

import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ChangePriceColorDirective } from './directives/change-price-color.directive';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    HeaderComponent,
    ChangePriceColorDirective,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
  providers: [ProductsService],
  exports: [ProductComponent, HeaderComponent, ProductDetailsComponent],
})
export class ProductsModule {}
