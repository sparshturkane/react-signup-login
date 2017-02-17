import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Greetings from "./components/Greetings";
import SignupPage from "./components/signup/SignupPage";

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Greetings}></IndexRoute>
            <Route path="signup" component={SignupPage} />
        </Route>
    </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
