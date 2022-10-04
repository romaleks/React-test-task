import React, { Component } from 'react'
import Overview from './components/Overview'

class App extends Component {
  constructor() {
    super()

    this.state = {
      taskTitle: '',
      tasksArray: [],
    }

    this.handleTaskChange = this.handleTaskChange.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  handleTaskChange(ev) {
    this.setState({
      taskTitle: ev.target.value,
    })
  }

  addTask() {
    const task = this.state.taskTitle
    if (!task) return
    this.setState({
      tasksArray: [...this.state.tasksArray, task],
    })
  }

  render() {
    return (
      <div className='App'>
        <input
          type='text'
          placeholder='Task Title'
          value={this.state.taskTitle}
          onChange={this.handleTaskChange}
        />
        <button onClick={this.addTask}>Submit</button>
        <Overview tasks={this.state.tasksArray} />
      </div>
    )
  }
}

export default App
