import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DemandeCollecteComponent } from './pages/individual/demande-collecte/demande-collecte.component';
import { CollectsComponent } from './pages/individual/collects/collects.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { authGuard } from './guards/auth/auth.guard';
import { checkRoleGuard } from './guards/checkRole/check-role.guard';
import {ListCollectsComponent} from './pages/collector/list-collects/list-collects.component';

export const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'particular',
        children: [
          { path: 'home', component: HomeComponent, canActivate: [authGuard] },
          { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
          { path: 'collects', component: CollectsComponent, canActivate: [authGuard] },
          { path: 'demand-collect', component: DemandeCollecteComponent, canActivate: [authGuard] },
          { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
      },
      {
        path : 'collector' ,
        children: [
          { path: 'collects', component: ListCollectsComponent, canActivate: [authGuard] },
        ]
      }
    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
