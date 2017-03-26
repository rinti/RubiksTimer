import React, { Component } from 'react'
import formatSeconds from './utils'

class RubikTimesList extends Component {
  formatDate(date) {
    // some dumb implementation for now
    if(!date) { return '' }
    if(typeof(date) === 'string') {
      return date.substring(0, 10)
    }
    return date.toJSON().substring(0, 10)
  }
  render() {
    return (
        <div>
        {this.props.times.map((time, i) => {
            let first = (i === 0) ? "first" : ""
            return (
              <div className={"Rubiks-timer-time-list " + first} key={i.toString()}>
                {this.formatDate(time.when)}: {formatSeconds(time.passedTime)}
              </div>
            )
          })
        }
        </div>
    )
  }
}

export default RubikTimesList
