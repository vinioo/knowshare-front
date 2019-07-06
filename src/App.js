import React from "react";

import GlobalStyle from "./styles/global";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Content from "./pages/Content";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/content" render={() => <Content />} />

        <Route exact path="/login" component={Login} />

        <Route
          exact
          path="/newPost"
          render={routeProps => <NewPost {...routeProps} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
