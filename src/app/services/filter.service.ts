import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import {
  FilterConfiguration,
  TypeOfFilterPrice,
} from '../administration/products/filter/models/filter.model';

import {
  FilterUserConfiguration,
  TypeOfFilterDate,
} from '../administration/users/models/filter.model';

const DEFAULT_CONFIGARATION: FilterConfiguration = {
  price: 0,
  priceType: TypeOfFilterPrice.More,
  search: '',
};

const DEFAULT_USER_CONFIGARATION: FilterUserConfiguration = {
  date: '',
  dateType: TypeOfFilterDate.More,
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

  private _userConfiguration$: BehaviorSubject<FilterUserConfiguration> =
    new BehaviorSubject(DEFAULT_USER_CONFIGARATION);

  public userConfiguration$: Observable<FilterUserConfiguration> =
    this._userConfiguration$.asObservable();

  get currentConfiguration(): FilterConfiguration {
    return this._configuration$.getValue();
  }

  get currentUserConfiguration(): FilterUserConfiguration {
    return this._userConfiguration$.getValue();
  }

  constructor() {}

  setPrice(price: number): void {
    this._configuration$.next({
      ...this.currentConfiguration,
      price,
    });
  }

  setDate(date: string): void {
    this._userConfiguration$.next({
      ...this.currentUserConfiguration,
      date,
    });
  }

  setTypePrice(priceType: TypeOfFilterPrice): void {
    this._configuration$.next({
      ...this.currentConfiguration,
      priceType,
    });
  }

  setTypeDate(dateType: TypeOfFilterDate): void {
    this._userConfiguration$.next({
      ...this.currentUserConfiguration,
      dateType,
    });
  }

  setSearchValue(search: string): void {
    this._configuration$.next({
      ...this.currentConfiguration,
      search,
    });
  }

  setUserSearchValue(search: string): void {
    this._userConfiguration$.next({
      ...this.currentUserConfiguration,
      search,
    });
  }
}
