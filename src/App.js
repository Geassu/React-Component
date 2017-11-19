import React from 'react'
import './App.css'

import Logo from './logo'

import Menu from './menu'
import Message from './message'
import Timer from './timer'
import TodoApp from './todo'
import MarkdownEditor from './editor'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTimer: true,
    }
  }

  render() {
    var timer = this.state.showTimer ? <Timer /> : null
    console.log('timer', this.state.showTimer, timer)
    var menuList = ['Index', 'Classroom', 'Arena', 'Questions']
    return (
      <div className="App">
        <Menu menus={menuList}/>
        <div className="App-header">
          <Logo />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and reload.
        </p>
        <Message name='gua' />
        <Message name='瓜' />
        <button onClick={this.handleToggleTimer}>开关 timer </button>
        {timer}
        <TodoApp />
        <MarkdownEditor />
      </div>
    )
  }

  handleToggleTimer = (e) => {
    var show = !this.state.showTimer
    this.setState({
        showTimer: show
    })
  }
}

export default App
