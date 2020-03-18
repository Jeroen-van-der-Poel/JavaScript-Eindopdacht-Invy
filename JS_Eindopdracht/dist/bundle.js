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
/*! exports provided: currentRegio, Start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentRegio\", function() { return currentRegio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Start\", function() { return Start; });\n/* harmony import */ var _Grid_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid/Grid */ \"./Js/Grid/Grid.js\");\n/* harmony import */ var _Weather_Api_Weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weather/Api_Weather */ \"./Js/Weather/Api_Weather.js\");\n/* harmony import */ var _Products_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products/Products */ \"./Js/Products/Products.js\");\n/* harmony import */ var _Wizard_Wizard_Steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Wizard/Wizard_Steps */ \"./Js/Wizard/Wizard_Steps.js\");\n/* harmony import */ var _Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Regios/Initialize */ \"./Js/Regios/Initialize.js\");\n/* harmony import */ var _DragAndDrop_DragDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DragAndDrop/DragDrop */ \"./Js/DragAndDrop/DragDrop.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst clothingbutton = document.getElementById(\"Clothing\");\r\nconst tierlantinbutton = document.getElementById(\"Tierlantin\");\r\nconst decorationbutton = document.getElementById(\"Decoration\");\r\nlet formStart = document.getElementById(\"StartForm\");\r\nlet formRegion = document.getElementById(\"product_region\");\r\n\r\nconst header = document.getElementById(\"Header\");\r\nconst grid = document.getElementById(\"grid\");\r\nconst gridClass = new _Grid_Grid__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"](grid);\r\nconst productdiv = document.getElementById('HiddenProducts');\r\nconst productClass = new _Products_Products__WEBPACK_IMPORTED_MODULE_2__[\"Products\"](productdiv);\r\n\r\nlet currentRegio = null;\r\n\r\n// =========== Page changes ============= //\r\nclothingbutton.addEventListener('click', clothesClick);\r\nfunction clothesClick() {\r\n    header.innerHTML = \"Kleding\";\r\n    grid.innerHTML = '';\r\n    changeFormRegion();\r\n    gridClass.createGrid(_Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Regios\"].getRegio(\"clothes\").grid);\r\n    currentRegio = null;\r\n    currentRegio = _Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Regios\"].getRegio(\"clothes\");\r\n    productClass.LoadProducts(currentRegio.items);\r\n    clothingbutton.style.color = \"green\";\r\n    tierlantinbutton.style.color = \"black\";\r\n    decorationbutton.style.color = \"black\";\r\n    formStart.style.color = \"black\";\r\n}\r\n\r\ntierlantinbutton.addEventListener('click', tierlantinClick);\r\nfunction tierlantinClick() {\r\n    header.innerHTML = \"Tierlantijn\";\r\n    grid.innerHTML = '';\r\n    changeFormRegion();\r\n    gridClass.createGrid(_Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Regios\"].getRegio(\"tierlantin\").grid);\r\n    currentRegio = null;\r\n    currentRegio = _Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Regios\"].getRegio(\"tierlantin\");\r\n    productClass.LoadProducts(currentRegio.items);\r\n    clothingbutton.style.color = \"black\";\r\n    tierlantinbutton.style.color = \"green\";\r\n    decorationbutton.style.color = \"black\";\r\n    formStart.style.color = \"black\";\r\n}\r\n\r\ndecorationbutton.addEventListener('click', decorationClick);\r\nfunction decorationClick() {\r\n    header.innerHTML = \"Decoratie\";\r\n    grid.innerHTML = '';\r\n    changeFormRegion();\r\n    gridClass.createGrid(_Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Regios\"].getRegio(\"decoration\").grid);\r\n    currentRegio = null;\r\n    currentRegio = _Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Regios\"].getRegio(\"decoration\");\r\n    productClass.LoadProducts(currentRegio.items);\r\n    clothingbutton.style.color = \"black\";\r\n    tierlantinbutton.style.color = \"black\";\r\n    decorationbutton.style.color = \"green\";\r\n    formStart.style.color = \"black\";\r\n}\r\n\r\n// =========== weather ============= //\r\nlet weatherButton = document.querySelector('.weatherbutton');\r\nweatherButton.addEventListener('click', WeatherFunction);\r\nfunction WeatherFunction() {\r\n    Object(_Weather_Api_Weather__WEBPACK_IMPORTED_MODULE_1__[\"ShowWeather\"])();\r\n}\r\n\r\n// =========== show products ============= //\r\nlet productButton = document.getElementById(\"sidebutton\");\r\nproductButton.addEventListener('click', productClick);\r\nfunction productClick() {\r\n    if(currentRegio != null){\r\n        productClass.ShowProducts();\r\n    }\r\n}\r\n\r\n// =========== Wizard ============= //\r\nformStart.addEventListener('click', WizardFunction);\r\nformRegion.addEventListener('change', changeDiv);\r\ndocument.addEventListener('DOMContentLoaded', ()=> {\r\n    document.getElementById('btn').addEventListener('click', addProduct)\r\n});\r\ndocument.addEventListener('DOMContentLoaded', function(e) {\r\n    window.wizardsteps = new Wizard_Steps(document.getElementById('setup'));\r\n\r\n    wizardsteps.handle_error = function(error) {\r\n        backdrop_error(error);\r\n    };\r\n\r\n    wizardsteps.handle_finish = function(step) {\r\n        alert('Alle stappen voltooid.');\r\n        Start();\r\n        _Wizard_Wizard_Steps__WEBPACK_IMPORTED_MODULE_3__[\"WizardSteps\"].count -= 1;\r\n    };\r\n\r\n});\r\nfunction changeDiv() {\r\n    let selectboxvalue = document.getElementById('product_region').options.selectedIndex;\r\n    _Wizard_Wizard_Steps__WEBPACK_IMPORTED_MODULE_3__[\"WizardSteps\"].showDiv(selectboxvalue);\r\n}\r\n\r\nfunction WizardFunction() {\r\n    _Wizard_Wizard_Steps__WEBPACK_IMPORTED_MODULE_3__[\"WizardSteps\"].startForm();\r\n    header.innerHTML = \"Product toevoegen\";\r\n    clothingbutton.style.color = \"black\";\r\n    tierlantinbutton.style.color = \"black\";\r\n    decorationbutton.style.color = \"black\";\r\n    formStart.style.color = \"green\";\r\n    productdiv.innerHTML = \"\";\r\n}\r\n\r\n// =========== initialize ============= //\r\nfunction Start() {\r\n    currentRegio = null;\r\n    header.innerHTML = \"Welkom\";\r\n    grid.innerHTML = \"Kies een regio\";\r\n    grid.style.textAlign = \"center\";\r\n    grid.style.border = \"none\";\r\n    clothingbutton.style.color = \"black\";\r\n    tierlantinbutton.style.color = \"black\";\r\n    decorationbutton.style.color = \"black\";\r\n    formStart.style.color = \"black\";\r\n\r\n    window.onload = function () {\r\n        if(localStorage.getItem(\"regios\") === null){\r\n            let clothes = new _Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Warehouse\"](\"clothes\", [], []);\r\n            clothes.grid = _Grid_Grid__WEBPACK_IMPORTED_MODULE_0__[\"clothesgrid\"];\r\n            _Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Regios\"].addRegios(clothes);\r\n            let decoration = new _Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Warehouse\"](\"decoration\", [], []);\r\n            decoration.grid = _Grid_Grid__WEBPACK_IMPORTED_MODULE_0__[\"decorationgrid\"];\r\n            _Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Regios\"].addRegios(decoration);\r\n            let tierlantin = new _Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Warehouse\"](\"tierlantin\", [], []);\r\n            tierlantin.grid = _Grid_Grid__WEBPACK_IMPORTED_MODULE_0__[\"tierlantingrid\"];\r\n            _Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Regios\"].addRegios(tierlantin);\r\n        }\r\n        else{\r\n            _Regios_Initialize__WEBPACK_IMPORTED_MODULE_4__[\"Regios\"].getRegios();\r\n        }\r\n    };\r\n}\r\n\r\nStart();\r\n\r\n// =========== drag and drop ============= //\r\nconst dropzones = document.getElementById('grid');\r\n\r\nlet el = null;\r\nlet currentItem;\r\nlet currentClassList;\r\nlet currentProduct;\r\n\r\nconst dragDrop = new _DragAndDrop_DragDrop__WEBPACK_IMPORTED_MODULE_5__[\"DragDrop\"](el, currentItem, currentClassList, currentProduct);\r\n\r\ndocument.querySelector('.draggable-items').addEventListener('dragstart', e => {\r\n    dragDrop.DragStart(e);\r\n});\r\n\r\ndropzones.addEventListener('dragover', (e) => {\r\n    dragDrop.DragOver(e);\r\n});\r\n\r\ndropzones.addEventListener('dragenter', (e) => {\r\n    dragDrop.DragEnter(e);\r\n});\r\n\r\ndropzones.addEventListener('drop', (e) => {\r\n    dragDrop.Drop(e);\r\n    productdiv.style.visibility = \"visible\";\r\n    productClass.LoadProducts(currentRegio.items);\r\n});\r\n\r\ndropzones.addEventListener('dragleave', (e) => {\r\n    dragDrop.DragLeave(e);\r\n    productdiv.style.visibility = \"visible\";\r\n    productClass.LoadProducts(currentRegio.items);\r\n});\r\n\n\n//# sourceURL=webpack:///./Js/App.js?");

