import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { apiErrorResponse } from '../../../fixtures';
import { loginSaga } from '../sagas';
import {
  LoginAction,
  LoginSuccessAction,
  LoginErrorAction
} from '../actions';
import { LOGIN_ERROR } from '../types';
import { loginCall } from '../api';
import { modelizeAccount } from '../modelize';
import { userCredentials, apiUserFixture } from '../fixtures';

describe('User Sagas', () => {
  describe('loginSaga', () => {
    it('should put the LoginSuccess action with the modelized response when the request is a success', async () => {
      await expectSaga(loginSaga, LoginAction(userCredentials))
        .provide([
          [
            call(loginCall, userCredentials.email, userCredentials.password),
            apiUserFixture
          ]
        ])
        .put(LoginSuccessAction(modelizeAccount(apiUserFixture)))
        .not.put.actionType(LOGIN_ERROR);
    });
    it('should put the LoginError action when the request is not a success', async () => {
      await expectSaga(loginSaga, LoginAction(userCredentials))
        .provide([
          [
            call(loginCall, userCredentials.email, userCredentials.password),
            { data: apiErrorResponse }
          ]
        ])
        .put(LoginErrorAction(apiErrorResponse.message));
    });
  });
});
