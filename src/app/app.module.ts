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
import { ModalComponent } from './component/custom/_directives';
import { ModalBodyComponent } from './component/modal-body/modal-body.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthentificationService } from './_services/authentification.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RequestHandlerService} from './_services/requestHandler';
import { NgHttpLoaderModule } from 'ng-http-loader';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    ModalBodyComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppModuleRouting,
    BrowserAnimationsModule,
    Ng4GeoautocompleteModule,
    MatMenuModule,
    NgxSmartModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgHttpLoaderModule
  ],
  exports: [MatMenuModule],
  providers: [
    AuthentificationService,
    HttpClientModule,
    HttpClient,
    RequestHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
