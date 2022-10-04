import React from 'react'

const Overview = props => {
  return (
    <ul>
      {props.tasks.map(task => {
        return <li key={task.id}>{task.text}</li>
      })}
    </ul>
  )
}

export default Overview
