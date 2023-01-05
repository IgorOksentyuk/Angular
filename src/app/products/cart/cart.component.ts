import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IData } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  items: IData[] = this.cartService.getItems();
  totalPrice: number;
  price$ = this.cartService.price$;
  subscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.price$.subscribe((res) => {
      this.totalPrice = Number(res.toFixed(2));
    });
    this.subscription = this.price$.subscribe((res) => {
      this.totalPrice = Number(res.toFixed(2));
    });
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
