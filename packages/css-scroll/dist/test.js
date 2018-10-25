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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getPrefixedStyle = __webpack_require__(2);

var transition = void 0;
var transform = void 0;

var disableScroll = function disableScroll(e) {
  e.preventDefault();
  return;
};

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

var CSSScroll = function CSSScroll(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var scrollElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;

  if (!transform) transform = getPrefixedStyle('transform');
  if (!transition) transition = getPrefixedStyle('transition');

  return new Promise(function (resolve, reject) {

    var distance = window.pageYOffset - target;

    scrollElement.style[transition] = transform + ' ' + duration + 'ms ease-in-out';
    scrollElement.style[transform] = 'translate3d(0, ' + distance + 'px, 0)';
    scrollElement.clientHeight; // force reflow

    var handleTransitionEnd = function handleTransitionEnd(e) {
      if (e.target !== scrollElement) return;
      if (e.propertyName !== transform) return;

      scrollElement.style[transition] = 'none !important';
      scrollElement.style[transform] = null;

      window.scrollTo(0, target);

      scrollElement.style.removeProperty(transition);

      resolve();

      scrollElement.style.overflow = 'visible';
      window.removeEventListener('scroll', disableScroll);
      scrollElement.removeEventListener('transitionend', handleTransitionEnd);
    };

    scrollElement.style.overflow = 'hidden';
    window.addEventListener('scroll', disableScroll);
    scrollElement.addEventListener('transitionend', handleTransitionEnd);
  });
};

exports.default = CSSScroll;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CSSScroll = __webpack_require__(0);

document.addEventListener('click', function (e) {
  var target = void 0;

  if (e.target.classList.contains('scroll-down')) {
    target = document.body.clientHeight - window.innerHeight;
  } else if (e.target.classList.contains('scroll-up')) {
    target = 0;
  } else {
    return;
  }

  CSSScroll(target, 800, document.body);
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function getCapitalizedStyle(style) {
  var chars = style.split('')
  var firstChar = chars[0]
  chars = chars.splice(1)
  return firstChar.toUpperCase() + chars.join('')
}

function getPrefixedStyle(style) {
  var capitalizedStyle = getCapitalizedStyle(style)
  var styleObj = document.body.style

  if (style in styleObj)                       return style
  if ('Webkit' + capitalizedStyle in styleObj) return 'Webkit' + capitalizedStyle
  if ('Moz' + capitalizedStyle    in styleObj) return 'Moz' + capitalizedStyle
  if ('Ms' + capitalizedStyle     in styleObj) return 'Ms' + capitalizedStyle
  if ('O' + capitalizedStyle      in styleObj) return 'O' + capitalizedStyle

  throw Error('Could not find style "' + style + '", prefixed or otherwise.')
}

module.exports = getPrefixedStyle


/***/ })
/******/ ]);