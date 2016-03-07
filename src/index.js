import React, { Component } from 'react'
import { render } from 'react-dom'

const Greetings = ({ name }) => <h1>
  Hello, { name }!
</h1>

render(<Greetings name="fred" />, document.getElementById('root'))