import { LoginPageState } from './types';
import {
  AuthActionType,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_ERROR
} from './types';

export const initialState: LoginPageState = {
  isLoading: false,
  errorMessage: ''
};

const loginReducer = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false };
    case LOGIN_ERROR:
      return { ...state, errorMessage: action.message, isLoading: false };
    default:
      return state;
  }
};

export default loginReducer;
