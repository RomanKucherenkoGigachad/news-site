import ActionsTypes from '../constants/constant';

export const loginRequested = (payload) => ({
  type: ActionsTypes.LOGIN_REQUESTED, payload,
});

export const loginReceived = (data) => ({
  type: ActionsTypes.LOGIN_RECEIVED,
  payload: data,
});

export const loginRejected = (error) => ({
  type: ActionsTypes.LOGIN_REJECTED,
  error,
});

export const registrationRequested = (payload) => ({
  type: ActionsTypes.REGISTRATION_REQUESTED, payload,
});

export const registrationReceived = (data) => ({
  type: ActionsTypes.REGISTRATION_RECEIVED,
  payload: data,
});

export const registrationRejected = (error) => ({
  type: ActionsTypes.REGISTRATION_REJECTED,
  error,
});

export const logoutRequested = () => ({
  type: ActionsTypes.LOGOUT_REQUESTED,
});

export const logoutReceived = (data) => ({
  type: ActionsTypes.LOGOUT_RECEIVED,
  payload: data,
});

export const logoutRejected = (error) => ({
  type: ActionsTypes.LOGIN_REJECTED,
  error,
});

export const authByTokenRequested = () => ({
  type: ActionsTypes.AUTHBYTOKEN_REQUESTED,
});
