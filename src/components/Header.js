import React, { Component } from 'react';
import todo from '../icons/todo.png';

export default class Header extends Component {
  render() {
    return (
        <div className="header">
            <h3>To do List</h3>
            <img alt="To do List Icon" src={todo} height="26" />
        </div>
    );
  }
}
