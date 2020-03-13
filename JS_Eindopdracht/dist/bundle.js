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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Products_Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products/Products */ \"./Js/Products/Products.js\");\n/* harmony import */ var _Grid_GridLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid/GridLayout */ \"./Js/Grid/GridLayout.js\");\n/* harmony import */ var _Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid/CreateGrid */ \"./Js/Grid/CreateGrid.js\");\n/* harmony import */ var _Weather_Api_Weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Weather/Api_Weather */ \"./Js/Weather/Api_Weather.js\");\n\r\n\r\n\r\n\r\n\r\nconst clothingbutton = document.getElementById(\"Clothing\");\r\nconst tierlantinbutton = document.getElementById(\"Tierlantin\");\r\nconst decorationbutton = document.getElementById(\"Decoration\");\r\n\r\nclothingbutton.addEventListener('click', clothesClick);\r\ntierlantinbutton.addEventListener('click', tierlantinClick);\r\ndecorationbutton.addEventListener('click', decorationClick);\r\n\r\nconst header = document.getElementById(\"Header\");\r\n\r\n// =========== Page changes ============= //\r\nfunction clothesClick() {\r\n    header.innerHTML = \"Kleding\";\r\n    _Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].innerHTML = '';\r\n    Object(_Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"createGrid\"])(_Grid_GridLayout__WEBPACK_IMPORTED_MODULE_1__[\"clothesgrid\"]);\r\n    clothingbutton.style.color = \"green\";\r\n    tierlantinbutton.style.color = \"black\";\r\n    decorationbutton.style.color = \"black\";\r\n}\r\n\r\nfunction tierlantinClick() {\r\n    header.innerHTML = \"Tierlantijn\";\r\n    _Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].innerHTML = '';\r\n    Object(_Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"createGrid\"])(_Grid_GridLayout__WEBPACK_IMPORTED_MODULE_1__[\"tierlantingrid\"]);\r\n    clothingbutton.style.color = \"black\";\r\n    tierlantinbutton.style.color = \"green\";\r\n    decorationbutton.style.color = \"black\";\r\n}\r\n\r\nfunction decorationClick() {\r\n    header.innerHTML = \"Decoratie\";\r\n    _Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"grid\"].innerHTML = '';\r\n    Object(_Grid_CreateGrid__WEBPACK_IMPORTED_MODULE_2__[\"createGrid\"])(_Grid_GridLayout__WEBPACK_IMPORTED_MODULE_1__[\"decorationgrid\"]);\r\n    clothingbutton.style.color = \"black\";\r\n    tierlantinbutton.style.color = \"black\";\r\n    decorationbutton.style.color = \"green\";\r\n}\r\n\r\n// =========== initialize first page ============= //\r\nclothesClick();\r\n\r\n// =========== weather ============= //\r\nlet weatherButton = document.querySelector('.weatherbutton');\r\n\r\nweatherButton.addEventListener('click', WeatherFunction);\r\n\r\nfunction WeatherFunction() {\r\n    Object(_Weather_Api_Weather__WEBPACK_IMPORTED_MODULE_3__[\"ShowWeather\"])();\r\n}\r\n\r\n// =========== show products ============= //\r\nsidebutton\n\n//# sourceURL=webpack:///./Js/App.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Products\", function() { return Products; });\nconst Products = [{\r\n    'name': 'T-shirt',\r\n    'color': 'red',\r\n    'fit': 'small',\r\n    'regio': 'clothes'\r\n}, {\r\n    'name': 'sweather',\r\n    'color': 'white',\r\n    'fit': 'medium',\r\n    'regio': 'clothes'\r\n},{\r\n    'name': 'jeans',\r\n    'color': 'blue',\r\n    'fit': 'large',\r\n    'regio': 'clothes'\r\n},{\r\n    'name': 'confetti',\r\n    'size': '10',\r\n    'color': 'yellow',\r\n    'amount': '4',\r\n    'regio': 'decoration'\r\n}, {\r\n    'name': 'embleem',\r\n    'size': '6',\r\n    'color': 'red',\r\n    'amount': '1',\r\n    'regio': 'decoration'\r\n},{\r\n    'name': 'slingers',\r\n    'size': '40',\r\n    'color': 'red',\r\n    'amount': '1',\r\n    'regio': 'decoration'\r\n},{\r\n    'name': 'iets',\r\n    'weight': '20',\r\n    'regio': 'tierlantin'\r\n}, {\r\n    'name': 'niets',\r\n    'weight': '30',\r\n    'regio': 'tierlanitn'\r\n},{\r\n    'name': 'niks',\r\n    'weight': '15',\r\n    'regio': 'tierlantin'\r\n}];\r\n\n\n//# sourceURL=webpack:///./Js/Products/Products.js?");

