import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import SundaeIndexContainer from './containers/SundaeIndexContainer'
import SundaeFormContainer from './containers/SundaeFormContainer'
import SundaeDetailsContainer from './containers/SundaeDetailsContainer'

function App() {
  return (
    <div className="App">
      
      <Router>
        <nav className="text-center bg-blue-900 text-yellow-100 p-4">
          <NavLink
            className="inline-block px-4 py-2"
            activeClassName="text-yellow-300"
            exact
            to="/"
          >
            Sundaes
          </NavLink>
          <NavLink
            className="inline-block px-4 py-2"
            activeClassName="text-yellow-300"
            exact
            to="/sundae/new"
          >
            New Sundae
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <SundaeIndexContainer />
          </Route>
            <Route path="/sundae/new">
            <SundaeFormContainer />
          </Route>
          <Route path="/sundaes/:id">
            <SundaeDetailsContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

