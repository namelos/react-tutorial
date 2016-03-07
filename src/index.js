import React, { Component } from 'react'
import { render } from 'react-dom'

class Greetings extends Component {
  state = { name: 'world' };

  handleChange = e =>
    this.setState({ name: e.target.value })

  render = () => <div>
    <input type="text" onChange={ this.handleChange } />
    <h1>hello, { this.state.name }</h1>
  </div>
}

render(<Greetings />, document.getElementById('root'))