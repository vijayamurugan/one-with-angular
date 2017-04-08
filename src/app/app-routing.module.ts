import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { RebelsComponent } from './rebels/rebels.component';
import { HomeComponent } from './home/index';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'rebels', },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'home', component: HomeComponent, children: [
        {
            path: '',
            component: RebelsComponent,
            outlet: 'child1'
        },
         {
            path: '',
            component: RegisterComponent,
            outlet: 'child2'
        }
    ]},
  { path: 'rebels', component: RebelsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'rebels' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
