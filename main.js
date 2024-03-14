"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img-font/Ubuntu-Regular.ttf */ "./src/img-font/Ubuntu-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img-font/Ubuntu-Italic.ttf */ "./src/img-font/Ubuntu-Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img-font/Ubuntu-Bold.ttf */ "./src/img-font/Ubuntu-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img-font/Ubuntu-Light.ttf */ "./src/img-font/Ubuntu-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'MyFont';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype'),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype'),
    url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype'),
    url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype');
}

html {
  height: 100%;
}

body {
  margin: 0;
  font-family: 'MyFont';
}

/* nav */
.nav-bar {
  display: flex;
  height: 7vh;
  gap: 15px;
  justify-content: center;
  margin-bottom: .5rem;
}

.nav-btn {
  font-size: 1.5rem;
  background-color: white;
  border: none;
  cursor: pointer;
  position: relative;
}

.nav-btn,
.nav-btn:after,
.nav-btn:before {
  transition: all .5s;
}

.nav-btn:hover {
  color: #818181;
}

.nav-btn:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: #aaa;
  height: 1px;
}

.nav-btn:hover:after {
  width: 100%;
}


/* home page */
.homeBg {
  height: 80vh;
  width: 100%;
}

.name {
  font-size: 4rem;
  font-weight: 300;
  color: white;
  position: absolute;
  bottom: 15%;
  left: 2%;
}

.slogan {
  font-size: 1rem;
  font-style: italic;
  color: white;
  position: absolute;
  bottom: 15%;
  left: 3%;
}

footer {
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
}

.media {
  width: 34px;
  height: 34px;
  margin-left: 10px;
  margin-top: -7px;
}

div img.media:first-of-type {
  margin-left: 0px;
}

/* menu */

.menu-card {
  display: flex;
  justify-content: space-between;
}

.menu-card p {
  margin-top: 0;
}

.menu-card-left {
  margin-left: 1rem;
}

.menu-card-left h2 {
  font-size: 21px;
}

.price {
  margin-right: 2rem;
}

.menu-title {
  margin: 0 auto 21px auto;
  padding-top: 20px;
  text-align: center;
}

.white {
  background-color: white;
  width: 60%;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 1rem;
}

.white h2 {
  margin: 0;
}

.burger-img {
  display: block;
  margin: 0 auto;
  width: 70%;
  max-width: 500px;
}

/* contact page */

.map-img {
  display: block;
  /* height: 250px; */
  margin: 0 auto;
  width: 90%;
}

.contact-title {
  margin-left: 5% !important;
  padding-top: 1rem;
  font-size: 22px;
}

.margin-left {
  margin-left: 5%;
}

.email-form {
  width: 80%;
  margin: 0 auto;
}

.flex {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: .5rem;
  margin-bottom: .2rem;
}

