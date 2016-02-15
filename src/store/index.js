import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

export default reducer => {
  const logger = createLogger()
  const routerMiddleware = syncHistory(browserHistory)

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(routerMiddleware, thunk, logger)
    )
  )

  routerMiddleware.listenForReplays(store)
  return store
}