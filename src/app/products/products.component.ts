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
  public products: IData[];
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

      this.loadingSvc.hideLoader();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