textarea {
  margin-bottom: .5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB;;;8DAGuD;AACzD;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;EACT,qBAAqB;AACvB;;AAEA,QAAQ;AACR;EACE,aAAa;EACb,WAAW;EACX,SAAS;EACT,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;;AAGA,cAAc;AACd;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,SAAS;;AAET;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,cAAc;EACd,cAAc;EACd,UAAU;EACV,gBAAgB;AAClB;;AAEA,iBAAiB;;AAEjB;EACE,cAAc;EACd,mBAAmB;EACnB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["@font-face {\n  font-family: 'MyFont';\n  src: url('./img-font/Ubuntu-Regular.ttf') format('truetype'),\n    url('./img-font/Ubuntu-Italic.ttf') format('truetype'),\n    url('./img-font/Ubuntu-Bold.ttf') format('truetype'),\n    url('./img-font/Ubuntu-Light.ttf') format('truetype');\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: 'MyFont';\n}\n\n/* nav */\n.nav-bar {\n  display: flex;\n  height: 7vh;\n  gap: 15px;\n  justify-content: center;\n  margin-bottom: .5rem;\n}\n\n.nav-btn {\n  font-size: 1.5rem;\n  background-color: white;\n  border: none;\n  cursor: pointer;\n  position: relative;\n}\n\n.nav-btn,\n.nav-btn:after,\n.nav-btn:before {\n  transition: all .5s;\n}\n\n.nav-btn:hover {\n  color: #818181;\n}\n\n.nav-btn:after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 0%;\n  content: '.';\n  color: transparent;\n  background: #aaa;\n  height: 1px;\n}\n\n.nav-btn:hover:after {\n  width: 100%;\n}\n\n\n/* home page */\n.homeBg {\n  height: 80vh;\n  width: 100%;\n}\n\n.name {\n  font-size: 4rem;\n  font-weight: 300;\n  color: white;\n  position: absolute;\n  bottom: 15%;\n  left: 2%;\n}\n\n.slogan {\n  font-size: 1rem;\n  font-style: italic;\n  color: white;\n  position: absolute;\n  bottom: 15%;\n  left: 3%;\n}\n\nfooter {\n  padding: 0 1.5rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.media {\n  width: 34px;\n  height: 34px;\n  margin-left: 10px;\n  margin-top: -7px;\n}\n\ndiv img.media:first-of-type {\n  margin-left: 0px;\n}\n\n/* menu */\n\n.menu-card {\n  display: flex;\n  justify-content: space-between;\n}\n\n.menu-card p {\n  margin-top: 0;\n}\n\n.menu-card-left {\n  margin-left: 1rem;\n}\n\n.menu-card-left h2 {\n  font-size: 21px;\n}\n\n.price {\n  margin-right: 2rem;\n}\n\n.menu-title {\n  margin: 0 auto 21px auto;\n  padding-top: 20px;\n  text-align: center;\n}\n\n.white {\n  background-color: white;\n  width: 60%;\n  max-width: 700px;\n  margin: 0 auto;\n  border-radius: 10px;\n  padding: 1rem;\n}\n\n.white h2 {\n  margin: 0;\n}\n\n.burger-img {\n  display: block;\n  margin: 0 auto;\n  width: 70%;\n  max-width: 500px;\n}\n\n/* contact page */\n\n.map-img {\n  display: block;\n  /* height: 250px; */\n  margin: 0 auto;\n  width: 90%;\n}\n\n.contact-title {\n  margin-left: 5% !important;\n  padding-top: 1rem;\n  font-size: 22px;\n}\n\n.margin-left {\n  margin-left: 5%;\n}\n\n.email-form {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.flex {\n  display: flex;\n  flex-direction: column;\n}\n\nlabel {\n  margin-top: .5rem;\n  margin-bottom: .2rem;\n}\n\ntextarea {\n  margin-bottom: .5rem;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_font_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-font/map.png */ "./src/img-font/map.png");


const createTitle = () => {
  const titleContacts = document.createElement('div');
  titleContacts.style.backgroundColor = "black";

  const title = document.createElement('h1');
  title.textContent = "Contact us";
  title.classList.add('menu-title')
  title.style.color = "white";

  titleContacts.append(title);

  return titleContacts
}

const contactSection = () => {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('white');

  const title = document.createElement('h2')
  title.textContent = 'Location';
  title.classList.add('contact-title');

  const map = new Image();
  map.src = _img_font_map_png__WEBPACK_IMPORTED_MODULE_0__
  map.classList.add('map-img')

  const location = document.createElement('p');
  location.innerHTML = '2345 Elm Street<br>Bokerville, NY 10001'
  location.classList.add('margin-left')


  const title2 = document.createElement('h2');
  title2.textContent = 'Phone';
  title2.classList.add('contact-title');

  const phoneNum = document.createElement('a');
  phoneNum.textContent = '(555)555-5555'
  phoneNum.setAttribute('href', 'tel:(555)555-5555');
  phoneNum.classList.add('margin-left')

  const title3 = document.createElement('h2');
  title3.textContent = 'Email';
  title3.classList.add('contact-title');

  const emailForm = document.createElement('form');
  emailForm.innerHTML = `
    <fieldset class="email-form">
      <legend>Send us a message</legend>
      <div class="flex">
        <label for="name" >Name </label>
        <input type="text" id="name" placeholder="First and last name"/>
      </div>
      <div class="flex">
        <label for="email" >Email </label>
        <input type="email" id="email" placeholder="Email"/>
      </div>
      <div class="flex">
        <label for="phone" >Phone Number </label>
        <input type="text" id="phone" placeholder="ex) (123)123-1234"/>
      </div>
      <div class="flex">
        <label for="message">Your Message </label>
        <textarea id="message" rows="7" cols="50" placeholder="Your message..."></textarea>
      </div>
      <button>Send Message</button>
    </fieldset>`


  contactContainer.append(title)
  contactContainer.append(map)
  contactContainer.append(location)
  contactContainer.append(title2)
  contactContainer.append(phoneNum)
  contactContainer.append(title3)
  contactContainer.append(emailForm)

  return contactContainer
}


const loadContact = () => {
  const content = document.querySelector('#content');
  content.textContent = '';
  content.style.backgroundColor = "black";
  // content.style.height = '100vh'
  content.append(createTitle())
  content.append(contactSection())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_font_home2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-font/home2.jpg */ "./src/img-font/home2.jpg");
/* harmony import */ var _img_font_fb_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-font/fb.svg */ "./src/img-font/fb.svg");
/* harmony import */ var _img_font_insta_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-font/insta.svg */ "./src/img-font/insta.svg");





