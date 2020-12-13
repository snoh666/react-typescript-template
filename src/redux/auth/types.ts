export interface AuthState {
  isLoggedIn: boolean;
  userId: string;
  isPending: boolean;
  wasFetched: boolean;
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
}

export interface LogInUser {
  type: typeof LOGIN_SUCCESS;
  userId: string;
}

export interface LogOutUser {
  type: typeof LOGOUT;
}

export interface LoginError {
  type: typeof LOGIN_ERROR;
}

export type AuthActionTypes =
  | LoginRequest
  | LogInUser
  | LogOutUser
  | LoginError;
