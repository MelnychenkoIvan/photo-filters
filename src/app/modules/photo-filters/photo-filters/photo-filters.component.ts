import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photo-filters',
  templateUrl: './photo-filters.component.html',
  styleUrls: ['./photo-filters.component.scss']
})
export class PhotoFiltersComponent implements OnInit {

  public filters = {
    blur: '10px'
  };

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {

  }
}
