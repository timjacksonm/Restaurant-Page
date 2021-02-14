/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const homePage = (function() { \n    const content = document.querySelector('#content');\n    let header = document.createElement('header');\n    let main = document.createElement('main');\n    let footer = document.createElement('footer');\n\n    content.appendChild(header).className += 'header';\n    header = document.querySelector('header');\n    header.appendChild(document.createElement('ul'));\n    header.appendChild(document.createElement('li')).textContent = 'Home';\n    header.appendChild(document.createElement('li')).textContent = 'Menu';\n    header.appendChild(document.createElement('li')).textContent = 'Contact';\n\n    content.appendChild(main).className += 'main';\n    main = document.querySelector('main');\n    main.appendChild(document.createElement('img')).src = \"/Resturant-Page/src/images/logo8.svg\";\n    main.appendChild(document.createElement('h1')).textContent = 'Store Bought Pizza';\n    main.appendChild(document.createElement('h4')).textContent = 'You heard that right.';\n\n    content.appendChild(footer).className += 'footer';\n    footer = document.querySelector('footer');\n    footer.appendChild(document.createElement('p')).textContent = 'Created by Tim Jackson';\n    footer.appendChild(document.createElement('div')).className += 'logo';\n    footer.querySelector('.logo').appendChild(document.createElement('a')).href = 'https://github.com/timjacksonm';\n    footer.querySelector('.logo').querySelector('a').appendChild(document.createElement('img')).src += '/Resturant-Page/src/images/GitHub-Mark-Light-32px.png'\n})();\n\n//# sourceURL=webpack://Resturant-Page/./src/index.js?");
/******/ })()
;