/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/appendNumber.js":
/*!********************************!*\
  !*** ./src/js/appendNumber.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appNumber: () => (/* binding */ appNumber)
/* harmony export */ });
/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states.js */ "./src/js/states.js");

function appNumber(num) {
  if (num === "," && _states_js__WEBPACK_IMPORTED_MODULE_0__.allState.currentOp.indexOf(",") > -1) return;
  if (_states_js__WEBPACK_IMPORTED_MODULE_0__.allState.currentOp === "0" && num != ",") (0,_states_js__WEBPACK_IMPORTED_MODULE_0__.updateStates)({
    currentOp: ""
  });
  if (_states_js__WEBPACK_IMPORTED_MODULE_0__.allState.currentOp === "0" && num == ",") (0,_states_js__WEBPACK_IMPORTED_MODULE_0__.updateStates)({
    currentOp: "0"
  });
  if ((_states_js__WEBPACK_IMPORTED_MODULE_0__.allState.currentOp + num).length > 25) {
    return;
  }
  _states_js__WEBPACK_IMPORTED_MODULE_0__.allState.currentOp += num;
  (0,_states_js__WEBPACK_IMPORTED_MODULE_0__.updateStates)({
    currentOp: _states_js__WEBPACK_IMPORTED_MODULE_0__.allState.currentOp
  });
}


/***/ }),

/***/ "./src/js/calculate.js":
/*!*****************************!*\
  !*** ./src/js/calculate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculate: () => (/* binding */ calculate)
/* harmony export */ });
/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states.js */ "./src/js/states.js");

function calculate() {
  let reasult = 0;
  let prev = parseFloat(_states_js__WEBPACK_IMPORTED_MODULE_0__.allState.prevOperation.replaceAll(",", "."));
  let current = parseFloat(_states_js__WEBPACK_IMPORTED_MODULE_0__.allState.currentOp.replaceAll(",", "."));
  if (isNaN(prev) || isNaN(current)) {
    return;
  }
  switch (_states_js__WEBPACK_IMPORTED_MODULE_0__.allState.operation) {
    case "+":
      reasult = prev + current;
      break;
    case "-":
      reasult = prev - current;
      break;
    case "/":
      reasult = prev / current;
      break;
    case "%":
      reasult = prev / 100 * current;
      break;
    case "*":
      reasult = prev * current;
      break;
    default:
      return;
  }
  (0,_states_js__WEBPACK_IMPORTED_MODULE_0__.updateStates)({
    currentOp: reasult % 1 == 0 ? reasult.toFixed(0) : reasult.toFixed(5),
    operation: "",
    prevOperation: ""
  });
}


/***/ }),

/***/ "./src/js/checkOperation.js":
/*!**********************************!*\
  !*** ./src/js/checkOperation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkOperation: () => (/* binding */ checkOperation)
/* harmony export */ });
/* harmony import */ var _calculate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate.js */ "./src/js/calculate.js");
/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states.js */ "./src/js/states.js");


function checkOperation(operation) {
  if (_states_js__WEBPACK_IMPORTED_MODULE_1__.allState.currentOp === "") {
    return;
  }
  if (_states_js__WEBPACK_IMPORTED_MODULE_1__.allState.prevOperation !== "") {
    (0,_calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculate)();
  }
  (0,_states_js__WEBPACK_IMPORTED_MODULE_1__.updateStates)({
    operation: operation,
    prevOperation: _states_js__WEBPACK_IMPORTED_MODULE_1__.allState.currentOp,
    currentOp: ""
  });
}


/***/ }),

/***/ "./src/js/clear.js":
/*!*************************!*\
  !*** ./src/js/clear.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearOperations: () => (/* binding */ clearOperations)
/* harmony export */ });
/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states.js */ "./src/js/states.js");

function clearOperations() {
  (0,_states_js__WEBPACK_IMPORTED_MODULE_0__.updateStates)({
    currentOp: "0",
    operation: "",
    prevOperation: ""
  });
}


/***/ }),

/***/ "./src/js/states.js":
/*!**************************!*\
  !*** ./src/js/states.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allState: () => (/* binding */ allState),
/* harmony export */   updateStates: () => (/* binding */ updateStates)
/* harmony export */ });
let allState = {
  currentOp: "0",
  operation: "",
  prevOperation: ""
};
function updateStates(newStates) {
  allState = {
    ...allState,
    ...newStates
  };
}


/***/ }),

/***/ "./src/js/updateScreen.js":
/*!********************************!*\
  !*** ./src/js/updateScreen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateScreen: () => (/* binding */ updateScreen)
/* harmony export */ });
/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states.js */ "./src/js/states.js");

