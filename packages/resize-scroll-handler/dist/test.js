/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * ResizeScrollHandler
 * ----
 * A bare-bones class that handles scroll and resize events in a simple, performant way.
 **/

class ResizeScrollHandler {
  constructor() {
    // Bind methods.
    this.requestScroll = this.requestScroll.bind(this);
    this.requestResize = this.requestResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.addToHandler = this.addToHandler.bind(this);

    // States.
    this.isTicking = false;
    this.vw = window.innerWidth;
    this.vh = window.innerHeight;
    this.lastPageYOffset = 0;
    this.currentPageYOffset = window.pageYOffset;

    // Add event listeners.
    // You should never have to add another listener to resize or scroll.
    // Instead, you should just tack on to the pre-existing listeners.
    window.addEventListener('resize', this.requestResize);
    window.addEventListener('scroll', this.requestScroll);
  }

  /*---------------------------------
  HANDLE SCROLL AND RESIZE
  ---------------------------------*/
  requestTick(e, callback) {

    // Prevent long frames.
    if (this.ticking) return;

    requestAnimationFrame(() => {
      // Run callback method.
      if (callback && typeof callback === 'function') callback(e);

      // Okay, ready for the next one! Reset.
      this.ticking = false;
    });

    this.ticking = true;
  }

  requestResize(e) {
    this.requestTick(e, this.handleResize);
  }

  requestScroll(e) {
    this.requestTick(e, this.handleScroll);
  }

  handleResize(e) {
    // Resize callbacks

    // NOTE: This should be the ONLY PLACE you ever ask for window dimensions!
    // Asking for window.innerWidth & window.innerHeight forces a reflow.
    this.vw = window.innerWidth;
    this.vh = window.innerHeight;
  }

  handleScroll(e) {
    // Scroll callbacks

    // NOTE: This should be the ONLY PLACE you ever ask for window.pageYOffset!
    // Asking for window.pageYOffset forces a reflow.
    this.lastPageYOffset = this.currentPageYOffset;
    this.currentPageYOffset = window.pageYOffset;
  }

  addToHandler(type, fn) {
    let fnName;

    if (type === 'resize') fnName = 'handleResize';else if (type === 'scroll') fnName = 'handleScroll';else throw Error('That event type is not handled here.');

    const oldFn = this[fnName];
    const newFn = () => {
      oldFn();
      fn();
    };

    this[fnName] = newFn;
  }
}

module.exports = ResizeScrollHandler;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const ResizeScrollHandler = __webpack_require__(0);

const handler = new ResizeScrollHandler();
const $resizeHeader = document.getElementById('resize-header');
const $scrollHeader = document.getElementById('scroll-header');

handler.addToHandler('resize', () => {
  $resizeHeader.textContent = 'window dimensions: ' + handler.vw + ' x ' + handler.vh;
});

handler.addToHandler('scroll', () => {
  $scrollHeader.textContent = 'window.pageYOffset: ' + handler.currentPageYOffset + 'px';
});

handler.requestResize();
handler.requestScroll();

/***/ })
/******/ ]);