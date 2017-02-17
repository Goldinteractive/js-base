/**
 * Base module.
 * @module base
 */

import './polyfills'

import { default as features } from './features'
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
