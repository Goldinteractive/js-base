## Base Javascript (Beta)

[![Maintainability](https://api.codeclimate.com/v1/badges/e27773e01724253127fe/maintainability)](https://codeclimate.com/github/Goldinteractive/js-base/maintainability)

Basic javascript foundation written in ES6/2015 Vanilla JS.

* `features`: Feature management system
* `utils`: Various utilities
* `eventHub`: Global event hub

### Dependencies

* [`promise-polyfill`](https://github.com/taylorhakes/promise-polyfill)
* [`whatwg-fetch`](https://github.com/github/fetch)
* [`fetch-jsonp`](https://github.com/camsong/fetch-jsonp)
* [`core-js`](https://github.com/zloirock/core-js)
* [`riot-observable`](https://github.com/riot/observable)
* [`detect-it`](https://github.com/rafrex/detect-it)
* [`easing-js`](https://github.com/danro/easing-js)
* [`qs`](https://github.com/ljharb/qs)

### Installation

Install this package with yarn:

    yarn install @goldinteractive/js-base
  
  or with npm:
    
    npm install @goldinteractive/js-base

After the installation has completed, you can import the complete base module or also just single modules:

```javascript
// import complete library with all modules
import * as base from '@goldinteractive/js-base'

// import just the feature system module
import * as featureSystem from '@goldinteractive/js-base/src/features'
```

### Browser compatibility

* Newest two browser versions of Chrome, Firefox, Safari and Edge
* IE 11 and above

### Development

* `make build` or `npm run build` - Build production version of the library.
* `make dev` or `npm run dev` - Build demo of the library, run a watcher and start browser-sync.
* `make test` or `npm run test` - Test the library.
* `make jsdoc` - Update documentation inside the `docs` folder.
* `make publish-docs` - Deploy the docs branch.

#### Publishing
> Attention! A published version cannot be unpublished from npm. Be careful!

Running the publish script will build the packages and publish the docs. The command uses `yarn publish`. It is therefore not necessary to update the package version manually.

Yarn will automatically commit the changes in `package.json`. So commit all your changes before you publish a new version.

`make publish` - Publish npm package.

