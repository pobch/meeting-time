import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const CreateTable = props => {
  console.log(props)
  return (
    <div>
      <h3>Create Table !!</h3>
      <div>
        Start Date :
        <DatePicker 
          selected={props.startDate}
          onChange={props.handleChange}
          dateFormat="DD/MM/YYYY"
        />
      </div>
    </div>
  )
}

export default CreateTable
