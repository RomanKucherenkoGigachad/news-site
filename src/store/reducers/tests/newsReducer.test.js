/* eslint-disable quotes */
import newsReducer from "../news";
import ActionsTypes from "../../constants/constant";

describe("Test news reducer", () => {
  it(`Should return the initial state`, () => {
    expect(newsReducer(undefined, {})).toEqual({
      news: [],
      isFetching: false,
      error: null,
    });
  });

  it(`Should handle NEWS_REQUESTED action
      and return the state in which the isFetching field is true`, () => {
    expect(
      newsReducer(undefined, { type: ActionsTypes.NEWS_REQUESTED })
    ).toEqual({
      news: [],
      isFetching: true,
      error: null,
    });
  });

  it(`Should handle NEWS_RECEIVED action and return news`, () => {
    expect(
      newsReducer(undefined, {
        type: ActionsTypes.NEWS_RECEIVED,
        payload: ["news1", "news2"],
      })
    ).toEqual({
      news: ["news1", "news2"],
      isFetching: false,
      error: null,
    });
  });

  it(`Should handle NEWS_REJECTED action
      and return the state in which the error occurred`, () => {
    expect(
      newsReducer(undefined, {
        type: ActionsTypes.NEWS_REJECTED,
        error: "Error fetching news",
      })
    ).toEqual({
      news: [],
      isFetching: false,
      error: "Error fetching news",
    });
  });
});
