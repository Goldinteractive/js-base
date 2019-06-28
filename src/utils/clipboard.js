/**
 * Clipboard module.
 * @module base/utils/clipboard
 */

// https://stackoverflow.com/a/5379408
function getSelection() {
  var text = ''
  if (window.getSelection) {
    text = window.getSelection().toString()
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text
  }
  return text
}

function checkSelection(str) {
  return getSelection() === str
}

/**
 * Copies a string to the clipboard.
 * Notice, that this operation *must* be executed upon user
 * interaction.
 * from: https://github.com/Chalarangelo/30-seconds-of-code#copytoclipboard-
 * @param {string} str - text to copy to clipboard
 */
export function copyToClipboard(str) {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false
  el.select()
  if (!checkSelection(str)) {
    // if selection failed, try it another way
    // at the time of writing, iOS devices fail to select text using el.select()
    // this fallback version should only then be used.
    el.setSelectionRange(0, 999999)
  }
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}

export default {
  copyToClipboard
}
