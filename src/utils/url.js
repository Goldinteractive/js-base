/**
 * URL module.
 * @module base/utils/url
 */

import eventHub from '../eventHub'
import qs from 'qs'

/**
 * Initial search parameters.
 * @type {Object}
 */
export const params = parseQuery()

/**
 * Return search parameters.
 *
 * @param   {String} [query=window.location.search.substring(1)] - Query string.
 * @param   {Array}  [options] - Parse options.
 *
 * @returns {Object}
 */
export function parseQuery(
  query = window.location.search.substring(1),
  options
) {
  return qs.parse(query, options)
}

/**
 * Simple serialize.
 *
 * @param {Object} obj - Object to serialize.
 * @param {Array}  [options] - Stringify options.
 *
 * @returns {String}
 */
export function stringifyQuery(obj, options) {
  return qs.stringify(obj, options)
}

/**
 * Return hash part of given url.
 *
 * @param   {String} [href=window.location] - URL to return the hash from.
 * @returns {String}
 */
export function hash(href = undefined) {
  return (href || window.location.hash).substring(1)
}

/**
 * Push state using native window.history and triggering `pushstate` event.
 * Note that the parameter order is different from the native pushState method.
 *
 * @param {String} url URL to set
 * @param {Object} [state] state to set
 * @param {String} [title=''] title of page
 */
export function pushState(url, state = null, title = '') {
  window.history.pushState(state, title, url)
  eventHub.trigger('pushstate', state).trigger('statechange', state)
}

/**
 * Replace state using native window.history and triggering `replacestate` event.
 * Note that the parameter order is different from the native replaceState method.
 * @param {String} [url] URL to set
 * @param {Object} [state] state to set
 * @param {String} [title=''] title of page
 */
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
  parseQuery,
  stringifyQuery,
  pushState,
  replaceState
}
