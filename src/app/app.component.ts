import { Component } from '@angular/core';

interface IData {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'angular';

  public data = this.generateData(8);

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
