import React from 'react'

const DisplayTable = props => {
  return (
    <div>
      <h3>Display Table</h3>
      <table>
        <thead>
          <tr>
            <th rowSpan={2}>Name</th>
            <th colSpan={5}>Sep 12</th>
            <th colSpan={5}>Sep 13</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pob</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Dip</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DisplayTable
