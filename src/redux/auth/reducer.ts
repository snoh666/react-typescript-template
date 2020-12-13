import {
  AuthActionTypes,
  AuthState,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '@redux/auth/types';

const initialState: AuthState = {
  isLoggedIn: false,
  userId: '',
  isPending: false,
  wasFetched: false,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isLoggedIn: false,
        isPending: true,
        userId: '',
        wasFetched: true,
      };
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        isPending: false,
        userId: action.userId,
        wasFetched: true,
      };
    case LOGOUT:
      return {
        isLoggedIn: false,
        isPending: false,
        userId: '',
        wasFetched: true,
      };
    case LOGIN_ERROR:
      return {
        isLoggedIn: false,
        isPending: false,
        userId: '',
        wasFetched: true,
      };
    default:
      return state;
  }
};

export default authReducer;
