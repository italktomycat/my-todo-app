import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export class SubmitForm extends React.Component {
    state = { term: '' };
  
    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.term === '') return;
      this.props.onFormSubmit(this.state.term);
      this.setState({ term: '' });
    }
  
    render() {
      return(
          <div className='container-form control is-expanded' >
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            className='input'
            placeholder='Enter Item'
            value={this.state.term}
            onChange={(e) => this.setState({term: e.target.value})}
          />
          <button className='button'>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </form>
        </div>
      );
    }
  };