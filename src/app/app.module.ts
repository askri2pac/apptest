import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppModuleRouting } from './app-routing.module';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {NgxSmartModalModule} from 'ngx-smart-modal';



@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppModuleRouting,
    BrowserAnimationsModule,
    Ng4GeoautocompleteModule,
    MatMenuModule,
    NgxSmartModalModule
  ],
  exports: [MatMenuModule],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
