import { createReducer, on } from '@ngrx/store';
import { saveCollecteData } from './collecte.actions';

export interface CollecteItem {
  id : number ,
  wasteType: string;
  weight: number;
  address: string;
  datetime: string;
  photos: FileList | null;
  notes: string;
}

const storedCollectes: CollecteItem[] = JSON.parse(localStorage.getItem('collecteData') || '[]');

export const initialState = {
  collectes: storedCollectes
};

export const collecteReducer = createReducer(
  initialState,
  on(saveCollecteData, (state, { collecteData }) => {
    console.log('Collectes before adding:', state.collectes);

    const updatedCollectes = [...state.collectes, collecteData];
    console.log('Updated Collectes:', updatedCollectes);

    localStorage.setItem('collecteData', JSON.stringify(updatedCollectes));

    return { collectes: updatedCollectes };
  })
);

