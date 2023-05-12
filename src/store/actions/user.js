import ActionsTypes from '../constants/constant';

export const getUserPageRequested = (data) => ({
  type: ActionsTypes.GETUSERPAGE_REQUESTED,
  payload: data,
});

export const getUserPageReceived = (data) => ({
  type: ActionsTypes.GETUSERPAGE_RECEIVED,
  payload: data,
});

export const getUserPageRejected = () => ({
  type: ActionsTypes.GETUSERPAGE_REJECTED,
});
