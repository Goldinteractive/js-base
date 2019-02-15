/**
 * String module.
 * @module base/utils/string
 */

/**
 * Convert px value to number.
 *
 * @param   {String} str - String to convert.
 * @returns {Number}
 */
export function pxToInt(str) {
  return parseInt(str, 10)
}

/**
 * Pad function to add leading zeros or any given string.
 *
 * @see https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
 *
 * @param {String|Number} n - String or number to pad.
 * @param {Number} length - Length to pad.
 * @param {String} [z='0'] - String to use for padding.
 */
export function pad(n, length, z = '0') {
  z = z
  n = n + ''
  return n.length >= length ? n : new Array(length - n.length + 1).join(z) + n
}

/**
 * Faster String startsWith alternative
 *
 * @param   {String} str - Source string.
 * @param   {String} value - Test string.
 * @returns {Boolean}
 */
export function startsWith(str, value) {
  return str.slice(0, value.length) === value
}

export default {
  pad,
  pxToInt,
  startsWith
}
