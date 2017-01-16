/**
 * URL module.
 * @module base/utils/url
 */

const loc = window.location
const query = loc.search

/**
 * Initial search parameters.
 * @type {Object}
 */
export const params = getParams()

/**
 * Return search parameters.
 * @return {Object}
 */
export function getParams() {
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
 * @param  {String} [href=window.location] - URL to return the hash from.
 * @return {String}
 */
export function hash(href) {
  return (href || loc.hash).substring(1)
}
