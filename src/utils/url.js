/**
 * URL module.
 * @module base/utils/url
 */

import eventHub from '../eventHub'

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

export function pushState(url, state = null, title = '') {
  window.history.pushState(state, title, url)
  eventHub.trigger('pushstate', state).trigger('statechange', state)
}

export function replaceState(url, state = null, title = '') {
  window.history.replaceState(state, title, url)
  eventHub.trigger('replacestate', state).trigger('statechange', state)
}

// map popstate event to event hub
window.addEventListener('popstate', function(e) {
  eventHub.trigger('popstate', e.state).trigger('statechange', e.state)
})

export default {
  params,
  hash,
  getParams,
  pushState,
  replaceState
}
