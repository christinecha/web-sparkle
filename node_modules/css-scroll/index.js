const getPrefixedStyle = require('get-prefixed-style')

const transition = getPrefixedStyle('transition')
const transform = getPrefixedStyle('transform')

const disableScroll = (e) => {
  e.preventDefault()
  return
}

/** CSS Scroll!
  *
  * This allows you to trigger a page scroll that is SMOOTH as BUTTER.
  * It's a non-blocking, hardward-accelerating scroll, since it's essentially just one
  * CSS transition. It works by taking a parent container (scrollElement) and moving it
  * in the opposite direction to fake a "scroll" motion.
  *
  * @param target {Number}            | A window.pageYOffset value you'd like to end up at.
  * @param duration {Number}          | The length of the transition in milliseconds.
  * @param scrollElement {DOMElement} | The parent container that the fake scroll will be applied to.
**/

const CSSScroll = (target, duration = 500, scrollElement = document.body) => {
  return new Promise((resolve, reject) => {

    const distance = window.pageYOffset - target

    scrollElement.style[transition] = `${transform} ${duration}ms cubic-bezier(0.694, 0.0482, 0.335, 1.000)`
    scrollElement.style[transform] = `translate3d(0, ${distance}px, 0)`
    scrollElement.clientHeight // force reflow

    const handleTransitionEnd = (e) => {
      if (e.target !== scrollElement) return
      if (e.propertyName !== transform) return

      scrollElement.style[transition] = 'none !important'
      scrollElement.style[transform] = null

      window.scrollTo(0, target)

      scrollElement.style.removeProperty(transition)

      resolve()

      scrollElement.style.overflow = 'visible'
      window.removeEventListener('scroll', disableScroll)
      scrollElement.removeEventListener('transitionend', handleTransitionEnd)
    }

    scrollElement.style.overflow = 'hidden'
    window.addEventListener('scroll', disableScroll)
    scrollElement.addEventListener('transitionend', handleTransitionEnd)
  })
}

module.exports = CSSScroll
