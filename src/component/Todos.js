import React from 'react'

const todos = [
  { text: "first" },
  { text: "second" },
  { text: "third" },
]

export const Todos = ({}) => <ul>
  { todos.map(todo => <Todo todo={todo} />) }
</ul>

const Todo = ({ todo }) => <li>
  {todo.text}
</li>

