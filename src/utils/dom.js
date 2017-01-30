/**
 * DOM module.
 * @module base/utils/dom
 */

import * as easingEquations from 'easing-js/easing'
import { extend } from './object'
import { rAF } from './func'

/**
 * Return all computed styles.
 *
 * @param   {Element} element - Element to get computed styles from.
 * @returns {Object} Computed styles
 */
function computedStyles(element) {
  var computedStyle = {},
      styles = {}

  computedStyle = window.getComputedStyle(element, null)

  for (let i = 0, length = computedStyle.length; i < length; i++) {
    var prop = computedStyle[i]
    var val = computedStyle.getPropertyValue(prop)
    styles[prop] = val
  }

  return styles
}

/**
 * Shortcut for get a computed style.
 *
 * @param {Element} element - Element to get computed style from.
 * @param {Element} prop - Style to get.
 *
 * @returns {String} Computed style
 */
function computedStyle(element, prop) {
    return window.getComputedStyle(element, null).getPropertyValue(prop)
}

/**
 * Scroller class.
 * Scroll to position or element using custom speeds and easings.
 */
class Scroller {

  /**
   * Constructor.
   * @param {Object} options
   *   Overwrite the [default options]{@link module:base/utils/dom~Scroller.defaultOptions}.
   */
  constructor(options = {}) {
    this._opts = extend(Scroller.defaultOptions, options)
  }

  /**
   * Scroll to given element.
   *
   * @param {Element} element - Target element.
   * @param {Object} options
   *   Overwrite the [default to options]{@link module:base/utils/dom~Scroller.defaultToOptions}.
   *
   * @returns {module:base/utils/dom~Scroller}
   */
  toElement(element, options = {}) {
    var opts = extend(options, {
      y: element.offsetTop,
      x: element.offsetLeft
    })

    return this.to(opts)
  }

  /**
   * Scroll to a target position.
   *
   * @param {Object} options
   *   Overwrite the [default to options]{@link module:base/utils/dom~Scroller.defaultToOptions}.
   *
   * @returns {module:base/utils/dom~Scroller}
   */
  to(options = {}) {
    var timeX = 0, timeY = 0, currentTime = 0,
      scrollY = window.scrollY || document.documentElement.scrollTop,
      scrollX = window.scrollX || document.documentElement.scrollLeft

    var opts = extend(this._opts, Scroller.defaultToOptions, options),
      scrollTargetX = opts.x,
      scrollTargetY = opts.y

    if (scrollTargetX) {
      scrollTargetX = scrollTargetX - opts.offsetX
      scrollTargetX = scrollTargetX < 0 ? 0 : scrollTargetX

      // determine scroll time for x axis
      timeX = Math.max(
        opts.minScrollTime,
        Math.min(
          Math.abs(scrollX - scrollTargetX) / opts.speed, opts.maxScrollTime
        )
      )
    }

    if (scrollTargetY) {
      scrollTargetY = scrollTargetY - opts.offsetY
      scrollTargetY = scrollTargetY < 0 ? 0 : scrollTargetY

      // determine scroll time for y axis
      timeY = Math.max(
        opts.minScrollTime,
        Math.min(
          Math.abs(scrollY - scrollTargetY) / opts.speed, opts.maxScrollTime
        )
      )
    }

    var time = Math.max(timeX, timeY)

    // add animation loop
    function tick() {
      currentTime += 1 / 60

      var p = currentTime / time
      var t = easingEquations[opts.easing](p)

      var posY = scrollTargetY ? scrollY + ((scrollTargetY - scrollY) * t) : scrollY
      var posX = scrollTargetX ? scrollX + ((scrollTargetX - scrollX) * t) : scrollX

      if (p < 1) {
        rAF(tick)
        window.scrollTo(posX, posY)
      } else {
        window.scrollTo(scrollTargetX || scrollX, scrollTargetY || scrollY)
        if (opts.cb) opts.cb()
      }
    }

    // call it once to get started
    tick()
    return this
  }

}

/**
 * Default scroller options.
 *
 * @type {Object}
 * @property {Number} speed=1000 - Scrolling speed (pixels per second).
 * @property {Number} easing='easeOutSine' - [Easing equation]{@link https://github.com/danro/easing-js/blob/master/easing.js}.
 * @property {Number} offsetX=0 - Offset that is taken away from target x position (e.g. for a fixed sidebar width).
 * @property {Number} offsetY=0 - Offset that is taken away from target y position (e.g. for a fixed header height).
 * @property {Number} minScrollTime=0.1 - Minimum scrolling time.
 * @property {Number} maxScrollTime=0.8 - Maximum scrolling time.
 */
Scroller.defaultOptions = {
  speed: 1000,
  easing: 'easeOutSine',
  offsetY: 0,
  offsetX: 0,
  minScrollTime: 0.1,
  maxScrollTime: 0.8
}

/**
 * Default options for scrolling to methods.
 * These will extend the [default options]{@link module:base/utils/dom~Scroller.defaultOptions}.
 *
 * @type {Object}
 * @property {Number} x=null - Target position on x axis.
 * @property {Number} y=null - Target position on y axis.
 * @property {Function} cb=null - Callback to execute when scrolling has finished.
 */
Scroller.defaultToOptions = {
  x: null,
  y: null,
  cb: null
}


export {
  /**
   * Scroller class.
   * @see module:base/utils/dom~Scroller
   */
  Scroller,

  computedStyles,
  computedStyle
}
