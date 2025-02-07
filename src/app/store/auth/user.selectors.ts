import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './user.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUsers = createSelector(
  selectAuthState,
  (state) => state.users
);

export const selectCurrentUser = createSelector(
  selectAuthState,
  (state) => state.currentUser
);