const homePage = () => {

  const mainBg = document.createElement('div');

  const background = new Image();
  background.src = _img_font_home2_jpg__WEBPACK_IMPORTED_MODULE_0__;
  background.classList.add('homeBg')

  const name = document.createElement('h1');
  name.textContent = "Taste Bistro";
  name.classList.add('name');

  const slogan = document.createElement('h3');
  slogan.textContent = "A taste you'll remember.";
  slogan.classList.add('slogan');

  mainBg.append(slogan)
  mainBg.append(background)
  mainBg.append(name)
  content.append(mainBg)

  return mainBg
}

const footer = () => {
  const foot = document.createElement('footer');

  const location = document.createElement('div');
  const title = document.createElement('h4');
  title.textContent = "Location";
  const address = document.createElement('p');
  address.textContent = "2345 Elm Street\nBokerville, NY 10001";
  location.append(title)
  location.append(address)


  const hours = document.createElement('div');
  const title2 = document.createElement('h4');
  title2.textContent = "Hours";
  const hoursOpen = document.createElement('p');
  hoursOpen.textContent = "Tuesday - Sunday, 12:00pm - 10:00pm";

  hours.append(title2);
  hours.append(hoursOpen);

  const socials = document.createElement('div');
  const title3 = document.createElement('h4');
  title3.textContent = "Socials";

  const ig = new Image();
  ig.src = _img_font_insta_svg__WEBPACK_IMPORTED_MODULE_2__;
  ig.classList.add('media');

  const faceBook = new Image();
  faceBook.src = _img_font_fb_svg__WEBPACK_IMPORTED_MODULE_1__;
  faceBook.classList.add('media')

  socials.append(title3);
  socials.append(faceBook);
  socials.append(ig);

  foot.append(location)
  foot.append(hours)
  foot.append(socials)

  return foot
}

const createHomePage = () => {
  const content = document.querySelector('#content');
  content.style.backgroundColor = 'white';
  content.style.height = 'auto';
  content.append(homePage());
  content.append(footer())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






const content = document.querySelector('#content')

const navBar = () => {
  const nav = document.querySelector('nav');
  nav.textContent = ''
  nav.classList.add('nav-bar');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('nav-btn');
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener("click", loadPage)

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('nav-btn')
  menuBtn.textContent = 'Menu';
  menuBtn.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_2__["default"])

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('nav-btn');
  contactBtn.textContent = 'Contact';
  contactBtn.addEventListener("click", _contact__WEBPACK_IMPORTED_MODULE_3__["default"])

  nav.appendChild(homeBtn)
  nav.append(menuBtn)
  nav.append(contactBtn)

  return nav
}

