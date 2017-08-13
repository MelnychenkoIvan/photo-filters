import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFilter} from '../Filter';

@Component({
  selector: 'filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {

  @Input() filters: IFilter[];

  @Output() clear = new EventEmitter();
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clearFilter() {
    this.clear.next();
  }

  onChange({value}, filter: IFilter) {
    this.change.next({value: value, filter: filter});
  }
}
