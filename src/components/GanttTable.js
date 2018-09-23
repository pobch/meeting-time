import React, { Component } from 'react'

class GanttTable extends Component {
  state = {
    startDate: null,
    endDate: null,
    daysArray: [],
    hoursArray: []
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.daysArray !== this.state.daysArray) {
      const { daysArray } = this.state
      let hoursArray = []
      daysArray.forEach( dayStr => {
        const twentyFourHours = [...Array(24).keys()].map(num => `${dayStr}|${num}`)
        hoursArray = [...hoursArray, ...twentyFourHours]
      })
      this.setState({
        hoursArray
      })
    }
  }

  handleStartDateChange = date => {
    this.setState(prevState => {
      return {
        startDate: date,
        daysArray: this.calculateDaysFromStartToEnd(date, prevState.endDate)
      }
    })
  }

  handleEndDateChange = date => {
    this.setState(prevState => {
      return {
        endDate: date,
        daysArray: this.calculateDaysFromStartToEnd(prevState.startDate, date)
      }
    })
  }

  calculateDaysFromStartToEnd = (startDate, endDate) => {
    if(!startDate || !endDate) { return [] }

    const daysArray = [];
    let currentDate = startDate.clone()
    while (currentDate <= endDate) {
        daysArray.push( currentDate.format('YYYY-MM-DD') )
        currentDate = currentDate.add(1, 'days')
    }
    return daysArray
  }

  render() {
    const { startDate, endDate, daysArray, hoursArray } = this.state
    return (
      <div>
        {this.props.children(
          startDate,
          this.handleStartDateChange,
          endDate,
          this.handleEndDateChange,
          daysArray,
          hoursArray
        )}
      </div>
    )
  }
}

export default GanttTable
