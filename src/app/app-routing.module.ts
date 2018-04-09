import { AuthService } from './../providers/auth-service';
import { MainComponent } from './../pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'main',
    component:MainComponent,
    canActivate:[AuthService]
  }
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