const loadPage = () => {
  content.textContent = '';
  navBar();
  (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

loadPage();
console.log('ITS JOHHNYYY!!')

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_font_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-font/burger.jpg */ "./src/img-font/burger.jpg");


const createMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.style.backgroundColor = "black";

  const title = document.createElement('h1');
  title.textContent = "Our Menu";
  title.classList.add('menu-title')
  title.style.color = "white";

  menuContainer.append(title);

  return menuContainer
}

const menuItems = [
  {
    title: "scallops",
    description: "cauliflower, meyer lemon, capers, watercress",
    price: 20,
  },
  {
    title: "brick chicken",
    description: "creamed greens, lemon",
    price: 19
  },
  {
    title: "country fried ham steak",
    description: "curly endive, leeks vinaigrette",
    price: 15
  },
  {
    title: "grass-fed & finished burger",
    description: "white cheddar, pickled red onions, lettuce, potato roll",
    price: 19
  },
  {
    title: "country pate",
    description: "cherry mustards, cornichons, sourdough",
    price: 10
  },
  {
    title: "caesar salad",
    description: "chicories, parmesan croutons, anchovy, shaved parmesan",
    price: 10
  }
];

const createMenuItems = () => {
  const menuItemsContainer = document.createElement('div');
  menuItemsContainer.classList.add('white')
  menuItems.forEach((item) => {
    const menuCard = document.createElement('div');
    const menuCardLeft = document.createElement('div');
    const menuCardRight = document.createElement('div');
    menuCardLeft.classList.add('menu-card-left')
    menuCard.classList.add('menu-card')

    const title = document.createElement('h2');
    title.textContent = item.title;

    const details = document.createElement('p');
    details.textContent = item.description;
    menuCardLeft.append(title)
    menuCardLeft.append(details)

    const price = document.createElement('p');
    price.textContent = item.price;
    price.classList.add('price')
    menuCardRight.append(price);


    menuCard.append(menuCardLeft)
    menuCard.append(menuCardRight)
    menuItemsContainer.append(menuCard)

  })
  const burger = new Image();
  burger.src = _img_font_burger_jpg__WEBPACK_IMPORTED_MODULE_0__;
  burger.classList.add('burger-img')
  menuItemsContainer.append(burger);

  return menuItemsContainer
}

const loadMenu = () => {
  const content = document.querySelector('#content');
  content.textContent = "";
  content.style.backgroundColor = "black";
  // content.style.height = '100vh'
  content.append(createMenu())
  content.append(createMenuItems())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/img-font/Ubuntu-Bold.ttf":
/*!**************************************!*\
  !*** ./src/img-font/Ubuntu-Bold.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fec2d0f1431a6114a6ce.ttf";

/***/ }),

/***/ "./src/img-font/Ubuntu-Italic.ttf":
/*!****************************************!*\
  !*** ./src/img-font/Ubuntu-Italic.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbb3310412795b02afc4.ttf";

/***/ }),

/***/ "./src/img-font/Ubuntu-Light.ttf":
/*!***************************************!*\
  !*** ./src/img-font/Ubuntu-Light.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0dd2d5986e2731a16ee7.ttf";

/***/ }),

/***/ "./src/img-font/Ubuntu-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/img-font/Ubuntu-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cbb1b79a23478cc89ad.ttf";

/***/ }),

/***/ "./src/img-font/burger.jpg":
/*!*********************************!*\
  !*** ./src/img-font/burger.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "814bdb1e13f0a378ad7e.jpg";

/***/ }),

/***/ "./src/img-font/fb.svg":
/*!*****************************!*\
  !*** ./src/img-font/fb.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4aeb301d1df4f15eca73.svg";

/***/ }),

/***/ "./src/img-font/home2.jpg":
/*!********************************!*\
  !*** ./src/img-font/home2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "554e25ba3acd6e92d51b.jpg";

/***/ }),

/***/ "./src/img-font/insta.svg":
/*!********************************!*\
  !*** ./src/img-font/insta.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8eb286619e3cff41078c.svg";

/***/ }),

