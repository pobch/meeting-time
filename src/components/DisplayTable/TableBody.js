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
          timeAdd: new Date(),
          name: '',
          freeTime: this.props.hoursArray.map(dateHourStr => ({ dateHour: dateHourStr, free: false }))
        }
      ]
      return { data: newData }
    })
  }

  onClickDel = (rowIdx) => (event) => {
    this.setState(prevState => {
      return {
        data: prevState.data.slice(0, rowIdx).concat(prevState.data.slice(rowIdx + 1))
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
            <input type="text" value={row.name} />
          </td>
          {row.freeTime.map(hour => {
            return <td key={hour.dateHour}><input type="checkbox" checked={hour.free}/></td>
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
