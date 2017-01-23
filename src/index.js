import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { CounterApp } from './container/CounterApp'
import { counter } from './module/counter'

const store = createStore(counter)

render(
  <Provider store={store}>
    <CounterApp />
  </Provider>, document.querySelector('#app'))
