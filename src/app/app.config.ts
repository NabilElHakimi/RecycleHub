import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { collecteReducer } from './store/collecte/collecte.reducer';
import {authReducer} from './store/auth/user.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideStore(
       {
         collecte: collecteReducer ,
         auth : authReducer
       }
     ),
     provideEffects() ,
      provideRouter(routes , withComponentInputBinding())
  ]
};
