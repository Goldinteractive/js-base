import { noop, once } from 'utils/fn'

describe('noop', () => {
  test('can be invoked', () => {
    noop()
  })
})

describe('once', () => {
  test('is only invoked once', () => {
    const callback = jest.fn()
    const wrapped = once(callback)
    wrapped()
    wrapped()
    expect(callback).toHaveBeenCalledTimes(1)
  })

  test('passes proper params', () => {
    const callback = jest.fn()
    const wrapped = once(callback)
    wrapped(1)
    wrapped(2)
    expect(callback).toHaveBeenCalledWith(1)
  })
})
