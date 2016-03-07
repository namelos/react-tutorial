import React, { Component } from 'react'
import { render } from 'react-dom'

const Greetings = ({ children }) => <h1>
  Hello, { children }!
</h1>

const App = ({ children }) => <div>
  <h1>Name list:</h1>
  { children }
</div>

render(
  <App>
    <ul>
      <li><Greetings>Fred</Greetings></li>
      <li><Greetings>Tom</Greetings></li>
      <li><Greetings>Jerry</Greetings></li>
    </ul>
  </App>,
  document.getElementById('root'))