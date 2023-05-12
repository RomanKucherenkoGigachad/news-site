import { call, takeLatest, put } from 'redux-saga/effects';

import API from '../../utils/API';
import * as userActions from '../actions/user';
import ActionsTypes from '../constants/constant';

function* getUserPageWorker(action) {
  try {
    const getPage = () => API.get(`/user/${action.payload}`);
    const res = yield call(getPage);
    yield put(userActions.getUserPageReceived(res.data));
  } catch (error) {
    yield put(userActions.getUserPageRejected(error));
  }
}

function* getUserPageWatcherSaga() {
  yield takeLatest(ActionsTypes.GETUSERPAGE_REQUESTED, getUserPageWorker);
}

export default getUserPageWatcherSaga;
