/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
import React from "react";
import { useSelector } from "react-redux";
import { Route, Link } from "react-router-dom";

import { PostList } from "../../News/PostList";
import { Header } from "../../Header";
import { UserPage } from "../UserPage";

import "../../../styles/main-page.css";

export const MainPage = () => {
  const { user } = useSelector((store) => store.authReducer);
  const userLogged = !!user;
  return (
    <>
      <Header />
      <div className="main-page">
        {userLogged && (
          <Link className="profile-button" to={`/user/${user.id}`}>
            My Profile{" "}
          </Link>
        )}
        <Route path="/user" element={<UserPage />} />
        <PostList />
      </div>
    </>
  );
};
