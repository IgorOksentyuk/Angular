import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { NavigationModule } from './navigation/navigation.module';

import { AdministrationComponent } from './administration.component';

@NgModule({
  declarations: [AdministrationComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    ProductsModule,
    UsersModule,
    NavigationModule,
  ],
  exports: [AdministrationComponent],
})
export class AdministrationModule {}
