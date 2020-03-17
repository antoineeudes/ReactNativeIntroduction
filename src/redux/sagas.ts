import { all } from 'redux-saga/effects';
import { sagas as loginSagas } from './pages/Login';

export default function* rootSaga() {
  yield all([loginSagas()]);
}
