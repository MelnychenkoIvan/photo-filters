import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pages-sidebar',
  templateUrl: './pages-sidebar.component.html',
  styleUrls: ['./pages-sidebar.component.scss']
})
export class PagesSidebarComponent implements OnInit {

  @Input() isOpenSidebar: boolean;

  constructor() { }

  ngOnInit() {
  }

}
