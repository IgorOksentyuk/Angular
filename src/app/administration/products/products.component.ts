import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: IData[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.data.subscribe((res) => {
      this.products = res;
    });
  }
}
