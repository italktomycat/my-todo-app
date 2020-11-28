import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'




import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { faHippo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ViewTask extends React.Component {

    state = {
        tasks: ['task 1', 'task 2', 'task 3']
    };

    handleSubmit = task => {
        this.setState({ tasks: [...this.state.tasks, task] });
    }

    render() {
        return (
            <div className="app-wrapper">
                <div class="container-header">
                    <FontAwesomeIcon icon={faHippo}></FontAwesomeIcon>
                    <p>ToDo App</p>
                </div>

                <div className='container-form'>
                    <form onClick={this.handleSubmit}>
                        <input
                            type='text'
                            className='input'
                            placeholder='Enter New Task'
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                        <button className='button'>
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        </button>
                    </form>
                </div>

                <div className='container-go-back'>
                    <Link to='/'><button className='button'>Go Back</button></Link>
                </div>
            </div>
        );
    }
}

export default ViewTask;