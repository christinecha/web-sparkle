/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/test/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var crossBrowserResize = __webpack_require__(1);

	// Log all triggered resize events so you can compare the difference
	window.addEventListener('resize', function() {
	  console.log('resize');
	})

	// Log only the true cross-browser resize
	function handleResize(e) {
	  console.log('Really resized at', new Date().getTime());
	}

	// Log only the true cross-browser resize
	function handleResize2(e) {
	  console.log('Really resized 2 at', new Date().getTime());
	}

	var crossBrowserHandleResize = crossBrowserResize.addListener(handleResize);
	var crossBrowserHandleResize2 = crossBrowserResize.addListener(handleResize2);

	// To remove the event listener:
	document.addEventListener('click', function() {
	  crossBrowserResize.removeListener(crossBrowserHandleResize);

	  // OR YOU CAN JUST:
	  // window.removeEventListener(crossBrowserHandleResize);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);