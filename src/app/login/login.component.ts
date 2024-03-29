import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

import { TokenStorageService } from './services/token-storage.service';
import { LoginForm } from './models/login-form.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: LoginForm = {
    username: null,
    password: null,
  };

  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  errors: string[] = [
    'Password is required',
    'Password must be at least 6 characters',
  ];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['administration']);
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username!, password!).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.access_token);

        this.isLoginFailed = false;

        this.router.navigate(['products']);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
