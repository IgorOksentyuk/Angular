import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { NavigationModule } from './navigation/navigation.module';

import { AdministrationComponent } from './administration.component';
import { ModalComponent } from './modal/modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AdministrationComponent,
    ModalComponent,
    DeleteModalComponent,
    EditModalComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    ProductsModule,
    UsersModule,
    NavigationModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [AdministrationComponent],
})
export class AdministrationModule {}
