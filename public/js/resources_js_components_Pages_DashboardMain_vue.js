"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_DashboardMain_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/DashboardMain.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/DashboardMain.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchBar_SearchBar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchBar/SearchBar.vue */ "./resources/js/components/SearchBar/SearchBar.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DashboardMain",
  components: {
    SearchBar: _SearchBar_SearchBar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      department: "",
      employee: "",
      transaction: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var departmentResult, employeeResult, transactionResult;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://localhost:3000/TotalNumberOfDepartment");

            case 2:
              departmentResult = _context.sent;
              _this.department = departmentResult.data;
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://localhost:3000/TotalNumberOfEmployee");

            case 6:
              employeeResult = _context.sent;
              _this.employee = employeeResult.data;
              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://localhost:3000/TotalNumberOfTransaction");

            case 10:
              transactionResult = _context.sent;
              _this.transaction = transactionResult.data;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SearchBar",
  methods: {
    logout: function logout() {
      localStorage.clear();
      this.$router.push({
        name: "LoginPage"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.logout {\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  border-radius: 50%;\r\n  transition: 0.5s ease-in-out;\n}\n.logout:hover {\r\n  color: rgb(23, 22, 22);\r\n  text-shadow: 1px 1px 8px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Pages/DashboardMain.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Pages/DashboardMain.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardMain_vue_vue_type_template_id_7e2d2427___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardMain.vue?vue&type=template&id=7e2d2427& */ "./resources/js/components/Pages/DashboardMain.vue?vue&type=template&id=7e2d2427&");
/* harmony import */ var _DashboardMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardMain.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/DashboardMain.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardMain_vue_vue_type_template_id_7e2d2427___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashboardMain_vue_vue_type_template_id_7e2d2427___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/DashboardMain.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SearchBar/SearchBar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchBar.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=template&id=374d0fcc& */ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc&");
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=script&lang=js& */ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _SearchBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SearchBar/SearchBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/DashboardMain.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Pages/DashboardMain.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardMain.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/DashboardMain.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Pages/DashboardMain.vue?vue&type=template&id=7e2d2427&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Pages/DashboardMain.vue?vue&type=template&id=7e2d2427& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardMain_vue_vue_type_template_id_7e2d2427___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardMain_vue_vue_type_template_id_7e2d2427___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardMain_vue_vue_type_template_id_7e2d2427___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardMain.vue?vue&type=template&id=7e2d2427& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/DashboardMain.vue?vue&type=template&id=7e2d2427&");


/***/ }),

/***/ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchBar.vue?vue&type=template&id=374d0fcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/DashboardMain.vue?vue&type=template&id=7e2d2427&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/DashboardMain.vue?vue&type=template&id=7e2d2427& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("SearchBar"),
      _vm._v(" "),
      _c("main", [
        _c("h2", { staticClass: "dash-title" }, [_vm._v("Overview")]),
        _vm._v(" "),
        _c("div", { staticClass: "dash-cards" }, [
          _c("div", { staticClass: "card-single" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", [
                _c("h5", [_vm._v("Department")]),
                _vm._v(" "),
                _c("h4", [
                  _vm._v(_vm._s(_vm.department.departmentTotalNumber)),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-footer" },
              [
                _c("router-link", { attrs: { to: "/department" } }, [
                  _vm._v("View All"),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-single" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", [
                _c("h5", [_vm._v("Employee")]),
                _vm._v(" "),
                _c("h4", [_vm._v(_vm._s(_vm.employee.employeeTotalNumber))]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-footer" },
              [
                _c("router-link", { attrs: { to: "/employee" } }, [
                  _vm._v("View All"),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-single" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", [
                _c("h5", [_vm._v("Transaction")]),
                _vm._v(" "),
                _c("h4", [
                  _vm._v(_vm._s(_vm.transaction.transactionTotalNumber)),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-footer" },
              [
                _c("router-link", { attrs: { to: "/transaction" } }, [
                  _vm._v("View All"),
                ]),
              ],
              1
            ),
          ]),
        ]),
        _vm._v(" "),
        _vm._m(3),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "fas fa-briefcase" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "fas fa-users" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "far fa-money-bill-alt" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "recent" }, [
      _c("div", { staticClass: "activity-grid" }, [
        _c("div", { staticClass: "activity-card" }, [
          _c("h3", [_vm._v("Recent Activity")]),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("Project")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Start Date")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("End Date")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Team")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Status")]),
                ]),
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("App Development")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("15 Aug, 2020")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("22 Aug, 2020")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "td-team" }, [
                    _c("div", { staticClass: "img-1" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "img-2" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "img-3" }),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "badge success" }, [
                      _vm._v("Success"),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Front-end Development")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("15 Aug, 2020")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("22 Aug, 2020")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "td-team" }, [
                    _c("div", { staticClass: "img-1" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "img-2" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "img-3" }),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "badge warning" }, [
                      _vm._v("Processing"),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Logo Development")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("15 Aug, 2020")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("22 Aug, 2020")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "td-team" }, [
                    _c("div", { staticClass: "img-1" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "img-2" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "img-3" }),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "badge success" }, [
                      _vm._v("Success"),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Server Setup")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("15 Aug, 2020")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("22 Aug, 2020")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "td-team" }, [
                    _c("div", { staticClass: "img-1" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "img-2" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "img-3" }),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "badge success" }, [
                      _vm._v("Success"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "summary" }, [
          _c("div", { staticClass: "summary-card" }, [
            _c("div", { staticClass: "summary-single" }, [
              _c("span", [_c("i", { staticClass: "fas fa-user-tie" })]),
              _vm._v(" "),
              _c("div", [
                _c("h5", [_vm._v("196")]),
                _vm._v(" "),
                _c("small", [_vm._v("Number of staff")]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "summary-single" }, [
              _c("span", [_c("i", { staticClass: "fas fa-ban" })]),
              _vm._v(" "),
              _c("div", [
                _c("h5", [_vm._v("16")]),
                _vm._v(" "),
                _c("small", [_vm._v("Number of leave")]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "summary-single" }, [
              _c("span", [_c("i", { staticClass: "far fa-grin-alt" })]),
              _vm._v(" "),
              _c("div", [
                _c("h5", [_vm._v("12")]),
                _vm._v(" "),
                _c("small", [_vm._v("Profile update request")]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "bday-card" }, [
            _c("div", { staticClass: "bday-flex" }, [
              _c("div", { staticClass: "bday-img" }),
              _vm._v(" "),
              _c("div", { staticClass: "bday-info" }, [
                _c("h5", [_vm._v("Dwayne F. Sanders")]),
                _vm._v(" "),
                _c("small", [_vm._v("Birthday Today")]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center" }, [
              _c("button", [
                _c("span", { staticClass: "ti-gift" }),
                _vm._v("\n                Wish him\n              "),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "social-icons" }, [
      _c("span", { staticClass: "ti-bell" }),
      _vm._v(" "),
      _c("span", { staticClass: "ti-comment" }),
      _vm._v(" "),
      _c("span", { staticClass: "logout", on: { click: _vm.logout } }, [
        _c("i", { staticClass: "fas fa-sign-out-alt" }),
      ]),
      _vm._v(" "),
      _c("div"),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search-wrapper" }, [
      _c("span", [_c("i", { staticClass: "fas fa-search" })]),
      _vm._v(" "),
      _c("input", { attrs: { type: "search", placeholder: "Search" } }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);