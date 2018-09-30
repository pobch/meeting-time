import React from 'react'
import './Table.css'

const TableWrapper = props => {
  const { onClickAdd } = props
  return (
    <div className="overFlow">
      <h3>Display Table</h3> 
      <button type="button" onClick={onClickAdd}>Add</button>
      <table className="table-header-rotated">
        <tbody>
          {props.children}
        </tbody>
      </table>
    </div>
  )
}

export default TableWrapper
