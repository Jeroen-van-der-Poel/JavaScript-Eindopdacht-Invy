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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Js/App.js":
/*!*******************!*\
  !*** ./Js/App.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Products_Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products/Products */ \"./Js/Products/Products.js\");\n/* harmony import */ var _Grid_GridLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid/GridLayout */ \"./Js/Grid/GridLayout.js\");\n/* harmony import */ var _Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid/CreateGrid */ \"./Js/Grid/CreateGrid.js\");\n/* harmony import */ var _Weather_Api_Weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Weather/Api_Weather */ \"./Js/Weather/Api_Weather.js\");\n/* harmony import */ var _Products_ShowPrducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Products/ShowPrducts */ \"./Js/Products/ShowPrducts.js\");\n/* harmony import */ var _Wizard_stepzation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Wizard/stepzation */ \"./Js/Wizard/stepzation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst clothingbutton = document.getElementById(\"Clothing\");\r\nconst tierlantinbutton = document.getElementById(\"Tierlantin\");\r\nconst decorationbutton = document.getElementById(\"Decoration\");\r\n\r\nclothingbutton.addEventListener('click', clothesClick);\r\ntierlantinbutton.addEventListener('click', tierlantinClick);\r\ndecorationbutton.addEventListener('click', decorationClick);\r\n\r\nconst header = document.getElementById(\"Header\");\r\nlet currentProducts = [];\r\n\r\n// =========== Page changes ============= //\r\nfunction clothesClick() {\r\n    header.innerHTML = \"Kleding\";\r\n    _Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].innerHTML = '';\r\n    Object(_Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"createGrid\"])(_Grid_GridLayout__WEBPACK_IMPORTED_MODULE_1__[\"clothesgrid\"]);\r\n    clothingbutton.style.color = \"green\";\r\n    tierlantinbutton.style.color = \"black\";\r\n    decorationbutton.style.color = \"black\";\r\n    getProducts(\"clothes\");\r\n}\r\n\r\nfunction tierlantinClick() {\r\n    header.innerHTML = \"Tierlantijn\";\r\n    _Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].innerHTML = '';\r\n    Object(_Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"createGrid\"])(_Grid_GridLayout__WEBPACK_IMPORTED_MODULE_1__[\"tierlantingrid\"]);\r\n    clothingbutton.style.color = \"black\";\r\n    tierlantinbutton.style.color = \"green\";\r\n    decorationbutton.style.color = \"black\";\r\n    getProducts(\"tierlantin\");\r\n}\r\n\r\nfunction decorationClick() {\r\n    header.innerHTML = \"Decoratie\";\r\n    _Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].innerHTML = '';\r\n    Object(_Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"createGrid\"])(_Grid_GridLayout__WEBPACK_IMPORTED_MODULE_1__[\"decorationgrid\"]);\r\n    clothingbutton.style.color = \"black\";\r\n    tierlantinbutton.style.color = \"black\";\r\n    decorationbutton.style.color = \"green\";\r\n    getProducts(\"decoration\");\r\n}\r\n\r\n// =========== weather ============= //\r\nlet weatherButton = document.querySelector('.weatherbutton');\r\n\r\nweatherButton.addEventListener('click', WeatherFunction);\r\n\r\nfunction WeatherFunction() {\r\n    Object(_Weather_Api_Weather__WEBPACK_IMPORTED_MODULE_3__[\"ShowWeather\"])();\r\n}\r\n\r\n// =========== get products ============= //\r\nfunction getProducts(regio){\r\n    currentProducts = [];\r\n    for(let i = 0; i < _Products_Products__WEBPACK_IMPORTED_MODULE_0__[\"Products\"].length; i++){\r\n        if(_Products_Products__WEBPACK_IMPORTED_MODULE_0__[\"Products\"][i].regio === regio){\r\n            currentProducts.push(_Products_Products__WEBPACK_IMPORTED_MODULE_0__[\"Products\"][i])\r\n        }\r\n    }\r\n}\r\n\r\n// =========== show products ============= //\r\nlet productButton = document.getElementById(\"sidebutton\");\r\nproductButton.addEventListener('click', productClick);\r\n\r\nfunction productClick() {\r\n    Object(_Products_ShowPrducts__WEBPACK_IMPORTED_MODULE_4__[\"ShowProducts\"])(currentProducts);\r\n}\r\n\r\n// =========== Wizard ============= //\r\nlet formStart = document.getElementById(\"StartForm\");\r\n\r\nformStart.addEventListener('click', WizardFunction);\r\n\r\nfunction WizardFunction() {\r\n    Object(_Wizard_stepzation__WEBPACK_IMPORTED_MODULE_5__[\"startForm\"])();\r\n    currentProducts = [];\r\n    clothingbutton.style.color = \"black\";\r\n    tierlantinbutton.style.color = \"black\";\r\n    decorationbutton.style.color = \"black\";\r\n    formStart.style.color = \"green\";\r\n}\r\n\r\n// =========== initialize ============= //\r\nfunction Start() {\r\n    header.innerHTML = \"Welkom\";\r\n    _Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].innerHTML = \"Kies een regio\";\r\n    _Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].style.textAlign = \"center\";\r\n    _Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].style.border = \"none\";\r\n}\r\n\r\nStart();\n\n//# sourceURL=webpack:///./Js/App.js?");

