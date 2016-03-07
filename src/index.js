import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

store.subscribe(() => {
  render(
    <div>
      <button onClick={ () => store.dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={ () => store.dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
      <h1>counter: { store.getState() }</h1>
    </div>,
    document.getElementById('root'))
})

store.dispatch({ type: 'Nothing' })
