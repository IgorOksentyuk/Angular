import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { debounceTime, Subscription } from 'rxjs';

import { FilterService } from 'src/app/services/filter.service';
import {
  FilterConfiguration,
  TypeOfFilterPrice,
} from '../../products/filter/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  visibleTool: boolean = false;
  priceMore = TypeOfFilterPrice.More;
  priceLess = TypeOfFilterPrice.Less;
  subscription: Subscription;

  @Output()
  filterChangeEvent = new EventEmitter<FilterConfiguration>();

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.subscription = this.filterService.configuration$
      .pipe(debounceTime(1000))
      .subscribe((filterConfig) => {
        this.filterChangeEvent.emit(filterConfig);
      });
  }

  price(event: any): void {
    this.filterService.setPrice(event.target.value);
  }

  priceType(event: any): void {
    this.filterService.setTypePrice(event.target.value);
  }

  search(event: any): void {
    this.filterService.setSearchValue(event.target.value);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