/***/ }),

/***/ "./Js/DragAndDrop/DragDrop.js":
/*!************************************!*\
  !*** ./Js/DragAndDrop/DragDrop.js ***!
  \************************************/
/*! exports provided: DragDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DragDrop\", function() { return DragDrop; });\n/* harmony import */ var _Regios_Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Regios/Initialize */ \"./Js/Regios/Initialize.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ \"./Js/App.js\");\n\r\n\r\n\r\nclass DragDrop{\r\n    constructor(el, currentItem, currentClassList, currentProduct) {\r\n        this.el = el;\r\n        this.currentItem = currentItem;\r\n        this.currentClassList = currentClassList;\r\n        this.currentProduct = currentProduct;\r\n    }\r\n\r\n     DragStart(e){\r\n        e.dataTransfer.dropEffect = 'move';\r\n        this.el = e.target.cloneNode(true);\r\n        this.el.removeAttribute('draggable');\r\n\r\n         if (this.currentItem == null)\r\n         {\r\n             this.currentItem = e.target;\r\n             this.currentClassList = this.currentItem.classList;\r\n\r\n             //removes draggable from product-item\r\n             for(let index in this.currentClassList)\r\n             {\r\n                 if(/[a-z]\\d/.test(this.currentClassList[index]))\r\n                 {\r\n                     this.currentProduct = this.currentClassList[index];\r\n                     let productItem = document.getElementsByClassName(this.currentClassList[index])[0];\r\n                     productItem.removeAttribute('draggable');\r\n                     productItem.style.backgroundColor = \"orange\";\r\n                     break;\r\n                 }\r\n             }\r\n         }\r\n    }\r\n\r\n     DragOver(e){\r\n        if (e.target.classList.contains('empty'))\r\n        {\r\n\r\n        }\r\n        e.preventDefault();\r\n    }\r\n\r\n     DragEnter(e){\r\n         if (this.currentItem == null)\r\n         {\r\n             this.currentItem = e.target;\r\n             this.currentClassList = this.currentItem.classList;\r\n\r\n             //removes draggable from product-item\r\n             for(let index in this.currentClassList)\r\n             {\r\n                 if(/[a-z]\\d/.test(this.currentClassList[index]))\r\n                 {\r\n                     this.currentProduct = this.currentClassList[index];\r\n                     let productItem = document.getElementsByClassName(this.currentClassList[index])[0];\r\n                     productItem.removeAttribute('draggable');\r\n                     productItem.style.backgroundColor = \"orange\";\r\n                     break;\r\n                 }\r\n             }\r\n         }\r\n\r\n        let position = e.target.id;\r\n        let row = position.split(\"-\")[0];\r\n        let col = position.split(\"-\")[1];\r\n\r\n        if (Number.isInteger(parseInt(row)))\r\n        {\r\n            let temp = _App__WEBPACK_IMPORTED_MODULE_1__[\"currentRegio\"].grid[row][col];\r\n            if (_App__WEBPACK_IMPORTED_MODULE_1__[\"currentRegio\"].grid[row][col] == this.currentProduct)\r\n            {\r\n                e.target.style.backgroundColor = \"lightgrey\";\r\n                _App__WEBPACK_IMPORTED_MODULE_1__[\"currentRegio\"].grid[row][col] = \"-\";\r\n                _Regios_Initialize__WEBPACK_IMPORTED_MODULE_0__[\"Regios\"].updateRegio(_App__WEBPACK_IMPORTED_MODULE_1__[\"currentRegio\"]);\r\n                e.target.classList.add('empty');\r\n                e.target.classList.remove(this.currentProduct);\r\n                document.getElementById(e.target.id).removeAttribute('draggable');\r\n            }\r\n        }\r\n\r\n        if (e.target.classList.contains('empty')) {\r\n            e.target.style.backgroundColor = \"green\";\r\n        }\r\n        // currentItem = null;\r\n    }\r\n\r\n     Drop(e){\r\n        if (e.target.classList.contains('empty'))\r\n        {\r\n            e.preventDefault();\r\n            e.target.style.backgroundColor = \"blue\";\r\n            e.target.classList.remove('empty');\r\n            this.el = null;\r\n\r\n            let position = e.target.id;\r\n            let row = position.split(\"-\")[0];\r\n            let col = position.split(\"-\")[1];\r\n\r\n            _App__WEBPACK_IMPORTED_MODULE_1__[\"currentRegio\"].grid[row][col] = this.currentProduct;\r\n            _Regios_Initialize__WEBPACK_IMPORTED_MODULE_0__[\"Regios\"].updateRegio(_App__WEBPACK_IMPORTED_MODULE_1__[\"currentRegio\"]);\r\n            document.getElementById(position).classList.add(this.currentProduct);\r\n        } else\r\n        {\r\n            let productItem = document.getElementsByClassName(this.currentProduct)[0];\r\n            productItem.setAttribute('draggable',true);\r\n            productItem.style.backgroundColor = \"green\";\r\n        }\r\n        this.currentItem = null;\r\n    }\r\n\r\n     DragLeave(e){\r\n        if (e.target.classList.contains('empty')) {\r\n            e.target.style.backgroundColor = \"lightgrey\";\r\n        }\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./Js/DragAndDrop/DragDrop.js?");

