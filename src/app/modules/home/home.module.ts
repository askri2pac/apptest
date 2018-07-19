import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng4GeoautocompleteModule,
    NgxSmartModalModule,
    FormsModule,
    GooglePlaceModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
