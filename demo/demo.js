import * as base from './../src'

class Test extends base.features.Feature {

  init() {
    this.node.innerHTML = 'Hello World!'
  }

}

base.features.add('test', Test)
base.features.init()
