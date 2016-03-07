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
  
</div>