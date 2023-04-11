import { Component, HostListener, ElementRef } from '@angular/core';
import { IData } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  items: IData[] = this.cartService.getItems();
  totalPrice: number;
  price$ = this.cartService.price$;
  subscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.price$.subscribe((res) => {
      this.totalPrice = Number(res.toFixed(2));
    });
  }

  getCount() {
    return this.cartService.getCount();
  }

  removeItem(id: string) {
    this.cartService.removeItem(id);
  }
}
