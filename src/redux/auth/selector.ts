import { RootState } from '@redux/reducers/root';
import { AuthState } from '@redux/auth/types';

const getAuthState = (state: RootState): AuthState => state.auth;

export default getAuthState;
