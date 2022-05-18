"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Department_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Department.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Department.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBar_SearchBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SearchBar/SearchBar.vue */ "./resources/js/components/SearchBar/SearchBar.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


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
  name: "DepartmentPages",
  components: {
    SearchBar: _SearchBar_SearchBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      department: {
        departmentNumber: "",
        departmentName: "",
        no_of_employee: ""
      },
      updateDepartment: {
        departmentNumber: "",
        departmentName: "",
        no_of_employee: ""
      },
      departmentData: [],
      chartData: [["Department", "Project", "Employee"], ["Software Developer", 10, 50], ["Hardware Developer", 11, 60], ["Marketing", 66, 100], ["Human Resource", 10, 20]],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Project, Employee: 2014-2017"
        }
      }
    };
  },
  validations: {
    department: {
      departmentNumber: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required
      },
      departmentName: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required
      },
      no_of_employee: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required
      }
    },
    updateDepartment: {
      departmentNumber: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required
      },
      departmentName: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required
      },
      no_of_employee: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required
      }
    }
  },
  methods: {
    updateData: function updateData(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var updateData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://localhost:3000/department/" + id);

              case 2:
                updateData = _context.sent;
                _this.updateDepartment = updateData.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    UpdateDepartmentData: function UpdateDepartmentData(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var updateDataResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$v.$touch();

                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().put("http://localhost:3000/department/" + id, {
                  departmentNumber: _this2.updateDepartment.departmentNumber,
                  departmentName: _this2.updateDepartment.departmentName,
                  no_of_employee: _this2.updateDepartment.no_of_employee
                });

              case 3:
                updateDataResult = _context2.sent;

                if (updateDataResult.status == 200) {
                  _this2.$router.go();
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    SyncData: function SyncData() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://localhost:3000/department");

              case 2:
                result = _context3.sent;
                _this3.departmentData = result.data;
                console.log(result.data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    validationStatus: function validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    addCloseClear: function addCloseClear() {
      this.department.departmentNumber = "", this.department.departmentName = "", this.department.no_of_employee = "";
    },
    AddDepartmentDetails: function AddDepartmentDetails() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var addDepResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.$v.$touch();

                if (!(_this4.$v.$pendding || _this4.$v.$error)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                _context4.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://localhost:3000/department", {
                  departmentNumber: _this4.department.departmentNumber,
                  departmentName: _this4.department.departmentName,
                  no_of_employee: _this4.department.no_of_employee
                });

              case 5:
                addDepResult = _context4.sent;

                if (addDepResult.status == 201) {
                  _this4.$router.go();
                }

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://localhost:3000/department");

            case 2:
              result = _context5.sent;
              _this5.departmentData = result.data;
              console.log(result.data);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
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

/***/ "./resources/js/components/Pages/Department.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Pages/Department.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Department_vue_vue_type_template_id_10c38af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Department.vue?vue&type=template&id=10c38af0& */ "./resources/js/components/Pages/Department.vue?vue&type=template&id=10c38af0&");
/* harmony import */ var _Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Department.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Department.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Department_vue_vue_type_template_id_10c38af0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Department_vue_vue_type_template_id_10c38af0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Department.vue"
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

/***/ "./resources/js/components/Pages/Department.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Pages/Department.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Department.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Department.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Pages/Department.vue?vue&type=template&id=10c38af0&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Pages/Department.vue?vue&type=template&id=10c38af0& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_10c38af0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_10c38af0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_10c38af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Department.vue?vue&type=template&id=10c38af0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Department.vue?vue&type=template&id=10c38af0&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Department.vue?vue&type=template&id=10c38af0&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Department.vue?vue&type=template&id=10c38af0& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-11" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-1" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-sm",
                on: { click: _vm.SyncData },
              },
              [_vm._v("\n          Sync Data\n        ")]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "recent" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse mt-3", attrs: { id: "collapseExample" } },
            [
              _c("div", { staticClass: "activity-grid" }, [
                _c(
                  "div",
                  {
                    staticClass: "activity-card",
                    staticStyle: { height: "fit-content" },
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "graph-responsive" },
                      [
                        _c("GChart", {
                          attrs: {
                            type: "ColumnChart",
                            data: _vm.chartData,
                            options: _vm.chartOptions,
                            width: "1500",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _vm._m(2),
              ]),
            ]
          ),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse", attrs: { id: "collapseExamples" } },
            [
              _c("div", { staticClass: "activity-grid-second" }, [
                _c(
                  "div",
                  {
                    staticClass: "activity-card",
                    staticStyle: { height: "fit-content" },
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-2 text-center" }, [
                        _vm._m(5),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            attrs: {
                              id: "exampleModal",
                              tabindex: "-1",
                              "aria-labelledby": "exampleModalLabel",
                              "aria-hidden": "true",
                            },
                          },
                          [
                            _c("div", { staticClass: "modal-dialog" }, [
                              _c("div", { staticClass: "modal-content" }, [
                                _vm._m(6),
                                _vm._v(" "),
                                _c("div", { staticClass: "modal-body" }, [
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "mb-3 col-md-12" },
                                      [
                                        _vm._m(7),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model.trim",
                                              value:
                                                _vm.$v.department
                                                  .departmentNumber.$model,
                                              expression:
                                                "\n                                $v.department.departmentNumber.$model\n                              ",
                                              modifiers: { trim: true },
                                            },
                                          ],
                                          staticClass:
                                            "form-control form-control-sm",
                                          class: {
                                            "is-invalid": _vm.validationStatus(
                                              _vm.$v.department.departmentNumber
                                            ),
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "departmentNumber",
                                            placeholder:
                                              "Enter Department Number",
                                          },
                                          domProps: {
                                            value:
                                              _vm.$v.department.departmentNumber
                                                .$model,
                                          },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.$v.department
                                                  .departmentNumber,
                                                "$model",
                                                $event.target.value.trim()
                                              )
                                            },
                                            blur: function ($event) {
                                              return _vm.$forceUpdate()
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        !_vm.$v.department.departmentNumber
                                          .required
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                              The Department Number is required.\n                            "
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "mb-3 col-md-12" },
                                      [
                                        _vm._m(8),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.$v.department.departmentName
                                                  .$model,
                                              expression:
                                                "$v.department.departmentName.$model",
                                            },
                                          ],
                                          staticClass:
                                            "form-control form-control-sm",
                                          class: {
                                            "is-invalid": _vm.validationStatus(
                                              _vm.$v.department.departmentName
                                            ),
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "departmentName",
                                            placeholder:
                                              "Enter Department Name",
                                          },
                                          domProps: {
                                            value:
                                              _vm.$v.department.departmentName
                                                .$model,
                                          },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.$v.department
                                                  .departmentName,
                                                "$model",
                                                $event.target.value
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        !_vm.$v.department.departmentName
                                          .required
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                              The Department Name is required.\n                            "
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "mb-3 col-md-12" },
                                      [
                                        _vm._m(9),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.$v.department.no_of_employee
                                                  .$model,
                                              expression:
                                                "$v.department.no_of_employee.$model",
                                            },
                                          ],
                                          staticClass:
                                            "form-control form-control-sm",
                                          class: {
                                            "is-invalid": _vm.validationStatus(
                                              _vm.$v.department.no_of_employee
                                            ),
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "number_of_employee",
                                            placeholder:
                                              "Enter Number of Employee",
                                          },
                                          domProps: {
                                            value:
                                              _vm.$v.department.no_of_employee
                                                .$model,
                                          },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.$v.department
                                                  .no_of_employee,
                                                "$model",
                                                $event.target.value
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        !_vm.$v.department.no_of_employee
                                          .required
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                              The Number of Employee is required.\n                            "
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                      ]
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "modal-footer" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger",
                                      attrs: {
                                        type: "button",
                                        "data-bs-dismiss": "modal",
                                      },
                                      on: { click: _vm.addCloseClear },
                                    },
                                    [
                                      _vm._v(
                                        "\n                          Close\n                        "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: { type: "button" },
                                      on: { click: _vm.AddDepartmentDetails },
                                    },
                                    [
                                      _vm._v(
                                        "\n                          Add\n                        "
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        [
                          _vm._m(10),
                          _vm._v(" "),
                          _vm._l(_vm.departmentData, function (depData) {
                            return _c("tbody", { key: depData.id }, [
                              _c("tr", [
                                _c("td", [
                                  _vm._v(_vm._s(depData.departmentNumber)),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(depData.departmentName)),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(depData.no_of_employee)),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "badge bg-primary",
                                      staticStyle: { cursor: "pointer" },
                                      attrs: {
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#exampleModal1",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.updateData(depData.id)
                                        },
                                      },
                                    },
                                    [
                                      _c("i", { staticClass: "fas fa-pen" }),
                                      _vm._v("Edit"),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "modal fade",
                                      attrs: {
                                        id: "exampleModal1",
                                        tabindex: "-1",
                                        "aria-labelledby": "exampleModalLabel",
                                        "aria-hidden": "true",
                                      },
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "modal-dialog" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "modal-content" },
                                            [
                                              _vm._m(11, true),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "modal-body" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-12",
                                                        },
                                                        [
                                                          _vm._m(12, true),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.$v
                                                                    .updateDepartment
                                                                    .departmentNumber
                                                                    .$model,
                                                                expression:
                                                                  "\n                                      $v.updateDepartment.departmentNumber\n                                        .$model\n                                    ",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-sm",
                                                            class: {
                                                              "is-invalid":
                                                                _vm.validationStatus(
                                                                  _vm.$v
                                                                    .updateDepartment
                                                                    .departmentNumber
                                                                ),
                                                            },
                                                            attrs: {
                                                              type: "text",
                                                              name: "departmentNumber",
                                                              placeholder:
                                                                "Enter Department Number",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.$v
                                                                  .updateDepartment
                                                                  .departmentNumber
                                                                  .$model,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.$v
                                                                    .updateDepartment
                                                                    .departmentNumber,
                                                                  "$model",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              },
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          !_vm.$v
                                                            .updateDepartment
                                                            .departmentNumber
                                                            .required
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    The Department Field is required.\n                                  "
                                                                  ),
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-12",
                                                        },
                                                        [
                                                          _vm._m(13, true),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.$v
                                                                    .updateDepartment
                                                                    .departmentName
                                                                    .$model,
                                                                expression:
                                                                  "\n                                      $v.updateDepartment.departmentName\n                                        .$model\n                                    ",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-sm",
                                                            class: {
                                                              "is-invalid":
                                                                _vm.validationStatus(
                                                                  _vm.$v
                                                                    .updateDepartment
                                                                    .departmentName
                                                                ),
                                                            },
                                                            attrs: {
                                                              type: "text",
                                                              name: "departmentName",
                                                              placeholder:
                                                                "Enter Department Name",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.$v
                                                                  .updateDepartment
                                                                  .departmentName
                                                                  .$model,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.$v
                                                                    .updateDepartment
                                                                    .departmentName,
                                                                  "$model",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              },
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          !_vm.$v
                                                            .updateDepartment
                                                            .departmentName
                                                            .required
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    The Update Department field is required.\n                                  "
                                                                  ),
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-12",
                                                        },
                                                        [
                                                          _vm._m(14, true),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.$v
                                                                    .updateDepartment
                                                                    .no_of_employee
                                                                    .$model,
                                                                expression:
                                                                  "\n                                      $v.updateDepartment.no_of_employee\n                                        .$model\n                                    ",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-sm",
                                                            class: {
                                                              "is-invalid":
                                                                _vm.validationStatus(
                                                                  _vm.$v
                                                                    .updateDepartment
                                                                    .no_of_employee
                                                                ),
                                                            },
                                                            attrs: {
                                                              type: "text",
                                                              name: "number_of_employee",
                                                              placeholder:
                                                                "Enter Number of Employee",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.$v
                                                                  .updateDepartment
                                                                  .no_of_employee
                                                                  .$model,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.$v
                                                                    .updateDepartment
                                                                    .no_of_employee,
                                                                  "$model",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              },
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          !_vm.$v
                                                            .updateDepartment
                                                            .no_of_employee
                                                            .required
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    The Number of Employee is required.\n                                  "
                                                                  ),
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "modal-footer" },
                                                [
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-danger",
                                                      attrs: {
                                                        type: "button",
                                                        "data-bs-dismiss":
                                                          "modal",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                Close\n                              "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary",
                                                      attrs: { type: "button" },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          return _vm.UpdateDepartmentData(
                                                            _vm.updateDepartment
                                                              .id
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                Update\n                              "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ])
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]
                ),
              ]),
            ]
          ),
        ]),
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
    return _c(
      "div",
      {
        staticClass: "row bg-light",
        staticStyle: {
          "box-shadow": "2px 2px 2px rgba(0, 0, 0, 0.2)",
          "border-radius": "10px",
        },
      },
      [
        _c("div", { staticClass: "col-sm-10" }, [
          _c("h4", { staticClass: "mt-3" }, [_vm._v("Department Graph")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [
          _c("p", { staticStyle: { float: "right" } }, [
            _c(
              "button",
              {
                staticClass: "badge badge-primary float-right mt-3",
                attrs: {
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#collapseExample",
                  "aria-expanded": "false",
                  "aria-controls": "collapseExample",
                },
              },
              [_vm._v("\n              -\n            ")]
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "summary" }, [
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
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row bg-light mt-3",
        staticStyle: {
          "box-shadow": "2px 2px 2px rgba(0, 0, 0, 0.2)",
          "border-radius": "10px",
        },
      },
      [
        _c("div", { staticClass: "col-sm-10" }, [
          _c("h4", { staticClass: "mt-3" }, [_vm._v("Department Table")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [
          _c("p", { staticStyle: { float: "right" } }, [
            _c(
              "button",
              {
                staticClass: "badge badge-primary float-right mt-3",
                attrs: {
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#collapseExamples",
                  "aria-expanded": "false",
                  "aria-controls": "collapseExamples",
                },
              },
              [_vm._v("\n              -\n            ")]
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-10" }, [
      _c("h3", [_vm._v("Department Activity")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary btn-sm mt-3",
        attrs: {
          type: "button",
          "data-bs-toggle": "modal",
          "data-bs-target": "#exampleModal",
        },
      },
      [
        _c("i", { staticClass: "fas fa-plus" }),
        _vm._v("\n                  Add\n                "),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [
          _vm._v(
            "\n                          Add Department Details\n                        "
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Department Number\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Department Name\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Number of Employee\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Department Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Department Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Number of Employee")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [
          _vm._v(
            "\n                                Update Department Details\n                              "
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Department Number\n                                    "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Department Name\n                                    "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Number of Employee\n                                    "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
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