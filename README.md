## Base Javascript (Beta)

Basic javascript foundation written in ES6/2015 Vanilla JS.

* `features`: Feature management system
* `utils`: Various utilities
* `eventHub`: Global event hub


### Installation

Install this package with yarn:

    yarn install gi-js-base
  
  or with npm:
    
    npm install gi-js-base

After the installation has completed, you can import the complete base module or also just single modules:

```javascript
// import complete library with all modules
import * as base from 'gi-js-base'

// import just the feature system module
import * as featureSystem from 'gi-js-base/src/features'
```

or to make the module available as a variable in every module (webpack configuration):

```javascript
plugins: [
  new webpack.ProvidePlugin({
    base: 'gi-base'
  })
]
```


### Browser compatibility

* Newest two browser versions of Chrome, Firefox, Safari and Edge
* IE 9 and above


### Development

* `npm run build` - Build production version of the library.
* `npm run dev` - Build development version of the library and run a watcher.
* `npm run test` - Test the library.
