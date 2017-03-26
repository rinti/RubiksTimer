import React, { Component } from 'react'
import formatSeconds from './utils'

class RubikTimesBlobs extends Component {
  render() {
    return (
        <div>
        {this.props.times.map((time, i) => {
            let first = (i === 0) ? "first" : ""
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

export default RubikTimesBlobs
