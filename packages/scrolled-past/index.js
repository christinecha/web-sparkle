const ResizeScrollHandler = require('resize-scroll-handler')

class ScrolledPast {
  constructor(offset = 200, $container = document.body) {
    this.$container = $container
    this.offset = offset

    // Any element with this data-attribute will be affected.
    this.$elementsToWatch = Array.prototype.slice.call(this.$container.querySelectorAll('[data-scrolled-past]'))

    // Bind your methods.
    this.updateView = this.updateView.bind(this)
    this.updateData = this.updateData.bind(this)

    // Use ResizeScrollHandler to prevent unnecessary event handling. No long frames!
    this.handler = new ResizeScrollHandler()
    this.handler.on('resize', this.updateData)
    this.handler.on('scroll', this.updateView)

    // Fire off the preliminary handlers.
    this.handler.requestResize()
    this.handler.requestScroll()
  }

  // Store node, starting position (px), ending position (px), and height for each element.
  updateData() {
    this.elements = this.$elementsToWatch.map($element => {
      const elementRect = $element.getBoundingClientRect()
      const start = elementRect.top + this.handler.currentPageYOffset

      return {
        node: $element,
        start: start,
        end: start + elementRect.height,
        height: elementRect.height
      }
    })
  }

  // Update the DOM.
  updateView() {
    this.elements.forEach(el => {
      let adjustedElStart = el.start

      // You can either calculate the offset with a function, or just pass in a number.
      if (typeof this.offset === 'function') adjustedElStart += this.offset(el)
      if (typeof adjustedElStart !== 'number') throw Error('Your `offset` function does not return a number.')

      if (typeof this.offset === 'number') adjustedElStart += this.offset

      // The point at which it's come into view.
      const scrollEntry = adjustedElStart - this.handler.vh
      const scrolledPast = this.handler.currentPageYOffset >= scrollEntry

      // Set the data-attribute!
      el.node.dataset.scrolledPast = scrolledPast.toString()
    })
  }
}

module.exports = ScrolledPast
