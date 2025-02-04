import { createReducer, on } from '@ngrx/store';
import { saveCollecteData } from './collecte.actions';

// Interface for CollecteItem
export interface CollecteItem {
  wasteType: string;
  weight: number;
  address: string;
  datetime: string;
  photos: FileList | null;
  notes: string;
}

// Retrieve the saved collectes from localStorage
const storedCollectes: CollecteItem[] = JSON.parse(localStorage.getItem('collecteData') || '[]');

// Initial State
export const initialState = {
  collectes: storedCollectes
};

export const collecteReducer = createReducer(
  initialState,
  on(saveCollecteData, (state, { collecteData }) => {
    console.log('Collectes before adding:', state.collectes);

    // Add the new collecte to the existing array
    const updatedCollectes = [...state.collectes, collecteData];
    console.log('Updated Collectes:', updatedCollectes);

    // Save the updated collectes to localStorage
    localStorage.setItem('collecteData', JSON.stringify(updatedCollectes));

    // Return the new state with updated collectes
    return { collectes: updatedCollectes };
  })
);
