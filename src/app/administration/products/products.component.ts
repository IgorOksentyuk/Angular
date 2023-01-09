import { Component, OnInit, Input } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { LoadingService } from 'src/app/services/loading.service';
import { ProductsService } from 'src/app/services/products.service';
import { ModalService } from 'src/app/services/modal.service';

import { IData } from 'src/app/models/product.model';
import { FilterConfiguration } from './filter/models/filter.model';
import { TypeOfFilterPrice } from '../products/filter/models/filter.model';
import { ModalComponent } from '../modal/modal.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IData[] = [];
  filteredProducts: IData[] = [];
  loading$ = this.loadingSvc._loading$;
  currentSort: Sort;
  page: number = 1;
  displayedProducts: number = 5;
  subscription: Subscription;

  constructor(
    private productsService: ProductsService,
    private loadingSvc: LoadingService,
    private modalService: ModalService,

    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadingSvc.showLoader();
    this.postProducts();
  }

  postProducts() {
    this.subscription = this.productsService.getAll().subscribe((res) => {
      this.products = res;
      this.filteredProducts = res;

      this.loadingSvc.hideLoader();
    });
  }

  onFilterChange(filterConfig: FilterConfiguration) {
    this.filteredProducts = this.products.filter((product) => {
      if (
        filterConfig.priceType === TypeOfFilterPrice.More &&
        product.price <= filterConfig.price
      ) {
        return false;
      }
      if (
        filterConfig.priceType === TypeOfFilterPrice.Less &&
        product.price >= filterConfig.price
      ) {
        return false;
      }

      if (
        product.name.toLowerCase().includes(filterConfig.search.toLowerCase())
      ) {
        return true;
      }

      return false;
    });

    if (this.currentSort) {
      this.sortData(this.currentSort);
    }
  }

  sortData(sort: Sort) {
    this.currentSort = sort;
    const data = this.filteredProducts.slice();
    if (!sort.active || sort.direction === '') {
      this.filteredProducts = data;
      return;
    }

    this.filteredProducts = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);

        case 'price':
          return compare(a.price, b.price, isAsc);

        default:
          return 0;
      }
    });
  }

  onPageChange(event: any) {
    this.page = event;
  }

  addProduct() {
    this.dialogRef
      .open(ModalComponent, { width: '570px', height: '547px' })
      .afterClosed()
      .subscribe((newProduct) => {
        if (newProduct) {
          if (newProduct.name !== '') {
            this.productsService.create(newProduct).subscribe((res) => {
              if (res) {
                location.reload();
              }
            });
          } else {
            console.error('Fill all fields!');
          }
        }
      });
  }

  deleteProduct(id: string) {
    this.dialogRef
      .open(DeleteModalComponent, { width: '570px', height: '413px' })
      .afterClosed()
      .subscribe(() => {
        console.log(id);
        if (id) {
          this.productsService.delete(id).subscribe((res) => {
            if (res) {
              location.reload();
            }
          });
        }
      });
  }

  editProduct(product: IData) {
    this.dialogRef
      .open(EditModalComponent, {
        width: '570px',
        height: '547px',
        data: {
          productPrice: product.price,
          productName: product.name,
          productId: product.id,
          productDescription: product.description,
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.productsService.update(res).subscribe((res) => {
            if (res) {
              location.reload();
            }
          });
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
