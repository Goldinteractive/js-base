import * as base from './../src'

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
    console.log('test')
  }

}

Test.defaultOptions = {
  content: 'Hello World!'
}

base.features.add('test', Test, { content: 'Hello <b>You</b>!' })
base.features.init()

console.log(base)
window.base = base

console.log(base.utils.dom.siblings(document.body.firstChild).length)
console.log(base.utils.dom.children(document.body).length)
console.log(base.utils.dom.parents(document.body.firstChild.firstChild))

base.features.destroy()
