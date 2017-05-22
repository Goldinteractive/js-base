/**
 * Fetch module.
 * @module base/utils/fetch
 */

import fetchJsonP from 'fetch-jsonp'

export var defaultOptions = {
  credentials: 'same-origin'
}

export var defaultJsonpOptions = {
  timeout: 5000,
  jsonpCallback: 'callback',
  jsonpCallbackFunction: null
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function url(u, opts = {}) {
  opts = Object.assign({}, defaultOptions, opts)
  return fetch(u, opts).then(checkStatus)
}

export function json(u, opts = {}) {
  return url(u, opts).then(r => r.json())
}

export function jsonP(u, opts = {}) {
  opts = Object.assign({}, defaultJsonpOptions, opts)
  return fetchJsonP(u, opts).then(r => r.json())
}

export function text(u, opts = {}) {
  return url(u, opts).then(r => r.text())
}

export default {
  defaultOptions,
  defaultJsonpOptions,
  url, json, jsonP, text
}
