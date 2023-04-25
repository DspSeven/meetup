import React from 'react'

const MeetupContext = React.createContext({
  personName: '',
  topicName: '',
  enterBothNames: () => {},
})
export default MeetupContext
