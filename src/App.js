import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Dashboard from './Dashboard.js'
import { Login } from './components/Login.js';
const App = () => (
  <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/Login'>Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>

          <Route exact path='/Login'>
            <Login />
          </Route>

          <Route path='/Dashboard'>
            <Dashboard />
          </Route>


        </Switch>

      </div>
    </Router>

  </div>

)

export default App