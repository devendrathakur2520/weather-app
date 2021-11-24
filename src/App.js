import React from 'react'
import { Route,  Link, BrowserRouter as Router } from 'react-router-dom'
import { Switch } from 'react-router-dom'
//import { Button } from 'react-bootstrap';
import {Login} from './components/Login.js'
import LoginConform from './loginConform.js'
//import {LoginConform} from './loginConform.js'
const App = () => (
  <div>
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to='/Login.js'>Home</Link>
            </li>
            
      
          </ul>
        </nav>
        <Switch>

          <Route exact path='/Login.js'>
            <Login/>
          </Route>

          <Route path='/loginConform.js'>
            <LoginConform/>
          </Route>


        </Switch>

      </div>
    </Router>




  </div>
)

export default App