import React from 'react'
import GanttTable from './GanttTable'
import TableWrapper from './table/TableWrapper'
import TableData from './table/TableData'
import CreateTable from './CreateTable'

export default () => (
  <GanttTable>
    { (
        startDate,
        handleStartDateChange,
        endDate,
        handleEndDateChange,
        daysArray,
        hoursArray,
        data,
        onClickAdd,
        onClickDel,
        onClickSave,
        onClickEdit,
        onChangeName,
        onChangeChecked,
        onChange6hoursChecked
      ) => {
      return (
        <React.Fragment>
          <TableWrapper onClickAdd={onClickAdd}>
            <TableData
              daysArray={daysArray}
              hoursArray={hoursArray}
              data={data}
              onClickDel={onClickDel}
              onClickSave={onClickSave}
              onClickEdit={onClickEdit}
              onChangeName={onChangeName}
              onChangeChecked={onChangeChecked}
              onChange6hoursChecked={onChange6hoursChecked}
            />
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
