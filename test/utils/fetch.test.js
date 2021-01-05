import { url } from 'utils/fetch'

describe('url', () => {
  let mockFetchPromise
  beforeEach(() => {
    mockFetchPromise = jest.fn()
    mockFetchPromise.mockReturnValue(Promise.resolve())
    global.fetch = jest.fn()
    jest.spyOn(global, 'fetch').mockImplementation(mockFetchPromise)
  })
  afterEach(() => {
    global.fetch.mockClear()
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
