import { createAction, props } from '@ngrx/store';
import { UserRegister } from '../../model/UserRegister';

export const registerUser = createAction(
  '[Auth] Register User',
  props<{ user: UserRegister }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: UserRegister }>()
);

export const loginUser = createAction(
  '[Auth] Login User',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: UserRegister }>()
);

export const logout = createAction('[Auth] Logout');
