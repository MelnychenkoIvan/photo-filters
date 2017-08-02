import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFiltersComponent } from './photo-filters/photo-filters.component';

const routes: Routes = [
  { path: '', component: PhotoFiltersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoFiltersRoutingModule {
}
