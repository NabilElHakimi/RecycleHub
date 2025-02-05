import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DemandeCollecteComponent } from './pages/individual/demande-collecte/demande-collecte.component';
import { CollectsComponent } from './pages/individual/collects/collects.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [

  {
    path: '',
    component : SidebarComponent,
    children : [
       {path: '', redirectTo: 'home', pathMatch: 'full'},
       {path : 'home' , component : HomeComponent },
       {path : 'collects' , component : CollectsComponent },
       {path : 'demand-collect' , component : DemandeCollecteComponent },
    ] }

];
