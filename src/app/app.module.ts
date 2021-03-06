import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routingComponents, AppRoutingModule} from './app-routing.module';
import { ImagegridComponent } from './imagegrid/imagegrid.component';

import { LeafletmapComponent } from './leafletmap/leafletmap.component';
import { MarkerService } from './services/marker.service';
import { HttpClientModule } from '@angular/common/http';
import {PopUpService} from './services/pop-up.service';
import { NewformComponent } from './newform/newform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatStepperModule } from '@angular/material/stepper';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { DetailscreenComponent } from './detailscreen/detailscreen.component';
import { SubmittedscreenComponent } from './submittedscreen/submittedscreen.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ImagegridComponent,
    LeafletmapComponent,
    NewformComponent,
    DetailscreenComponent,
    SubmittedscreenComponent,
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
