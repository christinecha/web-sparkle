/**
 * ResizeScrollHandler
 * ----
 * A bare-bones class that handles scroll and resize events in a simple, performant way.
 **/

class ResizeScrollHandler {
  constructor() {
    // Bind methods.
    this.requestScroll = this.requestScroll.bind(this)
    this.requestResize = this.requestResize.bind(this)
    this.handleScroll  = this.handleScroll.bind(this)
    this.handleResize  = this.handleResize.bind(this)
    this.on            = this.on.bind(this)

    // States.
    this.isTicking = false
    this.vw = window.innerWidth
    this.vh = window.innerHeight
    this.lastPageYOffset = 0
    this.currentPageYOffset = window.pageYOffset

    // Add event listeners.
    // You should never have to add another listener to resize or scroll.
    // Instead, you should just tack on to the pre-existing listeners.
    window.addEventListener('resize', this.requestResize)
    window.addEventListener('scroll', this.requestScroll)
  }

  /*---------------------------------
  HANDLE SCROLL AND RESIZE
  ---------------------------------*/
  requestTick(e, callback) {

    // Prevent long frames.
    if (this.ticking) return

    requestAnimationFrame(() => {
      // Run callback method.
      if (callback && typeof callback === 'function') callback(e)

      // Okay, ready for the next one! Reset.
      this.ticking = false
    })

    this.ticking = true
  }

  requestResize(e) {
    this.requestTick(e, this.handleResize)
  }

  requestScroll(e) {
    this.requestTick(e, this.handleScroll)
  }

  handleResize(e) {
    // Resize callbacks

    // NOTE: This should be the ONLY PLACE you ever ask for window dimensions!
    // Asking for window.innerWidth & window.innerHeight forces a reflow.
    this.vw = window.innerWidth
    this.vh = window.innerHeight
  }

  handleScroll(e) {
    // Scroll callbacks

    // NOTE: This should be the ONLY PLACE you ever ask for window.pageYOffset!
    // Asking for window.pageYOffset forces a reflow.
    this.lastPageYOffset = this.currentPageYOffset
    this.currentPageYOffset = window.pageYOffset
  }

  on(type, fn) {
    let fnName

    if (type === 'resize') fnName = 'handleResize'
    else if (type === 'scroll') fnName = 'handleScroll'
    else throw Error('That event type is not handled here.')

    const oldFn = this[fnName]
    const newFn = () => {
      oldFn()
      fn()
    }

    this[fnName] = newFn
  }
}

module.exports = ResizeScrollHandler
