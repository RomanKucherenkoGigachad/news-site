import { call, takeLatest, put } from 'redux-saga/effects';

import API from '../../utils/API';
import * as userActions from '../actions/auth';
import ActionsTypes from '../constants/constant';

const loginUser = (payload) => API.post('/auth/signin', payload);
function* loginWorker(action) {
  try {
    const res = yield call(loginUser, action.payload);
    localStorage.setItem('token', res.data.token);
    yield put(userActions.loginReceived(res.data.user));
  } catch (error) {
    yield put(userActions.loginRejected(error));
  }
}

function* loginWatcherSaga() {
  yield takeLatest(ActionsTypes.LOGIN_REQUESTED, loginWorker);
}

export default loginWatcherSaga;
