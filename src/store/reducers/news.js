import ActionsTypes from '../constants/constant';

const initialState = {
  news: [],
  isFetching: false,
  error: null,
};

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.NEWS_REQUESTED:
    case ActionsTypes.USERPOSTS_REQUESTED:
      return {
        ...state, isFetching: true, error: null,
      };

    case ActionsTypes.NEWS_RECEIVED:
    case ActionsTypes.USERPOSTS_RECEIVED:
      return {
        ...state, isFetching: false, news: action.payload, error: null,
      };

    case ActionsTypes.NEWS_REJECTED:
    case ActionsTypes.USERPOSTS_REJECTED:
      return {
        ...state, isFetching: false, error: action.error,
      };

    default: return state;
  }
}
export default newsReducer;
