import React, { Component } from 'react';

let interval = null
const TIMES_KEY = 'rubiks_times'

class RubikTimer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isStarted: false,
      timeStarted: null,
      timePassed: 0,
      times: []
    }

    this.playPause = this.playPause.bind(this)
  }

  componentDidMount() {
    let times = localStorage.getItem(TIMES_KEY)
    if(times) {
      this.setState((prevState) => {
        return {
          times: JSON.parse(times)
        }
      })
    }
  }

  _updateTimer() {
    this.setState((prevState) => {
      return {
        timePassed: ((new Date().getTime() - prevState.timeStarted.getTime()) / 1000).toFixed(1)
      }
    })
  }

  _formatSeconds(secs) {
    const minutes = Math.floor(secs / 60)
    const seconds = (secs - minutes * 60).toFixed(1)
    let ret = `${seconds}s`
    if (minutes) {
      ret = `${minutes}m ${seconds}s`
    }
    return ret
  }

  playPause() {
    if(!this.state.isStarted) {
      this.setState((prevState) => {
        return {
          isStarted: true,
          timeStarted: new Date()
        }
      })
      interval = setInterval(this._updateTimer.bind(this), 100)
    } else {
      clearInterval(interval);
      this.setState((prevState) => {
        let times = prevState.times
        times.unshift(prevState.timePassed)
        localStorage.setItem(TIMES_KEY, JSON.stringify(times))
        return {isStarted: false, timePassed: 0, timeStarted: null}
      } )
    }
  }

  render() {
    return (
        <div className="Rubiks-timer">
          <div className="Rubiks-timer-text">{this._formatSeconds(this.state.timePassed)}</div>
          <button onClick={this.playPause}>Press space to start/stop</button>
          <div className="Rubiks-timer-times">
            {this.state.times.map((time, i) => {
                var first = (i === 0) ? 'first' : ''
                return (
                  <span className={'Rubiks-timer-time ' + first} key={i.toString()}>
                    {this._formatSeconds(time)}
                  </span>
                )
              })
            }
          </div>
        </div>
    );
  }
}

export default RubikTimer;
