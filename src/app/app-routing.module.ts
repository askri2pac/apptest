import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

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
];

export const AppModuleRouting = RouterModule.forRoot(appRoutes);
