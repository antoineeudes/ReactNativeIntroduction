import { UserState } from '../../user/types';

export const LOGOUT = 'LOGOUT';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export interface apiAccountType {
  ID: 1;
  CreatedAt: string;
  UpdatedAt: string | null;
  DeletedAt: string | null;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  token: string;
  Admin: boolean;
}

export interface LoginPageState {
  isLoading: boolean;
  errorMessage: string | null;
}

export interface UserLoginFormData {
  email: string;
  password: string;
}

export interface LoginActionType {
  type: typeof LOGIN_REQUEST;
  payload: UserLoginFormData;
}

export interface LoginSuccessActionType {
  type: typeof LOGIN_SUCCESS;
  payload: UserState;
}

export interface LogoutActionType {
  type: typeof LOGOUT;
}

export interface LoginErrorActionType {
  type: typeof LOGIN_ERROR;
  message: string;
}

export type AuthActionType =
  | LoginActionType
  | LoginSuccessActionType
  | LogoutActionType
  | LoginErrorActionType;
