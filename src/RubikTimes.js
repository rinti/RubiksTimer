import React, { Component } from 'react'
import RubikTimesBlobs from './RubikTimesBlobs'
import RubikTimesList from './RubikTimesList'

class RubikTimes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 0
    }

    this.changeViewToBlobs = this.changeViewToBlobs.bind(this)
    this.changeViewToList = this.changeViewToList.bind(this)
  }

  changeViewToBlobs() {
    this.setState({view: 0})
  }

  changeViewToList() {
    this.setState({view: 1})
  }

  render() {
    return (
      <div>
        <div className="Rubiks-timer-view-switcher">
          <button onClick={this.changeViewToBlobs}>Blobs</button>
          <button onClick={this.changeViewToList}>List</button>
        </div>
        <div className="Rubiks-timer-times">
          {this.state.view === 0 ? <RubikTimesBlobs times={this.props.times} /> : <RubikTimesList times={this.props.times} />}
        </div>
      </div>
    )
  }
}

export default RubikTimes
