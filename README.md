## Base Javascript

[![Maintainability](https://api.codeclimate.com/v1/badges/e27773e01724253127fe/maintainability)](https://codeclimate.com/github/Goldinteractive/js-base/maintainability)

Base JavaScript library for web projects.

- `features`: Feature management system
- `utils`: Various utilities
- `eventHub`: Global event hub

Check out the [docs](https://goldinteractive.github.io/js-base/) for more information about all the included features.

### Dependencies

- [`promise-polyfill`](https://github.com/taylorhakes/promise-polyfill)
- [`whatwg-fetch`](https://github.com/github/fetch)
- [`fetch-jsonp`](https://github.com/camsong/fetch-jsonp)
- [`core-js`](https://github.com/zloirock/core-js)
- [`riot-observable`](https://github.com/riot/observable)
- [`easing-js`](https://github.com/danro/easing-js)
- [`qs`](https://github.com/ljharb/qs)
- [`tiny-invariant`](https://github.com/alexreardon/tiny-invariant)

### Installation

The package is available on npm: `@goldinteractive/js-base`

After the installation has completed, you can import the complete base module or also just single modules:

```javascript
// import complete library with all modules
import * as base from '@goldinteractive/js-base'

// import just the feature system module
import * as featureSystem from '@goldinteractive/js-base/src/features'
```

### Browser compatibility

- Newest two browser versions of Chrome, Firefox, Safari and Edge
- IE 11 and above

### Development

- `make build` - Build production version of the library.
- `make test` - Run Jest unit tests.
- `make docs` - Update documentation inside the `docs` folder.
- `make publish-docs` - Deploy the docs branch.

#### Publishing

> Attention! A published version cannot be unpublished from npm. Be careful!

Running the publish script will build the packages and publish the docs. The command uses `yarn publish`. It is therefore not necessary to update the package version manually.

Yarn will automatically commit the changes in `package.json`. So commit all your changes before you publish a new version.

`make publish` - Publish npm package.
