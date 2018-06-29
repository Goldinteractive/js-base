/**
 * Base module.
 * @module base
 */

document.documentElement.classList.remove('no-js')
document.documentElement.classList.add('js')

import './polyfills'

import features from './features'
import utils from './utils'
import eventHub from './eventHub'

var paths = {
  assets: 'assets'
}

export {
  paths,
  /** Features module. */
  features,
  /** Utility modules. */
  utils,
  /** Global event hub. */
  eventHub
}
