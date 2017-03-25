import React, { Component } from 'react'
import formatSeconds from './utils'

class RubikTimes extends Component {
  render() {
    return (
      <div className="Rubiks-timer-times">
        {this.props.times.map((time, i) => {
            var first = (i === 0) ? "first" : ""
            return (
              <span className={"Rubiks-timer-time " + first} key={i.toString()}>
                {formatSeconds(time.passedTime)}
              </span>
            )
          })
        }
      </div>
    )
  }
}

export default RubikTimes
