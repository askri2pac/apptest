import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AuthentificationComponent } from './account/authentification.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AppModuleRouting } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import { ModalComponent } from './layouts/custom/_directives';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthentificationService } from './core/auth/authentification.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RequestHandlerService} from './core/auth/requestHandler';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/auth/TokenInterceptor';
import {AuthGuardService} from './core/auth/auth-guard.service';
import { RegisterModalBodyComponent } from './layouts/register-modal-body/register-modal-body.component';
import { ModalSubscribeComponent } from './layouts/modal-subscribe/modal-subscribe.component';
import { ModalLoginComponent } from './layouts/modal-login/modal-login.component';
import {DataService} from './core/data/data.service';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {NgAutoCompleteModule} from 'ng-auto-complete';
import {MatInputModule} from '@angular/material';
import {ActivitiesService} from './core/activity/activitiesService';
import {ModalBodyComponent} from './layouts/modal-body/modal-body.component';
import {MenuComponent} from './layouts/menu/menu.component';
import {HomeModule} from './pages/home/home.module';
import {HomeComponent} from './pages/home/home/home.component';
import { RegisterComponent } from './account/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserManagementModule } from './admin/user-management/user-management.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    RegisterModalBodyComponent,
    ModalSubscribeComponent,
    ModalLoginComponent,
    ModalBodyComponent,
    MenuComponent,
    RegisterComponent,
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
    HomeModule,
    UserManagementModule,
    NgbModule.forRoot(),
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