function updateScreen() {
  let res = document.getElementById("result");
  let test = document.getElementById("test");
  let currentText = _states_js__WEBPACK_IMPORTED_MODULE_0__.allState.currentOp;
  let prevText = _states_js__WEBPACK_IMPORTED_MODULE_0__.allState.prevOperation;
  if (prevText.length > 20) {
    test.style.fontSize = "16px";
  }
  if (currentText.length > 15) {
    res.style.fontSize = "16px";
  } else if (currentText.length > 8) {
    res.style.fontSize = "26px";
  } else {
    res.style.fontSize = "48px";
  }
  res.innerText = _states_js__WEBPACK_IMPORTED_MODULE_0__.allState.currentOp;
  test.innerText = _states_js__WEBPACK_IMPORTED_MODULE_0__.allState.prevOperation + _states_js__WEBPACK_IMPORTED_MODULE_0__.allState.operation;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  --color-back-calc: #1c1c1c;
  --color-button-active: #dc9e00;
  --color-button: #ffb800;
  --color-number: #ffffff;
  --color-darkGray: #6d6d6d;
  --color-darkGrayActiveOrHover: #565656;
  --color-lightGary: #aeaeae;
  --color-lightGaryActiveOrHover: #858585;
  --color-lightGaryModeL: #d9d9d9;
  --color-darkGrayModeL: #d9d9d9;
  --color-back-calcModeL: #4a4a4a;
  --color-btn-close: red;
  --color-btn-collapse: yellow;
  --color-btn-any: green;
}

p,
h1,
label {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
p {
  font-size: 30px;
  text-transform: uppercase;
  pointer-events: none;
}

body {
  display: grid;
  grid-template-rows: 7vh 80vh 7vh;
  grid-template-columns: auto 95vw auto;
  grid-template-areas: ". header ." ". main ." ". footer .";
  row-gap: 10px;
}
header,
main,
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
header {
  grid-area: header;
}
main {
  grid-area: main;
  display: grid;
  grid-template-rows: 20px auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "dark light" "calc calc";
  gap: 20px;
}
label[for="light"],
label[for="dark"] {
  width: clamp(100px, 10%, 200px);
  display: flex;
  justify-self: center;
  justify-content: center;

  -webkit-tap-highlight-color: transparent !important;
}
#test {
  color: yellow;
}
label[for="dark"] {
  grid-area: dark;
}
label[for="light"] {
  grid-area: light;
}
.main_container {
  grid-area: calc;
  display: flex;
  justify-content: center;
  height: 100%;
}
footer {
  grid-area: footer;
}
.calc {
  width: clamp(280px, 50%, 320px);

  min-height: 400px;
  height: 95%;
  max-height: 563px;
  background-color: var(--color-back-calc);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 5% 30% 65%;
  grid-template-areas: "mode" "screen" "buttons";
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 0px 11px 33px 12px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 11px 33px 12px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 11px 33px 12px rgba(34, 60, 80, 0.2);
}
.calc_screen_button {
  grid-area: mode;
  display: flex;
  gap: 10px;
  padding: 10px;
}
.calc_screen_button > label[for="close"],
label[for="collapse"],
label[for="any"] {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: block;
}
label[for="close"] {
  background-color: var(--color-btn-close);
}
label[for="collapse"] {
  background-color: var(--color-btn-collapse);
}
label[for="any"] {
  background-color: var(--color-btn-any);
}
.calc_screen {
  grid-area: screen;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px 20px;
}
.calc_buttons {
  grid-area: buttons;
}
.calc_buttons {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "btn1 btn2 btn3 btn4"
    "btn5 btn6 btn7 btn8"
    "btn9 btn10 btn11 btn12"
    "btn13 btn14 btn15 btn16"
    "btn17 btn17 btn18 btn19";
  gap: 2px;
}
.btn {
  color: var(--color-number);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent !important;
  outline: none;
  user-select: none;
}

