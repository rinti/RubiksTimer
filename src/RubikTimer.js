import React, { Component } from 'react'
import RubikCharts from './RubikCharts'
import RubikClock from './RubikClock'
import RubikTimes from './RubikTimes'

const TIMES_KEY = 'rubiks_times'

class RubikTimer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isStarted: false,
      times: []
    }

    this.playPause = this.playPause.bind(this)
    this._keyDownPlayPause = this._keyDownPlayPause.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this._keyDownPlayPause, false)
    let times = localStorage.getItem(TIMES_KEY)
    if(times) {
      this.setState((prevState) => {
        return {
          times: JSON.parse(times)
        }
      })
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._keyDownPlayPause, false)
  }

  _keyDownPlayPause(event) {
    if(event.code === 'Space') {
      this.playPause()
    }
  }

  playPause() {
    if(!this.state.isStarted) {
      this.setState((prevState) => {
        return {
          isStarted: true
        }
      })
      this.refs.clock.start(performance.now())
    } else {
      let final_time = this.refs.clock.reset()
      this.setState((prevState) => {
        let times = prevState.times
        times.unshift({when: new Date(), passedTime: parseFloat(final_time)})
        localStorage.setItem(TIMES_KEY, JSON.stringify(times))
        return {isStarted: false}
      })
    }
  }

  render() {
    return (
        <div className="Rubiks-timer">
          <RubikClock ref="clock" />
          <button className="Rubiks-timer-button" onClick={this.playPause}>Press space to start/stop</button>
          <div className="Rubiks-timer-chart">
            <RubikCharts data={this.state.times} />
          </div>
          <RubikTimes times={this.state.times} />
        </div>
    );
  }
}

export default RubikTimer;
