import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit {

  @Input() filter;

  constructor() { }

  ngOnInit() {
  }

}
