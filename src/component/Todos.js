import React from 'react'

export const Todos = ({ todos, addTodo, removeTodo }) => {
  let input

  const submit = e => {
    e.preventDefault()
    addTodo(input.value)
    input.value = ''
  }

  return <div>
    <TodoList todos={todos}/>
    <form onSubmit={submit}>
      <input ref={i => input = i}/>
    </form>
  </div>
}

export const TodoList = ({ todos }) => <ul>
  { todos.map((todo, i) => <Todo todo={todo} key={i} />) }
</ul>

const Todo = ({ todo }) => <li>
  {todo.id} {todo.text}
</li>

