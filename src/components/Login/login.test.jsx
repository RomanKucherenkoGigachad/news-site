/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from "react";
import userEvent from "@testing-library/user-event";
import configureMockStore from "redux-mock-store";
import { render, act, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Login } from ".";
import { loginRequested } from "../../store/actions/auth";

describe("Test login component", () => {
  const mockStore = configureMockStore();
  const store = mockStore();

  it(`Should fill in the login and password fields
      and run the login action by clicking on the button`, async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <Login />
        </Provider>
      );
    });

    const loginInput = screen.getByPlaceholderText("Write your login here");
    const passwordInput = screen.getByPlaceholderText(
      "Write your password here"
    );
    const loginButton = screen.getByTestId("login-modal-button-element");

    await act(async () => {
      userEvent.paste(loginInput, "testlogin");
      userEvent.paste(passwordInput, "testpassword");
    });
    userEvent.click(loginButton);

    expect(store.getActions()).toContainEqual(
      loginRequested({ login: "testlogin", password: "testpassword" })
    );
  });
});
