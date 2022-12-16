import { Injectable } from '@angular/core';
import { IData } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public items: IData[] = [];
  private _totalPrice: number;

  constructor() {
    this.totalPrice = this.getTotal();
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  set totalPrice(totalPrice: number) {
    this._totalPrice = totalPrice;
  }

  addToCart(product: IData) {
    this.items.push(product);
    this.totalPrice = this.getTotal();
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.length;
  }

  getTotal() {
    let total = 0;

    for (let item of this.items) {
      total += item.price;
    }

    return Number(total.toFixed(2));
  }

  removeItem(id: number) {
    let index = this.items.findIndex((el) => el.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
