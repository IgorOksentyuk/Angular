export interface FilterConfiguration {
  price: number;
  priceType: TypeOfFilterPrice;
  search: string;
}

export enum TypeOfFilterPrice {
  More = 'Price more than:',
  Less = 'Price less than:',
}
