import React from 'react'
import { render } from 'react-dom'
import reducer from './redux'
import configureStore from './store'
import routes from './routes'

const root = document.getElementById('root')
const store = configureStore(reducer)
const app = routes(store)

render(app, root)
