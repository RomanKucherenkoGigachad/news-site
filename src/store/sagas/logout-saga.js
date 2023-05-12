import { takeLatest, put } from 'redux-saga/effects';

import * as userActions from '../actions/auth';
import ActionsTypes from '../constants/constant';

function* logoutWorker() {
  try {
    localStorage.removeItem('token');
    yield put(userActions.logoutReceived());
  } catch (error) {
    yield put(userActions.logoutRejected(error));
  }
}

function* logoutWatcherSaga() {
  yield takeLatest(ActionsTypes.LOGOUT_REQUESTED, logoutWorker);
}

export default logoutWatcherSaga;
