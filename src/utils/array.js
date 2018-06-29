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

/**
 * Shuffle given array.
 *
 * @param   {Array} array - Target array.
 * @returns {Array} Shuffled array.
 */
export function shuffle(array) {
  return array.slice().sort(function() {
    return Math.random() > 0.5 ? 1 : -1
  })
}

/**
 * Clone given array.
 *
 * @param   {Array} array - Target array.
 * @returns {Array} Cloned array.
 */
export function clone(array) {
  return array.slice(0)
}

/**
 * Return largest number from given array.
 *
 * @param   {Number[]} array - Target array.
 * @returns {Number} Largest number of given array.
 */
export function max(array) {
  return Math.max.apply(Math, array)
}

/**
 * Return smallest number from given array.
 *
 * @param   {Number[]} array - Target array.
 * @returns {Number} Smallest number of given array.
 */
export function min(array) {
  return Math.min.apply(Math, array)
}

/**
 * Return sum from given array.
 *
 * @param   {Number[]} array - Target array.
 * @returns {Number} Total sum of given array.
 */
export function sum(array) {
  return array.reduce(function(a, b) {
    return a + b
  })
}

/**
 * Return average from given array.
 *
 * @param   {Number[]} array
 * @returns {Number} Average of given array.
 */
export function avg(array) {
  var arraySum = sum(array)
  return arraySum / array.length
}

export default {
  shuffle,
  contains,
  random,
  unique,
  clone,
  max,
  min,
  sum,
  avg
}
