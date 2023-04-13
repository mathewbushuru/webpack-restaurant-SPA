/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/Button */ \"./src/components/ui/Button.js\");\n\n\n\nconst navItems = [\n  { name: \"About\", link: \"#\" },\n  { name: \"Menu\", link: \"#\" },\n  { name: \"Gift Cards\", link: \"#\" },\n  { name: \"Career\", link: \"#\" },\n  { name: \"Contact\", link: \"#\" },\n];\n\nfunction Header() {\n\n  // logo\n  const logoEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({\n    htmlEl: \"h2\",\n    className: \"logo\",\n    content: \"The Coruscant Cafe\",\n  });\n\n  // right nav\n  let navItemsElChildren = [];\n  for (let el of navItems) {\n    const navItem = document.createElement(\"li\");\n    navItem.textContent = el.name;\n    navItemsElChildren.push(navItem);\n  }\n\n  const navItemsEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({\n    htmlEl: \"ul\",\n    className: \"navItems\",\n    content: null,\n    children: navItemsElChildren,\n  });\n\n  const orderBtn = (0,_ui_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Order\");\n  const reserveBtn = (0,_ui_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Reserve\");\n\n  const navBtnsEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({\n    htmlEl: \"div\",\n    className: \"navBtnGroup\",\n    content: null,\n    children: [orderBtn, reserveBtn],\n  });\n\n  const rightNavEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({\n    htmlEl: \"div\",\n    className: \"navRight\",\n    content: null,\n    children: [navItemsEl, navBtnsEl],\n  });\n\n  const headerElement = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({\n    htmlEl: \"nav\",\n    children: [logoEl, rightNavEl],\n  });\n\n  return headerElement;\n}\n\n\n//# sourceURL=webpack://webpack-landing-page/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/ui/Button.js":
/*!*************************************!*\
  !*** ./src/components/ui/Button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nfunction Button( name ) {\n  const element = document.createElement(\"btn\");\n  element.className = \"btn\";\n  element.textContent = name;\n  return element\n}\n\n\n//# sourceURL=webpack://webpack-landing-page/./src/components/ui/Button.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n\n\n\n\nconst root = document.getElementById(\"content\");\n\nroot.appendChild((0,_components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n\n//# sourceURL=webpack://webpack-landing-page/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement({\n  htmlEl = \"div\",\n  className = null,\n  content = null,\n  children = [],\n}) {\n  const element = document.createElement(htmlEl);\n\n  element.className = className;\n  element.textContent = content;\n\n  for (let child of children) {\n    element.appendChild(child);\n  }\n\n  return element;\n}\n\n\n//# sourceURL=webpack://webpack-landing-page/./src/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;