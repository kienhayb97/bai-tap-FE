import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from './baitap-FE/user/create-user/create-user.component';
import {LoginUserComponent} from './baitap-FE/user/login-user/login-user.component';



const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginUserComponent
  },
  {
    path: 'registered',
    component: CreateUserComponent
  },
  {
    path: 'auth/login/registered',
    component: CreateUserComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
