/* eslint-disable quotes */
import authReducer from "../auth";
import ActionsTypes from "../../constants/constant";

describe("Test auth reducer", () => {
  it("Should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual({
      user: null,
      isFetching: false,
      error: null,
    });
  });

  it(`Should handle LOGIN_REQUESTED action
      and return the state in which the isFetching field is true`, () => {
    expect(
      authReducer(undefined, { type: ActionsTypes.LOGIN_REQUESTED })
    ).toEqual({
      user: null,
      isFetching: true,
      error: null,
    });
  });

  it(`Should handle LOGIN_RECEIVED action
      and return the state with the logged in user`, () => {
    expect(
      authReducer(undefined, {
        type: ActionsTypes.LOGIN_RECEIVED,
        payload: { name: "testUser" },
      })
    ).toEqual({
      user: { name: "testUser" },
      isFetching: false,
      error: null,
    });
  });

  it(`Should handle LOGIN_REJECTED action
      and return the state in which the error occurred`, () => {
    expect(
      authReducer(undefined, {
        type: ActionsTypes.LOGIN_REJECTED,
        error: "Error logging in",
      })
    ).toEqual({
      user: null,
      isFetching: false,
      error: "Error logging in",
    });
  });

  it(`Should handle LOGOUT_REQUESTED action
      and return the state with an isFetching field is true`, () => {
    expect(
      authReducer(undefined, { type: ActionsTypes.LOGOUT_REQUESTED })
    ).toEqual({
      user: null,
      isFetching: true,
      error: null,
    });
  });

  it(`Should handle LOGOUT_RECEIVED action
      and return state where user is null`, () => {
    expect(
      authReducer(undefined, { type: ActionsTypes.LOGOUT_RECEIVED })
    ).toEqual({
      user: null,
      isFetching: false,
      error: null,
    });
  });

  it("Should handle LOGOUT_REJECTED action and return an state with error", () => {
    expect(
      authReducer(undefined, {
        type: ActionsTypes.LOGOUT_REJECTED,
        error: "Error logging out",
      })
    ).toEqual({
      user: null,
      isFetching: false,
      error: "Error logging out",
    });
  });
});
