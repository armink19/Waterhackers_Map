import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {routingComponents, AppRoutingModule} from './app-routing.module';
import { ImagegridComponent } from './imagegrid/imagegrid.component';
import { MapComponent } from './map/map.component';
import {Form} from '@angular/forms';
import { OpenstreetmapComponent } from './openstreetmap/openstreetmap.component';
import { LeafletmapComponent } from './leafletmap/leafletmap.component';
import { MarkerService } from './marker.service';
import { HttpClientModule } from '@angular/common/http';
import {PopUpService} from './pop-up.service';
import { NewformComponent } from './newform/newform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatStepperModule } from '@angular/material/stepper';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FormComponent,
    ImagegridComponent,
    MapComponent,
    OpenstreetmapComponent,
    LeafletmapComponent,
    FormComponent,
    NewformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required', message: 'This field is required'},
      ],
    }),
    MatIconModule,
  ],
  providers: [
    MarkerService,
    PopUpService
  ],
  bootstrap: [AppComponent]


})
export class AppModule { }
