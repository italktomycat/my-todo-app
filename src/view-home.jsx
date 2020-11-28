import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'


import { TodoList } from './todo-list';

import { Link } from 'react-router-dom';

import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ViewHome extends React.Component {

    state = {
        tasks: ['task 1', 'task 2', 'task 3']
    };

    handleDelete = (index) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);
        this.setState({ tasks: newArr });
    }

    render() {
        return (
            <div className="app-wrapper">

                <div class="container-header">
                    <FontAwesomeIcon icon={faHippo}></FontAwesomeIcon>
                    <p>ToDo App</p>
                </div>

                <div className='container-form'>
                    <Link to='/view-task'><button className='button'>Add New Task</button></Link>
                </div>
                <div className='container-list' >
                    <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}></TodoList>
                </div>

            </div>
        );
    }
}

export default ViewHome;