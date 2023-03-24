export interface FilterUserConfiguration {
  date: string;
  dateType: TypeOfFilterDate;
  search: string;
}

export enum TypeOfFilterDate {
  More = 'Date more than:',
  Less = 'Date less than:',
}
