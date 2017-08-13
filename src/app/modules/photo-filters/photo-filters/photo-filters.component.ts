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
  public images: string[] = ['./assets/images/1.jpg'];

  constructor() { }

  ngOnInit() {
    this.filters = Utils.clone(filters);
    this.updateFilter();
  }

  onChange({value, filter}) {
    filter.value = value;
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



