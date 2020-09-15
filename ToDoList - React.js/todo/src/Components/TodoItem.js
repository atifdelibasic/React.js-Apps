import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    setStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none',
            fontSize:'15px'
        }
    }
    render() {
        const { id, task } = this.props.todo;
        return (
            <div className="row">
                <div className="item"><input type="checkbox" checked = { this.props.todo.completed } onChange={ this.props.markComplete.bind(this, id)}/></div>
                <div className="item" style = {{ textDecoration: this.props.todo.completed? 'line-through': 'none' }}>{ task }</div>
                <div className="item"><input type="button" value="Remove" className="btn-remove btn" onClick = { this.props.removeTask.bind(this, id) }/></div>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
