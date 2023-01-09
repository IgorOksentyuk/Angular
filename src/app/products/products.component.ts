import { Component, OnInit, Output } from '@angular/core';

import { IData } from '../models/product.model';
import { LoadingService } from '../services/loading.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../app.component.scss', './products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Output()
  public products: IData[];
  loading$ = this.loadingSvc._loading$;

  constructor(
    private svc: ProductsService,
    private loadingSvc: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingSvc.showLoader();

    this.svc.getAll().subscribe((res) => {
      this.products = res;

      this.loadingSvc.hideLoader();
    });
  }
}
