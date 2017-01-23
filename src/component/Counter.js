import React from 'react'

export const Counter = ({ num, increment, decrement }) => <div>
  <span>Counter: {num}</span>
  <button onClick={increment}>+</button>
  <button onClick={decrement}>-</button>
</div>
