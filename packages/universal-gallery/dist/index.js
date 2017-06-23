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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* This is a very very simple gallery.

  @param config: {
    galleryNode {DOMElement}     | The container element. [REQUIRED]

    childSelector {String}       | The selector for each element that should be updated. (will override)
    numOfClones {Number}         | How many clones we should make.
    slideSpeed {number}          | Number of milliseconds during a single slide
    shouldAutoplay {Boolean}     | Should it autoplay?
    handleChange {Function}      | Callback method on update, supplied with the current index (disregards clones), and the index including clones.
  }
*/

class BaseGallery {
  constructor(config) {

    this.FIRST_UPDATE = true;

    this.$gallery = config.galleryNode;
    this.$children = this.getChildren(config.childSelector);
    this.slideSpeed = config.slideSpeed;
    this.handleChange = config.handleChange;
    this.shouldAutoplay = config.shouldAutoplay;

    this.originalNumOfChildren = this.$children.length;

    if (config.numOfClones) this.makeClones(config.numOfClones);

    this.index = 0;
    this.nextIndex = this.getNextIndex();
    this.prevIndex = this.getPrevIndex();
    this.updateChildren();

    this.$gallery.classList.add('is-initialized');

    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    if (config.shouldAutoplay) this.play();

    // If you've navigated away from the page, stop the gallery.
    window.addEventListener('blur', this.stop);
    if (config.shouldAutoplay) window.addEventListener('focus', this.play);
  }

  makeClones(num = 0) {
    // Max it out at 5. Why would you need more clones than that????
    if (num > 5) num = 5;

    let count = 0;

    while (count < num) {
      let clones = [];

      this.$children.forEach(($child, i) => {
        const $clone = $child.cloneNode(true);
        $child.parentNode.appendChild($clone);
        clones.push($clone);
      });

      this.$children = this.$children.concat(clones);

      count++;
    }
  }

  getChildren(selector) {
    const nodeList = this.$gallery.querySelectorAll(selector);
    return Array.prototype.slice.call(nodeList);
  }

  // Get the index not including clones.
  getRealIndex() {
    return this.index % this.originalNumOfChildren;
  }

  getNextIndex() {
    let nextIndex = this.index + 1;
    if (!this.$children[nextIndex]) nextIndex = 0;

    return nextIndex;
  }

  getPrevIndex() {
    let prevIndex = this.index - 1;
    if (prevIndex < 0) prevIndex = this.$children.length - 1;
    return prevIndex;
  }

  /* Play! :) */
  play() {
    // dont start again if already started
    if (this.interval) return;
    this.interval = setInterval(this.next, this.slideSpeed);
  }

  goToIndex(index) {
    this.index = index;
    this.nextIndex = this.getNextIndex();
    this.prevIndex = this.getPrevIndex();

    this.updateChildren();
  }

  next() {
    if (this.shouldAutoplay) this.stop();

    this.index = this.nextIndex;
    this.nextIndex = this.getNextIndex();
    this.prevIndex = this.getPrevIndex();

    this.updateChildren();

    if (this.shouldAutoplay) this.play();
  }

  prev() {
    if (this.shouldAutoplay) this.stop();

    this.index = this.prevIndex;
    this.nextIndex = this.getNextIndex();
    this.prevIndex = this.getPrevIndex();

    this.updateChildren();

    if (this.shouldAutoplay) this.play();
  }

  updateChildren() {
    if (this.handleChange) this.handleChange(this.getRealIndex(), this.index);

    this.$children.forEach(($child, i) => {
      const distFromIndex = Math.abs(this.index - i);
      const distFromEnd = this.$children.length - distFromIndex;

      const arrivalIndex = i >= this.index ? distFromIndex : distFromEnd;
      const departureIndex = i <= this.index ? distFromIndex : distFromEnd;

      $child.setAttribute('data-arrival-index', arrivalIndex);
      $child.setAttribute('data-departure-index', departureIndex);

      // If it's the first load, force reflow so we don't get a transition mess.
      if (this.FIRST_UPDATE) $child.clientHeight;
    });

    if (this.FIRST_UPDATE) this.FIRST_UPDATE = false;
  }

  /* Stop! (in the naaaame of love)
   */
  stop() {
    clearInterval(this.interval);
    delete this.interval;
  }
}

module.exports = BaseGallery;

/***/ })
/******/ ]);