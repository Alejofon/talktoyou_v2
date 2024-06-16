import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CallComponent } from './components/call/call.component';

const routes: Routes = [
  {path: '', redirectTo: 'registro', pathMatch: 'full'},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'usurio', component: PerfilComponent},
  {path: 'call/:id', component: CallComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
