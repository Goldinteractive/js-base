/**
 * Base module.
 * @module base
 */

import polyfills from './polyfills'

import * as features from './features'
import * as utils from './utils'
import eventHub from './eventHub'

export {
  /** Features module. */
  features,
  /** Utility modules. */
  utils,
  /** Global event hub. */
  eventHub
}
