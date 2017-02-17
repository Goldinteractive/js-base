/**
 * String module.
 * @module base/utils/string
 */

import camelCase from 'camel-case'

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
 * Faster String startsWith alternative
 * @param   {String} str - Source string.
 * @param   {String} value - Test string.
 * @returns {Boolean}
 */
export function startsWith(str, value) {
  return str.slice(0, value.length) === value
}

export default {
  camelCase,
  pxToInt,
  startsWith
}
