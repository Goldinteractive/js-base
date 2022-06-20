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


let globalEventHub = window.gi_jsbase_eventHub
if (!globalEventHub) {
 window.gi_jsbase_eventHub = globalEventHub = new EventHub()
}

export {
  /**
   * EventHub Class.
   * @see module:base/events~EventHub
   */
  EventHub,
  globalEventHub
}

export default globalEventHub
