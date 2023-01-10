import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { AdministrationModule } from './administration/administration.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { authInterceptorProviders } from '../app/login/services/auth-interceptor.service';

@NgModule({
  declarations: [AppComponent, ProductsComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    AdministrationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    JwtModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
