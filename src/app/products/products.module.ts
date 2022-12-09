import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from '../services/products.service';

import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ChangePriceColorDirective } from './directives/change-price-color.directive';

@NgModule({
  declarations: [ProductComponent, HeaderComponent, ChangePriceColorDirective],
  imports: [CommonModule],
  providers: [ProductsService],
  exports: [ProductComponent, HeaderComponent],
})
export class ProductsModule {}
