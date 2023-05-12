/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { useSelector } from "react-redux";

import { Login } from "../Login";
import { Logout } from "../Logout";
import { Registration } from "../Registration";

import "../../styles/header.css";

export const Header = () => {
  const { user } = useSelector((store) => store.authReducer);
  const userLogged = !!user;
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo-picture" src="../images/logo.png" alt="" />
      </div>
      <div className="header__site-name">YOUR FAVORITE NEWS SITE</div>
      {userLogged ? (
        <Logout test-dataid="logout-button-element" />
      ) : (
        <>
          <Login test-dataid="login-button-element" />
          <Registration />
        </>
      )}
    </div>
  );
};
