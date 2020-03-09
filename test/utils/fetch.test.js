import { url } from 'utils/fetch'
import 'polyfills/fetch'

describe('url', () => {
  let mockFetchPromise
  beforeEach(() => {
    mockFetchPromise = jest.fn()
    mockFetchPromise.mockReturnValue(Promise.resolve())
    jest.spyOn(global, 'fetch').mockImplementation(mockFetchPromise)
  })
  test('appends query param', () => {
    url('', { queryParams: { a: 1 } })
    expect(mockFetchPromise).toHaveBeenCalledWith('?a=1', expect.any(Object))
  })
  test('checks existing query param', () => {
    url('?b=2', { queryParams: { a: 1 } })
    expect(mockFetchPromise).toHaveBeenCalledWith(
      '?b=2&a=1',
      expect.any(Object)
    )
  })
})
