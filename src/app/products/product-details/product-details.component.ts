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
  products: IData[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private svc: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.svc.data.subscribe((res) => {
      this.products = res;
      this.product = this.products.find((el) => el.id == productId);
    });
  }

  addToCart(product: IData) {
    this.cartService.addToCart(product);
  }
}
