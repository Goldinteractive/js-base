/**
 * element-matches module.
 * @module base/polyfills/element-matches
 */

/*
 * Element.matches polyfill
 * from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector
}
