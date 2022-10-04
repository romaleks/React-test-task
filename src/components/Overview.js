import React, { Component } from 'react'

class Overview extends Component {
  render() {
    return this.props.tasks.map((task, index) => {
      return <li key={index}>{task}</li>
    })
  }
}

export default Overview
