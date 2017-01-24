(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("base", [], factory);
	else if(typeof exports === 'object')
		exports["base"] = factory();
	else
		root["base"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./../variables'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.variables);
    global.check = mod.exports;
  }
})(this, function (exports, _variables) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isArray = isArray;
  exports.isString = isString;
  exports.isUndefined = isUndefined;
  exports.isFunction = isFunction;
  exports.isObject = isObject;
  exports.isNumeric = isNumeric;
  exports.isEmpty = isEmpty;
  exports.isWritable = isWritable;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /**
   * Check if given value is array.
   *
   * @param   {*} value - Value to check.
   * @returns {Boolean}
   */
  function isArray(value) {
    return value && value.constructor === Array;
  }

  /**
   * Check if given value is string.
   *
   * @param   {*} value - Value to check.
   * @returns {Boolean}
   */
  function isString(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == _variables.T_STRING;
  }

  /**
   * Check if given value is undefined.
   *
   * @param   {*} value - Value to check.
   * @returns {Boolean}
   */
  function isUndefined(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === _variables.T_UNDEF;
  }

  /**
   * Check if given value is function.
   *
   * @param   {*} value - Value to check.
   * @returns {Boolean}
   */
  function isFunction(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === _variables.T_FUNCTION;
  }

  /**
   * Check if given value is an object.
   * Note: Arrays and functions are also objects.
   *
   * @param   {*} value - Value to check.
   * @returns {Boolean}
   */
  function isObject(value) {
    return value === Object(value);
  }

  /**
   * Check if given value is numeric.
   *
   * @param   {*} value - Value to check.
   * @returns {Boolean}
   */
  function isNumeric(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === _variables.T_NUMBER && !isNaN(value) && isFinite(value);
  }

  /**
   * Check if given value is empty.
   *
   * @param   {*} value - Value to check.
   * @returns {Boolean}
   */
  function isEmpty(value) {
    // compare value with values considered as empty
    for (var i = 0, len = _variables.CHECK_EMPTY.length; i < len; i++) {
      if (value === _variables.CHECK_EMPTY[i]) {
        return true;
      }
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === _variables.T_OBJECT) {
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          return false;
        }
      }

      return true;
    }

    return false;
  }

  /**
   * Check if an object's property could be overridden.
   *
   * @source riot.js
   * @see https://github.com/riot/riot/blob/master/lib/browser/common/util/check.js
   *
   * @param   {Object} obj -
   * @param   {String} key -
   * @returns {Boolean}
   */
  function isWritable(obj, key) {
    var descriptor = Object.getOwnPropertyDescriptor(obj, key);
    return isUndefined(obj[key]) || descriptor && descriptor.writable;
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.string = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.pxToInt = pxToInt;
  exports.startsWith = startsWith;
  /**
   * String module.
   * @module base/utils/string
   */

  /**
   * Convert px value to number.
   *
   * @param   {String} str - String to convert.
   * @returns {Number}
   */
  function pxToInt(str) {
    return parseInt(str, 10);
  }

  /**
   * Faster String startsWith alternative
   * @param   {String} str - Source string.
   * @param   {String} value - Test string.
   * @returns {Boolean}
   */
  function startsWith(str, value) {
    return str.slice(0, value.length) === value;
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

;(function(window, undefined) {var observable = function(el) {

  /**
   * Extend the original object or create a new empty one
   * @type { Object }
   */

  el = el || {}

  /**
   * Private variables
   */
  var callbacks = {},
    slice = Array.prototype.slice

  /**
   * Public Api
   */

  // extend the el object adding the observable methods
  Object.defineProperties(el, {
    /**
     * Listen to the given `event` ands
     * execute the `callback` each time an event is triggered.
     * @param  { String } event - event id
     * @param  { Function } fn - callback function
     * @returns { Object } el
     */
    on: {
      value: function(event, fn) {
        if (typeof fn == 'function')
          (callbacks[event] = callbacks[event] || []).push(fn)
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Removes the given `event` listeners
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    off: {
      value: function(event, fn) {
        if (event == '*' && !fn) callbacks = {}
        else {
          if (fn) {
            var arr = callbacks[event]
            for (var i = 0, cb; cb = arr && arr[i]; ++i) {
              if (cb == fn) arr.splice(i--, 1)
            }
          } else delete callbacks[event]
        }
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Listen to the given `event` and
     * execute the `callback` at most once
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    one: {
      value: function(event, fn) {
        function on() {
          el.off(event, on)
          fn.apply(el, arguments)
        }
        return el.on(event, on)
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Execute all callback functions that listen to
     * the given `event`
     * @param   { String } event - event id
     * @returns { Object } el
     */
    trigger: {
      value: function(event) {

        // getting the arguments
        var arglen = arguments.length - 1,
          args = new Array(arglen),
          fns,
          fn,
          i

        for (i = 0; i < arglen; i++) {
          args[i] = arguments[i + 1] // skip first argument
        }

        fns = slice.call(callbacks[event] || [], 0)

        for (i = 0; fn = fns[i]; ++i) {
          fn.apply(el, args)
        }

        if (callbacks['*'] && event != '*')
          el.trigger.apply(el, ['*', event].concat(args))

        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    }
  })

  return el

}
  /* istanbul ignore next */
  // support CommonJS, AMD & browser
  if (true)
    module.exports = observable
  else if (typeof define === 'function' && define.amd)
    define(function() { return observable })
  else
    window.observable = observable

})(typeof window != 'undefined' ? window : undefined);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('riot-observable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.riotObservable);
    global.eventHub = mod.exports;
  }
})(this, function (exports, _riotObservable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.globalEventHub = exports.EventHub = undefined;

  var _riotObservable2 = _interopRequireDefault(_riotObservable);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var EventHub = function EventHub() {
    _classCallCheck(this, EventHub);

    (0, _riotObservable2.default)(this);
  };

  var globalEventHub = new EventHub();

  exports.EventHub = EventHub;
  exports.globalEventHub = globalEventHub;
  exports.default = globalEventHub;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('riot-observable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.riotObservable);
    global.features = mod.exports;
  }
})(this, function (exports, _riotObservable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.features = exports.getInstancesByNode = exports.getInstanceByNode = exports.add = exports.reinit = exports.destroy = exports.init = exports.Feature = undefined;

  var _riotObservable2 = _interopRequireDefault(_riotObservable);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var features = {};

  /**
   * Reinitializes features.
   *
   * @param {Node} [container=document.body]
   *   Container element to filter where features should be reinitialized.
   * @param {String} [name=null]
   *   Comma separated string with names of the features
   *   (used by the `data-feature` attribute) which sould be reinitialized.
   */
  function reinit() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    destroy(container, name);
    init(container, name);
  }

  /**
   * Initializes features.
   *
   * @example
   * // initialize all features
   * base.features.init()
   * @example
   * // initialize `feature1` and `feature2` instances inside #wrapper
   * base.features.init(document.getElementById('wrapper'), 'feature1,feature2')
   *
   * @param {Node} [container=document.body] Container element
   *   Container element to filter where features should be initialized.
   * @param {String} [name=null]
   *   Comma separated string with names of the features
   *   (used by the `data-feature` attribute) which sould be initialized.
   */
  function init() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var names = name ? name.split(',') : null;
    var featureNodes = container.querySelectorAll('[data-feature]');

    for (var i = 0, featureNodesLength = featureNodes.length; i < featureNodesLength; i++) {
      var featureNode = featureNodes[i];
      var dataFeatures = featureNode.getAttribute('data-feature').split(',');

      dataFeatures.forEach(function (featureName) {
        featureName = featureName.trim();
        var feature = features[featureName];

        // continue if feature has not been added
        // or name is not whitelisted
        // or is already initialized on this node
        if (!feature || name && names.indexOf(featureName) < 0 || featureNode._baseFeatureInstances && featureNode._baseFeatureInstances[featureName]) return true;

        var instance = new feature.featureClass(featureName, featureNode, feature.options);

        instance.init();
      });
    }
  }

  /**
   * Destroy feature instances.
   *
   * @example
   * // destroy all feature instances
   * base.features.destroy()
   * @example
   * // destroy `feature1` and `feature2` instances inside #wrapper
   * base.features.destroy(document.getElementById('wrapper'), 'feature1,feature2')
   *
   * @param {Node} [container=document.body] Container element
   *   Container element to filter where features should be destroyed.
   * @param {String} [name=null]
   *   Comma separated string with names of the features
   *   (used by the `data-feature` attribute) which sould be initialized.
   */
  function destroy() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var names = name ? name.split(',') : null;
    var featureNodes = container.querySelectorAll('[data-feature]');

    for (var i = 0, featureNodesLength = featureNodes.length; i < featureNodesLength; i++) {
      var featureNode = featureNodes[i];
      var nodeInstances = getInstancesByNode(featureNode);

      for (var featureName in nodeInstances) {
        if (nodeInstances.hasOwnProperty(featureName) && (!name || names.indexOf(featureName) > -1)) {
          nodeInstances[featureName].destroy();
          nodeInstances[featureName] = null;
        }
      }
    }
  }

  /**
   * Add feature
   *
   * @example
   * // add feature `deathStar`
   * base.features.add('deathStar', DeathStar, { destroyAlderaan: true })
   *
   * @param {String} name
   *   Name of the feature used by the `data-feature` attribute.
   * @param {Feature} featureClass
   *   Feature class to initiate.
   * @param {Object} options
   *   Any options to initialize the feature with.
   */
  function add(name, featureClass) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (features[name]) {
      throw new Error('Feature "' + name + '" has been already added!');
    }

    features[name] = { featureClass: featureClass, options: options };
  }

  /**
   * Return all initialized feature instances from given node.
   *
   * @example
   * // get all the feature instances
   * var features = base.features.getInstancesByNode(document.getElementById('deathstar'))
   * // do something with one of the features
   * features.deathStar.destroy()
   *
   * @param {Node} node
   *   Node to return the instances from.
   * @returns {Object|null}
   *   Feature instances indexed by name (used by `data-feature` attribute).
   */
  function getInstancesByNode(node) {
    return node._baseFeatureInstances || null;
  }

  /**
   * Return initialized feature instance from given node and name.
   *
   * @example
   * // get feature instance
   * var deathStar = base.features.getInstancesByNode(document.getElementById('deathstar'), 'deathStar')
   * // do something with the feature
   * deathStar.destroy()
   *
   * @param {Node} node
   *   Node to return the instance from.
   * @param {String} name
   *   Name used by `data-feature` attribute.
   *
   * @returns {module:base/features~Feature|null} Feature instance.
   */
  function getInstanceByNode(node, name) {
    if (!node._baseFeatureInstances) {
      return null;
    }

    return node._baseFeatureInstances[name] || null;
  }

  /**
   * Abstract Feature class.
   * @abstract
   */

  var Feature = function () {

    /**
     * Constructor.
     *
     * @param {String} name
     *   Name of the feature used by the `data-feature` attribute.
     * @param {Node} node
     *   Node the feature belongs to.
     * @param {Object} options
     *   Feature options which can be used for anything.
     */
    function Feature(name, node, options) {
      _classCallCheck(this, Feature);

      if (this.constructor === Feature) {
        throw new Error("Can't instantiate abstract class!");
      }

      (0, _riotObservable2.default)(this);

      this._node = node;
      this._options = options;

      if (!this._node._baseFeatureInstances) {
        this._node._baseFeatureInstances = {};
      }

      this._node._baseFeatureInstances[name] = this;
    }

    /** Return node the feature belongs to. */


    _createClass(Feature, [{
      key: 'init',
      value: function init() {}
    }, {
      key: 'destroy',
      value: function destroy() {}
    }, {
      key: 'node',
      get: function get() {
        return this._node;
      }
    }, {
      key: 'options',
      get: function get() {
        return this._options;
      }
    }]);

    return Feature;
  }();

  exports.Feature = Feature;
  exports.init = init;
  exports.destroy = destroy;
  exports.reinit = reinit;
  exports.add = add;
  exports.getInstanceByNode = getInstanceByNode;
  exports.getInstancesByNode = getInstancesByNode;
  exports.features = features;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.polyfills = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Fixes for shitty browsers.
   * IE, I'm looking at you.
   */

  /*
   * Hack in support for Function.name for browsers that don't support it.
   **/

  if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
    Object.defineProperty(Function.prototype, 'name', {
      get: function get() {
        var funcNameRegex = /function\s([^(]{1,})\(/;
        var results = funcNameRegex.exec(this.toString());
        return results && results.length > 1 ? results[1].trim() : '';
      },
      set: function set(value) {}
    });
  }

  /*
   * Performance polyfill.
   */

  // @license http://opensource.org/licenses/MIT
  // copyright Paul Irish 2015


  // Date.now() is supported everywhere except IE8. For IE8 we use the Date.now polyfill
  //   github.com/Financial-Times/polyfill-service/blob/master/polyfills/Date.now/polyfill.js
  // as Safari 6 doesn't have support for NavigationTiming, we use a Date.now() timestamp for relative values

  // if you want values similar to what you'd get with real perf.now, place this towards the head of the page
  // but in reality, you're just getting the delta between now() calls, so it's not terribly important where it's placed

  if ('performance' in window === false) {
    window.performance = {};
  }

  Date.now = Date.now || function () {
    // thanks IE8
    return new Date().getTime();
  };

  if ('now' in window.performance === false) {
    var nowOffset = Date.now();

    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }

    window.performance.now = function now() {
      return Date.now() - nowOffset;
    };
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(8), __webpack_require__(7), __webpack_require__(9), __webpack_require__(1), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./utils/check'), require('./utils/dom'), require('./utils/device'), require('./utils/func'), require('./utils/string'), require('./utils/url'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.check, global.dom, global.device, global.func, global.string, global.url);
    global.utils = mod.exports;
  }
})(this, function (exports, _check, _dom, _device, _func, _string, _url) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.url = exports.string = exports.func = exports.device = exports.dom = exports.check = undefined;

  var check = _interopRequireWildcard(_check);

  var dom = _interopRequireWildcard(_dom);

  var device = _interopRequireWildcard(_device);

  var func = _interopRequireWildcard(_func);

  var string = _interopRequireWildcard(_string);

  var url = _interopRequireWildcard(_url);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  exports.check = check;
  exports.dom = dom;
  exports.device = device;
  exports.func = func;
  exports.string = string;
  exports.url = url;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./string'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.string);
    global.device = mod.exports;
  }
})(this, function (exports, _string) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DeviceInfo = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var deviceWidth = window.innerWidth;

  /**
   * DeviceInfo class.
   */

  var DeviceInfo = function () {
    function DeviceInfo(options) {
      _classCallCheck(this, DeviceInfo);

      this.breakpoints = options.breakpoints || {};
    }

    /** Return breakpoints. */


    _createClass(DeviceInfo, [{
      key: 'isEqual',
      value: function isEqual(breakpoint) {
        if (!this._breakpoints[breakpoint]) {
          throw new Error('Breakpoint "' + breakpoint + '" doesn\'t exist.');
        }

        return deviceWidth == this._breakpoints[breakpoint];
      }
    }, {
      key: 'isLargerThan',
      value: function isLargerThan(breakpoint) {
        if (!this._breakpoints[breakpoint]) {
          throw new Error('Breakpoint "' + breakpoint + '" doesn\'t exist.');
        }

        return deviceWidth > this._breakpoints[breakpoint];
      }
    }, {
      key: 'isSmallerThan',
      value: function isSmallerThan(breakpoint) {
        if (!this._breakpoints[breakpoint]) {
          throw new Error('Breakpoint "' + breakpoint + '" doesn\'t exist.');
        }

        return deviceWidth < this._breakpoints[breakpoint];
      }
    }, {
      key: 'isLargerThanOrEqual',
      value: function isLargerThanOrEqual(breakpoint) {
        return this.isEqual(breakpoint) && this.isLargerThan(breakpoint);
      }
    }, {
      key: 'isSmallerThanOrEqual',
      value: function isSmallerThanOrEqual(breakpoint) {
        return this.isEqual(breakpoint) && this.isSmallerThan(breakpoint);
      }
    }, {
      key: 'breakpoints',
      get: function get() {
        return this._breakpoints;
      },
      set: function set(breakpoints) {
        var newBreakpoints = {};

        for (var breakpoint in breakpoints) {
          if (breakpoints.hasOwnProperty(breakpoint)) {
            newBreakpoints[breakpoint] = (0, _string.pxToInt)(breakpoints[breakpoint]);
          }
        }

        this._breakpoints = newBreakpoints;
      }
    }]);

    return DeviceInfo;
  }();

  exports.DeviceInfo = DeviceInfo;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(13), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('easing-js/easing'), require('./object'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.easing, global.object);
    global.dom = mod.exports;
  }
})(this, function (exports, _easing, _object) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getComputedStyles = exports.rAF = exports.Scroller = undefined;

  var easingEquations = _interopRequireWildcard(_easing);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  /**
   * Return computed styles
   *
   * @param   {Element} element - Element to get computed style from.
   * @returns {Object} Computed styles
   */
  function getComputedStyles(element) {
    var computedStyle = {},
        styles = {};

    computedStyle = window.getComputedStyle(element, null);

    for (var i = 0, length = computedStyle.length; i < length; i++) {
      var prop = computedStyle[i];
      var val = computedStyle.getPropertyValue(prop);
      styles[prop] = val;
    }

    return styles;
  }

  /**
   * Request animation frame polyfill method.
   *
   * @see https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
   * @see https://developer.mozilla.org/de/docs/Web/API/window/requestAnimationFrame
   */
  var rAF = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  /**
   * Scroller class.
   * Scroll to position or element using custom speeds and easings.
   */

  var Scroller = function () {

    /**
     * Constructor.
     * @param {Object} options
     *   Overwrite the [default options]{@link module:base/utils/dom~Scroller.defaultOptions}.
     */
    function Scroller() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Scroller);

      this._opts = (0, _object.extend)(Scroller.defaultOptions, options);
    }

    /**
     * Scroll to given element.
     *
     * @param {Element} element - Target element.
     * @param {Object} options
     *   Overwrite the [default to options]{@link module:base/utils/dom~Scroller.defaultToOptions}.
     *
     * @returns {module:base/utils/dom~Scroller}
     */


    _createClass(Scroller, [{
      key: 'toElement',
      value: function toElement(element) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var opts = (0, _object.extend)(options, {
          y: element.offsetTop,
          x: element.offsetLeft
        });

        return this.to(opts);
      }
    }, {
      key: 'to',
      value: function to() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var timeX = 0,
            timeY = 0,
            currentTime = 0,
            scrollY = window.scrollY || document.documentElement.scrollTop,
            scrollX = window.scrollX || document.documentElement.scrollLeft;

        var opts = (0, _object.extend)(this._opts, Scroller.defaultToOptions, options),
            scrollTargetX = opts.x,
            scrollTargetY = opts.y;

        if (scrollTargetX) {
          scrollTargetX = scrollTargetX - opts.offsetX;
          scrollTargetX = scrollTargetX < 0 ? 0 : scrollTargetX;

          // determine scroll time for x axis
          timeX = Math.max(opts.minScrollTime, Math.min(Math.abs(scrollX - scrollTargetX) / opts.speed, opts.maxScrollTime));
        }

        if (scrollTargetY) {
          scrollTargetY = scrollTargetY - opts.offsetY;
          scrollTargetY = scrollTargetY < 0 ? 0 : scrollTargetY;

          // determine scroll time for y axis
          timeY = Math.max(opts.minScrollTime, Math.min(Math.abs(scrollY - scrollTargetY) / opts.speed, opts.maxScrollTime));
        }

        var time = Math.max(timeX, timeY);

        // add animation loop
        function tick() {
          currentTime += 1 / 60;

          var p = currentTime / time;
          var t = easingEquations[opts.easing](p);

          var posY = scrollTargetY ? scrollY + (scrollTargetY - scrollY) * t : scrollY;
          var posX = scrollTargetX ? scrollX + (scrollTargetX - scrollX) * t : scrollX;

          if (p < 1) {
            rAF(tick);
            window.scrollTo(posX, posY);
          } else {
            window.scrollTo(scrollTargetX || scrollX, scrollTargetY || scrollY);
            if (opts.cb) opts.cb();
          }
        }

        // call it once to get started
        tick();
        return this;
      }
    }]);

    return Scroller;
  }();

  /**
   * Default scroller options.
   *
   * @type {Object}
   * @property {Number} speed=1000 - Scrolling speed (pixels per second).
   * @property {Number} easing='easeOutSine' - [Easing equation]{@link https://github.com/danro/easing-js/blob/master/easing.js}.
   * @property {Number} offsetX=0 - Offset that is taken away from target x position (e.g. for a fixed sidebar width).
   * @property {Number} offsetY=0 - Offset that is taken away from target y position (e.g. for a fixed header height).
   * @property {Number} minScrollTime=0.1 - Minimum scrolling time.
   * @property {Number} maxScrollTime=0.8 - Maximum scrolling time.
   */
  Scroller.defaultOptions = {
    speed: 1000,
    easing: 'easeOutSine',
    offsetY: 0,
    offsetX: 0,
    minScrollTime: 0.1,
    maxScrollTime: 0.8
  };

  /**
   * Default options for scrolling to methods.
   * These will extend the [default options]{@link module:base/utils/dom~Scroller.defaultOptions}.
   *
   * @type {Object}
   * @property {Number} x=null - Target position on x axis.
   * @property {Number} y=null - Target position on y axis.
   * @property {Function} cb=null - Callback to execute when scrolling has finished.
   */
  Scroller.defaultToOptions = {
    x: null,
    y: null,
    cb: null
  };

  exports.Scroller = Scroller;
  exports.rAF = rAF;
  exports.getComputedStyles = getComputedStyles;
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.func = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.debounce = debounce;
  exports.throttle = throttle;
  /**
   * Function module.
   * @module base/utils/func
   */

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear'
   * that is a function which will clear the timer to prevent previously scheduled executions.
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} func
   *   Function to wrap.
   * @param {Number}   wait
   *   Timeout in ms (`60`).
   * @param {Boolean}  immediate
   *   Whether to execute at the beginning (`false`).
   *
   * @returns {Function}
   *   A new function that wraps the `func` function passed in.
   */
  function debounce(func) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var timeout, args, context, timestamp, result;

    function later() {
      var last = Date.now() - timestamp;

      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }

    var debounced = function debounced() {
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };

    debounced.clear = function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };

    return debounced;
  }

  /**
   * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
   *
   * @param {Function} func
   *   Function to wrap.
   * @param {Number} wait
   *   Number of milliseconds that must elapse between `func` invocations.
   *
   * @returns {Function}
   *   A new function that wraps the `func` function passed in.
   */
  function throttle(func, wait) {
    var ctx, args, rtn, timeoutID; // caching
    var last = 0;

    return function throttled() {
      ctx = this;
      args = arguments;
      var delta = new Date() - last;
      if (!timeoutID) if (delta >= wait) call();else timeoutID = setTimeout(call, wait - delta);
      return rtn;
    };

    function call() {
      timeoutID = 0;
      last = +new Date();
      rtn = func.apply(ctx, args);
      ctx = null;
      args = null;
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./check'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.check);
    global.object = mod.exports;
  }
})(this, function (exports, _check) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.extend = extend;
  exports.cleanEmptyProps = cleanEmptyProps;


  /**
   * Extend any object with other properties.
   *
   * @source riot.js
   * @see https://github.com/riot/riot/blob/master/lib/browser/common/util/misc.js
   *
   * @param   {Object} src - Source object.
   * @returns {Object} The resulting extended object.
   *
   * @example
   * var obj = { foo: 'baz' }
   * extend(obj, {bar: 'bar', foo: 'bar'})
   * console.log(obj) => {bar: 'bar', foo: 'bar'}
   *
   */
  function extend(src) {
    var obj,
        args = arguments;

    for (var i = 1; i < args.length; ++i) {
      if (obj = args[i]) {
        for (var key in obj) {
          // check if this property of the source object could be overridden
          if ((0, _check.isWritable)(src, key)) src[key] = obj[key];
        }
      }
    }

    return src;
  }

  /**
   * Clean empty properties from given object.
   *
   * @param   {Object} src - Source object.
   * @returns {Object}
   */
  /**
   * Object module.
   * @module base/utils/object
   */

  function cleanEmptyProps(src) {
    for (var key in src) {
      if ((0, _check.isWritable)(src, key) && (0, _check.isEmpty)(src[key])) {
        delete src[key];
      }
    }

    return src;
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.url = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getParams = getParams;
  exports.hash = hash;
  /**
   * URL module.
   * @module base/utils/url
   */

  var loc = window.location;
  var query = loc.search;

  /**
   * Initial search parameters.
   * @type {Object}
   */
  var params = exports.params = getParams();

  /**
   * Return search parameters.
   * @returns {Object}
   */
  function getParams() {
    if (query === '') return {};
    return query.slice(1).split('&').reduce(function (a, b) {
      b = b.split('=');
      a[b[0]] = decodeURIComponent(b[1]);
      return a;
    }, {});
  }

  /**
   * Return hash part of given url.
   *
   * @param  {String} [href=window.location] - URL to return the hash from.
   * @returns {String}
   */
  function hash(href) {
    return (href || loc.hash).substring(1);
  }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.variables = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var undef;

  var T_STRING = exports.T_STRING = 'string',
      T_UNDEF = exports.T_UNDEF = 'undefined',
      T_OBJECT = exports.T_OBJECT = 'object',
      T_NUMBER = exports.T_NUMBER = 'number',
      T_FUNCTION = exports.T_FUNCTION = 'function',
      CHECK_EMPTY = exports.CHECK_EMPTY = [undef, null, false, 0, '', '0'];
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// --------------------------------------------------
// easing.js v0.5.4
// Generic set of easing functions with AMD support
// https://github.com/danro/easing-js
// This code may be freely distributed under the MIT license
// http://danro.mit-license.org/
// --------------------------------------------------
// All functions adapted from Thomas Fuchs & Jeremy Kahn
// Easing Equations (c) 2003 Robert Penner, BSD license
// https://raw.github.com/danro/easing-js/master/LICENSE
// --------------------------------------------------
(function (name, definition) {
  /*global define module*/
  if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else if (typeof module != 'undefined') module.exports = definition;
  else this[name] = definition;
}('easing', {
  easeInQuad: function(pos) {
    return Math.pow(pos, 2);
  },

  easeOutQuad: function(pos) {
    return -(Math.pow((pos-1), 2) -1);
  },

  easeInOutQuad: function(pos) {
    if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,2);
    return -0.5 * ((pos-=2)*pos - 2);
  },

  easeInCubic: function(pos) {
    return Math.pow(pos, 3);
  },

  easeOutCubic: function(pos) {
    return (Math.pow((pos-1), 3) +1);
  },

  easeInOutCubic: function(pos) {
    if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,3);
    return 0.5 * (Math.pow((pos-2),3) + 2);
  },

  easeInQuart: function(pos) {
    return Math.pow(pos, 4);
  },

  easeOutQuart: function(pos) {
    return -(Math.pow((pos-1), 4) -1);
  },

  easeInOutQuart: function(pos) {
    if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,4);
    return -0.5 * ((pos-=2)*Math.pow(pos,3) - 2);
  },

  easeInQuint: function(pos) {
    return Math.pow(pos, 5);
  },

  easeOutQuint: function(pos) {
    return (Math.pow((pos-1), 5) +1);
  },

  easeInOutQuint: function(pos) {
    if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,5);
    return 0.5 * (Math.pow((pos-2),5) + 2);
  },

  easeInSine: function(pos) {
    return -Math.cos(pos * (Math.PI/2)) + 1;
  },

  easeOutSine: function(pos) {
    return Math.sin(pos * (Math.PI/2));
  },

  easeInOutSine: function(pos) {
    return (-0.5 * (Math.cos(Math.PI*pos) -1));
  },

  easeInExpo: function(pos) {
    return (pos===0) ? 0 : Math.pow(2, 10 * (pos - 1));
  },

  easeOutExpo: function(pos) {
    return (pos===1) ? 1 : -Math.pow(2, -10 * pos) + 1;
  },

  easeInOutExpo: function(pos) {
    if(pos===0) return 0;
    if(pos===1) return 1;
    if((pos/=0.5) < 1) return 0.5 * Math.pow(2,10 * (pos-1));
    return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
  },

  easeInCirc: function(pos) {
    return -(Math.sqrt(1 - (pos*pos)) - 1);
  },

  easeOutCirc: function(pos) {
    return Math.sqrt(1 - Math.pow((pos-1), 2));
  },

  easeInOutCirc: function(pos) {
    if((pos/=0.5) < 1) return -0.5 * (Math.sqrt(1 - pos*pos) - 1);
    return 0.5 * (Math.sqrt(1 - (pos-=2)*pos) + 1);
  },

  easeOutBounce: function(pos) {
    if ((pos) < (1/2.75)) {
      return (7.5625*pos*pos);
    } else if (pos < (2/2.75)) {
      return (7.5625*(pos-=(1.5/2.75))*pos + 0.75);
    } else if (pos < (2.5/2.75)) {
      return (7.5625*(pos-=(2.25/2.75))*pos + 0.9375);
    } else {
      return (7.5625*(pos-=(2.625/2.75))*pos + 0.984375);
    }
  },

  easeInBack: function(pos) {
    var s = 1.70158;
    return (pos)*pos*((s+1)*pos - s);
  },

  easeOutBack: function(pos) {
    var s = 1.70158;
    return (pos=pos-1)*pos*((s+1)*pos + s) + 1;
  },

  easeInOutBack: function(pos) {
    var s = 1.70158;
    if((pos/=0.5) < 1) return 0.5*(pos*pos*(((s*=(1.525))+1)*pos -s));
    return 0.5*((pos-=2)*pos*(((s*=(1.525))+1)*pos +s) +2);
  },

  elastic: function(pos) {
    return -1 * Math.pow(4,-8*pos) * Math.sin((pos*6-1)*(2*Math.PI)/2) + 1;
  },

  swingFromTo: function(pos) {
    var s = 1.70158;
    return ((pos/=0.5) < 1) ? 0.5*(pos*pos*(((s*=(1.525))+1)*pos - s)) :
    0.5*((pos-=2)*pos*(((s*=(1.525))+1)*pos + s) + 2);
  },

  swingFrom: function(pos) {
    var s = 1.70158;
    return pos*pos*((s+1)*pos - s);
  },

  swingTo: function(pos) {
    var s = 1.70158;
    return (pos-=1)*pos*((s+1)*pos + s) + 1;
  },

  bounce: function(pos) {
    if (pos < (1/2.75)) {
      return (7.5625*pos*pos);
    } else if (pos < (2/2.75)) {
      return (7.5625*(pos-=(1.5/2.75))*pos + 0.75);
    } else if (pos < (2.5/2.75)) {
      return (7.5625*(pos-=(2.25/2.75))*pos + 0.9375);
    } else {
      return (7.5625*(pos-=(2.625/2.75))*pos + 0.984375);
    }
  },

  bouncePast: function(pos) {
    if (pos < (1/2.75)) {
      return (7.5625*pos*pos);
    } else if (pos < (2/2.75)) {
      return 2 - (7.5625*(pos-=(1.5/2.75))*pos + 0.75);
    } else if (pos < (2.5/2.75)) {
      return 2 - (7.5625*(pos-=(2.25/2.75))*pos + 0.9375);
    } else {
      return 2 - (7.5625*(pos-=(2.625/2.75))*pos + 0.984375);
    }
  },

  easeFromTo: function(pos) {
    if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,4);
    return -0.5 * ((pos-=2)*Math.pow(pos,3) - 2);
  },

  easeFrom: function(pos) {
    return Math.pow(pos,4);
  },

  easeTo: function(pos) {
    return Math.pow(pos,0.25);
  }
}));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(6), __webpack_require__(3), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./features'), require('./utils'), require('./eventHub'), require('./polyfills'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.features, global.utils, global.eventHub, global.polyfills);
    global.index = mod.exports;
  }
})(this, function (exports, _features, _utils, _eventHub) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.eventHub = exports.utils = exports.features = undefined;

  var features = _interopRequireWildcard(_features);

  var utils = _interopRequireWildcard(_utils);

  var _eventHub2 = _interopRequireDefault(_eventHub);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  exports.features = features;
  exports.utils = utils;
  exports.eventHub = _eventHub2.default;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=base.js.map