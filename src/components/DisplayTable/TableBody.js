import React, { Component } from 'react'

class TableBody extends Component {
  state = {
    data: []
  }

  onClickAdd = () => {
    this.setState(prevState => {
      const newData = [
        ...prevState.data,
        {
          isEditing: true,
          timeAdd: new Date().getTime(),
          name: '',
          freeTime: this.props.hoursArray.map(dateHourStr => ({ dateHour: dateHourStr, free: false }))
        }
      ]
      return { data: newData }
    })
  }

  onClickDel = (rowIdx) => () => {
    this.setState(prevState => {
      return {
        data: prevState.data.slice(0, rowIdx).concat(prevState.data.slice(rowIdx + 1))
      }
    })
  }

  onChangeName = (rowIdx) => (event) => {
    const value = event.target.value
    this.setState(prevState => {
      const newData = [...prevState.data]
      newData[rowIdx].name = value
      return {
        data: newData
      }
    })
  }

  onChangeChecked = (rowIdx, hourIdx) => (event) => {
    const checked = event.target.checked
    this.setState(prevState => {
      const newData = [...prevState.data]
      newData[rowIdx].freeTime[hourIdx].free = checked
      return {
        data: newData
      }
    })
  }

  renderRows = () => {
    return this.state.data.map((row, rowIdx) => {
      return (
        <tr key={row.timeAdd}>
          <td>
            <button type="button" onClick={this.onClickDel(rowIdx)}>-</button>
            <button type="button">E</button>
            <input type="text" value={row.name} onChange={this.onChangeName(rowIdx)} />
          </td>
          {row.freeTime.map((hour, hourIdx) => {
            return (
              <td key={hour.dateHour}>
                <input type="checkbox" checked={hour.free} onChange={this.onChangeChecked(rowIdx, hourIdx)} />
              </td>
            )
          })}
        </tr>
      )
    })
  }

  render() {
    return (
      <tbody>
        {this.renderRows()}
        <tr>
          <td>
            <button type="button" onClick={this.onClickAdd}>Add</button>
          </td>
        </tr>
      </tbody>
    )
  }
}

export default TableBody
