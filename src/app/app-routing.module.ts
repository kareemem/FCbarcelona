import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',loadComponent:()=>import('./components/home/home.component').then((c)=>c.HomeComponent)},
  {path:'team',loadComponent:()=>import('./components/team/team.component').then((c)=>c.TeamComponent)},
  {path:'store',loadComponent:()=>import('./components/store/store.component').then((c)=>c.StoreComponent)},
  {path:'signIn',loadComponent:()=>import('./components/sign-in/sign-in.component').then((c)=>c.SignInComponent)},
  {path:'signUp',loadComponent:()=>import('./components/sign-up/sign-up.component').then((c)=>c.SignUpComponent)},
  {path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then((c)=>c.NotfoundComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
