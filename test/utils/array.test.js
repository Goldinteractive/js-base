import { unique } from 'utils/array'

describe('unique', () => {
  test('can filter strings', () => {
    expect(unique(['asdf', 'bcd', 'asdf'])).toEqual(['asdf', 'bcd'])
  })
  test('can filter objects', () => {
    let obj = {}
    let obj2 = {}
    expect(unique([obj, obj2, obj])).toEqual([obj, obj2])
  })
})
