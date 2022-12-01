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
  public data: IData[] = [
    {
      id: 1,
      name: 'Vegan',
      price: 10,
    },
    {
      id: 2,
      name: 'Pepperoni',
      price: 12,
    },
    {
      id: 3,
      name: 'Margarita',
      price: 14,
    },
    {
      id: 4,
      name: '4 cheeses',
      price: 17,
    },
    {
      id: 5,
      name: 'Sweet and sour chicken',
      price: 15,
    },
    {
      id: 6,
      name: 'Сheeseburger pizza',
      price: 13,
    },
    {
      id: 7,
      name: 'Spicy chicken',
      price: 17,
    },
    {
      id: 8,
      name: 'Tasteless pizza',
      price: 100,
    },
  ];

  getData(itemNumber: number) {}
}
