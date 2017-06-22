/**
  Triggering resize when there is an intended resize. This is necessary because
  on mobile browsers, scrolling can trigger changes in the address bar height,
  which will trigger additional 'resize' events when unnecessary.

  With this module, 'resize' should ONLY be triggered when you:
    - Resize your desktop browser
    - Re-orient your phone

  [ christinecha / hello@christinecha.com ] <3
**/

// You'll need these later to store window dimensions.
var initialInnerWidth
var initialAvailHeight
var initialOuterHeight
var windowContext

// Is this thing reallllly a Window object?
function isWindow(obj) {
  return obj && obj.window === obj
}

// Store window dimensions.
function storeDimensionValues() {
  initialInnerWidth = windowContext.innerWidth
  initialAvailHeight = windowContext.screen.availHeight
  initialOuterHeight = windowContext.outerHeight
}

/** Creates a modified version of your event handler.
  * @param {Function} fn | the event handler
  * @return {Function} crossBrowserResize | the modifed event handler
 **/
function getCrossBrowserResizeFn(fn) {
  return function(e) {

    // If all of these values are exactly the same, then we're running
    // into one of the weird mobile browser edge cases.
    if (
      windowContext.innerWidth !== initialInnerWidth ||
      windowContext.screen.availHeight !== initialAvailHeight ||
      windowContext.outerHeight !== initialOuterHeight
    ) {

      // Run the original function since it's not a false alarm.
      // Take that, iOS Safari!
      fn(e)
    }
  }
}

/** Creates a modified version of your event handler and attaches
  * it to a 'resize' event listener on the window.
  * @param {Function} fn | the event handler
  * @return {Function} crossBrowserResize | the modifed event handler
 **/
function addCrossBrowserResizeListener(fn, win) {
  if (!win) {
     win = window
  }

  if (!windowContext && isWindow(win)) {
    windowContext = win
  }
  var crossBrowserResize = getCrossBrowserResizeFn(fn)

  windowContext.addEventListener('resize', crossBrowserResize)

  // Always make sure that `storeDimensionValues` is the last listener to be called.
  windowContext.removeEventListener('resize', storeDimensionValues)
  windowContext.addEventListener('resize', storeDimensionValues)

  return crossBrowserResize
}

/** Initialize property values and add the event listener to 'resize'.
  * @param {Function} fn | the event handler
 **/
function removeCrossBrowserResizeListener(fn) {
  windowContext.removeEventListener('resize', fn)
}

module.exports = {
  addListener: addCrossBrowserResizeListener,
  removeListener: removeCrossBrowserResizeListener
}
