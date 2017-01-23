import test from 'ava'
import { todos, addTodo, removeTodo } from '../../module/todos'

test('todos should be empty when init', t => {
  const actual = todos(undefined, { type: 'unrelated' })
  t.deepEqual(actual, [])
})

test('should add a new todo in list when add todo', t => {
  const actual = todos([], addTodo('my first todo'))
  t.deepEqual(actual, [{ text: 'my first todo', id: 0 }])
})

test('should remove a specific todo when remove todo', t => {
  const todo = { text: 'some todo', id: 42 }
  const actual = todos([todo], removeTodo(42))
  t.deepEqual(actual, [])
})