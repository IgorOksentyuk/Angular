import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';
import { FilterService } from 'src/app/services/filter.service';
import { IData } from '../../../models/product.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  visibleTool: boolean = false;

  constructor(
    private productsService: ProductsService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {}

  // @HostListener('click', ['$event'])
  // onClick(event: Event) {
  //   // console.log(event.target);
  // }

  toggle() {
    this.visibleTool = !this.visibleTool;
  }
}
