import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'https://hys-fe-course-api.vercel.app/users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get(this.baseUrl) as Observable<User[]>;
  }
}
