import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: IData[] = this.cartService.getItems();
  totalPrice: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.totalPrice = this.cartService.totalPrice;
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
    this.totalPrice = this.cartService.getTotal();
  }
}
