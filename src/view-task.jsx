import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import { Link } from 'react-router-dom';

import { faHippo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitForm } from './submit-form';

class ViewTask extends React.Component {

    state = { term: '' };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.term === '') return;
        this.props.onFormSubmit(this.state.term);
        this.setState({ term: '' });
        window.location.href = '/';
    }

    render() {
        return (
            <div className="app-wrapper">
                <div class="container-header">
                    <FontAwesomeIcon icon={faHippo}></FontAwesomeIcon>
                    <p>ToDo App</p>
                </div>

                <SubmitForm onFormSubmit={this.handleSubmit} />

                <div className='container-go-back'>
                    <Link to='/'><button className='button'>Go Back</button></Link>
                </div>
            </div>
        );
    }
}

export default ViewTask;