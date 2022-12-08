import { Injectable } from '@angular/core';

import { IData } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
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
        id: index,
        name: randomName + ' pizza',
        price: Number((Math.random() * 3).toFixed(2)),
      });
    }

    return dataArray;
  }
}
