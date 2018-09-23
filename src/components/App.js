import React from 'react'
import GanttTable from './GanttTable'
import TableWrapper from './DisplayTable/TableWrapper'
import TableHeader from './DisplayTable/TableHeader'
import TableBody from './DisplayTable/TableBody'
import CreateTable from './CreateTable'

export default () => (
  <GanttTable>
    {(startDate, handleStartDateChange, endDate, handleEndDateChange, daysArray, hoursArray) => {
      return (
        <React.Fragment>
          <TableWrapper>
            <TableHeader
              daysArray={daysArray}
              hoursArray={hoursArray}
            />
            <TableBody />
          </TableWrapper>
          <CreateTable
            startDate={startDate}
            handleStartDateChange={handleStartDateChange}
            endDate={endDate}
            handleEndDateChange={handleEndDateChange}
          />
        </React.Fragment>
      )
    }}
  </GanttTable>
)
