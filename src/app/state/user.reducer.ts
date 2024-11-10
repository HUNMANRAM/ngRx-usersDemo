import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from './user.actions';

// Initial state for the user list
export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user]
  })),
  on(UserActions.updateUser, (state, { user }) => ({
    ...state,
    users: state.users.map((existingUser) =>
      existingUser.id === user.id ? { ...existingUser, ...user } : existingUser
    )
  }))
);