/***/ }),

/***/ "./Js/Grid/CreateGrid.js":
/*!*******************************!*\
  !*** ./Js/Grid/CreateGrid.js ***!
  \*******************************/
/*! exports provided: grid, createGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"grid\", function() { return grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGrid\", function() { return createGrid; });\n// =========== Create Grid ============= //\r\nconst grid = document.getElementById(\"grid\");\r\n\r\n\r\nfunction createGrid(array){\r\n    let rows = 0;\r\n    let cols = 0;\r\n    for(let i = 0; i < array.length; i++){\r\n        rows += (1);\r\n        for(let j =0; j < array[i].length; j++){\r\n            cols += (1);\r\n        }\r\n    }\r\n    grid.style.setProperty('--grid-rows', cols);\r\n    grid.style.setProperty('--grid-cols', rows);\r\n    let count = 0;\r\n    for (let c = 0; c < rows; c++) {\r\n        for(let d = 0; d < cols/15; d++){\r\n            let cell = document.createElement(\"div\");\r\n            if(array[c][d].valueOf() === \"-\"){\r\n                grid.appendChild(cell).className = \"grid-item empty\";\r\n                grid.appendChild(cell).style.backgroundColor = \"lightgray\";\r\n            }\r\n            if(array[c][d].valueOf() === \"@\"){\r\n                grid.appendChild(cell).className = \"grid-item wall\";\r\n                grid.appendChild(cell).style.backgroundColor = \"black\";\r\n            }\r\n            if(array[c][d].valueOf() === \"|\"){\r\n                grid.appendChild(cell).className = \"grid-item floor\";\r\n                grid.appendChild(cell).style.backgroundColor = \"darkgray\";\r\n            }\r\n            grid.appendChild(cell).id = (c + \"-\" + d);\r\n            grid.appendChild(cell).style.minWidth = '61.2px';\r\n            grid.appendChild(cell).style.minHeight = '56px';\r\n            grid.appendChild(cell).style.maxWidth = '61.2px';\r\n            grid.appendChild(cell).style.maxHeight = '56px';\r\n            count++;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./Js/Grid/CreateGrid.js?");

/***/ }),

/***/ "./Js/Grid/GridLayout.js":
/*!*******************************!*\
  !*** ./Js/Grid/GridLayout.js ***!
  \*******************************/
