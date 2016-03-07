import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './index.css'
const { red, green, blue } = styles

const Greetings = ({ children, className }) => <h1 className={ className }>
  Hello, { children }!
</h1>

const App = ({ children }) => <div>
  <h1>Name list:</h1>
  { children }
</div>

render(
  <App>
    <ul>
      <li><Greetings className={ red }>Fred</Greetings></li>
      <li><Greetings className={ green }>Tom</Greetings></li>
      <li><Greetings className={ blue }>Jerry</Greetings></li>
    </ul>
  </App>,
  document.getElementById('root'))