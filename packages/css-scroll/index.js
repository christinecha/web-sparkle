const transitionend = require('./transition-end')


const getPrefixedProperties = () => {
  if ('transition' in document.body.style)       return { transition: 'transition',       transform: 'transform' }
  if ('WebkitTransition' in document.body.style) return { transition: 'WebkitTransition', transform: 'WebkitTransform' }
  if ('MozTransition' in document.body.style)    return { transition: 'MozTransition',    transform: 'MozTransform' }
  if ('MsTransition' in document.body.style)     return { transition: 'MsTransition',     transform: 'MsTransform' }
  if ('OTransition' in document.body.style)      return { transition: 'OTransition',      transform: 'OTransform' }
}

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
  * @param scrollElement {DOMElement} | The parent container that the fake scroll will be applied to.
  * @param duration {Number}          | The length of the transition in milliseconds.
**/

const CSSScroll = (target, scrollElement, duration = 500) => {
  return new Promise((resolve, reject) => {
    const props = getPrefixedProperties()
    if (!props) return

    const { transition, transform } = props

    const distance = window.pageYOffset - target

    if (!scrollElement) scrollElement = document.body

    scrollElement.style[transition] = `${transform} ${duration}ms cubic-bezier(0.694, 0.0482, 0.335, 1.000)`
    scrollElement.style[transform] = `translate3d(0, ${distance}px, 0)`
    scrollElement.clientHeight // force reflow

    const handleTransitionEnd = (e) => {
      if (e.target !== scrollElement) return
      if (e.propertyName !== transform) return

      scrollElement.classList.add('no-transitions')
      scrollElement.style[transition] = null
      scrollElement.style[transform] = null

      window.scrollTo(0, target)

      scrollElement.classList.remove('no-transitions')

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
