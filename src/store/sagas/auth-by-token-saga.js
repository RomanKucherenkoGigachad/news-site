import { call, takeLatest, put } from 'redux-saga/effects';

import API from '../../utils/API';
import * as userActions from '../actions/auth';
import ActionsTypes from '../constants/constant';

const authByToken = () => API.get('/auth/me');

function* authByTokenWorker() {
  try {
    const res = yield call(authByToken);
    yield put(userActions.loginReceived(res.data.user));
  } catch (error) {
    yield put(userActions.loginRejected(error));
  }
}

function* authByTokenWatcherSaga() {
  yield takeLatest(ActionsTypes.AUTHBYTOKEN_REQUESTED, authByTokenWorker);
}

export default authByTokenWatcherSaga;
