
/**
 * Device module.
 * @module base/utils/device
 */

import { pxToInt } from './string'
import { once, noop } from './fn'

// Inspired by https://github.com/rafrex/detect-passive-events
export const supportsPassiveEvents = once(() => {
  if (
    typeof window !== 'undefined' &&
    typeof window.addEventListener === 'function'
  ) {
    let passive = false
    const options = Object.defineProperty({}, 'passive', {
      get() {
        passive = true
      }
    })
    // note: have to set and remove a no-op listener instead of null
    // (which was used previously), becasue Edge v15 throws an error
    // when providing a null callback.
    // https://github.com/rafrex/detect-passive-events/pull/3
    window.addEventListener('testPassiveEventSupport', noop, options)
    window.removeEventListener('testPassiveEventSupport', noop, options)
    return passive
  }
})

/**
 * DeviceInfo class.
 */
export class DeviceInfo {
  constructor(options) {
    this.breakpoints = options.breakpoints || {}
  }

  /** Return breakpoints. */
  get breakpoints() {
    return this._breakpoints
  }

  /**
   * Set breakpoints (pixel values will be converted to integers).
   *
   * @param {Object} breakpoints - Breakpoints
   */
  set breakpoints(breakpoints) {
    var newBreakpoints = {}

    for (let breakpoint in breakpoints) {
      if (breakpoints.hasOwnProperty(breakpoint)) {
        newBreakpoints[breakpoint] = pxToInt(breakpoints[breakpoint])
      }
    }

    this._breakpoints = newBreakpoints
  }

  _checkWhetherBreakpointExists(breakpoint) {
    if (!this._breakpoints[breakpoint]) {
      throw new Error('Breakpoint "'+ breakpoint + '" doesn\'t exist.')
    }
  }

  /**
   * Check if current device width is equal to the given breakpoint.
   *
   * @param   {String} breakpoint - Breakpoint to check.
   * @returns {Boolean}
   *   `true` if device width is equal to the given breakpoint, otherwise `false`.
   */
  isEqual(breakpoint) {
    this._checkWhetherBreakpointExists(breakpoint)

    return window.innerWidth == this._breakpoints[breakpoint]
  }

  /**
   * Check if current device width is larger than given breakpoint.
   *
   * @param   {String} breakpoint - Breakpoint to check.
   * @returns {Boolean}
   *   `true` if device width is larger than given breakpoint, otherwise `false`.
   */
  isLargerThan(breakpoint) {
    this._checkWhetherBreakpointExists(breakpoint)

    return window.innerWidth > this._breakpoints[breakpoint]
  }

  /**
   * Check if current device width is smaller than given breakpoint.
   *
   * @param   {String} breakpoint - Breakpoint to check.
   * @returns {Boolean}
   *   `true` if device width is smaller than given breakpoint, otherwise `false`.
   */
  isSmallerThan(breakpoint) {
    this._checkWhetherBreakpointExists(breakpoint)

    return window.innerWidth < this._breakpoints[breakpoint]
  }

  /**
   * Check if device width is equal or larger than given breakpoint.
   *
   * @param   {String} breakpoint - Breakpoint to check.
   * @returns {Boolean}
   *   `true` if device width is equal or larger than given breakpoint, otherwise `false`.
   */
  isLargerThanOrEqual(breakpoint) {
    return this.isEqual(breakpoint) || this.isLargerThan(breakpoint)
  }

  /**
   * Check if device width is equal or smaller than given breakpoint.
   *
   * @param   {String} breakpoint - Breakpoint to check.
   * @returns {Boolean}
   *   `true` if device width is equal or smaller than given breakpoint, otherwise `false`.
   */
  isSmallerThanOrEqual(breakpoint) {
    return this.isEqual(breakpoint) || this.isSmallerThan(breakpoint)
  }
}

export default {
  supportsPassiveEvents
}
