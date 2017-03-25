import React, { Component } from 'react'
import formatSeconds from './utils'

let interval = null

class RubikClock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isStarted: false,
      timeStarted: null,
      timePassed: 0
    }

    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState((prevState) => {
      return {
        timePassed: ((performance.now() - prevState.timeStarted) / 1000).toFixed(1)
      }
    })
  }

  start(time) {
    this.setState((prevState) => {
      return {
        timeStarted: time
      }
    })
    interval = setInterval(this.tick, 100)
  }

  reset() {
    clearInterval(interval)
    let time = this.state.timePassed;
    this.setState((prevState) => {
      return {
        timeStarted: null,
        timePassed: 0
      }
    })
    return time;
  }

  render() {
    return (
        <div className="Rubiks-timer-text">{formatSeconds(this.state.timePassed)}</div>
    )
  }
}

export default RubikClock;
