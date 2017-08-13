import { Component, OnInit } from '@angular/core';
import {IFilter, filters} from '../Filter';
import {Utils} from '../../../core/utils/utils';

@Component({
  selector: 'photo-filters',
  templateUrl: './photo-filters.component.html',
  styleUrls: ['./photo-filters.component.scss']
})
export class PhotoFiltersComponent implements OnInit {

  public filter = '';
  public filters: IFilter[] = [];

  constructor() { }

  ngOnInit() {
    this.filters = Utils.clone(filters);
    this.updateFilter();
  }

  onChange(event, filter: IFilter) {
    filter.value = event.value;
    this.updateFilter();
  }

  updateFilter() {
    this.filter = '';

    this.filters.forEach((filter: IFilter) => {
      this.filter += `${filter.name}(${filter.value}${filter.unit})`;
    });
  }

  clear() {
    this.filters = Utils.clone(filters);
    this.updateFilter();
  }
}



