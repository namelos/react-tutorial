import React from 'react'
import { render } from 'react-dom'
import { Counter } from './component/Counter'

render(<Counter num={1} />, document.querySelector('#app'))
