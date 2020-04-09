import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';
import {ImagegridComponent} from './imagegrid/imagegrid.component';
import {MapComponent} from './map/map.component';
import {LeafletmapComponent} from './leafletmap/leafletmap.component';
import {NewformComponent} from './newform/newform.component';


const routes: Routes = [
  {path: '' , redirectTo: 'map', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  {path: 'form2', component: NewformComponent},
  {path: 'imagegrid', component: ImagegridComponent },
  {path: 'map', component: LeafletmapComponent},
  {path: 'map2', component: MapComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FormComponent, ImagegridComponent, MapComponent,  LeafletmapComponent, NewformComponent];
