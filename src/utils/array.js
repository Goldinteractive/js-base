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
