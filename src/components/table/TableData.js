import React, { Component } from 'react'

class TableData extends Component {
  // renderDays = () => {
  //   const { daysArray } = this.props
  //   return daysArray.map(dayStr => {
  //     return <th key={dayStr} colSpan="24">{dayStr}</th>
  //   })
  // }

  // renderHours = () => {
  //   const { hoursArray } = this.props
  //   return hoursArray.map(hourStr => <th key={hourStr}>{hourStr.replace(/.*\|/ig, '')}</th>)
  // }

  render() {
    const { hoursArray, data, onClickDel, onClickSave, onChangeName, onClickEdit, onChangeChecked } = this.props
    return [
      <tr>
        <th colSpan="2">Name</th>
        {data.map((col, colIdx) => {
          return (
            <td>
              { col.isEditing
                ? <React.Fragment>
                    <button type="button" onClick={onClickDel(colIdx)}>-</button>
                    <button type="button" onClick={onClickSave(colIdx)}>S</button>
                    <input type="text" value={col.name} onChange={onChangeName(colIdx)} />
                  </React.Fragment>
                : <React.Fragment>
                    <button type="button" onClick={onClickEdit(colIdx)}>E</button>
                    <input type="text" value={col.name} onChange={onChangeName(colIdx)} disabled />
                  </React.Fragment>
              }
            </td>
          )
        })}
      </tr>
    ].concat(  
      [...Array(hoursArray.length).keys()].map(rowIdx => {
        return (
          <tr>
            { rowIdx % 25 === 0
              ? <th rowSpan="24">{hoursArray[rowIdx].replace(/\|.*/ig, '')}</th>
              : <th></th>
            }
            <td>{hoursArray[rowIdx].replace(/.*\|/ig, '')}</td>
            {data.map((col, colIdx) => {
              return (
                <td>
                  <input
                    type="checkbox"
                    checked={col.freeTime[rowIdx] && col.freeTime[rowIdx].free}
                    onChange={onChangeChecked(colIdx, rowIdx)}
                    disabled={!col.isEditing}
                  />
                </td>
              )
            })}
          </tr>
        )
      })
    )
    // (
    //   <thead>
    //     <tr>
    //       <th rowSpan="2">Name</th>
    //       {this.renderDays()}
    //     </tr>
    //     <tr>
    //       {this.renderHours()}
    //     </tr>
    //   </thead>
    // )
  }
}

export default TableData
