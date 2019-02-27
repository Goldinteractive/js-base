import { isNumeric, isElement } from 'utils/check'

describe('isNumeric', () => {
  test('checks type', () => {
    expect(isNumeric('1')).toBeFalsy()
  })
  test('checks NaN', () => {
    expect(isNumeric(NaN)).toBeFalsy()
  })
  test('checks positive Infinity', () => {
    expect(isNumeric(Infinity)).toBeFalsy()
  })
  test('checks negative Infinity', () => {
    expect(isNumeric(-Infinity)).toBeFalsy()
  })
  test('checks zero', () => {
    expect(isNumeric(0)).toBeTruthy()
  })
  test('checks floating point number', () => {
    expect(isNumeric(0.3)).toBeTruthy()
  })
  test('checks negative floating point number', () => {
    expect(isNumeric(-0.3)).toBeTruthy()
  })
  test('checks big number', () => {
    expect(isNumeric(9999999999999999)).toBeTruthy()
  })
})

describe('isElement', () => {
  test('detects element', () => {
    const $a = document.createElement('p')
    expect(isElement($a)).toBeTruthy()
  })

  test('detects comments', () => {
    const $a = document.createComment('Comment Test')
    expect(isElement($a)).toBeFalsy()
  })

  test('detects any other object', () => {
    expect(isElement({})).toBeFalsy()
  })

  test('detects null', () => {
    expect(isElement(null)).toBeFalsy()
  })
})
