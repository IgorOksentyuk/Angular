import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IData } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _price = new BehaviorSubject<number>(0);
  public items: IData[] = [];
  public price$ = this._price.asObservable();

  constructor() {}

  addToCart(product: IData) {
    this.items.push(product);
    this.getTotal();
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
    this._price.next(total);

    return Number(total.toFixed(2));
  }

  removeItem(id: string) {
    let index = this.items.findIndex((el) => el.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.getTotal();
    }
  }
}
