import {Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage/home'
import RegisterPage from './components/RegisterPage/register'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/register" component={RegisterPage} />
  </Switch>
)

export default App
