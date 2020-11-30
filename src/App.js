
import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ViewHome from './component/view-home';
import ViewTask from './component/view-task';

class App extends React.Component {

  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  };

  handleDeleteTask = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  }

  handleCreateTask = (e) => {

    console.log('handleCreateTask', e);
    this.state.tasks.push(e);

  }

  render() {
    return (
      <BrowserRouter>

        <Route exact path="/">
          <ViewHome tasks={this.state.tasks} onDeleteTask={this.handleDeleteTask} />
        </Route>

        <Route path="/view-task">
          <ViewTask onCreateTask={this.handleCreateTask} />
        </Route>

      </BrowserRouter>
    );
  }
}

export default App;
