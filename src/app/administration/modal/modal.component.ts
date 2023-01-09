import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalService } from 'src/app/services/modal.service';
import { IData } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  products: IData[] = [];
  subscription: Subscription;
  errors: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modalService: ModalService,
    private dialogRef: MatDialogRef<ModalComponent>,
    private productsService: ProductsService
  ) {}

  setName(event: any): void {
    this.modalService.setName(event.target.value);
  }

  setPrice(event: any): void {
    this.modalService.setPrice(event.target.value);
  }

  setDescription(event: any): void {
    this.modalService.setDescription(event.target.value);
  }

  close() {
    this.dialogRef.close(false);
  }

  ok() {
    this.subscription = this.modalService.configuration$.subscribe(
      (productConfig) => {
        this.productsService.create(productConfig).subscribe(
          () => {
            this.productsService.newCreateEvent(productConfig);
            this.dialogRef.close();
          },
          (badResponse) => {
            this.errors = badResponse.error.message;
          }
        );
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
