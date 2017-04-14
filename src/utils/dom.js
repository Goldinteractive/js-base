/**
 * DOM module.
 * @module base/utils/dom
 */

import * as easingEquations from 'easing-js/easing'
import { rAF } from './fn'
import { pxToInt } from './string'

/**
 * Name of the animationend event.
 * @type {String}
 */
export var animationEndEvent = 'animationend'

/**
 * Name of the transitionend event.
 * @type {String}
 */
export var transitionEndEvent = 'transitionend'

/**
 * Return outerWidth of given element.
 *
 * @param   {Element} element - Target element.
 * @returns {Number}
 */
export function outerHeight(element) {
  var height = element.offsetHeight,
    style = window.getComputedStyle(element)

  height += pxToInt(style.marginTop) + pxToInt(style.marginBottom)
  return height
}

/**
 * Return outerWidth of given element.
 *
 * @param   {Element} element - Target element.
 * @returns {Number}
 */
export function outerWidth(element) {
  var width = element.offsetWidth,
    style = window.getComputedStyle(element)

  width += pxToInt(style.marginLeft) + pxToInt(style.marginRight)
  return width
}

/**
 * Return all computed styles.
 *
 * @param   {Element} element - Element to get computed styles from.
 * @returns {Object} Computed styles
 */
export function computedStyles(element) {
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
export function computedStyle(element, prop) {
    return window.getComputedStyle(element, null).getPropertyValue(prop)
}

/**
 * Return child elements.
 *
 * @param {Element} element - Element to get the children from.
 * @param {Element} skipElement - Element to skip.
 *
 * @returns {Element[]}
 */
export function children(element, skipElement) {
  var children = []
  element = element.children[0]

  for (; element; element = element.nextElementSibling) {
    if (element != skipElement) {
      children.push(element)
    }
  }

  return children
}

/**
 * Return siblings of given element.
 *
 * @param   {Element} element - Target element.
 * @returns {Element[]}
 */
export function siblings(element) {
  return children(element.parentElement, element)
}

/**
 * Return matching parent.
 *
 * @param  {Element} element - Target element to get the parent from.
 * @param  {Function} match - The match function to check the parent agains.
 *
 * @returns {Element}
 */
export function parent(element, match) {
  var parent = null

  for (; parent === null
         && element
         && element !== document
       ; element = element.parentElement
  ) {
    if (match(element)) {
      parent = element
    }
  }

  return parent
}

/**
 * Return parent elements of given element.
 *
 * @param {Element} element - Target element to get the parents from.
 * @param {Function} [match] - The match function to check the parent against.
 *
 * @returns {Element[]}
 */
export function parents(element, match = null) {
  var parents = []

  for (; element && element !== document; element = element.parentElement) {
    if (match) {
      if (match(element)) {
        parents.push(element)
      }
    } else {
      parents.push(element)
    }
  }

  return parents
}

/**
 * Check whether the element matches the given selector.
 *
 * @param {Element} element - The element to check.
 * @param {String} selector - The selector to check against.
 *
 * @returns {Boolean}
 */
export function matches(element, selector) {
  var p = Element.prototype
  var f = p.matches
    || p.webkitMatchesSelector
    || p.mozMatchesSelector
    || p.msMatchesSelector
    || function(s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1
    }

  return f.call(element, selector)
}

/**
 * Return index of current element.
 *
 * @param   {Element} element - Element
 * @returns {Integer}
 */
export function index(element) {
  var i = 0, child = element
  while ((child = child.previousElementSibling) != null) i++
  return i
}

/**
 * Set style attributes.
 *
 * @param {Element} element - Target element.
 * @param {Object}  styles - Styles to set.
 * @param {Boolean} [remember=false] - Whether to return original attributes.
 *
 * @returns {Object|{}} Original style attributes which got overwritten.
 */
export function style(element, styles, remember = false) {
  var style = element.style,
    original = {}

  for (let key in styles) {
    if (remember) {
      original[key] = style[key] || ''
    }

    style[key] = styles[key]
  }

  return original
}


/**
 * Sheet class.
 * Dynamically create stylesheets.
 */
export class Sheet {

  /**
   * @Constructor
   * @param {Object} options
   *   Overwrite the [default options]{@link module:base/utils/dom~Sheet.defaultOptions}.
   */
  constructor(options = {}) {
    this.options = Object.assign({}, Sheet.defaultOptions, options)
    this.style = document.createElement('style')
    this.style.setAttribute('media', this.options.media)
    this.style.appendChild(document.createTextNode(''))
  }

  init() {
    document.head.appendChild(this.style)
  }

}

/**
 * Default sheet options.
 *
 * @type {Object}
 * @property {String} media='screen' - Scrolling speed (pixels per second).
 */
Sheet.defaultOptions = {
  media: 'screen'
}


/**
 * Scroller class.
 * Scroll to position or element using custom speeds and easings.
 */
export class Scroller {

  /**
   * Constructor.
   * @param {Object} options
   *   Overwrite the [default options]{@link module:base/utils/dom~Scroller.defaultOptions}.
   */
  constructor(options = {}) {
    this._opts = Object.assign({}, Scroller.defaultOptions, options)
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
    var opts = Object.assign(options, {
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

    var opts = Object.assign({}, this._opts, Scroller.defaultToOptions, options),
      scrollTargetX = opts.x,
      scrollTargetY = opts.y

    if (scrollTargetX !== null) {
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

    if (scrollTargetY !== null) {
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

      var posY = scrollTargetY !== null ? scrollY + ((scrollTargetY - scrollY) * t) : scrollY
      var posX = scrollTargetX !== null ? scrollX + ((scrollTargetX - scrollX) * t) : scrollX

      if (p < 1) {
        rAF(tick)
        window.scrollTo(posX, posY)
      } else {
        window.scrollTo(
          scrollTargetX !== null ? scrollTargetX : scrollX,
          scrollTargetY !== null ? scrollTargetY : scrollY
        )

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


export default {
  animationEndEvent,
  transitionEndEvent,
  computedStyles,
  computedStyle,
  outerWidth,
  outerHeight,
  siblings,
  index,
  parent,
  parents,
  children,
  matches,
  style
}
