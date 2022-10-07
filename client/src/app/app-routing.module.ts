import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PracticeComponent } from './practice/practice.component';
import {SignUpComponent } from './signup/signUp.component';



const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"deleteTask/:id", component:HomeComponent},
  {path:"isComplete/:id", component:HomeComponent},
  {path:"logIn", component:LoginComponent},
  {path:"signUp", component:SignUpComponent},
  {path:"practice", component:PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
