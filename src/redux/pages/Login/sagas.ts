import { takeEvery, call, put } from 'redux-saga/effects';
import { loginCall } from './api';
import { AnyAction } from 'redux';
import { LOGIN_REQUEST } from './types';
import { modelizeAccount } from './modelize';
import { LoginSuccessAction, LoginErrorAction } from './actions';

export function* loginSaga({ payload: loginActionPayload }: AnyAction) {
  try {
    const response = yield call(
      loginCall,
      loginActionPayload.email,
      loginActionPayload.password
    );
    try {
      yield put(LoginSuccessAction(modelizeAccount(response.data.account)));
    } catch (error) {
      yield put(LoginErrorAction(response.data.message));
    }
  } catch (error) {
    yield put(LoginErrorAction('Connexion lost'));
  }
}

export default function* userSagas() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}
