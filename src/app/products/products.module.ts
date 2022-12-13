import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsService } from '../services/products.service';
import { ChangePriceColorDirective } from './directives/change-price-color.directive';

import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ProductComponent,
    HeaderComponent,
    ChangePriceColorDirective,
    ProductDetailsComponent,
    FooterComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
  providers: [ProductsService],
  exports: [
    ProductComponent,
    HeaderComponent,
    ProductDetailsComponent,
    FooterComponent,
  ],
})
export class ProductsModule {}
