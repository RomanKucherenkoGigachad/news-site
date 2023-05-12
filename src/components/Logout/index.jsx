/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { useDispatch } from "react-redux";

import { logoutRequested } from "../../store/actions/auth";

import "../../styles/header.css";

export const Logout = () => {
  const dispatch = useDispatch();
  const logout = function logout() {
    dispatch(logoutRequested());
  };

  return (
    <button type="button" className="logout-button" onClick={logout}>
      {" "}
      Log out
    </button>
  );
};
