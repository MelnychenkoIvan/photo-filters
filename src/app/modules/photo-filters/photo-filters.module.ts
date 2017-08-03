import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdSliderModule } from '@angular/material';

import { PhotoFiltersRoutingModule } from './photo-filters-routing.module';
import { PhotoFiltersComponent } from './photo-filters/photo-filters.component';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';

const materialModule = [
  MdSliderModule
];

@NgModule({
  imports     : [
    CommonModule,
    PhotoFiltersRoutingModule,
    ...materialModule
  ],
  declarations: [PhotoFiltersComponent, GalleryImageComponent]
})
export class PhotoFiltersModule {
}
