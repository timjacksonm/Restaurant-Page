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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\nconst contactPage = (function() {\n\n    const contactTab = () => {\n        console.log('nothing here');\n    };\n\n    return {\n        contactTab: contactTab,\n    }\n})();\n\n\n\n//# sourceURL=webpack://Resturant-Page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\nconst homePage = (function() { \n    const content = document.querySelector('#content');\n    let header = document.createElement('header');\n    let main = document.createElement('main');\n    let footer = document.createElement('footer');\n\n    const create = () => {\n    content.appendChild(header).className += 'header';\n    header = document.querySelector('header');\n    header.appendChild(document.createElement('ul'));\n    header.appendChild(document.createElement('li')).appendChild(document.createElement('input')).value = 'Home';\n    header.appendChild(document.createElement('li')).appendChild(document.createElement('input')).value = 'Menu';\n    header.appendChild(document.createElement('li')).appendChild(document.createElement('input')).value = 'Contact';\n    document.querySelectorAll('input').forEach(input => input.setAttribute('type', 'button'));\n\n    content.appendChild(main).className += 'home';\n    main = document.querySelector('main');\n    main.appendChild(document.createElement('img')).src = \"/Resturant-Page/src/images/logo8.svg\";\n    main.appendChild(document.createElement('h1')).textContent = 'Store Bought Pizza';\n    main.appendChild(document.createElement('h4')).textContent = 'You heard that right.';\n\n    content.appendChild(footer).className += 'footer';\n    footer = document.querySelector('footer');\n    footer.appendChild(document.createElement('p')).textContent = 'Created by Tim Jackson';\n    footer.appendChild(document.createElement('div')).className += 'logo';\n    footer.querySelector('.logo').appendChild(document.createElement('a')).href = 'https://github.com/timjacksonm';\n    footer.querySelector('.logo').querySelector('a').appendChild(document.createElement('img')).src += '/Resturant-Page/src/images/GitHub-Mark-Light-32px.png';\n};\n    const homeTab = () => {\n        main = document.querySelector('main');\n        main.className = 'home';\n        main.appendChild(document.createElement('img')).src = \"/Resturant-Page/src/images/logo8.svg\";\n        main.appendChild(document.createElement('h1')).textContent = 'Store Bought Pizza';\n        main.appendChild(document.createElement('h4')).textContent = 'You heard that right.';\n    }\n    return {\n        create: create,\n        homeTab: homeTab,\n    }\n})();\n\n\n\n//# sourceURL=webpack://Resturant-Page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n_home__WEBPACK_IMPORTED_MODULE_0__.homePage.create();\n\nconst pageFlow = (function() { \n    const main = document.querySelector('main')\n    const selInputs = document.querySelectorAll('input')\n    const tabFunctions = {\n        0: () => {main.replaceChildren(); _home__WEBPACK_IMPORTED_MODULE_0__.homePage.homeTab();},\n        1: () => {main.replaceChildren(); _menu__WEBPACK_IMPORTED_MODULE_1__.menuPage.menuTab();},\n        2: () => {main.replaceChildren(); _contact__WEBPACK_IMPORTED_MODULE_2__.contactPage.contactTab();},\n    };\n    for (let i = 0; i < selInputs.length; i++) {\n        selInputs[i].addEventListener('click', tabFunctions[i]);\n    };\n\n    return {\n\n    };\n})();\n\n//# sourceURL=webpack://Resturant-Page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\nconst pizzaFactory = (name, url, description, quantity, price) => {\n    let getName = name;\n    let getUrl = url;\n    let getDescription = description;\n    let getQuantity = quantity;\n    let getPrice = price;\n    return {name, url, description, quantity, price};\n  };\nconst menuPage = (function() {\n    const pizzaRolls = pizzaFactory('Totino\\s Pizza Rolls', '/Resturant-Page/src/images/Totinos.jpg', 'a dish of Italian origin. Open pie made of thin bread dough spread with a spiced mixture of e.g. tomato sauce and cheese', '20ct', '$5.99')\n\n    const menuTab = () => {\n        const main = document.querySelector('main')\n        main.className = 'menu';\n        let box = document.createElement('ul');\n        main.appendChild(box).className += 'menuBox';\n        box = document.querySelector('.menuBox');\n\n        box.appendChild(document.createElement('li')).appendChild(document.createElement('img')).src = pizzaRolls.url;\n        console.log(pizzaRolls);\n\n    }\n\n    return {\n        menuTab: menuTab,\n    }\n})();\n\n\n\n//# sourceURL=webpack://Resturant-Page/./src/menu.js?");

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