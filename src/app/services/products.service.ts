import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { IData } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _data$: Observable<IData[]>;

  constructor() {
    this.data = of(this.generateData(8)).pipe(delay(1000));
  }

  get data(): Observable<IData[]> {
    return this._data$;
  }

  set data(data: Observable<IData[]>) {
    this._data$ = data;
  }

  generateData(count: number): IData[] {
    let dataArray = [];
    let pizzaNames = [
      'Vegan',
      'Pepperoni',
      'Hot',
      'Chicken',
      'Karri',
      '4 cheeses',
      'Potato',
      'Tasty',
      'Tasteless',
      'Italiano',
      'Ukrainian',
    ];

    for (let index = 0; index < count; index++) {
      const randomName =
        pizzaNames[Math.floor(Math.random() * pizzaNames.length)];

      dataArray.push({
        id: index + 1,
        name: randomName + ' pizza',
        price: Number((Math.random() * 300).toFixed(2)),
      });
    }

    return dataArray;
  }
}
