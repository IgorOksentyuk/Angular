import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Optional,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { ModalService } from 'src/app/services/modal.service';
import { ProductConfiguration } from '../modal/models/ProductsConfiguration.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['../modal/modal.component.scss'],
})
export class EditModalComponent {
  productId: string;
  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  subscription: Subscription;

  @Output()
  productEditvent = new EventEmitter<ProductConfiguration>();

  @ViewChild('productname') inputName: ElementRef<HTMLInputElement>;
  @ViewChild('productprice') inputPrice: ElementRef<HTMLInputElement>;
  @ViewChild('productdescription')
  inputDescription: ElementRef<HTMLInputElement>;

  constructor(
    private dialogRef: MatDialogRef<EditModalComponent>,
    private modalService: ModalService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productName = data.productName;
    this.productPrice = data.productPrice;
    this.productId = data.productId;
    this.productDescription = data.productDescription;
  }

  ngAfterViewInit() {
    this.inputName.nativeElement.value = this.productName;
    this.modalService.setName(this.productName);

    this.inputPrice.nativeElement.value = String(this.productPrice);
    this.modalService.setPrice(this.productPrice);

    this.inputDescription.nativeElement.value = String(this.productDescription);
    this.modalService.setDescription(this.productDescription);

    this.modalService.setId(this.productId);
  }

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
        this.productEditvent.emit(productConfig);

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
