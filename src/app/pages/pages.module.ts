import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

// main layouts
import { PagesHeaderComponent } from './components/pages-header/pages-header.component';
import { PagesSidebarComponent } from './components/pages-sidebar/pages-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent, PagesHeaderComponent, PagesSidebarComponent]
})
export class PagesModule { }
