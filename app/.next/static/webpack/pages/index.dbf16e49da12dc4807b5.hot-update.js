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
              href: "",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                children: "More about this movie"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 43
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGJmMTZlNDlkYTEyZGM0ODA3YjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBYWUsU0FBU0ksSUFBVCxPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFFbkMsa0JBQWtDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFRSSxRQUFSO0FBQUEsTUFBa0JDLFdBQWxCOztBQUNBLG1CQUE4QkwsK0NBQVEsQ0FBQ0csSUFBRCxDQUF0QztBQUFBLE1BQVFHLE1BQVI7QUFBQSxNQUFnQkMsU0FBaEI7O0FBRUEsTUFBTUMsU0FBUztBQUFBLHdVQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUgsY0FBQUEsU0FBUyx3S0FBS0QsTUFBTCxJQUFhRixRQUFiLEdBQVQ7QUFGYztBQUFBLHFCQUdJTyxLQUFLLENBQUMsYUFBRCxFQUFlO0FBQ2xDQyxnQkFBQUEsTUFBTSxFQUFFLE1BRDBCO0FBRWxDQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsUUFBZjtBQUY0QixlQUFmLENBSFQ7O0FBQUE7QUFHUlksY0FBQUEsR0FIUTtBQUFBO0FBQUEscUJBT0RBLEdBQUcsQ0FBQ0MsSUFBSixFQVBDOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVFQsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQVNGLHNCQUNFO0FBQUssYUFBUyxFQUFFVCwwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUEscUVBQWpCO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFFQSwwRUFBZjtBQUFBLGtCQUNNTyxNQUFNLENBQUNlLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDcEIsOEJBQ0k7QUFBQSxvQ0FDSTtBQUFBLHFDQUFNO0FBQUEsc0NBQWdCQSxLQUFLLENBQUNDLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLG1DQUFhRCxLQUFLLENBQUNFLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQUEsMENBQW9CRixLQUFLLENBQUNHLFdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBRSxFQUFaO0FBQUEscUNBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQSxhQUFTSCxLQUFLLENBQUNJLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQVVILFNBWEM7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFlSTtBQUFNLGlCQUFTLEVBQUUzQiwwRUFBakI7QUFBbUMsZ0JBQVEsRUFBRVMsU0FBN0M7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFXLEVBQUMsT0FBL0I7QUFBdUMsY0FBSSxFQUFDLE9BQTVDO0FBQW9ELGtCQUFRLEVBQUUsa0JBQUFDLENBQUM7QUFBQSxtQkFBSUosV0FBVyxpQ0FBTUQsUUFBTjtBQUFnQm1CLGNBQUFBLEtBQUssRUFBRWQsQ0FBQyxDQUFDbUIsTUFBRixDQUFTQztBQUFoQyxlQUFmO0FBQUE7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIscUJBQVcsRUFBQyxNQUEvQjtBQUFzQyxjQUFJLEVBQUMsTUFBM0M7QUFBa0Qsa0JBQVEsRUFBRSxrQkFBQXBCLENBQUM7QUFBQSxtQkFBSUosV0FBVyxpQ0FBTUQsUUFBTjtBQUFnQm9CLGNBQUFBLElBQUksRUFBRSxDQUFDZixDQUFDLENBQUNtQixNQUFGLENBQVNDO0FBQWhDLGVBQWY7QUFBQTtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBVSxjQUFJLEVBQUMsYUFBZjtBQUE2QixZQUFFLEVBQUMsRUFBaEM7QUFBbUMsY0FBSSxFQUFDLElBQXhDO0FBQTZDLGNBQUksRUFBQyxJQUFsRDtBQUF1RCxxQkFBVyxFQUFDLGFBQW5FO0FBQWlGLGtCQUFRLEVBQUUsa0JBQUFwQixDQUFDO0FBQUEsbUJBQUlKLFdBQVcsaUNBQU1ELFFBQU47QUFBZ0JxQixjQUFBQSxXQUFXLEVBQUVoQixDQUFDLENBQUNtQixNQUFGLENBQVNDO0FBQXRDLGVBQWY7QUFBQTtBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUk7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBVyxFQUFDLE1BQS9CO0FBQXNDLGNBQUksRUFBQyxNQUEzQztBQUFrRCxrQkFBUSxFQUFFLGtCQUFBcEIsQ0FBQztBQUFBLG1CQUFJSixXQUFXLGlDQUFNRCxRQUFOO0FBQWdCMEIsY0FBQUEsSUFBSSxFQUFFckIsQ0FBQyxDQUFDbUIsTUFBRixDQUFTQztBQUEvQixlQUFmO0FBQUE7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7O0dBOUN1QjNCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEubW92aWUuZmluZE1hbnkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XG5cbiAgICBjb25zdCBbIGZvcm1EYXRhLCBzZXRGb3JtRGF0YSBdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFsgbW92aWVzLCBzZXRNb3ZpZXMgXSA9IHVzZVN0YXRlKGRhdGEpO1xuXG4gICAgY29uc3Qgc2F2ZU1vdmllID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRNb3ZpZXMoWy4uLm1vdmllcywgZm9ybURhdGFdKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvbW92aWVzJyx7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gICAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1vdmllIEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm1vdmllbGlzdH0+XG4gICAgICAgICAgICAgIHsgbW92aWVzLm1hcCgobW92aWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bW92aWUuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Ryb25nPlRpdGxlOiB7bW92aWUudGl0bGV9PC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ZZWFyOiB7bW92aWUueWVhcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlc2NyaXB0aW9uOiB7bW92aWUuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIlwifT48YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmUgYWJvdXQgdGhpcyBtb3ZpZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZWZvcm19IG9uU3VibWl0PXtzYXZlTW92aWV9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgbmFtZT1cInRpdGxlXCIgb25DaGFuZ2U9e2UgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pfS8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWWVhclwiIG5hbWU9XCJ5ZWFyXCIgb25DaGFuZ2U9e2UgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgeWVhcjogK2UudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgb25DaGFuZ2U9e2UgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNsdWdcIiBuYW1lPVwic2x1Z1wiIG9uQ2hhbmdlPXtlID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHNsdWc6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgbW92aWU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlU3RhdGUiLCJMaW5rIiwiSG9tZSIsImRhdGEiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibW92aWVzIiwic2V0TW92aWVzIiwic2F2ZU1vdmllIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJjb250YWluZXIiLCJtYWluIiwibW92aWVsaXN0IiwibWFwIiwibW92aWUiLCJ0aXRsZSIsInllYXIiLCJkZXNjcmlwdGlvbiIsImlkIiwibW92aWVmb3JtIiwidGFyZ2V0IiwidmFsdWUiLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==