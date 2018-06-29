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

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function url(u, opts = {}) {
  opts = Object.assign({}, defaultOptions, opts)

  if (opts.queryParams) {
    let query = stringifyQuery(opts.queryParams, opts.stringifyOptions)
    u = `${u}${u.indexOf('?') > -1 ? '&' : '?'}${query}`
  }

  return fetch(u, opts).then(checkStatus)
}

export function json(u, opts = {}) {
  return url(u, opts).then(r => r.json())
}

export function jsonP(u, opts = {}) {
  opts = Object.assign({}, defaultJsonpOptions, opts)

  if (opts.queryParams) {
    let query = stringifyQuery(opts.queryParams, opts.stringifyOptions)
    u = `${u}${u.indexOf('?') > -1 ? '&' : '?'}${query}`
  }

  return fetchJsonP(u, opts).then(r => r.json())
}

export function text(u, opts = {}) {
  return url(u, opts).then(r => r.text())
}

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
