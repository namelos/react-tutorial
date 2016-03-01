import React from 'react'
import styles from './Paper.css'
import css from 'react-css-modules'

const Paper = ({ children, width = 300, height = 300 }) =>
  <div styleName='paper'
    style={{ width, height }}>{ children }</div>

export default css(Paper, styles)
