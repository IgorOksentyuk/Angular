import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/models/product.model';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: IData[] = [];
  //term -> value for search filter
  term: any;
  loading$ = this.loadingSvc._loading$;

  constructor(
    private productsService: ProductsService,
    private loadingSvc: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingSvc.showLoader();

    this.productsService.data.subscribe((res) => {
      this.products = res;

      this.loadingSvc.hideLoader();
    });
  }
}
