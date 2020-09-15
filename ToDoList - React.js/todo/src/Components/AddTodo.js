import React, { Component } from 'react'

export default class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ''
        }
    }

    onSubmit = (e) =>  {
        e.preventDefault();

        this.props.addTask(this.state.task);
        this.setState({ task: '' });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <form onSubmit = { this.onSubmit }>
                    <div className="todoWrapper">
                        <input className="addTodo" required minLength = "3"  onChange = { this.onChange } value = { this.state.task } name = "task" type = "text" />
                        <input className="btn-sub btn" type = "submit" value = "ADD"/>
                    </div>
                </form>
            </div>
        )
    }
}