/*! exports provided: clothesgrid, decorationgrid, tierlantingrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clothesgrid\", function() { return clothesgrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decorationgrid\", function() { return decorationgrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tierlantingrid\", function() { return tierlantingrid; });\nlet clothesgrid =\r\n    [\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],\r\n        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '|','|', '|', '|','|', '|', '|'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['|', '|', '|','|', '|', '|','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '@','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['|', '|', '|','|', '|', '|','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],\r\n        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n    ];\r\nlet decorationgrid =\r\n    [\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','@', '@', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '|','|', '|', '|'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '|','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '|','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '|', '|','|', '|', '|','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','@', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '@','@', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '|','|', '|', '|','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '@', '-','-', '-', '-'],\r\n        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '@', '-','-', '-', '-'],\r\n        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n    ];\r\nlet tierlantingrid =\r\n    [\r\n        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '@', '-','-', '-', '-','-', '@', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '|', '|','|', '|', '|','|', '|', '|','|', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '-', '-','-', '@', '-','-', '-', '-','-', '@', '-','|', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '@', '@','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '@', '@','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n    ];\n\n//# sourceURL=webpack:///./Js/Grid/GridLayout.js?");

/***/ }),

/***/ "./Js/Products/Products.js":
/*!*********************************!*\
  !*** ./Js/Products/Products.js ***!
  \*********************************/
/*! exports provided: Products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Products\", function() { return Products; });\nconst Products = [{\r\n    'name': 'T-shirt',\r\n    'color': 'red',\r\n    'fit': 'small',\r\n    'regio': 'clothes'\r\n},{\r\n    'name': 'sweather',\r\n    'color': 'white',\r\n    'fit': 'medium',\r\n    'regio': 'clothes'\r\n},{\r\n    'name': 'jeans',\r\n    'color': 'blue',\r\n    'fit': 'large',\r\n    'regio': 'clothes'\r\n},{\r\n    'name': 'confetti',\r\n    'size': '10',\r\n    'color': 'yellow',\r\n    'amount': '4',\r\n    'regio': 'decoration'\r\n},{\r\n    'name': 'embleem',\r\n    'size': '6',\r\n    'color': 'red',\r\n    'amount': '1',\r\n    'regio': 'decoration'\r\n},{\r\n    'name': 'slingers',\r\n    'size': '40',\r\n    'color': 'red',\r\n    'amount': '1',\r\n    'regio': 'decoration'\r\n},{\r\n    'name': 'iets',\r\n    'weight': '20',\r\n    'regio': 'tierlantin'\r\n},{\r\n    'name': 'niets',\r\n    'weight': '30',\r\n    'regio': 'tierlantin'\r\n},{\r\n    'name': 'niks',\r\n    'weight': '15',\r\n    'regio': 'tierlantin'\r\n}];\r\n\n\n//# sourceURL=webpack:///./Js/Products/Products.js?");

/***/ }),

/***/ "./Js/Products/ShowPrducts.js":
/*!************************************!*\
  !*** ./Js/Products/ShowPrducts.js ***!
  \************************************/
/*! exports provided: productdiv, Dropcount, ShowProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productdiv\", function() { return productdiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dropcount\", function() { return Dropcount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShowProducts\", function() { return ShowProducts; });\n// =========== render products ============= //\r\nconst productdiv = document.getElementById('HiddenProducts');\r\nlet Dropcount = 0;\r\n\r\n// =========== show products ============= //\r\nfunction ShowProducts(products) {\r\n    productdiv.innerHTML = \"\";\r\n    if(Dropcount === 0){\r\n        for(let i = 0; i < products.length; i++){\r\n            let divi = document.createElement('div');\r\n            divi.setAttribute('draggable', 'true');\r\n            divi.text = divi.value = `${products[i]['name']}`;\r\n            divi.innerHTML = `${products[i]['name']}`;\r\n            divi.style.border= \"1px solid black\";\r\n            productdiv.appendChild(divi).className = \"draggable-product\";\r\n            productdiv.appendChild(divi).id = i;\r\n            Dropcount = 1;\r\n        }\r\n    }\r\n    else{\r\n        productdiv.innerHTML = \"\";\r\n        Dropcount = 0;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Js/Products/ShowPrducts.js?");

/***/ }),

