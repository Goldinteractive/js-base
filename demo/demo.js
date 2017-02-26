import * as base from './../src'

class Test extends base.features.Feature {

  init() {
    this.node.innerHTML = this.options.content

    this.on('featuresInitialized', () => {
      console.log('all features initialized')
    })

    this.addEventListener(this.$$('b'), 'click', () => {
      alert('Test')
    })

    this.addEventListener(this.node, 'click', () => {
      alert('Foo')
    })
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

base.features.destroy()