/***/ }),

/***/ "./Js/Grid/Grid.js":
/*!*************************!*\
  !*** ./Js/Grid/Grid.js ***!
  \*************************/
/*! exports provided: clothesgrid, decorationgrid, tierlantingrid, Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clothesgrid\", function() { return clothesgrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decorationgrid\", function() { return decorationgrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tierlantingrid\", function() { return tierlantingrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App */ \"./Js/App.js\");\n\r\n\r\nlet clothesgrid =\r\n    [\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],\r\n        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '|','|', '|', '|','|', '|', '|'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['|', '|', '|','|', '|', '|','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '@','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['|', '|', '|','|', '|', '|','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],\r\n        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],\r\n        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n    ];\r\nlet decorationgrid =\r\n    [\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','@', '@', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '|','|', '|', '|'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '|','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '|','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '|', '|','|', '|', '|','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','@', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','-', '-', '@','@', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '|','|', '|', '|','|', '|', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '@', '-','-', '-', '-'],\r\n        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '@', '-','-', '-', '-'],\r\n        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n    ];\r\nlet tierlantingrid =\r\n    [\r\n        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '@', '-','-', '-', '-','-', '@', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],\r\n        ['-', '-', '-','|', '|', '|','|', '|', '|','|', '|', '|','|', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '-', '-','-', '@', '-','-', '-', '-','-', '@', '-','|', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '@', '@','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '@', '@','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],\r\n    ];\r\n\r\nclass Grid{\r\n    constructor(grid) {\r\n        this.grid = grid;\r\n    }\r\n\r\n    createGrid(array){\r\n        let rows = 0;\r\n        let cols = 0;\r\n        for(let i = 0; i < array.length; i++){\r\n            rows += (1);\r\n            for(let j =0; j < array[i].length; j++){\r\n                cols += (1);\r\n            }\r\n        }\r\n        this.grid.style.setProperty('--grid-rows', cols);\r\n        this.grid.style.setProperty('--grid-cols', rows);\r\n        let count = 0;\r\n        for (let c = 0; c < rows; c++) {\r\n            for(let d = 0; d < cols/15; d++){\r\n                let cell = document.createElement(\"div\");\r\n                if(array[c][d].valueOf() === \"-\"){\r\n                    this.grid.appendChild(cell).className = \"grid-item empty\";\r\n                    this.grid.appendChild(cell).style.backgroundColor = \"lightgray\";\r\n                }\r\n                if(array[c][d].valueOf() === \"@\"){\r\n                    this.grid.appendChild(cell).className = \"grid-item wall\";\r\n                    this.grid.appendChild(cell).style.backgroundColor = \"black\";\r\n                }\r\n                if(array[c][d].valueOf() === \"|\"){\r\n                    this.grid.appendChild(cell).className = \"grid-item floor\";\r\n                    this.grid.appendChild(cell).style.backgroundColor = \"darkgray\";\r\n                }\r\n                if(/[p]\\d/.test(array[c][d])){\r\n                    this.grid.appendChild(cell).style.backgroundColor = \"blue\";\r\n                    this.grid.appendChild(cell).setAttribute('draggable', 'true');\r\n                    this.grid.appendChild(cell).classList.add(\"grid-item\");\r\n                    this.grid.appendChild(cell).classList.add(array[c][d]);\r\n                }\r\n                this.grid.appendChild(cell).id = (c + \"-\" + d);\r\n                this.grid.appendChild(cell).style.minWidth = '62px';\r\n                this.grid.appendChild(cell).style.minHeight = '56px';\r\n                this.grid.appendChild(cell).style.maxWidth = '62px';\r\n                this.grid.appendChild(cell).style.maxHeight = '56px';\r\n                count++;\r\n            }\r\n        }\r\n    }\r\n\r\n    isStored(item)\r\n    {\r\n        let result = false;\r\n\r\n        for (let row = 0; row < 15; row++)\r\n        {\r\n            for (let col = 0; col < 15; col++)\r\n            {\r\n                if (_App__WEBPACK_IMPORTED_MODULE_0__[\"currentRegio\"].grid[row][col] == item)\r\n                {\r\n                    result = true;\r\n                }\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./Js/Grid/Grid.js?");

