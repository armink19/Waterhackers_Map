import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';
import {ImagegridComponent} from './imagegrid/imagegrid.component';
import {MapComponent} from './map/map.component';
import {LeafletmapComponent} from './leafletmap/leafletmap.component';
import {NewformComponent} from './newform/newform.component';
import {SamplelistComponent} from './samplelist/samplelist.component';
import {DetailscreenComponent} from './detailscreen/detailscreen.component';
import {SubmittedscreenComponent} from './submittedscreen/submittedscreen.component';


const routes: Routes = [
  {path: '' , redirectTo: 'map', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  {path: 'form2', component: NewformComponent},
  {path: 'imagegrid', component: ImagegridComponent },
  {path: 'map', component: LeafletmapComponent},
  {path: 'map2', component: MapComponent},
  { path: 'samples', component: SamplelistComponent },
  { path: 'details/:id', component: DetailscreenComponent },
  {path: 'submitted', component: SubmittedscreenComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FormComponent, ImagegridComponent, MapComponent,  LeafletmapComponent, NewformComponent,
  SamplelistComponent, DetailscreenComponent, SubmittedscreenComponent];
