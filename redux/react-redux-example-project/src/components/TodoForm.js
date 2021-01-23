import React from 'react';
import { store } from '../store';
import { createTask } from '../actions/taskActions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(createTask(this.state.inputValue))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default TodoForm;
