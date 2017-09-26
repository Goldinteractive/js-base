/**
 * Fixes for shitty browsers.
 */

import 'core-js/fn/array/from'
import 'core-js/fn/object/assign'


/*
 * Promise polyfill.
 */
import Promise from 'promise-polyfill'

if (!window.Promise) {
  window.Promise = Promise
}


/*
 * Fetch polyfill (requires Promise polyfill).
 */
import 'whatwg-fetch'


/*
 * Element.matches and Elements.closest polyfill
 * from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector
                              || Element.prototype.webkitMatchesSelector
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this
    var ancestor = this

    if (!document.documentElement.contains(el)) {
      return null
    }

    do {
      if (ancestor.matches(s)) {
        return ancestor
      }

      ancestor = ancestor.parentElement
    } while (ancestor !== null)

    return null
  }
}


/*
 * Performance polyfill.
 * @license http://opensource.org/licenses/MIT
 * copyright Paul Irish 2015
 */

if ('performance' in window === false) {
    window.performance = {}
}

if ('now' in window.performance === false) {
  var nowOffset = Date.now()

  if (performance.timing && performance.timing.navigationStart) {
    nowOffset = performance.timing.navigationStart
  }

  window.performance.now = function now() {
    return Date.now() - nowOffset
  }
}
