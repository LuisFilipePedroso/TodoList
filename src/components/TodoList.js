import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
    state = {
        description: ""
    }

    handleInputChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const todo = {
            id: Math.floor(Math.random() * (1000 - 1) + 1),
            todo: this.state.description,
            done: false
        }
        this.setState({
            description: ""
        })
        this.props.addTodo(todo);
    }

    render() {
        const { todos, updateTodo, deleteTodo } = this.props;
        return (
            <div className="todolist">
                <form onSubmit={this.handleSubmit}>
                    <div className="addToDo">
                        <input
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.description}
                            placeholder="What you need to do today?" />
                        <button type="submit" className="btn btn-save">Save</button>
                    </div>
                </form>
                <h3>Things that I have to do</h3>
                <ol>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <Todo
                                todo={todo}
                                updateTodo={updateTodo}
                                deleteTodo={deleteTodo} />
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}
