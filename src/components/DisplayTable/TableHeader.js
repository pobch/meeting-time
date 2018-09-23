import React, { Component } from 'react'

class TableHeader extends Component {
  renderDays = () => {
    const { daysArray } = this.props
    return daysArray.map(dayStr => {
      return <th key={dayStr} colSpan="24">{dayStr}</th>
    })
  }

  renderHours = () => {
    const { hoursArray } = this.props
    return hoursArray.map(hourStr => <th key={hourStr}>{hourStr.replace(/.*\|/ig, '')}</th>)
  }

  render() {
    return (
      <thead>
        <tr>
          <th rowSpan="2">Name</th>
          {this.renderDays()}
        </tr>
        <tr>
          {this.renderHours()}
        </tr>
      </thead>
    )
  }
}

export default TableHeader
