/**
 * Object module.
 * @module base/utils/object
 */

import { isWritable, isEmpty } from './check'

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
  cleanEmptyProps
}
