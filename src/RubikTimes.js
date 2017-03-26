import React, { Component } from 'react'
import RubikTimesBlobs from './RubikTimesBlobs'

class RubikTimes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 0
    }
  }
  render() {
    return (
      <div>
        <div className="Rubiks-timer-view-switcher">
          <button onClick={this.changeViewToBlobs}>Blobs</button>
          <button onClick={this.changeViewToList}>List</button>
        </div>
        <div className="Rubiks-timer-times">
          <RubikTimesBlobs times={this.props.times} />
        </div>
      </div>
    )
  }
}

export default RubikTimes
