import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

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
  products: IData[];
  displayedProducts: IData[];
  loading$ = this.loadingSvc._loading$;
  subscription: Subscription;

  constructor(
    private svc: ProductsService,
    private loadingSvc: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingSvc.showLoader();

    this.svc.getAll().subscribe((res) => {
      this.products = res;
      this.displayedProducts = res.slice(0, 8);

      this.loadingSvc.hideLoader();
    });
  }

  showMore() {
    let newLength = this.displayedProducts.length + 4;
    if (newLength > this.products.length) {
      newLength = this.products.length;
    }
    this.displayedProducts = this.products.slice(0, newLength);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
