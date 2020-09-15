import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class Todos extends Component {
    tableBody() {
        return this.props.todos.map( todo => <TodoItem  key = { todo.id } todo = { todo } markComplete = { this.props.markComplete }
            removeTask = { this.props.removeTask } />)
    }
    render() {
    return(
        <div className="todos">
        <div className="thead">
            <div className="row">
                <div className="item">#</div>
                <div className="item">Description</div>
                <div className="item">Remove</div>
            </div>
        </div>
            <div className="tbody">
                {
                    this.tableBody()
                }
            </div>
        </div>
    )
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
