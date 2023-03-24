import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

const AUTH_API = 'https://hys-fe-course-api.vercel.app/auth/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    public jwtHelper: JwtHelperService
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API, {
      username,
      password,
    });
  }

  isAuthenticated(): boolean {
    const token = this.tokenStorageService.getToken();

    return !this.jwtHelper.isTokenExpired(token);
  }
}
