import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    pathMatch: 'full',
    loadChildren: () =>
      import('./products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.component').then((m) => m.CartComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
