import React, { Component } from 'react'
import './todo.css'


class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
        items: [],
        text: '',
    }
  }

  render() {
    var buttonTitle = '添加第 ' + (this.state.items.length + 1) + ' 个 todo'
    return (
      <div className="todo-div">
        <h2>TODO</h2>
        <TodoList todos={this.state.items} />
        <div>
          <input onChange={this.handleChange} value={this.state.text} placeholder="输入事项" />
          <button onClick={this.handleSubmit}>{buttonTitle}</button>
        </div>
      </div>
    )
  }

  handleChange(event) {
    var state = {
      text: event.target.value
    }
    this.setState(state)
  }

  handleSubmit = (e) => {
    var i = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState((prevState) => {
      return {
          items: prevState.items.concat(i),
          text: ''
      }
    })
  }
}


class TodoList extends React.Component {
  render() {
      var todos = this.props.todos
    return (
      <ul>
      {todos.map(t => {
          return (
              <li key={t.id}>{t.text}</li>
          )
      })}
      </ul>
    )
  }
}

export default TodoApp
