import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IData } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'https://hys-fe-course-api.vercel.app/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<IData[]> {
    return this.http.get(this.baseUrl) as Observable<IData[]>;
  }

  getById(productId: string): Observable<IData> {
    return this.http.get(this.baseUrl + '/' + productId) as Observable<IData>;
  }

  create(product: IData): Observable<IData> {
    return this.http.post(
      this.baseUrl,
      {
        name: product.name,
        price: Number(product.price),
        description: product.description,
      },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5Njg3N2NiNy0zZmVlLTRhN2UtODAwMC1mZWQ1YjkzZDAxNWIiLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkbEV2VEVEMFVHdk9GQWpJVmpLQnBBZWtqTVFrY0tFcXlNSUhKVEVyNVo1LmJjblRoaHlwQW0iLCJjcmVhdGVkQXQiOiIyMDIzLTAxLTA3VDIxOjE5OjQ0LjU3M1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTAxLTA3VDIxOjE5OjQ0LjU3M1oiLCJpYXQiOjE2NzMyMDYwNjIsImV4cCI6MTY3MzI5MjQ2Mn0.q0mrd4PW5aCVmGbI8IV8Od63Sh43HHF4-4njpe9hdkI',
        },
      }
    ) as Observable<IData>;
  }

  delete(productId: string): Observable<IData> {
    return this.http.delete(this.baseUrl + '/' + productId, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5Njg3N2NiNy0zZmVlLTRhN2UtODAwMC1mZWQ1YjkzZDAxNWIiLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkbEV2VEVEMFVHdk9GQWpJVmpLQnBBZWtqTVFrY0tFcXlNSUhKVEVyNVo1LmJjblRoaHlwQW0iLCJjcmVhdGVkQXQiOiIyMDIzLTAxLTA3VDIxOjE5OjQ0LjU3M1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTAxLTA3VDIxOjE5OjQ0LjU3M1oiLCJpYXQiOjE2NzMyMDYwNjIsImV4cCI6MTY3MzI5MjQ2Mn0.q0mrd4PW5aCVmGbI8IV8Od63Sh43HHF4-4njpe9hdkI',
      },
    }) as Observable<IData>;
  }

  update(product: IData): Observable<IData> {
    return this.http.put(
      this.baseUrl + '/' + product.id,
      {
        name: product.name,
        price: Number(product.price),
        description: product.description,
      },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5Njg3N2NiNy0zZmVlLTRhN2UtODAwMC1mZWQ1YjkzZDAxNWIiLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkbEV2VEVEMFVHdk9GQWpJVmpLQnBBZWtqTVFrY0tFcXlNSUhKVEVyNVo1LmJjblRoaHlwQW0iLCJjcmVhdGVkQXQiOiIyMDIzLTAxLTA3VDIxOjE5OjQ0LjU3M1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTAxLTA3VDIxOjE5OjQ0LjU3M1oiLCJpYXQiOjE2NzMyMDYwNjIsImV4cCI6MTY3MzI5MjQ2Mn0.q0mrd4PW5aCVmGbI8IV8Od63Sh43HHF4-4njpe9hdkI',
        },
      }
    ) as Observable<IData>;
  }
}
