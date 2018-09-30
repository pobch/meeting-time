import React, { Component } from 'react'

class TableData extends Component {
  render() {
    const { 
      hoursArray, data, onClickDel, onClickSave, onChangeName,
      onClickEdit, onChangeChecked, onChange6hoursChecked
    } = this.props
    return [
      <tr key="column-header">
        <th className="rotate" colSpan="2"></th>
        {data.map((col, colIdx) => {
          return (
            <React.Fragment key={col.timeAdd}>
              <th className="rotate">
                {col.isEditing
                  ? <React.Fragment>
                      <div>
                        <span>
                          <button type="button" onClick={onClickDel(colIdx)}>-</button>
                          <button type="button" onClick={onClickSave(colIdx)}>S</button>
                          <input type="text" value={col.name} onChange={onChangeName(colIdx)} />
                        </span>
                      </div>
                    </React.Fragment>
                  : <React.Fragment>
                      <div>
                        <span>
                          <button type="button" onClick={onClickEdit(colIdx)}>E</button>
                          <input type="text" value={col.name} onChange={onChangeName(colIdx)} disabled />
                        </span>
                      </div>
                    </React.Fragment>
                }
              </th>
              {col.isEditing && <th></th>}
            </React.Fragment>
          )
        })}
      </tr>
    ].concat(  
      [...Array(hoursArray.length).keys()].map(rowIdx => {
        return (
          <tr key={hoursArray[rowIdx]} className={Math.floor(rowIdx/24) % 2 === 1 ? 'odd' : ''}>
            {rowIdx % 24 === 0 && 
              <th className="row-header" rowSpan="24">
                <div>
                  {hoursArray[rowIdx].replace(/\|.*/ig, '')}
                </div>
              </th>
            }
            <td>{hoursArray[rowIdx].replace(/.*\|/ig, '')}</td>
            {data.map((col, colIdx) => {
              return (
                <React.Fragment key={col.timeAdd}>
                  <td className={(!col.isEditing && col.freeTime[rowIdx] && col.freeTime[rowIdx].free) ? 'green' : ''}>
                    <input
                      type="checkbox"
                      checked={col.freeTime[rowIdx] && col.freeTime[rowIdx].free}
                      onChange={onChangeChecked(colIdx, rowIdx)}
                      disabled={!col.isEditing}
                    />
                  </td>
                  {col.isEditing && rowIdx % 6 === 0 &&
                    <td rowSpan="6">
                      <input
                        type="checkbox"
                        checked={
                          col.freeTime.slice(rowIdx, rowIdx + 6).filter(({free}) => free).length === 6
                        }
                        onChange={onChange6hoursChecked(colIdx, rowIdx, rowIdx + 5)}
                      />
                    </td>
                  }
                </React.Fragment>
              )
            })}
          </tr>
        )
      })
    )
  }
}

export default TableData
