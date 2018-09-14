import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ContactsModule} from './pages/contacts/contacts.module';
import {AuthGuardService as AuthGuard} from './core/auth/auth-guard.service';
import {HomeModule} from './pages/home/home.module';
import {RechercheModule} from './pages/recherche/recherche.module';
import { UserManagementModule } from './admin/user-management/user-management.module';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: 'app/pages/home/home.module#HomeModule'
  },
  {
    path: 'contact',
    loadChildren: 'app/pages/contacts/contacts.module#ContactsModule',
  },
  {
    path: 'profile',
    loadChildren: 'app/pages/profile/profile.module#ProfileModule',
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: 'app/pages/recherche/recherche.module#RechercheModule'
  },
  {
    path: 'admin/usermanagement',
    loadChildren: 'app/admin/user-management/user-management.module#UserManagementModule'
  }
];

export const AppModuleRouting = RouterModule.forRoot(appRoutes);
