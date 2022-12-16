import {
  Component,
  OnInit,
  Input,
  ElementRef,
  HostListener,
} from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { IData } from 'src/app/models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  product: IData;
  visibleTool: boolean;
  items: IData[] = this.cartService.getItems();
  totalPrice: number;

  constructor(private cartService: CartService, private toolTip: ElementRef) {
    this.visibleTool = false;
  }

  ngOnInit(): void {
    this.totalPrice = this.cartService.totalPrice;
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
    this.totalPrice = this.cartService.getTotal();
  }
}
