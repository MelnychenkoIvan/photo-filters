import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdSliderModule } from '@angular/material';

import { PhotoFiltersRoutingModule } from './photo-filters-routing.module';
import { PhotoFiltersComponent } from './photo-filters/photo-filters.component';
import { ViewImageComponent } from './view-image/view-image.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { GalleryImagesComponent } from './gallery-images/gallery-images.component';

const materialModule = [
  MdSliderModule
];

@NgModule({
  imports     : [
    CommonModule,
    PhotoFiltersRoutingModule,
    ...materialModule
  ],
  declarations: [PhotoFiltersComponent, ViewImageComponent, FilterListComponent, GalleryImagesComponent]
})
export class PhotoFiltersModule {
}
