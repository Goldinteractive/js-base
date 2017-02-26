/**
 * URL module.
 * @module base/utils/url
 */

/**
 * Initial search parameters.
 * @type {Object}
 */
export const params = getParams()

/**
 * Return search parameters.
 *
 * @param   {String} [query=window.location.search] - Query string.
 * @returns {Object}
 */
export function getParams(query = window.location.search) {
  if (query === '') return {}
  return query.slice(1).split('&').reduce(function(a, b) {
    b = b.split('=')
    a[b[0]] = decodeURIComponent(b[1])
    return a
  }, {})
}

/**
 * Return hash part of given url.
 *
 * @param   {String} [href=window.location] - URL to return the hash from.
 * @returns {String}
 */
export function hash(href) {
  return (href || window.location.hash).substring(1)
}

export default {
  params, hash, getParams
}
