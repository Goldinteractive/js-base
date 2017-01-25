import * as base from './../src'

class Test extends base.features.Feature {

  init() {
    this.node.innerHTML = this.options.content

    this.addEventListener(this.node, 'click', () => {
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

base.features.add('test', Test, { content: 'Hello You!' })
base.features.init()

base.features.destroy()
