import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import { IData } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../products.component.scss', './product.component.scss'],
})
export class ProductComponent {
  @Input()
  product: IData;

  constructor(private service: CartService) {}

  addToCart() {
    this.service.addToCart(this.product);
  }
}
