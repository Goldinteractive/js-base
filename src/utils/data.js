/**
 * Data module.
 * @module base/utils/data
 */

import { UID } from '../variables'

/**
 * Return base data cache from given node.
 *
 * @param   {Element} node - Node to get the cache from.
 * @returns {Object}
 */
export function getCache(node) {
  return (node[UID] = node[UID] || {})
}

/**
 * Set data to node.
 *
 * @param {Element} node - Node to set the cache to.
 * @param {String} key - Data key.
 * @param {String} value - Value to set.
 *
 * @returns {Object}
 */
export function set(node, key, value) {
  return (getCache(node)[key] = value)
}

/**
 * Return data from given node.
 *
 * @param {Element} node - Node to get data from.
 * @param {String} key - Data key.
 *
 * @returns {String}
 */
export function get(node, key) {
  var cache = getCache(node)
  if (cache[key] === undefined) {
    cache[key] = node.dataset ? node.dataset[key] : node.getAttribute('data-'+key)
  }
  return cache[key]
}

/**
 * Remove data from given node.
 *
 * @param {Element} node - Node to remove data from.
 * @param {String} key - Data key.
 */
export function remove(node, key) {
  var cache = getCache(node)
  if (cache) { delete cache[key] }
  else if (node.dataset) { delete node.dataset[key] }
  else { node.removeAttribute('data-' + name) }
}
