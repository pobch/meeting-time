import React, { Component } from 'react'

class GanttTable extends Component {
  state = {
    startDate: null,
    endDate: null,
    daysArray: [],
    hoursArray: [],
    data: []
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.daysArray !== this.state.daysArray) {
      const { daysArray } = this.state
      let hoursArray = []
      daysArray.forEach( dayStr => {
        const twentyFourHours = [...Array(24).keys()].map(num => `${dayStr}|${('0' + num).slice(-2)}`)
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

  onClickAdd = () => {
    this.setState(prevState => {
      const newData = [
        ...prevState.data,
        {
          isEditing: true,
          timeAdd: new Date().getTime(),
          name: '',
          freeTime: prevState.hoursArray.map(dateHourStr => ({ dateHour: dateHourStr, free: false }))
        }
      ]
      return { data: newData }
    })
  }

  onClickDel = (dataIdx) => () => {
    this.setState(prevState => {
      return {
        data: prevState.data.slice(0, dataIdx).concat(prevState.data.slice(dataIdx + 1))
      }
    })
  }

  onClickSave = (dataIdx) => () => {
    this.setState(prevState => {
      const newData = [...prevState.data]
      newData[dataIdx].isEditing = false
      return {
        data: newData
      }
    })
  }

  onClickEdit = (dataIdx) => () => {
    this.setState(prevState => {
      const newData = [...prevState.data]
      newData[dataIdx].isEditing = true
      return {
        data: newData
      }
    })
  }

  onChangeName = (dataIdx) => (event) => {
    const value = event.target.value
    this.setState(prevState => {
      const newData = [...prevState.data]
      newData[dataIdx].name = value
      return {
        data: newData
      }
    })
  }

  onChangeChecked = (dataIdx, freeTimeIdx) => (event) => {
    const checked = event.target.checked
    this.setState(prevState => {
      const newData = [...prevState.data]
      newData[dataIdx].freeTime[freeTimeIdx].free = checked
      return {
        data: newData
      }
    })
  }

  render() {
    const { startDate, endDate, daysArray, hoursArray, data } = this.state
    return (
      <div>
        {this.props.children(
          startDate,
          this.handleStartDateChange,
          endDate,
          this.handleEndDateChange,
          daysArray,
          hoursArray,
          data,
          this.onClickAdd,
          this.onClickDel,
          this.onClickSave,
          this.onClickEdit,
          this.onChangeName,
          this.onChangeChecked
        )}
      </div>
    )
  }
}

export default GanttTable
