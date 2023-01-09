import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalService } from 'src/app/services/modal.service';
import { ProductConfiguration } from './models/ProductsConfiguration.model';
import { IData } from 'src/app/models/product.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  products: IData[] = [];
  productId: string;
  subscription: Subscription;

  @Output()
  productAddEvent = new EventEmitter<ProductConfiguration>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modalService: ModalService,
    private dialogRef: MatDialogRef<ModalComponent>
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
        productConfig.id = this.productId;
        this.productAddEvent.emit(productConfig);

        this.dialogRef.close(productConfig);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
