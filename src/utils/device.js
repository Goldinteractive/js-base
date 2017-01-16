/**
 * Device module.
 * @module base/utils/device
 */

import { pxToInt } from './string'

const deviceWidth = window.innerWidth

/**
 * DeviceInfo class.
 */
class DeviceInfo {

  constructor(options) {
    this.breakpoints = options.breakpoints || {}
  }

  /** Return breakpoints. */
  get breakpoints() {
    return this._breakpoints
  }

  /** Set breakpoints (pixel values will be converted to integers). */
  set breakpoints(breakpoints) {
    var newBreakpoints = {}

    for (let breakpoint in breakpoints) {
      if (breakpoints.hasOwnProperty(breakpoint)) {
        newBreakpoints[breakpoint] = pxToInt(breakpoints[breakpoint])
      }
    }

    this._breakpoints = newBreakpoints
  }

  /**
   * Check if current device width is eqal to the given breakpoint.
   *
   * @param   {String} breakpoint - Breakpoint to check.
   * @returns {Boolean}
   *   `true` if device width is equal to the given breakpoint, otherwise `false`.
   */
  isEqual(breakpoint) {
    if (!this._breakpoints[breakpoint]) {
      throw new Error('Breakpoint "'+ breakpoint + '" doesn\'t exist.')
    }

    return deviceWidth == this._breakpoints[breakpoint]
  }

  /**
   * Check if current device width is larger than given breakpoint.
   *
   * @param   {String} breakpoint - Breakpoint to check.
   * @returns {Boolean}
   *   `true` if device width is larger than given breakpoint, otherwise `false`.
   */
  isLargerThan(breakpoint) {
    if (!this._breakpoints[breakpoint]) {
      throw new Error('Breakpoint "'+ breakpoint + '" doesn\'t exist.')
    }

    return deviceWidth > this._breakpoints[breakpoint]
  }

  /**
   * Check if current device width is smaller than given breakpoint.
   *
   * @param   {String} breakpoint - Breakpoint to check.
   * @returns {Boolean}
   *   `true` if device width is smaller than given breakpoint, otherwise `false`.
   */
  isSmallerThan(breakpoint) {
    if (!this._breakpoints[breakpoint]) {
      throw new Error('Breakpoint "'+ breakpoint + '" doesn\'t exist.')
    }

    return deviceWidth < this._breakpoints[breakpoint]
  }

  /**
   * Check if device width is equal or larger than given breakpoint.
   *
   * @param   {String} breakpoint - Breakpoint to check.
   * @returns {Boolean}
   *   `true` if device width is equal or larger than given breakpoint, otherwise `false`.
   */
  isLargerThanOrEqual(breakpoint) {
    return this.isEqual(breakpoint) && this.isLargerThan(breakpoint)
  }

  /**
   * Check if device width is equal or smaller than given breakpoint.
   *
   * @param   {String} breakpoint - Breakpoint to check.
   * @returns {Boolean}
   *   `true` if device width is equal or smaller than given breakpoint, otherwise `false`.
   */
  isSmallerThanOrEqual(breakpoint) {
    return this.isEqual(breakpoint) && this.isSmallerThan(breakpoint)
  }

}

export {
  /**
   * DeviceInfoclass.
   * @see module:base/device~DeviceInfo
   */
  DeviceInfo
}
