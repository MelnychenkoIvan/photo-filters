import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isOpenSidebar, State } from '../app.reducers';
import { ToggleSidebarAction } from './store/pages.actions';

@Component({
  selector: 'app-pages',
  template: `
    <div class="wrapper" [ngClass]="{'sidebar-hide': !isOpenSidebar}">
      <div class="sidebar">
        <pages-sidebar></pages-sidebar>
      </div>
      <div class="main-panel">
        <pages-header [isOpenSidebar]="isOpenSidebar" 
                      (toggleSidebar)="toggleSidebar($event)">
        </pages-header>

        <div class="main-content">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles  : []
})
export class PagesComponent implements OnInit {

  isOpenSidebar: boolean;

  constructor(private _store: Store<State>) {
  }

  ngOnInit() {
    this._store.select(isOpenSidebar)
      .subscribe(res => {
        this.isOpenSidebar = res;
      });
  }

  toggleSidebar(value) {
    this._store.dispatch(new ToggleSidebarAction({ isOpenSidebar: value }));
  }
}
