import { UserState } from 'src/redux/user/types';
import {
  LOGIN_REQUEST,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  UserLoginFormData,
  LoginActionType,
  LoginSuccessActionType,
  LogoutActionType,
  LoginErrorActionType
} from './types';

export const LoginAction = (user: UserLoginFormData): LoginActionType => ({
  type: LOGIN_REQUEST,
  payload: user
});

export const LoginSuccessAction = (
  user: UserState
): LoginSuccessActionType => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const LogoutAction = (): LogoutActionType => ({
  type: LOGOUT
});

export const LoginErrorAction = (message: string): LoginErrorActionType => ({
  type: LOGIN_ERROR,
  message
});

export default {
  LoginAction,
  LogoutAction,
  LoginSuccessAction,
  LoginErrorAction
};
