/**
 * Object module.
 * @module base/utils/object
 */

import { isWritable, isEmpty } from './check'

/**
 * Serialize object recursively (using php "array" notation).
 *
 * @example
 * console.log(serialize({foo: "hi there", bar: { blah: 123, quux: [1, 2, 3] }}));
 * // foo=hi%20there&bar%5Bblah%5D=123&bar%5Bquux%5D%5B0%5D=1&bar%5Bquux%5D%5B1%5D=2&bar%5Bquux%5D%5B2%5D=3
 *
 * @see http://stackoverflow.com/questions/1714786/querystring-encoding-of-a-javascript-object/1714899#1714899
 *
 * @param {Object} obj - Object to serialize.
 * @param {String} [prefix=null] - Prefix for array notation.
 *
 * @returns {String} Serialized Object.
 */
export function serialize(obj, prefix = null) {
  var str = [], p
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + '[' + p + ']' : p, v = obj[p]
      str.push((v !== null && typeof v === 'object') ?
        serialize(v, k) :
        encodeURIComponent(k) + '=' + encodeURIComponent(v))
    }
  }

  return str.join('&')
}

/**
 * Clean empty properties from given object.
 *
 * @param   {Object} src - Source object.
 * @returns {Object}
 */
export function cleanEmptyProps(src) {
  for (let key in src) {
    if (isWritable(src, key) && isEmpty(src[key])) {
      delete src[key]
    }
  }

  return src
}

export default {
  serialize,
  cleanEmptyProps
}
