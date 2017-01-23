let counter = 0

const ADD_TODO = 'todos/ADD_TODO'
const REMOVE_TODO = 'todos/REMOVE_TODO'

const initialState = []

export const addTodo = text => ({ type: ADD_TODO, text })
export const removeTodo = id => ({ type: REMOVE_TODO, id })

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: counter++ }
      return [...state, newTodo]
    case REMOVE_TODO:
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}
