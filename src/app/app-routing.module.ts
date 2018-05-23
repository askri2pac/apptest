import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {ContactsModule} from './modules/contacts/contacts.module';

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
        loadChildren: 'app/modules/contacts/contacts.module#ContactsModule'
       }
];

export const AppModuleRouting = RouterModule.forRoot(appRoutes);
