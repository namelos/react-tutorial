import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'

const Home = () => <div>
  <h1>This is Home Page</h1>
</div>

const About = () => <div>
  <h1>This is About Page</h1>
</div>

const Help = () => <div>
  <h1>This is Help Page</h1>
</div>

const App = ({ children }) => <div>
  <h1>My Whole App</h1>
  <ul>
    <li><Link to='/' >Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/help'>Help</Link></li>
  </ul>
  { children }
</div>

render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/help" component={ Help } />
    </Route>
  </Router>,
  document.getElementById('root'))