import { AuthActionType, LOGIN_SUCCESS, LOGOUT } from '../pages/Login/types';
import { UserState } from './types';

export const initialState: UserState = {
  email: null,
  token: null,
  firstname: null,
  lastname: null,
  id: null,
  isAdmin: false
};

const userReducer = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
