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

const RegisterPage = () => {
  console.log('')
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
        <form>
          <h1>Let us Join</h1>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" placeholder="Your name" />
          <br />
          <label htmlFor="topics">TOPICS</label>
          <br />
          <select id="topics">
            {topicsList.map(topic => (
              <option key={topic.id} value={topic.id}>
                {topic.displayText}
              </option>
            ))}
          </select>
          <br />
          <button type="button">Register now</button>
        </form>
      </div>
    </div>
  )
}
export default RegisterPage
