import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ProductConfiguration } from '../administration/modal/models/ProductsConfiguration.model';

const DEFAULT_CONFIGARATION: ProductConfiguration = {
  id: '',
  name: '',
  price: 0,
  description: '',
};

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _configuration$: BehaviorSubject<ProductConfiguration> =
    new BehaviorSubject(DEFAULT_CONFIGARATION);

  public configuration$: Observable<ProductConfiguration> =
    this._configuration$.asObservable();

  get currentConfiguration(): ProductConfiguration {
    return this._configuration$.getValue();
  }

  constructor() {}

  setName(name: string): void {
    this._configuration$.next({
      ...this.currentConfiguration,
      name,
    });
  }

  setPrice(price: number): void {
    this._configuration$.next({
      ...this.currentConfiguration,
      price,
    });
  }

  setId(id: string): void {
    this._configuration$.next({
      ...this.currentConfiguration,
      id,
    });
  }

  setDescription(description: string): void {
    this._configuration$.next({
      ...this.currentConfiguration,
      description,
    });
  }
}