/***/ }),

/***/ "./Js/Weather/Api_Weather.js":
/*!***********************************!*\
  !*** ./Js/Weather/Api_Weather.js ***!
  \***********************************/
/*! exports provided: ShowWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShowWeather\", function() { return ShowWeather; });\nconst iconElement = document.querySelector(\".weather-icon\");\r\nconst tempElement = document.querySelector(\".temperature-value p\");\r\nconst descElement = document.querySelector(\".temperature-description p\");\r\nconst LocationElement = document.querySelector(\".location p\");\r\nconst NotificationElement = document.querySelector(\".notification\");\r\nlet button = document.querySelector('.weatherbutton');\r\nlet inputValue = document.querySelector('.inputValue');\r\n\r\nconst weather = {};\r\n\r\nweather.temperature = {\r\n    unit : \"celsius\"\r\n};\r\n\r\nconst KELVIN = 273;\r\nconst KEY = \"62f7ba282a6bdc30f5c263bf084aefa5\";\r\n\r\nfunction ShowWeather() {\r\n    fetch(`http://api.openweathermap.org/data/2.5/weather?q=`+inputValue.value+`&appid=${KEY}`)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            var longValue = data['coord']['lon'];\r\n            var latValue = data['coord']['lat'];\r\n\r\n            getWeather(latValue, longValue);\r\n        })\r\n\r\n        .catch(err => alert(\"Wrong city name\"))\r\n}\r\n\r\nif('geolocation' in navigator){\r\n    navigator.geolocation.getCurrentPosition(setPosition, showError);\r\n}else{\r\n    NotificationElement.style.display = \"block\";\r\n    NotificationElement.innerHTML = \"<p>Browser does not support geolocation</p>\";\r\n}\r\n\r\nfunction setPosition(position) {\r\n    let latitude = position.coords.latitude;\r\n    let longitude = position.coords.longitude;\r\n\r\n    getWeather(latitude, longitude);\r\n}\r\n\r\nfunction showError(error) {\r\n    NotificationElement.style.display = \"block\";\r\n    NotificationElement.innerHTML = `<p>${error.message}</p>`;\r\n}\r\n\r\nfunction getWeather(latitude, longitude) {\r\n    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;\r\n\r\n    fetch(api)\r\n        .then(function (response) {\r\n            let data = response.json();\r\n            return data;\r\n    }).then(function (data) {\r\n        weather.temperature.value = Math.floor(data.main.temp - KELVIN);\r\n        weather.description = data.weather[0].description;\r\n        weather.iconId = data.weather[0].icon;\r\n        weather.city = data.name;\r\n        weather.country = data.sys.country;\r\n    }).then(function () {\r\n            displayWeather();\r\n    })\r\n}\r\n\r\nfunction displayWeather() {\r\n    iconElement.innerHTML = `<img src=\"../Icons/${weather.iconId}.png\"/>`;\r\n    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;\r\n    descElement.innerHTML = weather.description;\r\n    LocationElement.innerHTML = `${weather.city}, ${weather.country}`;\r\n}\r\n\r\n/*\r\nfunction celsiusToFahr(temperature) {\r\n    return (temperature * 9/5) + 32;\r\n}\r\n\r\ntempElement.addEventListener(\"click\", function () {\r\n    if(weather.temperature.value === undefined) return;\r\n\r\n    if(weather.temperature.unit == \"celsius\"){\r\n        let fahr = celsiusToFahr(weather.temperature.value);\r\n        fahr = Math.floor(fahr);\r\n\r\n        tempElement.innerHTML = `${fahr}°<span>F</span>`;\r\n        weather.temperature.unit = \"fahrenheit\";\r\n    }\r\n    else{\r\n        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;\r\n        weather.temperature.unit = \"celsius\"\r\n    }\r\n});*/\r\n\n\n//# sourceURL=webpack:///./Js/Weather/Api_Weather.js?");

/***/ })

/******/ });