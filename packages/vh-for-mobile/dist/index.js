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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CLASS_IDENTIFIER = 'vh-for-mobile';
	var DELAY = 300;

	var VHForMobile = function () {
	  function VHForMobile() {
	    var $parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

	    _classCallCheck(this, VHForMobile);

	    this.$parent = $parent;

	    this.updateChildren = this.updateChildren.bind(this);
	    this.updateView = this.updateView.bind(this);

	    this.updateChildren();
	    this.updateView();

	    window.addEventListener('orientationchange', this.updateView);
	  }

	  _createClass(VHForMobile, [{
	    key: 'updateChildren',
	    value: function updateChildren() {
	      var nodeList = this.$parent.getElementsByClassName(CLASS_IDENTIFIER);
	      this.$children = Array.prototype.slice.call(nodeList);
	    }
	  }, {
	    key: 'updateView',
	    value: function updateView() {
	      this.$children.forEach(function ($child) {
	        $child.style.removeProperty('height');

	        setTimeout(function () {
	          $child.style.height = $child.clientHeight + 'px';
	        }, DELAY);
	      });
	    }
	  }]);

	  return VHForMobile;
	}();

	module.exports = VHForMobile;

/***/ }
/******/ ]);