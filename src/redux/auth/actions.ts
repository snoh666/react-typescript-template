import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '@redux/reducers/root';
import {
  AuthActionTypes,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '@redux/auth/types';

export const LoginRequest = (): AuthActionTypes => ({
  type: LOGIN_REQUEST,
});

export const LoginSuccess = (id: string): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  userId: id,
});

export const LogoutUser = (): AuthActionTypes => ({
  type: LOGOUT,
});

export const LoginError = (): AuthActionTypes => ({
  type: LOGIN_ERROR,
});

export const applyAuthListener = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => dispatch => {
  try {
    dispatch(LoginRequest());
    // Here dispatch whole user listener
    dispatch(LoginSuccess('user-custom-id'));
  } catch (e) {
    dispatch(LoginError());
  }
};
