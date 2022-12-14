import { Injectable } from '@angular/core';
import { IData } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IData[] = [];

  addToCart(product: IData) {
    this.items.push(product);
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
