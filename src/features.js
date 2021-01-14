/**
 * Features module.
 * @module base/features
 */

import invariant from 'tiny-invariant'
import observable from 'riot-observable'
import { isElement } from './utils/check'
import eventHub from './eventHub'
import { supportsPassiveEvents } from './utils/device'

import {
  ATTR_FEATURES_SEPARATOR,
  ATTR_FEATURES,
  ATTR_FEATURES_IGNORE,
  FEATURES_MAIN_BUNDLE,
  ATTR_EXTERNAL_SCRIPT,
} from './variables'

let data = {
  features: {},
  lazyFeaturesLoaded: {},
  lazyFeaturesLoading: {},
  sharedOptions: {},
}

const globalWindowVariable = '_goldFeatures' // window._goldFeatures

if (window[globalWindowVariable]) {
  data = window[globalWindowVariable]
} else {
  window[globalWindowVariable] = data
}

/**
 * Default initialization options.
 *
 * @type {Object}
 * @property {Boolean} justChildNodes=false
 *   Set to true if you don't want to initialize the features of the container node.
 * @property {Boolean} lazy=true
 *   Set to false if you don't want to initialize any features lazy
 * @property {Object} lazyBundles={}
 *   Add object with all the bundles
 * @property {String} assetPath=null
 *   Add path to the feature-init files ("assets/")
 */
export const defaultInitOptions = {
  justChildNodes: false,
  lazy: true,
  lazyBundles: {},
  assetPath: null
}

/**
 * Default destroy options.
 *
 * @type {Object}
 * @property {Boolean} justChildNodes=false
 *   Set to true if you don't want to destroy the features of the container node.
 */
export const defaultDestroyOptions = {
  justChildNodes: false,
}

/**
 * Save shared option to data.sharedOptions.
 *
 * @param {String} [name]
 *   String with name under which the option will be saved
 *
 * @param {Any} [value]
 *   Value that the option controls (can be of any type)
 */
export function setSharedOption(name, value) {
  if (typeof name !== 'string') {
    throw Error('"name" needs to be a string!')
  }
  data.sharedOptions[name] = value
}

/**
 * Return an entry from data.sharedOptions
 *
 * @param {String} [name]
 *   String with name under which the option was saved
 *
 * @example
 * // get shared option
 * const deviceOption = base.features.getSharedOption('device')
 *
 * @returns {Any} Shared option
 */
export function getSharedOption(name) {
  if (name && data.sharedOptions.hasOwnProperty(name)) {
    return data.sharedOptions[name]
  }
  return null
}

/**
 * Lazyloads features based on the bundles provided.
 *
 * @param {Object} [bundles={}]
 *  Object containing all the feature-bundles
 * @param {String} [assetPath=null]
 */
export function lazyload(bundles, assetPath) {
  if (!bundles || !assetPath) {
    throw Error('Cannot lazyload features without a bundles file or a path!')
  }

  let optimizedFeatureBundles = {}
  let bundlesToLoad = []
  let features = getFeatures()

  for (const key of Object.keys(bundles)) {
    if (!data.lazyFeaturesLoaded.hasOwnProperty(key)) {
      data.lazyFeaturesLoaded[key] = key === FEATURES_MAIN_BUNDLE ? true : false
    }
    if (!data.lazyFeaturesLoading.hasOwnProperty(key)) {
      data.lazyFeaturesLoading[key] = false
    }
    bundles[key].forEach((item) => {
      optimizedFeatureBundles[item] = key
    })
  }

  features.forEach((feature) => {
    let bundle = optimizedFeatureBundles[feature]
    if (!optimizedFeatureBundles.hasOwnProperty(feature)) {
      console.warn('Feature not found in any bundle: ' + feature)
    } else if (
      !data.lazyFeaturesLoaded[bundle] &&
      !data.lazyFeaturesLoading[bundle]
    ) {
      data.lazyFeaturesLoading[bundle] = true
      bundlesToLoad.push(bundle)
    }
  })

  bundlesToLoad.forEach((bundle) => {
    let el = document.createElement('script')
    el.setAttribute('src', assetPath + bundle + '.js')
    document.head.appendChild(el)
    el.onload = () => {
      data.lazyFeaturesLoaded[bundle] = true
      data.lazyFeaturesLoading[bundle] = false
    }
  })
}

/**
 * Load any external scripts that are needed by the currently loaded features.
 */
