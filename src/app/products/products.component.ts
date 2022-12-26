import { Component, OnInit, Output } from '@angular/core';

import { IData } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../app.component.scss', './products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Output()
  public products: IData[];

  constructor(private svc: ProductsService) {}

  ngOnInit(): void {
    this.products = this.svc.data;
  }
}
