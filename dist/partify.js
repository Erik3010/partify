/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Partify"] = factory();
	else
		root["Partify"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Particle.ts":
/*!*************************!*\
  !*** ./src/Particle.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility */ \"./src/Utility.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Particle = /*#__PURE__*/function () {\n  function Particle(_ref) {\n    var y = _ref.y,\n        x = _ref.x,\n        direction = _ref.direction,\n        angle = _ref.angle,\n        spinSpeed = _ref.spinSpeed,\n        velocity = _ref.velocity,\n        content = _ref.content;\n\n    _classCallCheck(this, Particle);\n\n    _defineProperty(this, \"availableSizes\", [15, 20, 25, 35, 45]);\n\n    _defineProperty(this, \"size\", this.availableSizes[(0,_Utility__WEBPACK_IMPORTED_MODULE_0__.random)(0, this.availableSizes.length - 1)]);\n\n    this.content = content;\n    this.y = y - this.size / 2;\n    this.x = x - this.size / 2;\n    this.direction = direction;\n    this.angle = angle;\n    this.spinSpeed = spinSpeed;\n    this.velocity = velocity;\n  }\n\n  _createClass(Particle, [{\n    key: \"generate\",\n    value: function generate() {\n      var element = document.createElement(\"span\");\n      element.style.position = \"absolute\";\n      element.style.pointerEvents = \"none\";\n      element.style.userSelect = \"none\";\n      element.innerHTML = this.content;\n      this.element = element;\n      return this.element;\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.y -= this.velocity.y;\n      this.x -= this.velocity.x * this.direction;\n      this.angle += this.spinSpeed;\n      this.velocity.y = Math.min(this.size, this.velocity.y - 1);\n      this.element.style.fontSize = \"\".concat(this.size, \"px\");\n      this.element.style.top = \"\".concat(this.y, \"px\");\n      this.element.style.left = \"\".concat(this.x, \"px\");\n      this.element.style.transform = \"rotate(\".concat(this.angle, \"deg)\");\n    }\n  }]);\n\n  return Particle;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particle);\n\n//# sourceURL=webpack://Partify/./src/Particle.ts?");

/***/ }),

/***/ "./src/Partify.ts":
/*!************************!*\
  !*** ./src/Partify.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ \"./src/Particle.ts\");\n/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility */ \"./src/Utility.ts\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Partify = /*#__PURE__*/function () {\n  function Partify(selector, content) {\n    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    _classCallCheck(this, Partify);\n\n    _defineProperty(this, \"defaultOptions\", {\n      limit: 35,\n      velocityX: [0, 10],\n      velocityY: [0, 30]\n    });\n\n    _defineProperty(this, \"particles\", []);\n\n    _defineProperty(this, \"isAddParticle\", false);\n\n    _defineProperty(this, \"eventCallback\", {});\n\n    this.selector = selector;\n    this.content = content;\n    this.container = document.querySelector(this.selector);\n    this.options = Object.assign({}, this.defaultOptions, options);\n    this.eventCallback = {\n      mouseDown: this.mouseDownHandler.bind(this),\n      mouseMove: this.mouseMoveHandler.bind(this),\n      mouseUp: this.mouseUpHandler.bind(this)\n    };\n  }\n\n  _createClass(Partify, [{\n    key: \"init\",\n    value: function init() {\n      console.log(\"🌟 Newtron initialized!\");\n      this.container.style.position = \"relative\";\n      this.bindEventHandler();\n      this.animate();\n    }\n  }, {\n    key: \"bindEventHandler\",\n    value: function bindEventHandler() {\n      this.container.addEventListener(\"mousedown\", this.eventCallback.mouseDown);\n      this.container.addEventListener(\"mousemove\", this.eventCallback.mouseMove);\n      this.container.addEventListener(\"mouseup\", this.eventCallback.mouseUp);\n    }\n  }, {\n    key: \"mouseDownHandler\",\n    value: function mouseDownHandler() {\n      this.isAddParticle = true;\n    }\n  }, {\n    key: \"mouseMoveHandler\",\n    value: function mouseMoveHandler(event) {\n      var y = event.offsetY,\n          x = event.offsetX;\n      this.coordinate = {\n        y: y,\n        x: x\n      };\n    }\n  }, {\n    key: \"mouseUpHandler\",\n    value: function mouseUpHandler() {\n      this.isAddParticle = false;\n    }\n  }, {\n    key: \"generateParticles\",\n    value: function generateParticles() {\n      var particle = this.createParticle();\n      this.container.appendChild(particle.generate());\n      this.particles.push(particle);\n    }\n  }, {\n    key: \"createParticle\",\n    value: function createParticle() {\n      var _ref = this.coordinate,\n          y = _ref.y,\n          x = _ref.x;\n      var direction = Math.random() < 0.5 ? -1 : 1;\n\n      var _ref2 = this.options.velocityX,\n          _ref3 = _slicedToArray(_ref2, 2),\n          minVelocityX = _ref3[0],\n          maxVelocityX = _ref3[1];\n\n      var _ref4 = this.options.velocityY,\n          _ref5 = _slicedToArray(_ref4, 2),\n          minVelocityY = _ref5[0],\n          maxVelocityY = _ref5[1];\n\n      return new _Particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        y: y,\n        x: x,\n        direction: direction,\n        angle: (0,_Utility__WEBPACK_IMPORTED_MODULE_1__.random)(0, 360),\n        spinSpeed: (0,_Utility__WEBPACK_IMPORTED_MODULE_1__.random)(0, 35) * direction,\n        content: this.content,\n        velocity: {\n          y: (0,_Utility__WEBPACK_IMPORTED_MODULE_1__.random)(minVelocityY, maxVelocityY),\n          x: (0,_Utility__WEBPACK_IMPORTED_MODULE_1__.random)(minVelocityX, maxVelocityX)\n        }\n      });\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      var _this = this;\n\n      requestAnimationFrame(this.animate.bind(this));\n\n      if (this.isAddParticle && this.particles.length < this.options.limit) {\n        this.generateParticles();\n      }\n\n      this.particles.forEach(function (particle, index) {\n        if (particle.y >= _this.container.clientHeight || particle.x >= _this.container.clientWidth || particle.x + particle.element.clientWidth < 0) {\n          particle.element.remove();\n\n          _this.particles.splice(index, 1);\n        } else {\n          particle.update();\n        }\n      });\n    }\n  }]);\n\n  return Partify;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partify);\n\n//# sourceURL=webpack://Partify/./src/Partify.ts?");

/***/ }),

/***/ "./src/Utility.ts":
/*!************************!*\
  !*** ./src/Utility.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce),\n/* harmony export */   \"random\": () => (/* binding */ random)\n/* harmony export */ });\nvar random = function random(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n};\nvar debounce = function debounce(callback) {\n  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;\n  var interval;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    clearTimeout(interval);\n    interval = setTimeout(function () {\n      callback.apply(void 0, args);\n    }, timeout);\n  };\n};\n\n//# sourceURL=webpack://Partify/./src/Utility.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Partify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partify */ \"./src/Partify.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Partify__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://Partify/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});