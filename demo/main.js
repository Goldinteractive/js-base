// features
import RandomQuote from './features/randomquote'

var app = {

  eventHub: base.eventHub,
  scroll: null,
  device: null,

  init() {

    this
      .initScroller()
      .initDeviceInfo()
      .addFeatures()
      .initFeatures()
  },

  addFeatures() {
    base.features.add('quote', RandomQuote, { count: 1 })
    return this
  },

  initFeatures() {
    base.features.init()
    return this
  },

  initScroller() {
    this.scroll = new base.utils.dom.Scroller()
    return this
  },

  initDeviceInfo() {
    this.device = new base.utils.device.DeviceInfo({
      breakpoints: {
        small: '680px',
        medium: '768px',
        large: '1200px'
      }
    })

    return this
  }

}

app.init()
