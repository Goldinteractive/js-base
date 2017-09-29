/**
 * Media module.
 * @module base/utils/media
 */

import eventHub from '../eventHub'

/**
 * Flag whether youtube api has been loaded yet.
 * @var {Boolean}
 */
export var youtubeApiLoaded = false

/**
 * Check whether a media element is playing.
 *
 * @param   {HTMLMediaElement} media - Video or audio element
 * @returns {Boolean} Whether the media element is currently playing.
 */
export function isPlaying(media) {
  return media.currentTime > 0
    && !media.paused
    && !media.ended
    && media.readyState >= media.HAVE_CURRENT_DATA
}

eventHub.on('apiReady:youtube', () => youtubeApiLoaded = true)

export default {
  youtubeApiLoaded,
  isPlaying
}
