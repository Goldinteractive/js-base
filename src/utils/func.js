/**
 * Function module.
 * @module base/utils/func
 */

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear'
 * that is a function which will clear the timer to prevent previously scheduled executions.
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} func
 *   Function to wrap.
 * @param {Number}   wait
 *   Timeout in ms (`60`).
 * @param {Boolean}  immediate
 *   Whether to execute at the beginning (`false`).
 *
 * @returns {Function}
 *   A new function that wraps the `func` function passed in.
 */
export function debounce(func, wait = 60, immediate = false) {
  var timeout, args, context, timestamp, result

  function later() {
    var last = Date.now() - timestamp

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        context = args = null
      }
    }
  }

  var debounced = function() {
    context = this
    args = arguments
    timestamp = Date.now()
    var callNow = immediate && !timeout
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  return debounced
}

/**
 * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
 *
 * @param {Function} func
 *   Function to wrap.
 * @param {Number} wait
 *   Number of milliseconds that must elapse between `func` invocations.
 *
 * @returns {Function}
 *   A new function that wraps the `func` function passed in.
 */
export function throttle(func, wait) {
  var ctx, args, rtn, timeoutID // caching
  var last = 0

  return function throttled() {
    ctx = this
    args = arguments
    var delta = new Date() - last
    if (!timeoutID)
      if (delta >= wait) call()
      else timeoutID = setTimeout(call, wait - delta)
    return rtn
  }

  function call() {
    timeoutID = 0
    last = +new Date()
    rtn = func.apply(ctx, args)
    ctx = null
    args = null
  }
}

/**
 * Request animation frame polyfill method.
 *
 * @see https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see https://developer.mozilla.org/de/docs/Web/API/window/requestAnimationFrame
 */
export var rAF = (function() {
  return window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || function(callback) {
      window.setTimeout(callback, 1000 / 60)
    }
})()
