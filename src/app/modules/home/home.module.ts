import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {FormsModule} from '@angular/forms';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {NgAutoCompleteModule} from 'ng-auto-complete';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng4GeoautocompleteModule,
    NgxSmartModalModule,
    FormsModule,
    GooglePlaceModule,
    NgAutoCompleteModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
