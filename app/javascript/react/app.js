import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={WelcomeContainer}/>
    </Router>
  )
}

export default App
