import React from 'react'
import { Provider } from 'react-redux'
import { Route, Router, browserHistory } from 'react-router'
import Index, { Basic, Style } from '../views'

export default store =>
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ Index }>
        <Route path="counter" component={ Basic } />
        <Route path="style" component={ Style } />
      </Route>
    </Router>
  </Provider>
