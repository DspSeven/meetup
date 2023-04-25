import {Link} from 'react-router-dom'
import {Component} from 'react'
import MeetupContext from '../../content/MeetupContext/muc'

class HomePage extends Component {
  initialPage = () => {
    console.log('')
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
        <div>
          <h1>Welcome to Meetup</h1>
          <p>Please register for the topic</p>
          <Link to="/register">
            <button type="button">Register</button>
          </Link>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      </div>
    )
  }

  userPage = (personName, topicName) => {
    console.log('')
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
        <div>
          <h1>Hello {personName}</h1>
          <p>Welcome to {topicName}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <MeetupContext.Consumer>
        {value => {
          const {personName, topicName} = value
          const status = personName !== '' && topicName !== ''
          return (
            <div>
              {status
                ? this.userPage(personName, topicName)
                : this.initialPage()}
            </div>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}
export default HomePage
