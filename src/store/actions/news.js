import ActionsTypes from '../constants/constant';

export const newsRequested = () => ({
  type: ActionsTypes.NEWS_REQUESTED,
});

export const newsReceived = (data) => ({
  type: ActionsTypes.NEWS_RECEIVED,
  payload: data,
});

export const newsRejected = () => ({
  type: ActionsTypes.NEWS_REJECTED,
});

export const postsRequested = (data) => ({
  type: ActionsTypes.USERPOSTS_REQUESTED,
  payload: data,
});

export const postsReceived = (data) => ({
  type: ActionsTypes.USERPOSTS_RECEIVED,
  payload: data,
});

export const postsRejected = () => ({
  type: ActionsTypes.USERPOSTS_REJECTED,
});
