// Nodelist iterator polyfill - required for IE11
// used when spreading NodeList ([...$elements])
if (!NodeList.prototype[Symbol.iterator]) {
  NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
}
