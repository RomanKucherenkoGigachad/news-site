import ActionsTypes from '../constants/constant';

const initialState = {
  user: null,
  isFetching: false,
  error: null,
};

const userReducer = function userReducer(state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.GETUSERPAGE_REQUESTED:
      return {
        ...state, isFetching: true, error: null,
      };

    case ActionsTypes.GETUSERPAGE_RECEIVED:
      return {
        ...state, isFetching: false, user: action.payload, error: null,
      };

    case ActionsTypes.GETUSERPAGE_REJECTED:
      return {
        ...state, isFetching: false, error: action.error,
      };

    default: return state;
  }
};

export default userReducer;