.orangeBtn {
  background-color: var(--color-button);
}
.orangeBtn:active {
  background-color: var(--color-button-active);
}
.darkGray {
  background-color: var(--color-darkGray);
}
.lightGray {
  background-color: var(--color-lightGary);
}
.darkGray:active {
  background-color: var(--color-darkGrayActiveOrHover);
}
.lightGray:active {
  background-color: var(--color-lightGaryActiveOrHover);
}
.btn1 {
  grid-area: btn1;
}
.btn2 {
  grid-area: btn2;
}
.btn3 {
  grid-area: btn3;
}
.btn4 {
  grid-area: btn4;
}
.btn5 {
  grid-area: btn5;
}
.btn6 {
  grid-area: btn6;
}
.btn7 {
  grid-area: btn7;
}
.btn8 {
  grid-area: btn8;
}
.btn9 {
  grid-area: btn9;
}
.btn10 {
  grid-area: btn10;
}
.btn11 {
  grid-area: btn11;
}
.btn12 {
  grid-area: btn12;
}
.btn13 {
  grid-area: btn13;
}
.btn14 {
  grid-area: btn14;
}
.btn15 {
  grid-area: btn15;
}
.btn16 {
  grid-area: btn16;
}
.btn17 {
  grid-area: btn17;
}
.btn18 {
  grid-area: btn18;
}
.btn19 {
  grid-area: btn19;
}
.calc_screen_container {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: "p1" "p2";
}
#test,
#result {
  width: 100%;
  height: 100%;
  text-align: end;
}
#test {
  grid-area: p1;
}
#result {
  grid-area: p2;
}

#result {
  color: var(--color-number);
  font-size: 48px;
}
.light,
.lightB {
  transition: 0.7s ease-in-out;
}
input[type="radio"] {
  display: none;
}
input[id="dark"] ~ label[for="dark"],
input[id="light"] ~ label[for="light"] {
  background-color: var(--color-button);
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  transition: 0.7s ease-in-out;
}
input[id="dark"]:checked ~ label[for="dark"],
input[id="light"]:checked ~ label[for="light"] {
  background-color: var(--color-button-active);
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
}

input[id="light"]:checked ~ .main_container .light {
  background-color: var(--color-back-calcModeL);
}
input[id="light"]:checked ~ .main_container .lightB {
  background: var(--color-darkGrayModeL);
  color: var(--color-back-calc);
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: var(--color-darkGrayModeL);
  transition: 0.7s ease-in-out;
}
input[id="dark"]:checked ~ .background {
  background-color: var(--color-button-active);
}
footer > p {
  font-size: 10px;
  padding: 0;
}
#loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.61);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-number);
  z-index: 1;
}
#loading p {
  user-select: none;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _js_appendNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/appendNumber.js */ "./src/js/appendNumber.js");
/* harmony import */ var _js_calculate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/calculate.js */ "./src/js/calculate.js");
/* harmony import */ var _js_checkOperation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/checkOperation.js */ "./src/js/checkOperation.js");
/* harmony import */ var _js_clear_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/clear.js */ "./src/js/clear.js");
/* harmony import */ var _js_states_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/states.js */ "./src/js/states.js");
/* harmony import */ var _js_updateScreen_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/updateScreen.js */ "./src/js/updateScreen.js");







window.addEventListener("load", () => {
  let load = document.getElementById("loading");
  load.style.display = "none";
  let btns = document.querySelectorAll("[aria-n]");
  let operations = document.querySelectorAll("[aria-o]");
  let equalsBtn = document.querySelector("[aria-equals]");
  let clearOperation = document.querySelector("[aria-ac]");
  let plusMinus = document.querySelector("[aria-plusMinus]");
  plusMinus.addEventListener("click", () => {
    (0,_js_states_js__WEBPACK_IMPORTED_MODULE_5__.updateStates)({
      currentOp: String(parseFloat(_js_states_js__WEBPACK_IMPORTED_MODULE_5__.allState.currentOp) * -1)
    });
    (0,_js_updateScreen_js__WEBPACK_IMPORTED_MODULE_6__.updateScreen)();
  });
  clearOperation.addEventListener("click", () => {
    (0,_js_clear_js__WEBPACK_IMPORTED_MODULE_4__.clearOperations)();
    (0,_js_updateScreen_js__WEBPACK_IMPORTED_MODULE_6__.updateScreen)();
  });
  btns.forEach(elem => {
    elem.addEventListener("click", e => {
      let num = e.currentTarget.innerText;
      (0,_js_appendNumber_js__WEBPACK_IMPORTED_MODULE_1__.appNumber)(num);
      (0,_js_updateScreen_js__WEBPACK_IMPORTED_MODULE_6__.updateScreen)();
    });
  });
  operations.forEach(elem => {
    elem.addEventListener("click", e => {
      let operation = e.currentTarget.innerText;
      (0,_js_checkOperation_js__WEBPACK_IMPORTED_MODULE_3__.checkOperation)(operation);
      (0,_js_updateScreen_js__WEBPACK_IMPORTED_MODULE_6__.updateScreen)();
    });
  });
  equalsBtn.addEventListener("click", () => {
    (0,_js_calculate_js__WEBPACK_IMPORTED_MODULE_2__.calculate)();
    (0,_js_updateScreen_js__WEBPACK_IMPORTED_MODULE_6__.updateScreen)();
  });
});
})();

/******/ })()
;