/**
 * Features module.
 * @module base/features
 */

var features = {}

/**
 * Reinitializes features.
 *
 * @param {Node} [container=document.body]
 *   Container element to filter where features should be reinitialized.
 * @param {String} [name=null]
 *   Comma separated string with names of the features
 *   (used by the `data-feature` attribute) which sould be reinitialized.
 */
function reinit(container = document.body, name = null) {
  destroy(container, name)
  init(container, name)
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
function init(container = document.body, name = null) {
  var names = name ? name.split(',') : null
  var featureNodes = container.querySelectorAll('[data-feature]')

  for (let i = 0, featureNodesLength = featureNodes.length; i < featureNodesLength; i++) {
    var featureNode = featureNodes[i]
    var dataFeatures = featureNode.getAttribute('data-feature').split(',')

    dataFeatures.forEach(function(featureName) {
      featureName = featureName.trim()
      var feature = features[featureName]

      // continue if feature has not been added
      // or name is not whitelisted
      // or is already initialized on this node
      if (!feature
          || (name && names.indexOf(featureName) < 0)
          || (featureNode._baseFeatureInstances
              && featureNode._baseFeatureInstances[featureName])) return true

      var instance = new feature.featureClass(
        featureName, featureNode, feature.options
      )

      instance.init()
    })
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
function destroy(container = document.body, name = null) {
  var names = name ? name.split(',') : null
  var featureNodes = container.querySelectorAll('[data-feature]')

  for (let i = 0, featureNodesLength = featureNodes.length; i < featureNodesLength; i++) {
    var featureNode = featureNodes[i]
    var nodeInstances = getInstancesByNode(featureNode)

    for (let featureName in nodeInstances) {
      if (nodeInstances.hasOwnProperty(featureName)
          && (!name || names.indexOf(featureName) > -1)
      ) {
        nodeInstances[featureName].destroy()
        nodeInstances[featureName] = null
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
function add(name, featureClass, options = {}) {
  if (features[name]) {
    throw new Error('Feature "'+ name +'" has been already added!')
  }

  features[name] = { featureClass, options }
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
  return node._baseFeatureInstances || null
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
    return null
  }

  return node._baseFeatureInstances[name] || null
}


/**
 * Abstract Feature class.
 * @abstract
 */
class Feature {

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
    if (this.constructor === Feature) {
      throw new Error("Can't instantiate abstract class!")
    }

    this._node = node
    this._options = options

    if (!this._node._baseFeatureInstances) {
      this._node._baseFeatureInstances = {}
    }

    this._node._baseFeatureInstances[name] = this
  }

  /** Return node the feature belongs to. */
  get node() { return this._node }

  /** Return given options the feature has been initialized with. */
  get options() { return this._options }

  /** Initialize feature. */
  init() {}

  /** Destroy feature. */
  destroy() {}

}


export {
  /**
   * Feature class.
   * @see module:base/features~Feature
   */
  Feature,

  init, destroy, reinit, add,
  getInstanceByNode,
  getInstancesByNode,

  /**
   * Features added to current site.
   * @type {Object}
   */
  features
}
