import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Counter } from '../../component/Counter'

test('Counter should render', t => {
  const wrapper = shallow(<Counter num={1} />)
  t.true(wrapper.contains(<span>Counter: {1}</span>))
})

test('Counter should trigger increment', t => {
  const wrapper = shallow(<Counter num={1} increment={} />)
  t.true(wrapper.contains(<span>Counter: {1}</span>))
})
