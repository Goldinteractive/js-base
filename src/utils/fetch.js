/**
 * Fetch module.
 * @module base/utils/fetch
 */

import fetchJsonP from 'fetch-jsonp'
import { stringifyQuery } from './url'

export let defaultOptions = {
  credentials: 'same-origin',
  headers: {
    http_x_requested_with: 'fetch'
  }
}

export let defaultJsonpOptions = {
  timeout: 5000,
  jsonpCallback: 'callback',
  jsonpCallbackFunction: null
}

/**
 * Checks the response code. Returns the response object if it was successfull.
 * Otherwise it throws an error including the statusText
 *
 * @param   {Ojbect} response - A fetch response object with status and statusText as properties.
 *
 * @returns {Object} the response object
 * @throws {String} the status text
 */
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

/**
 * Appends query parameters as string to URL.
 *
 * @param   {string} u - The url the query should be appended to
 * @param   {Object} opts - Object containing the queryParams and the stringifyOptions
 *
 * @returns {string} the new url string
 */
function parseQueryParams(u, opts) {
  if (opts.queryParams) {
    let query = stringifyQuery(opts.queryParams, opts.stringifyOptions)
    return `${u}${u.indexOf('?') > -1 ? '&' : '?'}${query}`
  }
  return u
}

/**
 * Utility to fetch from url and check the responseStatus
 *
 * @param   {Ojbect} u - the url
 * @param   {Ojbect} [opts] - options used for querify and fetch
 *
 * @returns {Promise<Response>} the response object wrapped inside a Promise
 */
export function url(u, opts = {}) {
  opts = Object.assign({}, defaultOptions, opts)

  return fetch(parseQueryParams(u, opts), opts).then(checkStatus)
}

/**
 * Utility to fetch from url, check the responseStatus and parse response as JSON
 *
 * @param   {Ojbect} u - the url
 * @param   {Ojbect} [opts] - options used for querify and fetch
 *
 * @returns {Promise<any>} the response body wrapped inside a Promise
 */
export function json(u, opts = {}) {
  return url(u, opts).then(r => r.json())
}

/**
 * Utility to fetch jsonp from url and check the responseStatus and parse response as JSON.
 * This method uses the fetch-jsonp library under the hood.
 *
 * @param   {Ojbect} u - the url
 * @param   {Ojbect} [opts] - options used for querify and fetch
 *
 * @returns {Promise<any>} the response body wrapped inside a Promise
 */
export function jsonP(u, opts = {}) {
  opts = Object.assign({}, defaultJsonpOptions, opts)

  return fetchJsonP(parseQueryParams(u, opts), opts).then(r => r.json())
}

/**
 * Utility to fetch from url, check the responseStatus and parse response as text
 *
 * @param   {Ojbect} u - the url
 * @param   {Ojbect} [opts] - options used for querify and fetch
 *
 * @returns {Promise<String>} the response body as text wrapped inside a Promise
 */
export function text(u, opts = {}) {
  return url(u, opts).then(r => r.text())
}

/**
 * Adds script tag with the passed url as source to the document.
 *
 * @param   {Ojbect} u - the url
 *
 * @returns {undefined}
 */
export function script(u) {
  let tag = document.createElement('script'),
    firstScriptTag = document.getElementsByTagName('script')[0]

  tag.src = u
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}

export default {
  defaultOptions,
  defaultJsonpOptions,
  url,
  json,
  jsonP,
  text,
  script
}
