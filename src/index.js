import React from 'react'
import { render } from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'

const initialState = {
  name: '',
  email: '',
  address: ''
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.name }
    case 'CHANGE_EMAIL':
      return { ...state, email: action.email }
    case 'CHANGE_ADDRESS':
      return { ...state, address: action.address }
    default:
      return state
  }
}

const changeName = name => ({ type: 'CHANGE_NAME', name })
const changeEmail = email => ({ type: 'CHANGE_EMAIL', email })
const changeAddress = address => ({ type: 'CHANGE_ADDRESS', address })

const store = createStore(counter)

const mapState = ({ name, email, address }) => ({ name, email, address })

const mapAction = dispatch => bindActionCreators({ changeName, changeEmail, changeAddress }, dispatch)

const Form = ({ name, email, address, changeName, changeEmail, changeAddress }) => <div>
  <ul>
    <li><h1>name: { name }</h1></li>
    <li><h1>email: { email }</h1></li>
    <li><h1>address: { address }</h1></li>
  </ul>
  <label>name:</label>
  <input onChange={ e => changeName(e.target.value) } type="input"/>
  <label>email:</label>
  <input onChange={ e => changeEmail(e.target.value) } type="input"/>
  <label>address:</label>
  <input onChange={ e => changeAddress(e.target.value) } type="input"/>
</div>

const ConnectedForm = connect(mapState, mapAction)(Form)

render(
  <Provider store={ store }>
    <ConnectedForm />
  </Provider>,
  document.getElementById('root')
)