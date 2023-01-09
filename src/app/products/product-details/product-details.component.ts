import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private svc: ProductsService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (!productId) {
      this.router.navigateByUrl(`/404`);
    }

    this.svc.getById(productId as string).subscribe((res) => {
      if (res === null) {
        this.router.navigateByUrl(`/404`);
        return;
      }
      this.product = res;
    });
  }

  addToCart(product: IData) {
    this.cartService.addToCart(product);
  }
}
