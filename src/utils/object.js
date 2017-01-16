/**
 * Object module.
 * @module base/utils/object
 */

import { isWritable, isEmpty } from './check'

/**
 * Extend any object with other properties.
 *
 * @source riot.js
 * @see https://github.com/riot/riot/blob/master/lib/browser/common/util/misc.js
 *
 * @param   {Object} src - Source object.
 * @returns {Object} The resulting extended object.
 *
 * @example
 * var obj = { foo: 'baz' }
 * extend(obj, {bar: 'bar', foo: 'bar'})
 * console.log(obj) => {bar: 'bar', foo: 'bar'}
 *
 */
export function extend(src) {
  var obj, args = arguments

  for (let i = 1; i < args.length; ++i) {
    if (obj = args[i]) {
      for (let key in obj) {
        // check if this property of the source object could be overridden
        if (isWritable(src, key))
          src[key] = obj[key]
      }
    }
  }

  return src
}

/**
 * Clean empty properties from given object.
 *
 * @param  {Object} src - Source object.
 * @return {Object}
 */
export function cleanEmptyProps(src) {
  for (let key in src) {
    if (isWritable(src, key) && isEmpty(src[key])) {
      delete src[key]
    }
  }

  return src
}
