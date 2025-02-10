import { createAction, props } from '@ngrx/store';
import { CollecteItem } from './collecte.reducer';

export const saveCollecteData = createAction(
  '[DemandeCollecte] Save Collecte Data',
  props<{ collecteData: CollecteItem }>()
);
