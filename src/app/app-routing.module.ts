import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('../app/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'administration',
    loadChildren: () =>
      import('../app/administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  //Not Found Component fix problems//
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