/***/ }),

/***/ "./Js/Products/Products.js":
/*!*********************************!*\
  !*** ./Js/Products/Products.js ***!
  \*********************************/
/*! exports provided: Products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Products\", function() { return Products; });\n/* harmony import */ var _Grid_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Grid/Grid */ \"./Js/Grid/Grid.js\");\n\r\n\r\nconst grid = document.getElementById(\"grid\");\r\nconst gridClass = new _Grid_Grid__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"](grid);\r\n\r\nclass Products{\r\n    constructor(productdiv) {\r\n        this.productdiv = productdiv;\r\n    }\r\n\r\n    LoadProducts(products) {\r\n        this.productdiv.innerHTML = \"\";\r\n        for(let item in products){\r\n            let divi = document.createElement('div');\r\n            divi.innerHTML = products[item].name;\r\n            divi.style.border= \"1px solid black\";\r\n            divi.classList.add(\"draggable-product\");\r\n            divi.classList.add(\"p\" + item);\r\n            if(gridClass.isStored(divi.classList[1])){\r\n                divi.style.backgroundColor = \"orange\";\r\n            }\r\n            else{\r\n                divi.setAttribute('draggable', 'true');\r\n                divi.style.backgroundColor = \"green\";\r\n            }\r\n            this.productdiv.appendChild(divi);\r\n        }\r\n    }\r\n\r\n    ShowProducts(){\r\n        if(this.productdiv.style.visibility === \"hidden\"){\r\n            this.productdiv.style.visibility = \"visible\";\r\n        }\r\n        else{\r\n            this.productdiv.style.visibility = \"hidden\";\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./Js/Products/Products.js?");

/***/ }),

