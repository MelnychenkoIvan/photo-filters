import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <div class="wrapper">
      <div class="sidebar">
        <pages-sidebar></pages-sidebar>
      </div>
      <div class="main-panel">
        <pages-header></pages-header>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
