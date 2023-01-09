import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { IData } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'https://hys-fe-course-api.vercel.app/products';
  private _editProductSubj = new Subject<IData>();
  private _createProductSubj = new Subject<IData>();

  constructor(private http: HttpClient) {}

  newEditEvent(event: IData) {
    this._editProductSubj.next(event);
  }
  newCreateEvent(event: IData) {
    this._createProductSubj.next(event);
  }

  get editEvents$() {
    return this._editProductSubj.asObservable();
  }
  get createEvents$() {
    return this._createProductSubj.asObservable();
  }

  getAll(): Observable<IData[]> {
    return this.http.get(this.baseUrl) as Observable<IData[]>;
  }

  getById(productId: string): Observable<IData> {
    return this.http.get(this.baseUrl + '/' + productId) as Observable<IData>;
  }

  create(product: IData): Observable<IData> {
    return this.http.post(this.baseUrl, {
      name: product.name,
      price: Number(product.price),
      description: product.description,
    }) as Observable<IData>;
  }

  delete(productId: string): Observable<IData> {
    return this.http.delete(
      this.baseUrl + '/' + productId,
      {}
    ) as Observable<IData>;
  }

  update(product: IData): Observable<IData> {
    return this.http.put(this.baseUrl + '/' + product.id, {
      name: product.name,
      price: Number(product.price),
      description: product.description,
    }) as Observable<IData>;
  }
}
