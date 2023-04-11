import { Component, Input, ElementRef, HostListener } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';

import { IData } from 'src/app/models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  product: IData;
  visibleTool = false;
  items: IData[] = this.cartService.getItems();
  @Input() isTransparent = false;

  constructor(private cartService: CartService, private toolTip: ElementRef) {}

  getCount() {
    return this.cartService.getCount();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.toolTip.nativeElement.contains(event.target)) {
      this.visibleTool = false;
    }
  }

  @HostListener('window: scroll', ['$event'])
  onScroll() {
    if (window.scrollY > 0) {
      this.isTransparent = true;
    } else {
      this.isTransparent = false;
    }
  }
}
