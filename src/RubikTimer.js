import React, { Component } from 'react';

let interval = null;

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

  _updateTimer() {
    this.setState((prevState) => {
      return {
        timePassed: ((new Date().getTime() - prevState.timeStarted.getTime()) / 1000).toFixed(1)
      }
    })
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
        let times = prevState.times;
        times.push(prevState.timePassed)
        return {isStarted: false, timePassed: 0, timeStarted: null}
      } )
    }
  }

  render() {
    return (
        <div className="Rubiks-timer">
          <div className="Rubiks-timer-text">{this.state.timePassed}</div>
          <button onClick={this.playPause}>Press space to start/stop</button>
          <div className="Rubiks-timer-times">
            {this.state.times.map((time, i) => <span className="Rubiks-timer-time" key={i.toString()}>{time}</span>)}
          </div>
        </div>
    );
  }
}

export default RubikTimer;
