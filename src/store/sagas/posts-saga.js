import { call, takeLatest, put } from 'redux-saga/effects';

import API from '../../utils/API';
import * as NewsActions from '../actions/news';
import ActionsTypes from '../constants/constant';

function* postsGetWorker(action) {
  try {
    const getPosts = () => API.get(`/news?user_id=${action.payload}`);
    const res = yield call(getPosts);
    yield put(NewsActions.postsReceived(res.data));
  } catch (error) {
    yield put(NewsActions.postsRejected(error));
  }
}

function* postsWatcherSaga() {
  yield takeLatest(ActionsTypes.USERPOSTS_REQUESTED, postsGetWorker);
}

export default postsWatcherSaga;
