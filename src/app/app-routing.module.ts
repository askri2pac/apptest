import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {ContactsModule} from './modules/contacts/contacts.module';
import { AuthGuardService as AuthGuard } from './_services/auth-guard.service';
import {HomeModule} from './modules/home/home.module';

const appRoutes: Routes = [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: 'app/modules/home/home.module#HomeModule'
      },
       {
        path: 'contact',
        loadChildren: 'app/modules/contacts/contacts.module#ContactsModule',
       // canActivate: [AuthGuard]
       },
  {
    path: 'profile',
    loadChildren: 'app/modules/profile/profile.module#ProfileModule'
  }
];

export const AppModuleRouting = RouterModule.forRoot(appRoutes);
