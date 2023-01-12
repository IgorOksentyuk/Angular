import { Component, Inject } from '@angular/core';
import { mergeMap, Subscription, of } from 'rxjs';
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
    this.modalService.configuration$
      .pipe(
        mergeMap((productConfig) => {
          if (productConfig) {
            return this.productsService.create(productConfig);
          }
          return of(null);
        })
      )
      .subscribe(
        (productConfig) => {
          this.productsService.newCreateEvent(productConfig!);
          this.dialogRef.close();
          location.reload();
        },
        (badResponse) => {
          this.errors = badResponse.error.message;
          this.errors = Array.isArray(this.errors)
            ? this.errors
            : [this.errors];
        }
      );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
