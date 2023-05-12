import { call, takeLatest, put } from 'redux-saga/effects';

import API from '../../utils/API';
import * as NewsActions from '../actions/news';
import ActionsTypes from '../constants/constant';

function* newsGetWorker() {
  try {
    const { data } = yield call(API, { method: 'GET', url: 'news' });
    yield put(NewsActions.newsReceived(data));
  } catch (error) {
    yield put(NewsActions.newsRejected(error));
  }
}

function* newsWatcherSaga() {
  yield takeLatest(ActionsTypes.NEWS_REQUESTED, newsGetWorker);
}

export default newsWatcherSaga;
