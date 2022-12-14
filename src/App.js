import React, { Component } from 'react'
import uniqid from 'uniqid'
import Overview from './components/Overview'

class App extends Component {
  constructor() {
    super()

    this.state = {
      taskTitle: {
        text: '',
        id: uniqid(),
      },
      tasksArray: [],
    }

    this.handleTaskChange = this.handleTaskChange.bind(this)
    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  handleTaskChange(e) {
    this.setState({
      taskTitle: {
        text: e.target.value,
        id: this.state.taskTitle.id,
      },
    })
  }

  addTask() {
    const task = this.state.taskTitle
    if (!task.text) return
    this.setState({
      tasksArray: [...this.state.tasksArray, task],
      taskTitle: {
        text: '',
        id: uniqid(),
      },
    })
  }

  removeTask(id) {
    const newArray = this.state.tasksArray.filter(task => task.id !== id)
    this.setState({
      tasksArray: newArray,
    })
  }

  render() {
    const { taskTitle, tasksArray } = this.state

    return (
      <div className='App'>
        <input
          type='text'
          placeholder='Task Title'
          value={taskTitle.text}
          onChange={this.handleTaskChange}
        />
        <button onClick={this.addTask}>Submit</button>
        <Overview tasks={tasksArray} removeTask={this.removeTask} />
      </div>
    )
  }
}

export default App
