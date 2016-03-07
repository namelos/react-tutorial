import React from 'react'
import { render } from 'react-dom'
import { createStore, bindActionCreators, applyMiddleware, compose } from 'redux'
import { connect, Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Devtools } from './containers'
import { get } from 'axios'

const initialState = {
  name: '',
  email: '',
  address: '',
  json: {}
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST':
      return { ...state, isFetching: true }
    case 'RECEIVE':
      const data = action.data
      const { name, email, address } = data
      return { ...state, name, email, address, isFetching: false }
    case 'CHANGE_NAME':
      return { ...state, name: action.name }
    default:
      return state
  }
}

const changeName = name => ({ type: 'CHANGE_NAME', name })

const fetch = name => dispatch => {
  dispatch({ type: 'REQUEST' })
  get(`/api?name=${ name }`)
    .then(res => res.data)
    .then(data => dispatch({ type: 'RECEIVE', data }))
}

/* --- */

const store = compose(applyMiddleware(thunk), Devtools.instrument())(createStore)(counter)

/* --- */

const mapState = ({ name, email, address, isFetching }) => ({ name, email, address, isFetching })

const mapAction = dispatch => bindActionCreators({ changeName, fetch }, dispatch)

const Form = ({ name, email, address, changeName, fetch, isFetching }) =>
  <div>
    { isFetching ?
      <h1>Loading...</h1> : <ul>
      <li><h1>name: { name }</h1></li>
      <li><h1>email: { email }</h1></li>
      <li><h1>address: { address }</h1></li>
    </ul> }
    <label>name:</label>
    <input onChange={ e => changeName(e.target.value) } type="input"/>
    <button onClick={ e => fetch(name) }>SEND REQUEST</button>
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