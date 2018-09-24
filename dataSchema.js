[
  // start first row
  {
    "isEditing": false, // indicate edit mode
    "timeAdd": new Date(), // use as 'key' props
    "name": "Pob", // first column
    "freeTime": [
      { // second column
        "dateHour": "2017-08-03|0", // startDate|startHour
        "free": false
      },
      { // third column
        "dateHour": "2017-08-03|1",
        "free": true
      },
      { // 4th column
        "dateHour": "2017-08-03|2",
        "free": true
      },
      { // 5th column
        "dateHour": "2017-08-03|3", // endDate|endHour
        "free": false
      }
    ]
  }, // end of first row
  // start second row
  {
    "isEditing": false,
    "timeAdd": new Date(),
    "name": "Dip",
    "freeTime": [
      {
        "dateHour": "2017-08-03|0", // the same startDate|startHour
        "free": false
      },
      {
        "dateHour": "2017-08-03|1",
        "free": false
      },
      {
        "dateHour": "2017-08-03|2",
        "free": true
      },
      {
        "dateHour": "2017-08-03|3", // the same endDate|endHour
        "free": true
      }
    ]
  }
]
