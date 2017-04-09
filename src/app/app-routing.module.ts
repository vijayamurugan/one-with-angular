import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { RebelsComponent } from './rebels/rebels.component';
import { HomeComponent } from './home/index';
import { SetupComponent } from './vasetup/index';
import { ProfileComponent } from './profile/index';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'rebels', },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: '',
        component: RebelsComponent

      },
      {
        path: 'register',
        component: RegisterComponent,

      },
      {
        path: 'setup',
        component: SetupComponent,

      },
      {
        path: 'profile',
        component: ProfileComponent,

      }
    ]
  },
  { path: 'rebels', component: RebelsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'rebels' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
