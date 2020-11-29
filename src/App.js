
import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ViewHome from './view-home';
import ViewTask from './view-task';

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ViewHome} />
            <Route path="/view-task" component={ViewTask} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
