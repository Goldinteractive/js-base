import 'polyfills'

describe('polyfills', () => {
  test('are successfully loaded into module', () => {
    expect(typeof global.fetch).toBe('function')
  })
})
