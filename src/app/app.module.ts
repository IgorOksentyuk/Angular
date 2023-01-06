import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { AdministrationModule } from './administration/administration.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ProductsComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    AdministrationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
