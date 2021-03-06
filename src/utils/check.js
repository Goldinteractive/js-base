/**
 * Check module.
 * @module base/utils/check
 */

import {
  T_STRING,
  T_UNDEF,
  T_OBJECT,
  T_NUMBER,
  T_FUNCTION,
  EMPTY_DEFINITIONS
} from './../variables'

/**
 * Check if given value is string.
 *
 * @param   {*} value - Value to check.
 * @returns {Boolean}
 */
export function isString(value) {
  return typeof value == T_STRING
}

/**
 * Check if given value is undefined.
 *
 * @param   {*} value - Value to check.
 * @returns {Boolean}
 */
export function isUndefined(value) {
  return typeof value === T_UNDEF
}

/**
 * Check if given value is function.
 *
 * @param   {*} value - Value to check.
 * @returns {Boolean}
 */
export function isFunction(value) {
  return typeof value === T_FUNCTION
}

/**
 * Check if given value is an object.
 * Note: Arrays and functions are also objects.
 *
 * @param   {*} value - Value to check.
 * @returns {Boolean}
 */
export function isObject(value) {
  return value === Object(value)
}

/**
 * Check if given value is numeric.
 *
 * @param   {*} value - Value to check.
 * @returns {Boolean}
 */
export function isNumeric(value) {
  return typeof value === T_NUMBER && !isNaN(value) && isFinite(value)
}

/**
 * Check whether the given param is a valid element node.
 *
 * @param   {*} value - Value to check
 * @returns {Boolean}
 */
export function isElement(value) {
  if (!value || !value.nodeType) {
    return false
  }

  return (
    value.nodeType === Node.ELEMENT_NODE ||
    value.nodeType === Node.DOCUMENT_NODE
  )
}

/**
 * Check if given value is empty.
 *
 * @param   {*} value - Value to check.
 * @returns {Boolean}
 */
export function isEmpty(value) {
  // compare value with values considered as empty
  for (let i = 0, len = EMPTY_DEFINITIONS.length; i < len; i++) {
    if (value === EMPTY_DEFINITIONS[i]) {
      return true
    }
  }

  if (typeof value === T_OBJECT) {
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        return false
      }
    }

    return true
  }

  return false
}

/**
 * Check if an object's property could be overridden.
 *
 * @source riot.js
 * @see https://github.com/riot/riot/blob/master/lib/browser/common/util/check.js
 *
 * @param   {Object} obj -
 * @param   {String} key -
 * @returns {Boolean}
 */
export function isWritable(obj, key) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, key)
  return isUndefined(obj[key]) || (descriptor && descriptor.writable)
}

export default {
  isString,
  isUndefined,
  isFunction,
  isObject,
  isNumeric,
  isElement,
  isEmpty,
  isWritable
}