export function loadExternals() {
  let scripts = []
  let features = getFeatures()
  let elements = document.querySelectorAll(`[${ATTR_EXTERNAL_SCRIPT}]`)

  elements.forEach(el => {
    let item = {}
    item.initialized = false
    item.url = el.dataset.url
    item._instance = el
    item.features = el.dataset.featureDependency.split(`${ATTR_FEATURES_SEPARATOR}`)
    scripts.push(item)
  })

  features.forEach(feature => {
    scripts.forEach(script => {
      if (script.features.includes(feature) && !script.initialized) {
        script._instance.setAttribute('src', script.url)
        script.initialized = true
      }
    })
  })
}

/**
 * Reinitializes features.
 *
 * @param {Node} [container=document.body]
 *   Container element to filter where features should be reinitialized.
 * @param {String} [name=null]
 *   Comma separated string with names of the features
 *   (used by the `data-feature` attribute) which should be reinitialized.
 */
export function reinit(container = document.body, name = null, options = {}) {
  options = Object.assign({}, defaultInitOptions, options)
  destroy(container, name)
  init(container, name, options)
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
 *   (used by the `data-feature` attribute) which should be initialized.
 * @param {Object} [options={}]
 *   Further initialize options to overwrite the [default ones]{@link module:base/features.defaultInitOptions}.
 *
 * @returns {Array} Initialized feature instances.
 */
export function init(container = document.body, name = null, options = {}) {
  options = Object.assign({}, defaultInitOptions, options)

  const instances = []
  const names = name ? name.split(ATTR_FEATURES_SEPARATOR) : null
  const featureNodes = [...container.querySelectorAll(`[${ATTR_FEATURES}]`)]

  if (options.lazy) {
    lazyload(options.lazyBundles, options.assetPath)
  }

  loadExternals()

  if (!options.justChildNodes && container.getAttribute(ATTR_FEATURES)) {
    featureNodes.push(container)
  }

  eventHub.trigger('features:initialize', {
    container: container,
    names: names,
    nodes: featureNodes
  })

  featureNodes.forEach(featureNode => {
    const nodeInstances = []
    const dataFeatures = featureNode
      .getAttribute(ATTR_FEATURES)
      .split(ATTR_FEATURES_SEPARATOR)
    const ignoreFeatures = (
      featureNode.getAttribute(ATTR_FEATURES_IGNORE) || ''
    ).split(ATTR_FEATURES_SEPARATOR)

    dataFeatures.forEach(function(featureName) {
      featureName = featureName.trim()
      const feature = data.features[featureName]

      if (
        !feature || // feature has not been added yet
        (ignoreFeatures && ignoreFeatures.indexOf(featureName) > -1) || // feature is ignored on this node
        (name && names.indexOf(featureName) < 0) || // name is not whitelisted
        (featureNode._baseFeatureInstances && // feature has already been initalized on this node
          featureNode._baseFeatureInstances[featureName])
      )
        return

      const instance = new feature.featureClass(
        featureName,
        featureNode,
        feature.options
      )

      instance.init()
      instances.push(instance)
      nodeInstances.push(instance)
    })

    // trigger event on all instances
    nodeInstances.forEach(function(nodeInstance) {
      nodeInstance.trigger('featuresInitialized', nodeInstances)
    })
  })

  eventHub.trigger('features:initialized', {
    container: container,
    names: names,
    nodes: featureNodes,
    instances: instances
  })

  return instances
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
 *   (used by the `data-feature` attribute) which should be initialized.
 * @param {Object} [options={}]
 *   Further destroy options to overwrite the [default ones]{@link module:base/features.defaultDestroyOptions}.
 */
export function destroy(container = document.body, name = null, options = {}) {
  options = Object.assign({}, defaultDestroyOptions, options)

  const names = name ? name.split(ATTR_FEATURES_SEPARATOR) : null
  const featureNodes = [...container.querySelectorAll(`[${ATTR_FEATURES}]`)]

  if (!options.justChildNodes && container.getAttribute(ATTR_FEATURES)) {
    featureNodes.push(container)
  }

  eventHub.trigger('features:destroy', {
    container: container,
    names: names,
    nodes: featureNodes
  })

  featureNodes.forEach(featureNode => {
    const nodeInstances = getInstancesByNode(featureNode)
    const ignoreFeatures = (
      featureNode.getAttribute(ATTR_FEATURES_IGNORE) || ''
    ).split(ATTR_FEATURES_SEPARATOR)

    for (let featureName in nodeInstances) {
      if (
        nodeInstances.hasOwnProperty(featureName) &&
        (!name || names.indexOf(featureName) > -1) && // name is whitelisted
        (!ignoreFeatures || ignoreFeatures.indexOf(featureName) < 0) && // feature is ignore on this node
        (featureNode._baseFeatureInstances && // feature instance exists
          featureNode._baseFeatureInstances[featureName])
      ) {
        nodeInstances[featureName].destroy()
        nodeInstances[featureName] = null
      }
    }
  })

  eventHub.trigger('features:destroyed', {
    container: container,
    names: names,
    nodes: featureNodes
  })
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
export function add(name, featureClass, options = {}) {
  const isFeatureNameAvailable = !data.features[name]
  invariant(isFeatureNameAvailable, `Feature "${name}" has been already added!`)

  data.features[name] = { featureClass, options }
}

/**
 * Return all initialized feature instances from given node.
 *
 * @example
 * // get all the feature instances
 * const features = base.features.getInstancesByNode(document.getElementById('deathstar'))
 * // do something with one of the features
 * features.deathStar.destroy()
 *
 * @param {Node} node
 *   Node to return the instances from.
 * @returns {Object|null}
 *   Feature instances indexed by name (used by `data-feature` attribute).
 */
export function getInstancesByNode(node) {
  return node._baseFeatureInstances || null
}

/**
 * Return initialized feature instance from given node and name.
 *
 * @example
 * // get feature instance
 * const deathStar = base.features.getInstancesByNode(document.getElementById('deathstar'), 'deathStar')
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
export function getInstanceByNode(node, name) {
  if (!node._baseFeatureInstances) {
    return null
  }

  return node._baseFeatureInstances[name] || null
}

/**
 * Return array of all the data-feature identifiers found in the DOM (removes duplicates)
 *
 * @example
 * // get features
 * const featureList = base.features.getFeatures()
 *
 * @returns {Array|null} Array of feature identifiers.
 */
export function getFeatures() {
  let features = []
  let elements = document.querySelectorAll(`[${ATTR_FEATURES}]`)

  elements.forEach((item) => {
    let feature = item.getAttribute(ATTR_FEATURES)

    if (feature.includes(ATTR_FEATURES_SEPARATOR)) {
      let featureArray = feature.split(`${ATTR_FEATURES_SEPARATOR} `)
      featureArray.forEach((f) => {
        if (!features.includes(f)) {
          features.push(f)
        }
      })
    } else {
      if (!features.includes(feature)) {
        features.push(feature)
      }
    }
  })

  return features
}

/**
 * Abstract Feature class.
 * @abstract
 */
export class Feature {
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
  constructor(name, node, options) {
    invariant(this.constructor !== Feature, "Can't instantiate abstract class!")

    observable(this)

    const defaultOptions = this.constructor.defaultOptions || {}

    this._name = name
    this._node = node
    this._options = Object.assign({}, defaultOptions, options)

    this._hubEvents = {}
    this._eventListener = {}

    if (!this._node._baseFeatureInstances) {
      this._node._baseFeatureInstances = {}
    }

    this._node._baseFeatureInstances[name] = this
  }

  /**
   * Return name the feature has been initialized with.
   * @returns {String}
   */
  get name() {
    return this._name
  }

  /**
   * Return node the feature belongs to.
   * @returns {Node}
   */
  get node() {
    return this._node
  }

  /**
   * Replaces current feature node with given one.
   * @param {Node} node - Replacement node.
   * @returns {Node}
   */
  replaceNode(node) {
    const replacedNode = this._node.parentElement.replaceChild(node, this._node)
    this._node = node
    return replacedNode
  }

  /**
   * Return given options the feature has been initialized with.
   * @returns {Object}
   */
  get options() {
    return this._options
  }

  /**
   * Return first element by given selector inside the feature node.
   *
   * @param   {String} selector - CSS selector
   * @returns {Element}
   */
  $(selector) {
    return this._node.querySelector(selector)
  }

  /**
   * Return all elements by given selector inside the feature node as array.
   *
   * @param   {String} selector - CSS selector
   * @returns {Element[]}
   */
  $$(selector) {
    return [...this._node.querySelectorAll(selector)]
  }

  /**
   * Add event listener to given node.
   *
   * @param {Node|NodeList} node - Node to add event listener to.
   * @param {String} type - Event type to add.
   * @param {Function} fn - Event handler
   * @param {Object|Boolean} options - Event handler options
   */
  addEventListener(node, type, fn, options = {}) {
    if (!isElement(node) && node !== window) {
      let currentNode = node.length
      while (currentNode--) {
        this.addEventListener(node[currentNode], type, fn, options)
      }
      return
    }

    options = Object.assign({}, Feature.defaultEventListenerOptions, options)

    if (supportsPassiveEvents()) {
      node.addEventListener(type, fn, options)
    } else {
      node.addEventListener(type, fn, options.capture)
    }

    if (!this._eventListener[type]) {
      this._eventListener[type] = []
    }

    this._eventListener[type].push({ node, fn })
  }

  /**
   * Remove event listener from given node.
   *
   * @param {Node|NodeList} node
   *   Node to remove the event listener from.
   * @param {String|null} [type=null]
   *   Event type to remove (leave empty to remove listeners of all event types).
   * @param {Function|null} [fn=null]
   *   Handler to remove (leave empty to remove all listeners).
   */
  removeEventListener(node, type = null, fn = null) {
    if (!isElement(node) && node !== window) {
      let currentNode = node.length
      while (currentNode--) {
        this.removeEventListener(node[currentNode], type, fn)
      }
      return
    }

    if (type && fn) {
      node.removeEventListener(type, fn)

      this._eventListener[type].forEach((listener, i) => {
        if (node == listener.node && fn == listener.fn) {
          this._eventListener[type].splice(i, 1)
        }
      })
    } else if (type) {
      this._eventListener[type].forEach((listener, i) => {
        if (node == listener.node) {
          node.removeEventListener(type, listener.fn)
          this._eventListener[type].splice(i, 1)
        }
      })
    } else if (fn) {
      this.removeAllEventListener(node, fn)
    } else {
      this.removeAllEventListener(node)
    }
  }

  /**
   * Remove all listeners added by this feature.
   *
   * @param {Node|null} [node=null]
   *   Limit removing event listeners on given node.
   * @param {Function|null} [fn=null]
   *   Limit removing event listeners on given handler.
   */
  removeAllEventListener(node = null, fn = null) {
    if (node && !isElement(node) && node !== window) {
      let currentNode = node.length
      while (currentNode--) {
        this.removeAllEventListener(node[currentNode], fn)
      }
      return
    }

    for (let type in this._eventListener) {
      if (this._eventListener.hasOwnProperty(type)) {
        this._eventListener[type].forEach(listener => {
          if ((!node || node == listener.node) && (!fn || fn == listener.fn)) {
            listener.node.removeEventListener(type, listener.fn)
          }
        })
      }
    }

    // reset internal references to event listeners
    this._eventListener = {}
  }

  /**
   * Emit event to global event hub.
   * @param {string} event name
   * @param  {...any} args arguments to pass to event hub
   */
  triggerHub(event, ...args) {
    eventHub.trigger(event, ...args)
  }

  /**
   * Add event to global event hub.
   * @param {string} event name
   * @param {function} fn function to call
   */
  onHub(event, fn) {
    eventHub.on(event, fn)

    if (!this._hubEvents[event]) {
      this._hubEvents[event] = []
    }

    this._hubEvents[event].push(fn)
  }

  /**
   * Remove event from global event hub.
   * @param {string} event name
   * @param {function} fn function to remove
   */
  offHub(event, fn = null) {
    if (event && fn) {
      eventHub.off(event, fn)

      this._hubEvents[event].forEach((listener, i) => {
        if (fn == listener) {
          this._hubEvents[event].splice(i, 1)
        }
      })
    } else if (event) {
      this._hubEvents[event].forEach((listener, i) => {
        eventHub.off(event, listener)
        this._hubEvents[event].splice(i, 1)
      })
    }
  }

  /**
   * Remove all events from global event hub added by this feature.
   */
  offAllHub() {
    for (let event in this._hubEvents) {
      if (this._hubEvents.hasOwnProperty(event)) {
        this._hubEvents[event].forEach(listener => {
          eventHub.off(event, listener)
        })
      }
    }

    // reset internal referencens to hub events
    this._hubEvents = {}
  }

  /**
   * Initialize feature instance.
   */
  init() {}

  /**
   * Destroy feature instance.
   */
  destroy() {
    this.trigger('destroy')

    // remove all registered event listeners
    this.removeAllEventListener()

    // remove all events from global event hub
    this.offAllHub()

    // remove feature instance from node
    this._node._baseFeatureInstances[name] = null
    delete this._node._baseFeatureInstances[name]

    // clean up properties
    this._name = null
    this._node = null
    this._options = null

    this.trigger('destroyed')
  }
}

Feature.defaultEventListenerOptions = {
  passive: false,
  capture: false,
  once: false
}

const features = data.features

export default {
  /**
   * Feature class.
   * @type {Class}
   * @see module:base/features~Feature
   */
  Feature,

  init,
  destroy,
  reinit,
  add,
  lazyload,
  getInstanceByNode,
  getInstancesByNode,
  setSharedOption,
  getSharedOption,
  getFeatures,

  /**
   * All relevant data (added features, relevant shared options, loading-status of bundles).
   * @type {Object}
   */
  data,

  /**
   * Features added to current site.
   * @type {Object}
   */
  features,
}
