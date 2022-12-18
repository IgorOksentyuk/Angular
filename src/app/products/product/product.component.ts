import { Component, Input } from '@angular/core';

import { IData } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../products.component.scss', './product.component.scss'],
})
export class ProductComponent {
  @Input()
  product: IData;
}
