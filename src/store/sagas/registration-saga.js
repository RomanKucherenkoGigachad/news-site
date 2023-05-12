import { call, takeLatest, put } from 'redux-saga/effects';

import API from '../../utils/API';
import * as userActions from '../actions/auth';
import ActionsTypes from '../constants/constant';

const addUser = (payload) => API.post('/auth/signup', payload);
function* registrationWorker(action) {
  try {
    const res = yield call(addUser, action.payload);
    localStorage.setItem('token', res.data.token);
    yield put(userActions.registrationReceived(res));
  } catch (error) {
    yield put(userActions.registrationRejected(error));
  }
}

function* registrationWatcherSaga() {
  yield takeLatest(ActionsTypes.REGISTRATION_REQUESTED, registrationWorker);
}

export default registrationWatcherSaga;
