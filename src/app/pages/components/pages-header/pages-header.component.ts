import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pages-header',
  templateUrl: './pages-header.component.html',
  styleUrls: ['./pages-header.component.scss']
})
export class PagesHeaderComponent implements OnInit {

  @Input() isOpenSidebar: boolean;

  @Output() toggleSidebar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleSidebar.emit(!this.isOpenSidebar);
  }

}
