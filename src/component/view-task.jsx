import React from 'react';
import '../App.css';
import 'bulma/css/bulma.css'

import { Link } from 'react-router-dom';

import { faHippo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitForm } from './submit-form';

class ViewTask extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <div class="container-header">
                    <FontAwesomeIcon icon={faHippo}></FontAwesomeIcon>
                    <p>ToDo App</p>
                </div>

                <SubmitForm onFormSubmit={this.props.onCreateTask} />

                <div className='container-go-back'>
                    <Link to='/'><button className='button'>Go Back</button></Link>
                </div>
            </div>
        );
    }
}

export default ViewTask;