import test from 'ava'
import { counter, increment, decrement } from '../../module/counter'

test('counter should be 0 when init', t => {
  const actual = counter(undefined, { type: 'unrelated'})
  t.is(actual, 0)
})

test('counter should return 1 when increment from 0', t => {
  const actual = counter(0, increment())
  t.is(actual, 1)
})

test('counter should return 0 when decrement from 1', t => {
  const actual = counter(1, decrement())
  t.is(actual, 0)
})