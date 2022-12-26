import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IData } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IData | undefined;
  productId: number;
  products: IData[];
  item: IData;

  constructor(
    private activatedRoute: ActivatedRoute,
    private svc: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.products = this.svc.data;
    this.product = this.products.find((el) => el.id == this.productId);
  }

  addToCart(product: IData) {
    this.cartService.addToCart(product);
  }
}