/***/ "./src/img-font/map.png":
/*!******************************!*\
  !*** ./src/img-font/map.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f356294bfaf23eb9f80.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUlBQWdEO0FBQzVGLDRDQUE0QyxxSUFBK0M7QUFDM0YsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMsbUlBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxVQUFVLG1DQUFtQztBQUM3QyxVQUFVLG1DQUFtQztBQUM3QyxVQUFVLG1DQUFtQztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksUUFBUSxPQUFPLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFX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Ozs7Ozs7Ozs7O0FDMUMwQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQSxlQUFlLGlEQUFNO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy1mb250L1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nLWZvbnQvVWJ1bnR1LUl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy1mb250L1VidW50dS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nLWZvbnQvVWJ1bnR1LUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ015Rm9udCc7XG59XG5cbi8qIG5hdiAqL1xuLm5hdi1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDd2aDtcbiAgZ2FwOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5uYXYtYnRuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2LWJ0bixcbi5uYXYtYnRuOmFmdGVyLFxuLm5hdi1idG46YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLm5hdi1idG46aG92ZXIge1xuICBjb2xvcjogIzgxODE4MTtcbn1cblxuLm5hdi1idG46YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDAlO1xuICBjb250ZW50OiAnLic7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogI2FhYTtcbiAgaGVpZ2h0OiAxcHg7XG59XG5cbi5uYXYtYnRuOmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLyogaG9tZSBwYWdlICovXG4uaG9tZUJnIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbiAgbGVmdDogMiU7XG59XG5cbi5zbG9nYW4ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xuICBsZWZ0OiAzJTtcbn1cblxuZm9vdGVyIHtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1lZGlhIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IC03cHg7XG59XG5cbmRpdiBpbWcubWVkaWE6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi8qIG1lbnUgKi9cblxuLm1lbnUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1lbnUtY2FyZCBwIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm1lbnUtY2FyZC1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5tZW51LWNhcmQtbGVmdCBoMiB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLnByaWNlIHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4ubWVudS10aXRsZSB7XG4gIG1hcmdpbjogMCBhdXRvIDIxcHggYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA2MCU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ud2hpdGUgaDIge1xuICBtYXJnaW46IDA7XG59XG5cbi5idXJnZXItaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNzAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4vKiBjb250YWN0IHBhZ2UgKi9cblxuLm1hcC1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogaGVpZ2h0OiAyNTBweDsgKi9cbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5jb250YWN0LXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDUlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmVtYWlsLWZvcm0ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi10b3A6IC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcbn1cblxudGV4dGFyZWEge1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckI7Ozs4REFHdUQ7QUFDekQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCOztBQUVBLFFBQVE7QUFDUjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsU0FBUztFQUNULHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQSxjQUFjO0FBQ2Q7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vaW1nLWZvbnQvVWJ1bnR1LVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICB1cmwoJy4vaW1nLWZvbnQvVWJ1bnR1LUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIHVybCgnLi9pbWctZm9udC9VYnVudHUtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIHVybCgnLi9pbWctZm9udC9VYnVudHUtTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbi8qIG5hdiAqL1xcbi5uYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGdhcDogMTVweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXYtYnRuLFxcbi5uYXYtYnRuOmFmdGVyLFxcbi5uYXYtYnRuOmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcbn1cXG5cXG4ubmF2LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzgxODE4MTtcXG59XFxuXFxuLm5hdi1idG46YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDAlO1xcbiAgY29udGVudDogJy4nO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZDogI2FhYTtcXG4gIGhlaWdodDogMXB4O1xcbn1cXG5cXG4ubmF2LWJ0bjpob3ZlcjphZnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLyogaG9tZSBwYWdlICovXFxuLmhvbWVCZyB7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hbWUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTUlO1xcbiAgbGVmdDogMiU7XFxufVxcblxcbi5zbG9nYW4ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxNSU7XFxuICBsZWZ0OiAzJTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1lZGlhIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAtN3B4O1xcbn1cXG5cXG5kaXYgaW1nLm1lZGlhOmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG59XFxuXFxuLyogbWVudSAqL1xcblxcbi5tZW51LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1lbnUtY2FyZCBwIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5tZW51LWNhcmQtbGVmdCB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLm1lbnUtY2FyZC1sZWZ0IGgyIHtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG59XFxuXFxuLnByaWNlIHtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgbWFyZ2luOiAwIGF1dG8gMjFweCBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLndoaXRlIGgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmJ1cmdlci1pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4vKiBjb250YWN0IHBhZ2UgKi9cXG5cXG4ubWFwLWltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC8qIGhlaWdodDogMjUwcHg7ICovXFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5jb250YWN0LXRpdGxlIHtcXG4gIG1hcmdpbi1sZWZ0OiA1JSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5tYXJnaW4tbGVmdCB7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbi5lbWFpbC1mb3JtIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmxhYmVsIHtcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLjJyZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBNYXAgZnJvbSAnLi9pbWctZm9udC9tYXAucG5nJztcblxuY29uc3QgY3JlYXRlVGl0bGUgPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlQ29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVDb250YWN0cy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1c1wiO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJylcbiAgdGl0bGUuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG5cbiAgdGl0bGVDb250YWN0cy5hcHBlbmQodGl0bGUpO1xuXG4gIHJldHVybiB0aXRsZUNvbnRhY3RzXG59XG5cbmNvbnN0IGNvbnRhY3RTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2hpdGUnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnTG9jYXRpb24nO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRpdGxlJyk7XG5cbiAgY29uc3QgbWFwID0gbmV3IEltYWdlKCk7XG4gIG1hcC5zcmMgPSBNYXBcbiAgbWFwLmNsYXNzTGlzdC5hZGQoJ21hcC1pbWcnKVxuXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhdGlvbi5pbm5lckhUTUwgPSAnMjM0NSBFbG0gU3RyZWV0PGJyPkJva2VydmlsbGUsIE5ZIDEwMDAxJ1xuICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdtYXJnaW4tbGVmdCcpXG5cblxuICBjb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZTIudGV4dENvbnRlbnQgPSAnUGhvbmUnO1xuICB0aXRsZTIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10aXRsZScpO1xuXG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBwaG9uZU51bS50ZXh0Q29udGVudCA9ICcoNTU1KTU1NS01NTU1J1xuICBwaG9uZU51bS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAndGVsOig1NTUpNTU1LTU1NTUnKTtcbiAgcGhvbmVOdW0uY2xhc3NMaXN0LmFkZCgnbWFyZ2luLWxlZnQnKVxuXG4gIGNvbnN0IHRpdGxlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlMy50ZXh0Q29udGVudCA9ICdFbWFpbCc7XG4gIHRpdGxlMy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRpdGxlJyk7XG5cbiAgY29uc3QgZW1haWxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBlbWFpbEZvcm0uaW5uZXJIVE1MID0gYFxuICAgIDxmaWVsZHNldCBjbGFzcz1cImVtYWlsLWZvcm1cIj5cbiAgICAgIDxsZWdlbmQ+U2VuZCB1cyBhIG1lc3NhZ2U8L2xlZ2VuZD5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCIgPk5hbWUgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBhbmQgbGFzdCBuYW1lXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiA+RW1haWwgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIiA+UGhvbmUgTnVtYmVyIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGhvbmVcIiBwbGFjZWhvbGRlcj1cImV4KSAoMTIzKTEyMy0xMjM0XCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPllvdXIgTWVzc2FnZSA8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgcm93cz1cIjdcIiBjb2xzPVwiNTBcIiBwbGFjZWhvbGRlcj1cIllvdXIgbWVzc2FnZS4uLlwiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24+U2VuZCBNZXNzYWdlPC9idXR0b24+XG4gICAgPC9maWVsZHNldD5gXG5cblxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZCh0aXRsZSlcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmQobWFwKVxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChsb2NhdGlvbilcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmQodGl0bGUyKVxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChwaG9uZU51bSlcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmQodGl0bGUzKVxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChlbWFpbEZvcm0pXG5cbiAgcmV0dXJuIGNvbnRhY3RDb250YWluZXJcbn1cblxuXG5jb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gIC8vIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJ1xuICBjb250ZW50LmFwcGVuZChjcmVhdGVUaXRsZSgpKVxuICBjb250ZW50LmFwcGVuZChjb250YWN0U2VjdGlvbigpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdCIsImltcG9ydCBIb21lIGZyb20gJy4vaW1nLWZvbnQvaG9tZTIuanBnJztcbmltcG9ydCBGYiBmcm9tICcuL2ltZy1mb250L2ZiLnN2Zyc7XG5pbXBvcnQgSW5zdGEgZnJvbSAnLi9pbWctZm9udC9pbnN0YS5zdmcnO1xuXG5cbmNvbnN0IGhvbWVQYWdlID0gKCkgPT4ge1xuXG4gIGNvbnN0IG1haW5CZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgYmFja2dyb3VuZC5zcmMgPSBIb21lO1xuICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2hvbWVCZycpXG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBcIlRhc3RlIEJpc3Ryb1wiO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcblxuICBjb25zdCBzbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBzbG9nYW4udGV4dENvbnRlbnQgPSBcIkEgdGFzdGUgeW91J2xsIHJlbWVtYmVyLlwiO1xuICBzbG9nYW4uY2xhc3NMaXN0LmFkZCgnc2xvZ2FuJyk7XG5cbiAgbWFpbkJnLmFwcGVuZChzbG9nYW4pXG4gIG1haW5CZy5hcHBlbmQoYmFja2dyb3VuZClcbiAgbWFpbkJnLmFwcGVuZChuYW1lKVxuICBjb250ZW50LmFwcGVuZChtYWluQmcpXG5cbiAgcmV0dXJuIG1haW5CZ1xufVxuXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIyMzQ1IEVsbSBTdHJlZXRcXG5Cb2tlcnZpbGxlLCBOWSAxMDAwMVwiO1xuICBsb2NhdGlvbi5hcHBlbmQodGl0bGUpXG4gIGxvY2F0aW9uLmFwcGVuZChhZGRyZXNzKVxuXG5cbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgdGl0bGUyLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuICBjb25zdCBob3Vyc09wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvdXJzT3Blbi50ZXh0Q29udGVudCA9IFwiVHVlc2RheSAtIFN1bmRheSwgMTI6MDBwbSAtIDEwOjAwcG1cIjtcblxuICBob3Vycy5hcHBlbmQodGl0bGUyKTtcbiAgaG91cnMuYXBwZW5kKGhvdXJzT3Blbik7XG5cbiAgY29uc3Qgc29jaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICB0aXRsZTMudGV4dENvbnRlbnQgPSBcIlNvY2lhbHNcIjtcblxuICBjb25zdCBpZyA9IG5ldyBJbWFnZSgpO1xuICBpZy5zcmMgPSBJbnN0YTtcbiAgaWcuY2xhc3NMaXN0LmFkZCgnbWVkaWEnKTtcblxuICBjb25zdCBmYWNlQm9vayA9IG5ldyBJbWFnZSgpO1xuICBmYWNlQm9vay5zcmMgPSBGYjtcbiAgZmFjZUJvb2suY2xhc3NMaXN0LmFkZCgnbWVkaWEnKVxuXG4gIHNvY2lhbHMuYXBwZW5kKHRpdGxlMyk7XG4gIHNvY2lhbHMuYXBwZW5kKGZhY2VCb29rKTtcbiAgc29jaWFscy5hcHBlbmQoaWcpO1xuXG4gIGZvb3QuYXBwZW5kKGxvY2F0aW9uKVxuICBmb290LmFwcGVuZChob3VycylcbiAgZm9vdC5hcHBlbmQoc29jaWFscylcblxuICByZXR1cm4gZm9vdFxufVxuXG5jb25zdCBjcmVhdGVIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgY29udGVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gIGNvbnRlbnQuYXBwZW5kKGhvbWVQYWdlKCkpO1xuICBjb250ZW50LmFwcGVuZChmb290ZXIoKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZVBhZ2U7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUnXG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnXG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuY29uc3QgbmF2QmFyID0gKCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbiAgbmF2LnRleHRDb250ZW50ID0gJydcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkUGFnZSlcblxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpXG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1lbnUpXG5cbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQ29udGFjdClcblxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bilcbiAgbmF2LmFwcGVuZChtZW51QnRuKVxuICBuYXYuYXBwZW5kKGNvbnRhY3RCdG4pXG5cbiAgcmV0dXJuIG5hdlxufVxuXG5jb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICBuYXZCYXIoKTtcbiAgaG9tZVBhZ2UoKTtcbn1cblxubG9hZFBhZ2UoKTtcbmNvbnNvbGUubG9nKCdJVFMgSk9ISE5ZWVkhIScpIiwiaW1wb3J0IEJ1cmdlciBmcm9tICcuL2ltZy1mb250L2J1cmdlci5qcGcnXG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS10aXRsZScpXG4gIHRpdGxlLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKHRpdGxlKTtcblxuICByZXR1cm4gbWVudUNvbnRhaW5lclxufVxuXG5jb25zdCBtZW51SXRlbXMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJzY2FsbG9wc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNhdWxpZmxvd2VyLCBtZXllciBsZW1vbiwgY2FwZXJzLCB3YXRlcmNyZXNzXCIsXG4gICAgcHJpY2U6IDIwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiYnJpY2sgY2hpY2tlblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNyZWFtZWQgZ3JlZW5zLCBsZW1vblwiLFxuICAgIHByaWNlOiAxOVxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiY291bnRyeSBmcmllZCBoYW0gc3RlYWtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjdXJseSBlbmRpdmUsIGxlZWtzIHZpbmFpZ3JldHRlXCIsXG4gICAgcHJpY2U6IDE1XG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJncmFzcy1mZWQgJiBmaW5pc2hlZCBidXJnZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3aGl0ZSBjaGVkZGFyLCBwaWNrbGVkIHJlZCBvbmlvbnMsIGxldHR1Y2UsIHBvdGF0byByb2xsXCIsXG4gICAgcHJpY2U6IDE5XG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJjb3VudHJ5IHBhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjaGVycnkgbXVzdGFyZHMsIGNvcm5pY2hvbnMsIHNvdXJkb3VnaFwiLFxuICAgIHByaWNlOiAxMFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiY2Flc2FyIHNhbGFkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY2hpY29yaWVzLCBwYXJtZXNhbiBjcm91dG9ucywgYW5jaG92eSwgc2hhdmVkIHBhcm1lc2FuXCIsXG4gICAgcHJpY2U6IDEwXG4gIH1cbl07XG5cbmNvbnN0IGNyZWF0ZU1lbnVJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgbWVudUl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51Q2FyZExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51Q2FyZFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNhcmRMZWZ0LmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZC1sZWZ0JylcbiAgICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGV0YWlscy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgbWVudUNhcmRMZWZ0LmFwcGVuZCh0aXRsZSlcbiAgICBtZW51Q2FyZExlZnQuYXBwZW5kKGRldGFpbHMpXG5cbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKVxuICAgIG1lbnVDYXJkUmlnaHQuYXBwZW5kKHByaWNlKTtcblxuXG4gICAgbWVudUNhcmQuYXBwZW5kKG1lbnVDYXJkTGVmdClcbiAgICBtZW51Q2FyZC5hcHBlbmQobWVudUNhcmRSaWdodClcbiAgICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kKG1lbnVDYXJkKVxuXG4gIH0pXG4gIGNvbnN0IGJ1cmdlciA9IG5ldyBJbWFnZSgpO1xuICBidXJnZXIuc3JjID0gQnVyZ2VyO1xuICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWltZycpXG4gIG1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmQoYnVyZ2VyKTtcblxuICByZXR1cm4gbWVudUl0ZW1zQ29udGFpbmVyXG59XG5cbmNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAvLyBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcxMDB2aCdcbiAgY29udGVudC5hcHBlbmQoY3JlYXRlTWVudSgpKVxuICBjb250ZW50LmFwcGVuZChjcmVhdGVNZW51SXRlbXMoKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=