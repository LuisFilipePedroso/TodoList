import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TodoList from './components/TodoList';
import Header from './components/Header';

import Details from './pages/Details';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todo')) || [];

    this.setState({
      todos
    })
  }

  handleStateChange = async (todos) => {

    await this.setState({
      todos
    })
    localStorage.setItem('todo', JSON.stringify(this.state.todos));
  }

  addTodo = async (todo) => {
    await this.setState(prevState => ({
      todos: prevState.todos.concat(todo)
    }))
    localStorage.setItem('todo', JSON.stringify(this.state.todos));
  }

  updateTodo = (todo) => {
    const todos = this.state.todos;

    this.handleStateChange(todos);
  }

  deleteTodo = async (todo) => {
    const todos = this.state.todos;
    const newTodos = todos.filter(t => t.id !== todo.id);

    this.handleStateChange(newTodos);
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => (
          <TodoList
            todos={todos}
            addTodo={this.addTodo}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo} />
        )} />

        <Route path="/details/:id" render={({match}) => <Details todos={todos} match={match} />} />
      </div>
    );
  }
}

export default App;
