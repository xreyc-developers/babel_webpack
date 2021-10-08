/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/modules/wizard.js
var wizard = "Reyco Seguma";
;// CONCATENATED MODULE: ./src/modules/barbarian.js
var barbarian = "Niclaus Michaelson";
;// CONCATENATED MODULE: ./src/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //require('./index.css');
//import "./index.css"



var getUserId = function getUserId(username) {
  if (username == "xreyc") return 1;
  return 2;
};

var obj = {
  a: "Aplha",
  b: "Bravo"
};

var newObj = _objectSpread(_objectSpread({}, obj), {}, {
  c: "Charlie"
});

console.log(newObj);
console.log(getUserId("xreyc"));
console.log(wizard);
console.log(barbarian);
/******/ })()
;