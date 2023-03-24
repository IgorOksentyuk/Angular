import {
  Component,
  ViewChild,
  ElementRef,
  Optional,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

import { IData } from 'src/app/models/product.model';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['../modal/modal.component.scss'],
})
export class EditModalComponent {
  product: IData;
  productId: string;
  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  errors: string[];
  reactiveForm: FormGroup;

  @ViewChild('productname') inputName: ElementRef<HTMLInputElement>;
  @ViewChild('productprice') inputPrice: ElementRef<HTMLInputElement>;
  @ViewChild('productdescription')
  inputDescription: ElementRef<HTMLInputElement>;

  constructor(
    private dialogRef: MatDialogRef<EditModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private productsService: ProductsService
  ) {
    this.productName = data.productName;
    this.productPrice = data.productPrice;
    this.productId = data.productId;
    this.productDescription = data.productDescription;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(null),
      description: new FormControl(''),
      id: new FormControl(''),
    });
  }

  ngAfterViewInit() {
    this.inputName.nativeElement.value = this.productName;
    this.reactiveForm.controls['name'].setValue(this.productName);

    this.inputPrice.nativeElement.value = String(this.productPrice);
    this.reactiveForm.controls['price'].setValue(this.productPrice);

    this.inputDescription.nativeElement.value = String(this.productDescription);
    this.reactiveForm.controls['description'].setValue(this.productDescription);

    this.reactiveForm.controls['id'].setValue(this.productId);
  }

  close() {
    this.dialogRef.close(false);
  }

  ok() {
    const values = this.reactiveForm.getRawValue();
    this.productsService.update(values).subscribe(
      (values) => {
        this.productsService.newEditEvent(values);
        this.dialogRef.close();
      },
      (badResponse) => {
        this.errors = badResponse.error.message;
        this.errors = Array.isArray(this.errors) ? this.errors : [this.errors];
      }
    );
  }
}
