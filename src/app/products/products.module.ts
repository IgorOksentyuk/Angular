import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ChangePriceColorDirective } from './directives/change-price-color.directive';

import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    ProductComponent,
    HeaderComponent,
    ChangePriceColorDirective,
    ProductDetailsComponent,
    FooterComponent,
    CartComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
  providers: [],
  exports: [
    ProductComponent,
    HeaderComponent,
    ProductDetailsComponent,
    FooterComponent,
    CartComponent,
  ],
})
export class ProductsModule {}
