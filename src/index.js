import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import { counter } from './module/counter'
import { todos } from './module/todos'

import { App } from './component/App'
import { TodoApp } from './container/TodoApp'
import { CounterApp } from './container/CounterApp'

const store = createStore(
  combineReducers({ counter, todos }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={CounterApp} />
          <Route path="todos" component={TodoApp} />
        </Route>
      </Router>
    </div>
  </Provider>, document.querySelector('#app'))
