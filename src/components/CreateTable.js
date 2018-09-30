import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const CreateTable = props => {
  return (
    <div>
      <h3>Create Table !!</h3>
      <div>
        Start Date :
        <DatePicker 
          selected={props.startDate}
          selectsStart
          startDate={props.startDate}
          endDate={props.endDate}
          onChange={props.handleStartDateChange}
          dateFormat="DD/MM/YYYY"
          withPortal
          isClearable
        />
      </div>
      <div>
        End Date :
        <DatePicker 
          selected={props.endDate}
          selectsEnd
          startDate={props.startDate}
          endDate={props.endDate}
          onChange={props.handleEndDateChange}
          dateFormat="DD/MM/YYYY"
          withPortal
          isClearable
        />
      </div>
    </div>
  )
}

export default CreateTable
