import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    state = {
        todo: []
    }

    componentWillMount() {
        let { todos, match } = this.props;
        const { id } = match.params;

        if (!todos.length) {
            todos = JSON.parse(localStorage.getItem('todo'));
        }

        if (id) {
            const todo = todos.filter(todo => todo.id == id);
            this.setState({
                todo
            })
        }
    }

    render() {
        const { todo } = this.state;
        return (
            <div className="details">
                <div>
                    <h4>ID</h4>
                    <p>{todo[0].id}</p>
                </div>
                <div>
                    <h4>To do</h4>
                    <p>{todo[0].todo}</p>
                </div>
                <div>
                    <h4>Was done</h4>
                    <p>{todo[0].done ? "Yes" : "Nope"}</p>
                </div>
                <div>
                    <Link to="/" className="btn btn-back">Voltar</Link>
                </div>
            </div>
        )
    }
}