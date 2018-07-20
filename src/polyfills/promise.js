/**
 * promise module.
 * @module base/polyfills/promise
 */

/*
 * Promise polyfill.
 */
import Promise from 'promise-polyfill'

if (!window.Promise) {
  window.Promise = Promise
}
