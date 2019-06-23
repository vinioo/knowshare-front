import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Content from './pages/Content'
import Login from './pages/Login'
import Register from './pages/Register'
import NewPost from './pages/NewPost'
import './App.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" render={() => <Homepage />} />
            <Route exact path="/content" render={() => <Content />} />

            <Route exact path="/login" render={(routeProps) => <Login {...routeProps}/>} />

            <Route exact path="/newPost" render={(routeProps) => <NewPost {...routeProps}/>} />

            <Route exact path="/register" render={(routeProps) => <Register {...routeProps}/>} />
        </Switch>
    );
}

export default App;
