"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Web Projects\\GitHub Local Repositories\\Nextjs + Prisma\\app\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var __N_SSP = true;
function Home(_ref) {
  _s();

  var _this = this;

  var data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),
      formData = _useState[0],
      setFormData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(data),
      movies = _useState2[0],
      setMovies = _useState2[1];

  var saveMovie = /*#__PURE__*/function () {
    var _ref2 = (0,D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e) {
      var res;
      return D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setMovies([].concat((0,D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(movies), [formData]));
              _context.next = 4;
              return fetch('/api/movies', {
                method: 'POST',
                body: JSON.stringify(formData)
              });

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.json();

            case 7:
              return _context.abrupt("return", _context.sent);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function saveMovie(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("title", {
        children: "Movie App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().movielist),
        children: movies.map(function (movie) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("strong", {
                children: ["Title: ", movie.title]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 27
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              children: ["Year: ", movie.year]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 27
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              children: ["Description: ", movie.description]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 27
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/movies/".concat(movie.slug),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                children: "More about this movie"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 64
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 27
            }, _this)]
          }, movie.id, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 23
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().movieform),
        onSubmit: saveMovie,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
          type: "text",
          placeholder: "Title",
          name: "title",
          onChange: function onChange(e) {
            return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
              title: e.target.value
            }));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
          type: "text",
          placeholder: "Year",
          name: "year",
          onChange: function onChange(e) {
            return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
              year: +e.target.value
            }));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("textarea", {
          name: "description",
          id: "",
          cols: "30",
          rows: "10",
          placeholder: "Description",
          onChange: function onChange(e) {
            return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
              description: e.target.value
            }));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
          type: "text",
          placeholder: "Slug",
          name: "slug",
          onChange: function onChange(e) {
            return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
              slug: e.target.value
            }));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "submit",
          children: "Add movie"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

