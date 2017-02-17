/**
 * Array module.
 * @module base/utils/array
 */

/**
 * Check whether an array contains an item.
 *
 * @param {Array} array - Target array.
 * @param {*} item - Item to test.
 *
 * @returns {Boolean}
 */
export function contains(array, item) {
  return ~array.indexOf(item)
}

/**
 * Return random element from given array.
 *
 * @param   {Array} array - Target array.
 * @returns {*} Random element.
 */
export function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Remove dublicates from array.
 *
 * @param   {Array} array - Target array.
 * @returns {Array} Cleaned array.
 */
export function unique(array) {
    var seen = {},
      out = [],
      len = array.length,
      j = 0

    for (let i = 0; i < len; i++) {
      var item = array[i]
      if (seen[item] !== 1) {
        seen[item] = 1
        out[j++] = item
      }
    }

    return out
}


export default {
  contains,
  random,
  unique
}
