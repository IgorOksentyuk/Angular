import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [BrowserModule, ProductsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
