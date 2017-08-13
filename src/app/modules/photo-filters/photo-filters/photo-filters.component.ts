import { Component, OnInit } from '@angular/core';

enum FilterName {
  BLUR,
  BRIGHTNESS,
  CONTRAST,
  GRAYSCALE,
  INVERT,
  HUE_ROTATE,
  OPACITY,
  SATURATE,
  SEPIA
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
    brightness: '100%',
    contrast: '100%',
    grayscale: '0%',
    invert: '0%',
    'hue-rotate': '0deg',
    opacity: '100%',
    saturate: '1',
    sepia: '0%'
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
      case FilterName.CONTRAST:
        this.filters.contrast = event.value + '%';
        return this.filter = this.updateFilter();
      case FilterName.GRAYSCALE:
        this.filters.grayscale = event.value + '%';
        return this.filter = this.updateFilter();
      case FilterName.INVERT:
        this.filters.invert = event.value + '%';
        return this.filter = this.updateFilter();
      case FilterName.HUE_ROTATE:
        this.filters['hue-rotate'] = event.value + 'deg';
        return this.filter = this.updateFilter();
      case FilterName.OPACITY:
        this.filters.opacity = event.value + '%';
        return this.filter = this.updateFilter();
      case FilterName.SATURATE:
        this.filters.saturate = event.value + '';
        return this.filter = this.updateFilter();
      case FilterName.SEPIA:
        this.filters.sepia = event.value + '%';
        return this.filter = this.updateFilter();
      default:
        return;
    }
  }

  updateFilter() {
    let filter = '';
    for (const i in this.filters) {
      if (this.filters.hasOwnProperty(i)) {
        filter += i + '(' + this.filters[i] + ') ';
      }
    }
    console.log(filter);
    return filter;
  }
}
