import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { LoadingService } from 'src/app/services/loading.service';
import { ProductsService } from 'src/app/services/products.service';

import { IData } from 'src/app/models/product.model';
import { FilterConfiguration } from './filter/models/filter.model';
import { TypeOfFilterPrice } from '../products/filter/models/filter.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: IData[] = [];
  loading$ = this.loadingSvc._loading$;
  filteredProducts: IData[] = [];
  currentSort: Sort;
  page: number = 1;
  productsCount: number = 0;
  displayedProducts: number = 5;

  constructor(
    private productsService: ProductsService,
    private loadingSvc: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingSvc.showLoader();
    this.postProducts();
  }

  postProducts() {
    this.productsService.data.subscribe((res) => {
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
    this.postProducts();
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
