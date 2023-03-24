import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'https://hys-fe-course-api.vercel.app/users';
  private _createUserSubj$ = new Subject<User>();

  constructor(private http: HttpClient) {}

  newCreateEvent(user: User) {
    this._createUserSubj$.next(user);
  }

  get createEvents$() {
    return this._createUserSubj$.asObservable();
  }

  getAll(): Observable<User[]> {
    return this.http.get(this.baseUrl) as Observable<User[]>;
  }

  create(user: User): Observable<User> {
    return this.http.post(this.baseUrl, {
      username: user.username,
      pasword: user.password,
    }) as Observable<User>;
  }
}
