import { createReducer, on } from '@ngrx/store';
import { registerUser, registerSuccess, loginUser, loginSuccess, logout } from './user.actions';
import { UserRegister } from '../../model/UserRegister';
import {routes} from '../../app.routes';
export interface AuthState {
  users: UserRegister[];
  currentUser: UserRegister | null;
}


const initialState: AuthState = {
  users: JSON.parse(localStorage.getItem('users') || '[]'),
  currentUser: JSON.parse(localStorage.getItem('userConnect') || 'null')
};

export const authReducer = createReducer(

  initialState,

  on(registerUser, (state, { user }) => {
    const updatedUsers = [...state.users, user];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    return { ...state, users: updatedUsers };
  }),

  on(registerSuccess, (state, { user }) => ({
    ...state,
    currentUser: user
  })),

  on(loginUser, (state, { email, password }) => {
    const user = state.users.find(u => u.email === email && u.password === password);
    if(!user){
      alert('User not exist')
    }
    if (user) {
      localStorage.setItem('userConnect', JSON.stringify(user));
      return { ...state, currentUser: user };
    }
    return state;

  }),

  on(loginSuccess, (state, { user }) => ({
    ...state,
    currentUser: user
  })),

  on(logout, (state) => {
    localStorage.removeItem('userConnect');

    return {
      ...state,
      currentUser: null
    };
  })
);
