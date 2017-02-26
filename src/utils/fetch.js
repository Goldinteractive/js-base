export var defaultOptions = {
  credentials: 'same-origin'
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
  return fetch(u).then(checkStatus)
}

export function json(u, opts = {}) {
  return url(u, opts).then(r => r.json())
}

export function text(u, opts = {}) {
  return url(u, opts).then(r => r.text())
}

export default {
  defaultOptions,
  url, json, text
}
