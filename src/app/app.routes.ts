import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

export const routes: Routes = [

  {
    path: '',
    component : SidebarComponent,
    children : [
       {path: '', redirectTo: 'home', pathMatch: 'full'},
      //  {path : 'particulier' , component : },
    ] }

];
