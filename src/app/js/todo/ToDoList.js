
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ToDo from './ToDo';


export default class ToDoList extends Component {

    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        onTodoClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this._renderTodos               = this._renderTodos.bind(this);
    }

    _renderTodos(){
        return (
            <ul>
                {this.props.todos.map((todo, index) => (
                    <ToDo key={index} {...todo} onClick={() => this.props.onTodoClick(index)} />
                ))}
            </ul>
        );
    }

    render() {

        return (
            <div>
                {this._renderTodos()}
            </div>
        );
    }
}