/***/ "./Js/Regios/Initialize.js":
/*!*********************************!*\
  !*** ./Js/Regios/Initialize.js ***!
  \*********************************/
/*! exports provided: Regios, Warehouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Regios\", function() { return Regios; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Warehouse\", function() { return Warehouse; });\nclass Regios {\r\n    static getRegios()\r\n    {\r\n        let regios;\r\n        if(localStorage.getItem(\"regios\") === null){\r\n            regios = [];\r\n        }\r\n        else{\r\n            regios = JSON.parse(localStorage.getItem(\"regios\"));\r\n        }\r\n        return regios;\r\n    }\r\n\r\n    static addRegios(regio)\r\n    {\r\n        const stroredregios = this.getRegios();\r\n\r\n        stroredregios.push(regio);\r\n\r\n        localStorage.setItem(\"regios\", JSON.stringify(stroredregios));\r\n    }\r\n\r\n    static getRegio(name){\r\n        let regio;\r\n        if(localStorage.getItem(\"regios\") === null){\r\n            regio = [];\r\n        }\r\n        else{\r\n            let regios = JSON.parse(localStorage.getItem('regios'));\r\n            for (let index = 0; index < 3; index++)\r\n            {\r\n                if (regios[index].name.includes(name))\r\n                {\r\n                    regio = regios[index];\r\n                }\r\n            }\r\n        }\r\n        return regio;\r\n    }\r\n\r\n    static updateRegio(update) {\r\n        const storedRegios = this.getRegios();\r\n\r\n        for (let i in storedRegios)\r\n        {\r\n            if (storedRegios[i].name == update.name)\r\n            {\r\n                storedRegios[i] = update;\r\n            }\r\n        }\r\n        localStorage.setItem(\"regios\", JSON.stringify(storedRegios));\r\n    }\r\n}\r\n\r\n class Warehouse{\r\n    constructor(name, items, grid) {\r\n        this.name = name;\r\n        this.items = items;\r\n        this.grid = grid;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./Js/Regios/Initialize.js?");

/***/ }),

