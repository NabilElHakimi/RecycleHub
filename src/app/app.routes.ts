import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DemandeCollecteComponent } from './pages/individual/demande-collecte/demande-collecte.component';
import { CollectsComponent } from './pages/individual/collects/collects.component';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {LoginComponent} from './pages/auth/login/login.component';

export const routes: Routes = [

  {
    path: '',
    component : SidebarComponent,
    children : [
       {path: '', redirectTo: 'home', pathMatch: 'full'},
       {path : 'home' , component : HomeComponent },
       {path : 'profile' , component : ProfileComponent },
       {path : 'collects' , component : CollectsComponent },
       {path : 'demand-collect' , component : DemandeCollecteComponent },
    ]
  },
  {
    path: 'register',
    component : RegisterComponent
  },
  {
    path: 'login',
    component : LoginComponent
  }

];
