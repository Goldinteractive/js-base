/**
 * Global app event hub.
 * @module base/events
 */

import observable from 'riot-observable'

/**
 * EventHub Class.
 */
class EventHub {
  constructor() {
    observable(this)
  }
}

const globalEventHub = new EventHub()

export {
  /**
   * EventHub Class.
   * @see module:base/events~EventHub
   */
  EventHub,
  globalEventHub
}

export default globalEventHub
