import React, { Component } from 'react'
import {ResponsiveContainer, BarChart, Bar, Cell} from 'recharts'

class RubikCharts extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <BarChart height={100} data={this.props.data}>
          <Bar dataKey="passedTime" fill="#ad3957" isAnimationActive={false}>
              {
                this.props.data.map((item, i) => {
                  return (<Cell key={`test{i}`} fill="#ad3957" />)
                })
              }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

export default RubikCharts;
