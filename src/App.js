import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {generateId, addTodo, removeTodo, toggleTodo, updateTodo, findById, } from './lib/todoHelpers';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        name: 'check network',
        isCompleted:false,
      },
      {
        id: 2,
        name: 'check server',
        isCompleted:true,
      },
      {
        id: 3,
        name: 'check website',
        isCompleted:false,
      },
      {
        id: 4,
        name: 'check biztalk',
        isCompleted:false,
      }
    ],
    currentTodo: ''
  }

    handleRemove = (id, evt) => {
        evt.preventDefault()
        const updatedTodos = removeTodo(this.state.todos, id)
        this.setState({todos: updatedTodos});
    }

    handleToggle = (id) => {
      const todo = findById(id, this.state.todos);
      const updated = toggleTodo(todo);
      const updatedTodos = updateTodo(this.state.todos, updated);
      this.setState({todos: updatedTodos});
    }

    handleInputChange = (evt) => {
      this.setState({currentTodo: evt.target.value});
    }

    handleSubmit = (evt) => {
      evt.preventDefault();
      const newId = generateId();
      const newTodo = {id: newId, name: this.state.currentTodo, isCompleted:false}
      const updatedTodos = addTodo(this.state.todos, newTodo);
      this.setState({
        todos: updatedTodos,
        currentTodo: '',
        errorMessage: ''
      })

    }

    handleEmptySubmit = (evt) => {
      evt.preventDefault()
      this.setState({
        errorMessage: 'Please supply a todo name'
      })
    }

  render() {
    const submitHandler= this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todos</h2>
        </div>
        <p className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}

          <TodoForm handleSubmit={submitHandler}
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            />

          <TodoList todos={this.state.todos} handleRemove={this.handleRemove} handleToggle={this.handleToggle} />
        </p>
      </div>
    );
  }
}

export default App;
