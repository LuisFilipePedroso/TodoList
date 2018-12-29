import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import App from '../App';

import '../App.css';

const user = "user";
const pass = "123";

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        toDashboard: false
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;

        if (username === user && password === pass)
            this.setState({ toDashboard: true });
        else {
            this.setState({ toDashboard: false });
            alert("Error **");
        }
    }

    render() {
        if (this.state.toDashboard) {
            return (
                <Switch>
                    <Redirect from="/login" to='/dashboard' />
                    <Route exact path="/dashboard" render={() => <App/>} />
                </Switch>
            )
        }

        return (
            <Route path="/login" render={() => (
                <div className="login">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Username</label>
                            <input
                                name="username"
                                type="text"
                                onChange={this.handleInputChange} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                name="password"
                                type="password"
                                onChange={this.handleInputChange} />
                        </div>
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            )} />
        );
    }
}
