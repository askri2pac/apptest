import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppModuleRouting } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import { ModalComponent } from './component/custom/_directives';
import { ModalBodyComponent } from './component/modal-body/modal-body.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthentificationService } from './_services/authentification.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RequestHandlerService} from './_services/requestHandler';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './_services/TokenInterceptor';
import {AuthGuardService} from './_services/auth-guard.service';
import { RegisterModalBodyComponent } from './component/register-modal-body/register-modal-body.component';
import { ModalSubscribeComponent } from './component/modal-subscribe/modal-subscribe.component';
import { ModalLoginComponent } from './component/modal-login/modal-login.component';
import {DataService} from './_services/data.service';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {NgAutoCompleteModule} from 'ng-auto-complete';
import {MatInputModule} from '@angular/material';
import {ActivitiesService} from './_services/activitiesService';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    ModalBodyComponent,
    RegisterModalBodyComponent,
    ModalSubscribeComponent,
    ModalLoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppModuleRouting,
    BrowserAnimationsModule,
    MatMenuModule,
    NgxSmartModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    NgxSpinnerModule,
    FormsModule,
    GooglePlaceModule,
    NgAutoCompleteModule,
    MatInputModule,
  ],
  exports: [MatMenuModule],
  providers: [
    AuthentificationService,
    HttpClientModule,
    HttpClient,
    RequestHandlerService,
    AuthGuardService,
    ActivitiesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
