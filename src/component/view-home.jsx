import '../App.css';

import React from 'react';
import 'bulma/css/bulma.css'

import { TodoList } from './todo-list';

import { Link } from 'react-router-dom';

import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ViewHome extends React.Component {

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
                    <TodoList tasks={this.props.tasks} onDelete={this.props.onDeleteTask}></TodoList>
                </div>

            </div>
        );
    }
}

export default ViewHome;