/***/ "./Js/Weather/Api_Weather.js":
/*!***********************************!*\
  !*** ./Js/Weather/Api_Weather.js ***!
  \***********************************/
/*! exports provided: ShowWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShowWeather\", function() { return ShowWeather; });\nconst iconElement = document.querySelector(\".weather-icon\");\r\nconst tempElement = document.querySelector(\".temperature-value p\");\r\nconst descElement = document.querySelector(\".temperature-description p\");\r\nconst LocationElement = document.querySelector(\".location p\");\r\nconst NotificationElement = document.querySelector(\".notification\");\r\nlet inputValue = document.querySelector('.inputValue');\r\n\r\nconst weather = {};\r\n\r\nweather.temperature = {\r\n    unit : \"celsius\"\r\n};\r\n\r\nconst KELVIN = 273;\r\nconst KEY = \"62f7ba282a6bdc30f5c263bf084aefa5\";\r\n\r\nfunction ShowWeather() {\r\n    fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\" + inputValue.value + \"&appid=\" + KEY)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            var longValue = data['coord']['lon'];\r\n            var latValue = data['coord']['lat'];\r\n\r\n            getWeather(latValue, longValue);\r\n        })\r\n\r\n        .catch(err => alert(\"Wrong city name\"))\r\n}\r\n\r\nif('geolocation' in navigator){\r\n    navigator.geolocation.getCurrentPosition(setPosition, showError);\r\n}else{\r\n    NotificationElement.style.display = \"block\";\r\n    NotificationElement.innerHTML = \"<p>Browser does not support geolocation</p>\";\r\n}\r\n\r\nfunction setPosition(position) {\r\n    let latitude = position.coords.latitude;\r\n    let longitude = position.coords.longitude;\r\n\r\n    getWeather(latitude, longitude);\r\n}\r\n\r\nfunction showError(error) {\r\n    NotificationElement.style.display = \"block\";\r\n    NotificationElement.innerHTML = \"<p>Geo locatie geblokeerd</p>\";\r\n}\r\n\r\nfunction getWeather(latitude, longitude) {\r\n    let api = \"http://api.openweathermap.org/data/2.5/weather?lat=\" + latitude + \"&lon=\" + longitude + \"&appid=\" + KEY;\r\n\r\n    fetch(api)\r\n        .then(function (response) {\r\n            let data = response.json();\r\n            return data;\r\n    }).then(function (data) {\r\n        weather.temperature.value = Math.floor(data.main.temp - KELVIN);\r\n        weather.description = data.weather[0].description;\r\n        weather.iconId = data.weather[0].icon;\r\n        weather.city = data.name;\r\n        weather.country = data.sys.country;\r\n    }).then(function () {\r\n            displayWeather();\r\n    })\r\n}\r\n\r\nfunction displayWeather() {\r\n    iconElement.innerHTML = \"<img src=../Icons/\" + weather.iconId + \".png/>\";\r\n    tempElement.innerHTML = weather.temperature.value + \"°<span>C</span>\";\r\n    descElement.innerHTML = weather.description;\r\n    LocationElement.innerHTML = weather.city + \" \" + weather.country;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./Js/Weather/Api_Weather.js?");

/***/ }),

/***/ "./Js/Wizard/Wizard_Steps.js":
/*!***********************************!*\
  !*** ./Js/Wizard/Wizard_Steps.js ***!
  \***********************************/
/*! exports provided: startForm, changeFormRegion, showDiv */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (14:22)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|     }\\n| \\n>     static addProduct = (ev) =>{\\n|         let selectboxvalue = document.getElementById('product_region').options.selectedIndex;\\n|         let product = {\");\n\n//# sourceURL=webpack:///./Js/Wizard/Wizard_Steps.js?");

/***/ })

/******/ });