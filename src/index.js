import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

const initialState = {
  name: '',
  email: '',
  address: ''
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.name }
    case 'CHANGE_EMAIL':
      return { ...state, email: action.email }
    case 'CHANGE_ADDRESS':
      return { ...state, address: action.address }
    default:
      return state
  }
}

const store = createStore(counter)

store.subscribe(() => {
  const state = store.getState()
  const { name, email, address } = state
  console.log(state)

  render(
    <div>
      <ul>
        <li><h1>name: { name }</h1></li>
        <li><h1>email: { email }</h1></li>
        <li><h1>address: { address }</h1></li>
      </ul>
      <label>name:</label>
      <input onChange={ e => store.dispatch({ type: 'CHANGE_NAME', name: e.target.value }) } type="input"/>
      <label>email:</label>
      <input onChange={ e => store.dispatch({ type: 'CHANGE_EMAIL', email: e.target.value }) } type="input"/>
      <label>address:</label>
      <input onChange={ e => store.dispatch({ type: 'CHANGE_ADDRESS', address: e.target.value }) } type="input"/>
    </div>,
    document.getElementById('root'))
})

store.dispatch({ type: 'Nothing' })
