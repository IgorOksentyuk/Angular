import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import {
  FilterConfiguration,
  TypeOfFilterPrice,
} from '../administration/products/filter/models/filter.model';

const DEFAULT_CONFIGARATION: FilterConfiguration = {
  price: 0,
  priceType: TypeOfFilterPrice.More,
  search: '',
};

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _configuration$: BehaviorSubject<FilterConfiguration> =
    new BehaviorSubject(DEFAULT_CONFIGARATION);

  public configuration$: Observable<FilterConfiguration> =
    this._configuration$.asObservable();

  get currentConfiguration(): FilterConfiguration {
    return this._configuration$.getValue();
  }

  constructor() {}

  setPrice(price: number): void {
    this._configuration$.next({
      ...this.currentConfiguration,
      price,
    });
  }

  setTypePrice(priceType: TypeOfFilterPrice): void {
    this._configuration$.next({
      ...this.currentConfiguration,
      priceType,
    });
  }

  setSearchValue(search: string): void {
    this._configuration$.next({
      ...this.currentConfiguration,
      search,
    });
  }
}
