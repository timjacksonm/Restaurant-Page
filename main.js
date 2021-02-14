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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\nconst homePage = (function() { \n    const content = document.querySelector('#content');\n    let header = document.createElement('header');\n    let main = document.createElement('main');\n    let footer = document.createElement('footer');\n\n    const create = () => {\n    content.appendChild(header).className += 'header';\n    header = document.querySelector('header');\n    header.appendChild(document.createElement('ul'));\n    header.appendChild(document.createElement('li')).appendChild(document.createElement('input')).value = 'Home';\n    header.appendChild(document.createElement('li')).appendChild(document.createElement('input')).value = 'Menu';\n    header.appendChild(document.createElement('li')).appendChild(document.createElement('input')).value = 'Contact';\n    document.querySelectorAll('input').forEach(input => input.setAttribute('type', 'button'));\n\n    content.appendChild(main).className += 'main';\n    main = document.querySelector('main');\n    main.appendChild(document.createElement('img')).src = \"/Resturant-Page/src/images/logo8.svg\";\n    main.appendChild(document.createElement('h1')).textContent = 'Store Bought Pizza';\n    main.appendChild(document.createElement('h4')).textContent = 'You heard that right.';\n\n    content.appendChild(footer).className += 'footer';\n    footer = document.querySelector('footer');\n    footer.appendChild(document.createElement('p')).textContent = 'Created by Tim Jackson';\n    footer.appendChild(document.createElement('div')).className += 'logo';\n    footer.querySelector('.logo').appendChild(document.createElement('a')).href = 'https://github.com/timjacksonm';\n    footer.querySelector('.logo').querySelector('a').appendChild(document.createElement('img')).src += '/Resturant-Page/src/images/GitHub-Mark-Light-32px.png';\n};\n    const homeTab = () => {\n        main = document.querySelector('main');\n        main.appendChild(document.createElement('img')).src = \"/Resturant-Page/src/images/logo8.svg\";\n        main.appendChild(document.createElement('h1')).textContent = 'Store Bought Pizza';\n        main.appendChild(document.createElement('h4')).textContent = 'You heard that right.';\n    }\n    return {\n        create: create,\n        homeTab: homeTab,\n    }\n})();\n\n\n\n//# sourceURL=webpack://Resturant-Page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n_home__WEBPACK_IMPORTED_MODULE_0__.homePage.create();\n\nconst pageFlow = (function() { \n    const main = document.querySelector('.main')\n    const selInputs = document.querySelectorAll('input')\n    const tabFunctions = {\n        0: () => {main.replaceChildren(); _home__WEBPACK_IMPORTED_MODULE_0__.homePage.homeTab(); console.log('Home');},\n        1: () => {main.replaceChildren(); console.log('Menu')},\n        2: () => {main.replaceChildren(); console.log('Contact')},\n    };\n    for (let i = 0; i < selInputs.length; i++) {\n        selInputs[i].addEventListener('click', tabFunctions[i]);\n    };\n\n    return {\n\n    };\n})();\n\n//# sourceURL=webpack://Resturant-Page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;