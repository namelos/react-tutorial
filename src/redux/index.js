import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import counter from './counter'

export default combineReducers({
  routing,
  counter
})

export { increment, decrement } from './counter'