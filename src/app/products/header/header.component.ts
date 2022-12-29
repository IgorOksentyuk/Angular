import {
  Component,
  OnInit,
  Input,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';

import { IData } from 'src/app/models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input()
  product: IData;
  visibleTool: boolean;
  items: IData[] = this.cartService.getItems();
  totalPrice: number;
  price$ = this.cartService.price$;
  subscription: Subscription;

  constructor(private cartService: CartService, private toolTip: ElementRef) {
    this.visibleTool = false;
  }

  ngOnInit(): void {
    this.subscription = this.price$.subscribe((res) => {
      this.totalPrice = Number(res.toFixed(2));
    });
  }

  getCount() {
    return this.cartService.getCount();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.toolTip.nativeElement.contains(event.target)) {
      this.visibleTool = false;
    }
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
