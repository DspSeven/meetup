import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import HomePage from './components/HomePage/home'
import RegisterPage from './components/RegisterPage/register'
import './App.css'
import MeetupContext from './content/MeetupContext/muc'
import NotFound from './components/NotFound/notFound'
// These are the lists used in the application. You can move them to any component needed.

// Replace your code here

class App extends Component {
  state = {
    personName: '',
    topicName: '',
  }

  enterBothNames = (personName, topicName) => {
    console.log('hi')
    this.setState({personName, topicName})
    return <Redirect to="/" />
  }

  render() {
    const {personName, topicName} = this.state
    return (
      <MeetupContext.Provider
        value={{
          personName,
          topicName,
          enterBothNames: this.enterBothNames,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <NotFound />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}
export default App
