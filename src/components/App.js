import React from 'react'
import GanttTable from './GanttTable'
import DisplayTable from './DisplayTable'
import CreateTable from './CreateTable'

export default () => (
  <GanttTable>
    {(startDate, handleChange) => {
      return (
        <React.Fragment>
          <DisplayTable />
          <CreateTable startDate={startDate} handleChange={handleChange} />
        </React.Fragment>
      )
    }}
  </GanttTable>
)
