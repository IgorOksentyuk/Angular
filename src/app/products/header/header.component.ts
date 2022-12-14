import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private cartService: CartService) {
    this.visibleTool = false;
  }

  ngOnInit(): void {
    this.totalPrice = this.cartService.getTotal();
  }

  getCount() {
    return this.cartService.getCount();
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
    this.totalPrice = this.cartService.getTotal();
  }
}
