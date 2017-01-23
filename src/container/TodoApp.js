import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../module/todos'
import { Todos } from '../component/Todos'

const mapState = ({ todos }) => ({ todos })
const mapDispatch = dispatch => bindActionCreators({ addTodo, removeTodo }, dispatch)

export const TodoApp = connect(
  mapState,
  mapDispatch
)(Todos)