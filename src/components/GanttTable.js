import React, { Component } from 'react'
import moment from 'moment'

class GanttTable extends Component {
  state = {
    startDate: moment()
  }

  handleChange = date => {
    this.setState({
      startDate: date
    })
  }

  render() {
    const { startDate } = this.state
    return (
      <div>
        {this.props.children(startDate, this.handleChange)}
      </div>
    )
  }
}

export default GanttTable