/***/ "./Js/Weather/Api_Weather.js":
/*!***********************************!*\
  !*** ./Js/Weather/Api_Weather.js ***!
  \***********************************/
/*! exports provided: ShowWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShowWeather\", function() { return ShowWeather; });\nconst iconElement = document.querySelector(\".weather-icon\");\r\nconst tempElement = document.querySelector(\".temperature-value p\");\r\nconst descElement = document.querySelector(\".temperature-description p\");\r\nconst LocationElement = document.querySelector(\".location p\");\r\nconst NotificationElement = document.querySelector(\".notification\");\r\nlet inputValue = document.querySelector('.inputValue');\r\n\r\nconst weather = {};\r\n\r\nweather.temperature = {\r\n    unit : \"celsius\"\r\n};\r\n\r\nconst KELVIN = 273;\r\nconst KEY = \"62f7ba282a6bdc30f5c263bf084aefa5\";\r\n\r\nfunction ShowWeather() {\r\n    fetch(`http://api.openweathermap.org/data/2.5/weather?q=`+inputValue.value+`&appid=${KEY}`)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            var longValue = data['coord']['lon'];\r\n            var latValue = data['coord']['lat'];\r\n\r\n            getWeather(latValue, longValue);\r\n        })\r\n\r\n        .catch(err => alert(\"Wrong city name\"))\r\n}\r\n\r\nif('geolocation' in navigator){\r\n    navigator.geolocation.getCurrentPosition(setPosition, showError);\r\n}else{\r\n    NotificationElement.style.display = \"block\";\r\n    NotificationElement.innerHTML = \"<p>Browser does not support geolocation</p>\";\r\n}\r\n\r\nfunction setPosition(position) {\r\n    let latitude = position.coords.latitude;\r\n    let longitude = position.coords.longitude;\r\n\r\n    getWeather(latitude, longitude);\r\n}\r\n\r\nfunction showError(error) {\r\n    NotificationElement.style.display = \"block\";\r\n    NotificationElement.innerHTML = `<p>${error.message}</p>`;\r\n}\r\n\r\nfunction getWeather(latitude, longitude) {\r\n    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;\r\n\r\n    fetch(api)\r\n        .then(function (response) {\r\n            let data = response.json();\r\n            return data;\r\n    }).then(function (data) {\r\n        weather.temperature.value = Math.floor(data.main.temp - KELVIN);\r\n        weather.description = data.weather[0].description;\r\n        weather.iconId = data.weather[0].icon;\r\n        weather.city = data.name;\r\n        weather.country = data.sys.country;\r\n    }).then(function () {\r\n            displayWeather();\r\n    })\r\n}\r\n\r\nfunction displayWeather() {\r\n    iconElement.innerHTML = `<img src=\"../Icons/${weather.iconId}.png\"/>`;\r\n    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;\r\n    descElement.innerHTML = weather.description;\r\n    LocationElement.innerHTML = `${weather.city}, ${weather.country}`;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./Js/Weather/Api_Weather.js?");

/***/ }),

/***/ "./Js/Wizard/stepzation.js":
/*!*********************************!*\
  !*** ./Js/Wizard/stepzation.js ***!
  \*********************************/
