/**
 * Global stuff.
 */

import eventHub from './eventHub'

/**
 * Fire event hub event when youtube iframe api is ready.
 */
window.onYouTubeIframeAPIReady = function() {
  eventHub.trigger('apiReady:youtube')
}
