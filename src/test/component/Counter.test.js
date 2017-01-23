import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import { Counter } from '../../component/Counter'

test('Counter should render', t => {
  const wrapper = shallow(<Counter num={1} />)
  t.true(wrapper.contains(<span>Counter: {1}</span>))
})

test('Counter should trigger increment', t => {
  const increment = spy()
  const decrement = spy()
  const wrapper = shallow(<Counter num={1}
                                   increment={increment}
                                   decrement={decrement} />)

  wrapper.find('button').first().simulate('click')
  wrapper.find('button').last().simulate('click')
  t.is(increment.callCount, 1)
  t.is(decrement.callCount, 1)
})
