import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ImagegridComponent} from './imagegrid/imagegrid.component';

import {LeafletmapComponent} from './leafletmap/leafletmap.component';
import {NewformComponent} from './newform/newform.component';

import {DetailscreenComponent} from './detailscreen/detailscreen.component';
import {SubmittedscreenComponent} from './submittedscreen/submittedscreen.component';


const routes: Routes = [
 // {path: '' , redirectTo: 'map', pathMatch: 'full'},
  {path: 'newSample', component: NewformComponent},
  {path: 'imagegrid', component: ImagegridComponent },
  {path: '', component: LeafletmapComponent},
  { path: 'details/:id', component: DetailscreenComponent },
  {path: 'submitted', component: SubmittedscreenComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ImagegridComponent,   LeafletmapComponent, NewformComponent,
   DetailscreenComponent, SubmittedscreenComponent];
