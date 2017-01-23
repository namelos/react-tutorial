import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import { counter } from './module/counter'

import { App } from './component/App'
import { CounterApp } from './container/CounterApp'

const store = createStore(counter)

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={CounterApp}/>
        </Route>
      </Router>
    </div>
  </Provider>, document.querySelector('#app'))