_s(Home, "yut+/BD/735VFmbxIOjL1FlqjHw=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODMzMDgyZDY2NjAyMjk1NmQ2MjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBYWUsU0FBU0ksSUFBVCxPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFFbkMsa0JBQWtDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFRSSxRQUFSO0FBQUEsTUFBa0JDLFdBQWxCOztBQUNBLG1CQUE4QkwsK0NBQVEsQ0FBQ0csSUFBRCxDQUF0QztBQUFBLE1BQVFHLE1BQVI7QUFBQSxNQUFnQkMsU0FBaEI7O0FBRUEsTUFBTUMsU0FBUztBQUFBLHdVQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUgsY0FBQUEsU0FBUyx3S0FBS0QsTUFBTCxJQUFhRixRQUFiLEdBQVQ7QUFGYztBQUFBLHFCQUdJTyxLQUFLLENBQUMsYUFBRCxFQUFlO0FBQ2xDQyxnQkFBQUEsTUFBTSxFQUFFLE1BRDBCO0FBRWxDQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsUUFBZjtBQUY0QixlQUFmLENBSFQ7O0FBQUE7QUFHUlksY0FBQUEsR0FIUTtBQUFBO0FBQUEscUJBT0RBLEdBQUcsQ0FBQ0MsSUFBSixFQVBDOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVFQsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQVNGLHNCQUNFO0FBQUssYUFBUyxFQUFFVCwwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUEscUVBQWpCO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFFQSwwRUFBZjtBQUFBLGtCQUNNTyxNQUFNLENBQUNlLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDcEIsOEJBQ0k7QUFBQSxvQ0FDSTtBQUFBLHFDQUFNO0FBQUEsc0NBQWdCQSxLQUFLLENBQUNDLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLG1DQUFhRCxLQUFLLENBQUNFLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQUEsMENBQW9CRixLQUFLLENBQUNHLFdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksb0JBQWFILEtBQUssQ0FBQ0ksSUFBbkIsQ0FBVjtBQUFBLHFDQUFxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUEsYUFBU0osS0FBSyxDQUFDSyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFVSCxTQVhDO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBZUk7QUFBTSxpQkFBUyxFQUFFNUIsMEVBQWpCO0FBQW1DLGdCQUFRLEVBQUVTLFNBQTdDO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBVyxFQUFDLE9BQS9CO0FBQXVDLGNBQUksRUFBQyxPQUE1QztBQUFvRCxrQkFBUSxFQUFFLGtCQUFBQyxDQUFDO0FBQUEsbUJBQUlKLFdBQVcsaUNBQU1ELFFBQU47QUFBZ0JtQixjQUFBQSxLQUFLLEVBQUVkLENBQUMsQ0FBQ29CLE1BQUYsQ0FBU0M7QUFBaEMsZUFBZjtBQUFBO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFXLEVBQUMsTUFBL0I7QUFBc0MsY0FBSSxFQUFDLE1BQTNDO0FBQWtELGtCQUFRLEVBQUUsa0JBQUFyQixDQUFDO0FBQUEsbUJBQUlKLFdBQVcsaUNBQU1ELFFBQU47QUFBZ0JvQixjQUFBQSxJQUFJLEVBQUUsQ0FBQ2YsQ0FBQyxDQUFDb0IsTUFBRixDQUFTQztBQUFoQyxlQUFmO0FBQUE7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQVUsY0FBSSxFQUFDLGFBQWY7QUFBNkIsWUFBRSxFQUFDLEVBQWhDO0FBQW1DLGNBQUksRUFBQyxJQUF4QztBQUE2QyxjQUFJLEVBQUMsSUFBbEQ7QUFBdUQscUJBQVcsRUFBQyxhQUFuRTtBQUFpRixrQkFBUSxFQUFFLGtCQUFBckIsQ0FBQztBQUFBLG1CQUFJSixXQUFXLGlDQUFNRCxRQUFOO0FBQWdCcUIsY0FBQUEsV0FBVyxFQUFFaEIsQ0FBQyxDQUFDb0IsTUFBRixDQUFTQztBQUF0QyxlQUFmO0FBQUE7QUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIscUJBQVcsRUFBQyxNQUEvQjtBQUFzQyxjQUFJLEVBQUMsTUFBM0M7QUFBa0Qsa0JBQVEsRUFBRSxrQkFBQXJCLENBQUM7QUFBQSxtQkFBSUosV0FBVyxpQ0FBTUQsUUFBTjtBQUFnQnNCLGNBQUFBLElBQUksRUFBRWpCLENBQUMsQ0FBQ29CLE1BQUYsQ0FBU0M7QUFBL0IsZUFBZjtBQUFBO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQTlDdUI1Qjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLm1vdmllLmZpbmRNYW55KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xuXG4gICAgY29uc3QgWyBmb3JtRGF0YSwgc2V0Rm9ybURhdGEgXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbIG1vdmllcywgc2V0TW92aWVzIF0gPSB1c2VTdGF0ZShkYXRhKTtcblxuICAgIGNvbnN0IHNhdmVNb3ZpZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TW92aWVzKFsuLi5tb3ZpZXMsIGZvcm1EYXRhXSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL21vdmllcycse1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICAgIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Nb3ZpZSBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZWxpc3R9PlxuICAgICAgICAgICAgICB7IG1vdmllcy5tYXAoKG1vdmllKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e21vdmllLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz5UaXRsZToge21vdmllLnRpdGxlfTwvc3Ryb25nPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+WWVhcjoge21vdmllLnllYXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EZXNjcmlwdGlvbjoge21vdmllLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9tb3ZpZXMvJHttb3ZpZS5zbHVnfWB9PjxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBhYm91dCB0aGlzIG1vdmllXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLm1vdmllZm9ybX0gb25TdWJtaXQ9e3NhdmVNb3ZpZX0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBuYW1lPVwidGl0bGVcIiBvbkNoYW5nZT17ZSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSl9Lz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZZWFyXCIgbmFtZT1cInllYXJcIiBvbkNoYW5nZT17ZSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCB5ZWFyOiArZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBvbkNoYW5nZT17ZSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2x1Z1wiIG5hbWU9XCJzbHVnXCIgb25DaGFuZ2U9e2UgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgc2x1ZzogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBtb3ZpZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJIb21lIiwiZGF0YSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJzYXZlTW92aWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImNvbnRhaW5lciIsIm1haW4iLCJtb3ZpZWxpc3QiLCJtYXAiLCJtb3ZpZSIsInRpdGxlIiwieWVhciIsImRlc2NyaXB0aW9uIiwic2x1ZyIsImlkIiwibW92aWVmb3JtIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9