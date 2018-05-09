/**
 * Copies a string to the clipboard.
 * Notice, that this operation *must* be executed upon user
 * interaction.
 * from: https://github.com/Chalarangelo/30-seconds-of-code#copytoclipboard-
 * @param {string} str - text to copy to clipboard
 */
export const copyToClipboard = str => {
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
