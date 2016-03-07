import React from 'react'
import { render } from 'react-dom'
import { createStore, bindActionCreators, applyMiddleware, compose } from 'redux'
import { connect, Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Devtools } from './containers'

const initialState = {
  name: '',
  email: '',
  address: ''
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EMAIL':
      return { ...state, name: action.name }
    default:
      return state
  }
}


/* --- */

const store = compose(applyMiddleware(thunk), Devtools.instrument())(createStore)(counter)

/* --- */

const mapState = ({ name, email, address }) => ({ name, email, address })

const mapAction = dispatch => bindActionCreators({}, dispatch)

const Form = ({ name, email, address }) => <div>
  <ul>
    <li><h1>name: { name }</h1></li>
    <li><h1>email: { email }</h1></li>
    <li><h1>address: { address }</h1></li>
  </ul>
  <label>name:</label>
  <input onChange={ e => changeName(e.target.value) } type="input"/>
  <button >SEND REQUEST</button>
</div>

const ConnectedForm = connect(mapState, mapAction)(Form)

render(
  <Provider store={ store }>
    <div>
      <ConnectedForm />
      <Devtools />
    </div>
  </Provider>,
  document.getElementById('root')
)