import { all } from 'redux-saga/effects';
import newsWatcherSaga from './news-saga';
import registrationWatcherSaga from './registration-saga';
import loginWatcherSaga from './login-saga';
import authByTokenWatcherSaga from './auth-by-token-saga';
import logoutWatcherSaga from './logout-saga';
import getUserPageWatcherSaga from './get-user-page-saga';
import postsWatcherSaga from './posts-saga';

export default function* rootSaga() {
  yield all([
    newsWatcherSaga(),
    registrationWatcherSaga(),
    loginWatcherSaga(),
    authByTokenWatcherSaga(),
    logoutWatcherSaga(),
    getUserPageWatcherSaga(),
    postsWatcherSaga(),
  ]);
}
