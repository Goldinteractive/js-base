/**
 * Base module.
 * @module base
 */

import './init-dom'

import './polyfills'

import features from './features'
import utils from './utils'
import eventHub from './eventHub'

export {
  /** Features module. */
  features,
  /** Utility modules. */
  utils,
  /** Global event hub. */
  eventHub
}
