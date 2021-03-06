import React, { Component } from 'react';
import './App.css'
import { AddTodo, Todos, Header } from './Components'
import { v4 as uuidv4 } from 'uuid'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos : []
    }
  }

  componentDidMount() {
    this.getLocalStorage();
  }
  
// Toggle Complete  
  markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }) 
      }, () => {
        this.setLocalStorage();
      });
    }

// Remove Task
  removeTask = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)}, () => this.setLocalStorage());
  }

// Add Task
  addTask = (title) => {
    const newTodo = {
      id: uuidv4(),
      task: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] }, () => this.setLocalStorage());
  }

  // Get data 
  getLocalStorage () {
   let list = localStorage.getItem("todos");
   this.setState({ todos: list? JSON.parse(list): [] });
  }

  // Set data 
  setLocalStorage () {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render() {
    const { todos } = this.state;
  return (
    <div className="container">
      <Header /> 
        <AddTodo addTask = { this.addTask }/>
        <Todos todos = { todos } 
          markComplete = { this.markComplete } 
          removeTask = { this.removeTask } />
    </div>
  );
}
}

