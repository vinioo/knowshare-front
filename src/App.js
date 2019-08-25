import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Homepage from './pages/Homepage';
import Content from './pages/Content';
import Login from './pages/Login';
import NewPost from './pages/NewPost';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route path="/content" render={() => <Content />} />

        <Route path="/login" component={Login} />

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
