import React from 'react'
import styles from './Paper.css'
import css from 'react-css-modules'

const Paper = ({ children }) =>
  <div styleName='paper'>{ children }</div>

export default css(Paper, styles)
