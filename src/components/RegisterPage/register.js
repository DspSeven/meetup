import {Component} from 'react'
import MeetupContext from '../../content/MeetupContext/muc'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterPage extends Component {
  state = {
    personName: '',
    topicName: topicsList[0].id,
    errorStatus: '',
  }

  enterYourName = event => {
    this.setState({personName: event.target.value})
  }

  enterYourTopic = event => {
    console.log(event.target.value)
  }

  registerNow = () => {
    const {personName, topicName} = this.state
    if (personName !== '' && topicName !== '') {
      this.setState({errorStatus: true})
    } else {
      this.setState({errorStatus: false})
    }
  }

  render() {
    return (
      <MeetupContext.Consumer>
        {value => {
          const {enterBothNames} = value
          const {errorStatus, personName, topicName} = this.state
          console.log(errorStatus)
          return (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <form onSubmit={this.registerNow}>
                  <h1>Let us Join</h1>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    onChange={this.enterYourName}
                  />
                  <br />
                  <label htmlFor="topics">TOPICS</label>
                  <br />
                  <select id="topics" onChange={this.enterYourTopic}>
                    {topicsList.map(topic => (
                      <option key={topic.id} value={topic.id}>
                        {topic.displayText}
                      </option>
                    ))}
                  </select>
                  <br />
                  <button type="submit">Register now</button>
                  {errorStatus ? (
                    enterBothNames(personName, topicName)
                  ) : (
                    <p>Please enter your name</p>
                  )}
                </form>
              </div>
            </div>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}
export default RegisterPage
