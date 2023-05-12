/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from "react";
import userEvent from "@testing-library/user-event";
import configureMockStore from "redux-mock-store";
import { render, act, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Registration } from "./index";
import { registrationRequested } from "../../store/actions/auth";

describe("Test registration component", () => {
  const mockStore = configureMockStore();
  const store = mockStore();

  const nameInput = screen.getByTestId("name-input-element");
  const emailInput = screen.getByTestId("email-input-element");
  const passwordInput = screen.getByTestId("password-input-element");
  const loginInput = screen.getByTestId("login-input-element");
  const surnameInput = screen.getByTestId("surname-input-element");

  it("Should update input fields values", () => {
    render(<Registration />);

    fireEvent.change(nameInput, { target: { value: "name" } });
    fireEvent.change(emailInput, { target: { value: "surname" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.change(loginInput, { target: { value: "login" } });
    fireEvent.change(surnameInput, { target: { value: "surname" } });

    expect(nameInput.value).toBe("name");
    expect(emailInput.value).toBe("surname");
    expect(passwordInput.value).toBe("password");
    expect(loginInput.value).toBe("login");
    expect(surnameInput.value).toBe("surname");
  });

  it(`Should fill in registration fields,
      pass validation
      and launch registration action`, async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <Registration />
        </Provider>
      );
    });

    const registerButton = screen.getByTestId(
      "registration-open-button-element"
    );
    const button = screen.getByTestId("registration-button-element");

    await act(async () => {
      userEvent.click(registerButton);
    });

    await act(async () => {
      userEvent.paste(nameInput, "testName");
    });
    await act(async () => {
      fireEvent.blur(nameInput);
    });
    await act(async () => {
      userEvent.paste(surnameInput, "testSurname");
    });
    await act(async () => {
      fireEvent.blur(surnameInput);
    });
    await act(async () => {
      userEvent.paste(loginInput, "testLogin");
    });
    await act(async () => {
      fireEvent.blur(loginInput);
    });
    await act(async () => {
      userEvent.paste(emailInput, "testEmail");
    });
    await act(async () => {
      fireEvent.blur(emailInput);
    });
    await act(async () => {
      userEvent.paste(passwordInput, "testPassword");
    });
    await act(async () => {
      fireEvent.blur(passwordInput);
    });
    await act(async () => {
      userEvent.click(button);
    });

    expect(store.getActions()).toContainEqual(
      registrationRequested({
        name: "testName",
        surname: "testSurname",
        login: "testLogin",
        email: "testEmail",
        password: "testPassword",
      })
    );
  });
});
