import ActionsTypes from '../constants/constant';

const initialState = {
  user: null,
  isFetching: false,
  error: null,
};

const authReducer = function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.LOGIN_REQUESTED:
    case ActionsTypes.LOGOUT_REQUESTED:
    case ActionsTypes.REGISTRATION_REQUESTED:
    case ActionsTypes.AUTHBYTOKEN_REQUESTED:
      return {
        ...state, isFetching: true, error: null,
      };

    case ActionsTypes.LOGIN_RECEIVED:
    case ActionsTypes.REGISTRATION_RECEIVED:
      return {
        ...state, isFetching: false, user: action.payload, error: null,
      };

    case ActionsTypes.LOGOUT_REJECTED:
      return {
        ...state, isFetching: false, error: action.error,
      };
    case ActionsTypes.LOGIN_REJECTED:
    case ActionsTypes.REGISTRATION_REJECTED:
      return {
        ...state, isFetching: false, error: action.error, user: null,
      };
    case ActionsTypes.LOGOUT_RECEIVED:
      return {
        ...state, isFetching: false, user: null,
      };

    default: return state;
  }
};

export default authReducer;
