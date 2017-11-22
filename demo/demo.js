import * as base from './../src'

import { Scroller } from './../src/utils/dom'

let scroll = new Scroller()
let scrollInnerDiv = new Scroller({ rootElement: document.getElementById('test' )})

scrollInnerDiv.to({y: 100})

window.setTimeout(() => {
  scroll.to({y: 200})
}, 1000)

class Test extends base.features.Feature {

  init() {
    this.node.innerHTML = this.options.content

    this.onHub('globalEvent', () => {
      alert('test')
    })

    this.on('featuresInitialized', () => {
      console.log('all features initialized')
    })

    this.addEventListener(this.$$('b'), 'click', () => {
      alert('Test')
    })

    this.addEventListener(this.node, 'click', () => {
      alert('Foo')
    })

    // console.log(this)
  }

  destroy() {
    super.destroy()
    console.log('feature destroyed')
  }

}

Test.defaultOptions = {
  content: 'Hello World!'
}

class Body extends base.features.Feature {

    init() {
      console.log('body')
    }

}

base.features.add('body', Body)
base.features.add('test', Test, { content: 'Hello <b>You</b>!' })
base.features.init()

console.log(base)
window.base = base

console.log(base.utils.dom.siblings(document.body.firstChild).length)
console.log(base.utils.dom.children(document.body).length)
console.log(base.utils.dom.parents(document.body.firstChild.firstChild))

base.features.destroy()
