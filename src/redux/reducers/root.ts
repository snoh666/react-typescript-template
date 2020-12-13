import { combineReducers } from 'redux';

import authReducer from '@redux/auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
