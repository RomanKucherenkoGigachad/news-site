/* eslint-disable quotes */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { MainPage } from "./components/pages/MainPage";
import { UserPage } from "./components/pages/UserPage";
import { authByTokenRequested } from "./store/actions/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(authByTokenRequested()));
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/user/:id" component={UserPage} />
    </Switch>
  );
}

export default App;
