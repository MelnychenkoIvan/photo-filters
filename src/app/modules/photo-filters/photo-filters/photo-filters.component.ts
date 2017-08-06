import { Component, OnInit } from '@angular/core';

enum FilterName {
  BLUR,
  BRIGHTNESS
}

@Component({
  selector: 'photo-filters',
  templateUrl: './photo-filters.component.html',
  styleUrls: ['./photo-filters.component.scss']
})
export class PhotoFiltersComponent implements OnInit {

  public filterName = FilterName;
  public filters = {
    blur: '',
    brightness: '100%'
  };
  public filter = '';

  constructor() { }

  ngOnInit() {
    this.updateFilter();
  }

  onChange(event, name: FilterName) {
    switch (name) {
      case FilterName.BLUR:
        this.filters.blur = event.value + 'px';
        return this.filter = this.updateFilter();
      case FilterName.BRIGHTNESS:
        this.filters.brightness = event.value + '%';
        return this.filter = this.updateFilter();
      default:
        return;
    }
  }

  updateFilter() {
    let filter = '';
    for (const i in this.filters) {
      console.log(this.filters[i]);
      console.log(i);
      filter += i + '(' + this.filters[i] + ') ';
    }
    console.log(filter);
    return filter;
  }
}
