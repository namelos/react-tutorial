import React from 'react'

export const Todos = ({ addTodo, ...props }) => {
  let input

  const submit = e => {
    e.preventDefault()
    addTodo(input.value)
    input.value = ''
  }

  return <div>
    <TodoList {...props}/>
    <form onSubmit={submit}>
      <input ref={i => input = i}/>
    </form>
  </div>
}

const TodoList = ({ todos, ...props }) => <ul>
  { todos.map((todo, i) => <Todo todo={todo} key={i} {...props} />) }
</ul>

const Todo = ({ todo, removeTodo }) => <li>
  <span>{todo.id} {todo.text}</span>
  <button onClick={e => removeTodo(todo.id)}>-</button>
</li>

