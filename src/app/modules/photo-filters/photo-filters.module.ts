import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFiltersRoutingModule } from './photo-filters-routing.module';
import { PhotoFiltersComponent } from './photo-filters/photo-filters.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoFiltersRoutingModule
  ],
  declarations: [PhotoFiltersComponent]
})
export class PhotoFiltersModule { }