/*! exports provided: startForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startForm\", function() { return startForm; });\n/* animations are from:\r\n * https://daneden.github.io/animate.css/\r\n */\r\nlet __fade_in = ' animated fadeIn';\r\nlet __fade_out = ' animated fadeOut';\r\nlet count = 0;\r\n\r\ndocument.addEventListener('DOMContentLoaded', function(e) {\r\n    window.stepzation = new Stepzation(document.getElementById('setup'));\r\n\r\n    stepzation.next_step_action = function(step) {\r\n        if (step.getAttribute('data-name') == 'admin_form') {\r\n            stepzation.db['admin'] = {};\r\n\r\n            let productname = step.querySelector('#product_name');\r\n            let productdescription = step.querySelector('#product_description');\r\n\r\n            /*                        stepzation.db['product']['name'] = productname.value;\r\n                                    stepzation.db['product']['description'] = productdescription.value;*/\r\n\r\n            /* You could send a request here for example */\r\n            /*(wpost('/api/install', JSON.stringify(stepzation.db), function(data) {\r\n                data = JSON.parse(data);\r\n\r\n                if ('error' in data) {\r\n                    stepzation.previous_step();\r\n                    stepzation.handle_error(data['error']);\r\n                }\r\n            })*/\r\n        }\r\n\r\n        return []; // ugly hack\r\n    };\r\n\r\n    stepzation.handle_error = function(error) {\r\n        backdrop_error(error);\r\n    };\r\n\r\n    stepzation.handle_finish = function(step) {\r\n        alert('all steps done');\r\n        document.getElementById('thegrid').style.display = \"block\";\r\n        count -= 1;\r\n    };\r\n\r\n});\r\n\r\nfunction startForm() {\r\n    document.getElementById('fieldGroupDivDecoration').style.display = \"none\";\r\n    document.getElementById('fieldGroupDivTierlantijn').style.display = \"none\";\r\n    if(count == 0)\r\n    {\r\n        document.getElementById('thegrid').style.display = \"none\";\r\n        document.getElementById('setup').style.display = \"block\";\r\n        stepzation.start();\r\n        count += 1;\r\n    }\r\n    else{\r\n        document.getElementById('thegrid').style.display = \"block\";\r\n        document.getElementById('setup').style.display = \"none\";\r\n        count -= 1;\r\n    }\r\n}\r\n\r\nfunction showDiv(select){\r\n    if(select.value==\"Kleding\"){\r\n        document.getElementById('fieldGroupDivClothing').style.display = \"block\";\r\n        document.getElementById('fieldGroupDivDecoration').style.display = \"none\";\r\n        document.getElementById('fieldGroupDivTierlantijn').style.display = \"none\";\r\n    } else{\r\n        document.getElementById('fieldGroupDivClothing').style.display = \"none\";\r\n    }\r\n    if(select.value==\"Tierlantijn\"){\r\n        document.getElementById('fieldGroupDivClothing').style.display = \"none\";\r\n        document.getElementById('fieldGroupDivDecoration').style.display = \"none\";\r\n        document.getElementById('fieldGroupDivTierlantijn').style.display = \"block\";\r\n    } else{\r\n        document.getElementById('fieldGroupDivTierlantijn').style.display = \"none\";\r\n    }\r\n    if(select.value==\"Decoratie\"){\r\n        document.getElementById('fieldGroupDivClothing').style.display = \"none\";\r\n        document.getElementById('fieldGroupDivDecoration').style.display = \"block\";\r\n        document.getElementById('fieldGroupDivTierlantijn').style.display = \"none\";\r\n    } else{\r\n        document.getElementById('fieldGroupDivDecoration').style.display = \"none\";\r\n    }\r\n}\r\n\r\nlet Stepzation = function(elem) {\r\n    let _this = this;\r\n\r\n    _this.db = {};\r\n\r\n    _this.elem = elem;\r\n    _this.steps = elem.querySelectorAll('.step-by-step-step');\r\n\r\n    /**\r\n     * Initializer\r\n     *\r\n     * Runs at instantiation.\r\n     */\r\n    _this.init = function () {\r\n        for (let i = 0; i < _this.steps.length; i++) {\r\n            let step = _this.steps[i];\r\n            let step_prev_btn = step.querySelector('[data-type=\"prev\"]');\r\n            let step_next_btn = step.querySelector('[data-type=\"next\"]');\r\n\r\n            if (step_prev_btn != null)\r\n                step_prev_btn.addEventListener('click', function(e) { _this.previous_step(); });\r\n\r\n            if (step_next_btn != null)\r\n                step_next_btn.addEventListener('click', function(e) { _this.next_step(); });\r\n\r\n            step.setAttribute('data-active', '0');\r\n            step.setAttribute('data-step-id', i);\r\n        }\r\n    };\r\n\r\n    /**\r\n     * Will start the setup.\r\n     */\r\n    _this.start = function() {\r\n        _this.activate_step(_this.steps[0]);\r\n    };\r\n\r\n    /**\r\n     * Get the ID of the current step.\r\n     *\r\n     * @return Int | null\r\n     */\r\n    _this.get_current_step_id = function () {\r\n        for (let i = 0; i < _this.steps.length; i++) {\r\n            let step = _this.steps[i];\r\n\r\n            if (step.getAttribute('data-active') == '1')\r\n                return parseInt(step.getAttribute('data-step-id'));\r\n        }\r\n\r\n        return null;\r\n    };\r\n\r\n    /**\r\n     * Make the setup go to the next step.\r\n     */\r\n    _this.next_step = function () {\r\n        let current_id = _this.get_current_step_id();\r\n\r\n        if (current_id == null)\r\n            return;\r\n\r\n        let errors = [];\r\n\r\n        if (typeof _this.next_step_action != 'undefined') {\r\n            if (_this.next_step_action != null && _this.next_step_action) {\r\n                errors = _this.next_step_action(_this.steps[current_id]);\r\n            }\r\n        }\r\n\r\n        if (typeof errors == 'undefined')\r\n            errors = [];\r\n\r\n        if (errors.length > 0) {\r\n            for (let i = 0; i < errors.length; i++) {\r\n                /* Making the error handler none-proprietary by\r\n                 * making it possible for other developers to create a custom\r\n                 * error handler.\r\n                 */\r\n                if (typeof _this.handle_error != 'undefined') {\r\n                    if (_this.handle_error != null && _this.handle_error) {\r\n                        _this.handle_error(errors[i]);\r\n                    }\r\n                }\r\n            }\r\n\r\n            return;\r\n        }\r\n\r\n        let next_id = current_id + 1;\r\n\r\n        if (next_id >= _this.steps.length) {\r\n            /* Making the finish action none-proprietary by\r\n             * making it possible for other developers to create custom\r\n             * finish actions.\r\n             */\r\n            if (typeof _this.handle_finish != 'undefined') {\r\n                if (_this.handle_finish != null && _this.handle_finish) {\r\n                    _this.handle_finish(_this.steps[current_id]);\r\n                }\r\n            }\r\n            _this.deactivate_step(_this.steps[current_id]);\r\n        } else {\r\n            _this.activate_step(_this.steps[next_id]);\r\n        }\r\n    };\r\n\r\n    /**\r\n     * Make the setup go to the previous step.\r\n     */\r\n    _this.previous_step = function () {\r\n        let current_id = _this.get_current_step_id();\r\n\r\n        if (current_id == null)\r\n            return;\r\n\r\n        let prev_id = current_id - 1;\r\n        _this.activate_step(_this.steps[prev_id]);\r\n    };\r\n\r\n    /**\r\n     * Activate a single step,\r\n     * will deactivate all other steps.\r\n     */\r\n    _this.activate_step = function(step) {\r\n        for (let i = 0; i < _this.steps.length; i++) {\r\n            let _step = _this.steps[i];\r\n\r\n            if (_step == step)\r\n                continue;\r\n\r\n            _this.deactivate_step(_step);\r\n        }\r\n\r\n        step.className = step.className.replace(__fade_out, '');\r\n        step.className += __fade_in;\r\n        step.setAttribute('data-active', '1');\r\n    };\r\n\r\n    /**\r\n     * Deactivate a single step.\r\n     */\r\n    _this.deactivate_step = function(step) {\r\n        if (step.className.indexOf(__fade_in) > -1) {\r\n            step.className = step.className.replace(__fade_in, '');\r\n            step.className += __fade_out;\r\n        }\r\n        step.setAttribute('data-active', '0');\r\n    }\r\n\r\n    _this.init();\r\n};\r\n\n\n//# sourceURL=webpack:///./Js/Wizard/stepzation.js?");

/***/ })

/******/ });