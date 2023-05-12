/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "../../styles/modal-window.css";
import "../../styles/header.css";

import { loginRequested } from "../../store/actions/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [loginInputValue, setLoginInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const login = function login() {
    const payload = {
      login: loginInputValue,
      password: passwordInputValue,
    };
    dispatch(loginRequested(payload));
    handleClose();
  };

  const loginInputChange = function loginInputChange(event) {
    setLoginInputValue(event.target.value);
  };
  const passwordInputChange = function passwordInputChange(event) {
    setPasswordInputValue(event.target.value);
  };

  return (
    <div>
      <Button
        className="header__login"
        onClick={handleOpen}
        data-testid="login-button-element"
      >
        Log in
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        data-testid="login-modal-element"
      >
        <Box className="modal-window">
          <Typography variant="h6" component="h2" className="title">
            Welcome to Your Favorite News Site!
          </Typography>

          <Typography
            id="keep-mounted-modal-description"
            className="modal-content"
          >
            <input
              className="login-area"
              type="text"
              value={loginInputValue}
              onChange={loginInputChange}
              placeholder="Write your login here"
              data-testid="login-input-element"
            />
            <input
              className="password-area"
              type="password"
              value={passwordInputValue}
              onChange={passwordInputChange}
              placeholder="Write your password here"
              data-testid="password-input-element"
            />
            <button
              type="button"
              className="login-button"
              onClick={login}
              data-testid="login-modal-button-element"
            >
              {" "}
              Log in
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
