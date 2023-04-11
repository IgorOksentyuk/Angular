import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProductsRoutingModule } from './products-routing.module';

import { ChangePriceColorDirective } from './directives/change-price-color.directive';

import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    ProductComponent,
    ChangePriceColorDirective,
    ProductDetailsComponent,
    FooterComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatProgressSpinnerModule,
    HeaderModule,
  ],
  providers: [],
  exports: [
    ProductComponent,
    ProductDetailsComponent,
    FooterComponent,
    CartComponent,
    MatProgressSpinnerModule,
    HeaderModule,
  ],
})
export class ProductsModule {}
