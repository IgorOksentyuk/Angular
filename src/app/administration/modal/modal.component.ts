import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

import { IData } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  products: IData[] = [];
  errors: string[];
  reactiveForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(null),
      description: new FormControl(''),
    });
  }

  close() {
    this.dialogRef.close(false);
  }

  ok() {
    const values = this.reactiveForm.getRawValue();

    this.productsService.create(values).subscribe(() => {
      this.productsService.newCreateEvent(values);
      this.dialogRef.close();
      location.reload();
    }),
      (badResponse: any) => {
        this.errors = badResponse.error.message;
        this.errors = Array.isArray(this.errors) ? this.errors : [this.errors];
      };
  }
}
