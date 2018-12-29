import React, { Component } from 'react';
import trash from '../icons/trash.png';
import details from '../icons/details.png';

import { Route, Link } from 'react-router-dom';

export default class Todo extends Component {
    state = {
        isDone: false
    }

    componentDidMount() {
        this.setState({
            isDone: this.props.todo.done
        })
    }

    handleInputChange = async (e) => {
        await this.setState(prevState => ({
            isDone: !prevState.isDone
        }))
        let todo = this.props.todo;
        todo.done = this.state.isDone;

        this.props.updateTodo(todo);
    }

    render() {
        const { todo, deleteTodo } = this.props;

        return (
            <div className="todo">
                <div className="wrapper">
                    <h4>Description</h4>
                    <p>{todo.todo}</p>
                </div>
                <div className="wrapper">
                    <h4>Was done</h4>
                    <input
                        type="checkbox"
                        checked={this.state.isDone}
                        onChange={this.handleInputChange} />
                </div>
                <div className="wrapper">
                    <h4>Delete</h4>
                    <button onClick={() => deleteTodo(todo)}>
                        <img alt="Delete Item" src={trash} height="26" />
                    </button>
                </div>
                <div className="wrapper">
                    <h4>Details</h4>
                    <Link to={`/details/${todo.id}`}>
                        <img alt="See more details" src={details} height="24" />
                    </Link>
                </div>
            </div>
        );
    }
}
