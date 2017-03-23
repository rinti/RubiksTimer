import React, { Component } from 'react'
import {ResponsiveContainer, BarChart, Bar} from 'recharts'

class RubikCharts extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <BarChart height={100} data={this.props.data}>
          <Bar dataKey="passedTime" fill="#ad3957" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

export default RubikCharts;
