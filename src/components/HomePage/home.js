import {Link} from 'react-router-dom'

const HomePage = () => {
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
export default HomePage
