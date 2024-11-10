import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

// Action to add a new user
export const addUser = createAction(
  '[User] Add User',
  props<{ user: User }>()
);

// Action to update an existing user
export const updateUser = createAction(
  '[User] Update User',
  props<{ user: User }>()
);
