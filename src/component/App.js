import React from 'react'
import { Link } from 'react-router'

export const App = ({ children }) => <div>
  <Link to="/">Home</Link>
  {children}
</div>