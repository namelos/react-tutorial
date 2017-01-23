import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Counter } from '../component/Counter'
import { increment, decrement } from '../module/counter'

const mapState = state => ({ num: state })
const mapDispatch = dispatch =>
  bindActionCreators({ increment, decrement }, dispatch)

export const CounterApp = connect(
  mapState,
  mapDispatch
)(Counter)