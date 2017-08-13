import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {

  @Input() filter;

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange({value}, filter) {
    this.change.emit({value: value, filter: filter});
  }
}
