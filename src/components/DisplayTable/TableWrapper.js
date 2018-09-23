import React from 'react'

const DisplayTable = props => {
  return (
    <div>
      <h3>Display Table</h3>
      <table>
        {props.children}
      </table>
    </div>
  )
}

export default DisplayTable
