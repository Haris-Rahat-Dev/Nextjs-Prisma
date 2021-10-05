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
/* harmony import */ var D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
      formData = _useState[0],
      setFormData = _useState[1];

  var saveMovie = /*#__PURE__*/function () {
    var _ref2 = (0,D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var res;
      return D_Web_Projects_GitHub_Local_Repositories_Nextjs_Prisma_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return fetch('/api/movies', {
                method: 'POST',
                body: JSON.stringify(formData)
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
        children: "Movie App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().movielist),
        children: data.map(function (movie) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("strong", {
                children: ["Title: ", movie.title]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 27
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              children: ["Year: ", movie.year]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 27
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              children: ["Description: ", movie.description]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 27
            }, _this)]
          }, movie.id, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 23
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().movieform),
        onSubmit: saveMovie,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
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
          lineNumber: 49,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
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
          lineNumber: 50,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("textarea", {
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
          lineNumber: 51,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
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
          lineNumber: 52,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          type: "submit",
          children: "Add movie"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(Home, "A2KcBi3S0gTC53j7R0RDCyxBeHg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTBlYzljZDI0ZDYxYzNjOGIwYTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7O0FBYWUsU0FBU0csSUFBVCxPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFFbkMsa0JBQWtDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFRRyxRQUFSO0FBQUEsTUFBa0JDLFdBQWxCOztBQUVBLE1BQU1DLFNBQVM7QUFBQSx3VUFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRGM7QUFBQSxxQkFFSUMsS0FBSyxDQUFDLGFBQUQsRUFBZTtBQUNsQ0MsZ0JBQUFBLE1BQU0sRUFBRSxNQUQwQjtBQUVsQ0MsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVULFFBQWY7QUFGNEIsZUFBZixDQUZUOztBQUFBO0FBRVJVLGNBQUFBLEdBRlE7QUFBQTtBQUFBLHFCQU1EQSxHQUFHLENBQUNDLElBQUosRUFOQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRULFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFRRixzQkFDRTtBQUFLLGFBQVMsRUFBRU4sMEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBTSxlQUFTLEVBQUVBLHFFQUFqQjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBRUEsMEVBQWY7QUFBQSxrQkFDTUcsSUFBSSxDQUFDZ0IsR0FBTCxDQUFTLFVBQUNDLEtBQUQsRUFBVztBQUNsQiw4QkFDSTtBQUFBLG9DQUNJO0FBQUEscUNBQU07QUFBQSxzQ0FBZ0JBLEtBQUssQ0FBQ0MsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUEsbUNBQWFELEtBQUssQ0FBQ0UsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBQSwwQ0FBb0JGLEtBQUssQ0FBQ0csV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKO0FBQUEsYUFBU0gsS0FBSyxDQUFDSSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFPSCxTQVJDO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBWUk7QUFBTSxpQkFBUyxFQUFFeEIsMEVBQWpCO0FBQW1DLGdCQUFRLEVBQUVNLFNBQTdDO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBVyxFQUFDLE9BQS9CO0FBQXVDLGNBQUksRUFBQyxPQUE1QztBQUFvRCxrQkFBUSxFQUFFLGtCQUFBQyxDQUFDO0FBQUEsbUJBQUlGLFdBQVcsaUNBQU1ELFFBQU47QUFBZ0JpQixjQUFBQSxLQUFLLEVBQUVkLENBQUMsQ0FBQ21CLE1BQUYsQ0FBU0M7QUFBaEMsZUFBZjtBQUFBO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFXLEVBQUMsTUFBL0I7QUFBc0MsY0FBSSxFQUFDLE1BQTNDO0FBQWtELGtCQUFRLEVBQUUsa0JBQUFwQixDQUFDO0FBQUEsbUJBQUlGLFdBQVcsaUNBQU1ELFFBQU47QUFBZ0JrQixjQUFBQSxJQUFJLEVBQUUsQ0FBQ2YsQ0FBQyxDQUFDbUIsTUFBRixDQUFTQztBQUFoQyxlQUFmO0FBQUE7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQVUsY0FBSSxFQUFDLGFBQWY7QUFBNkIsWUFBRSxFQUFDLEVBQWhDO0FBQW1DLGNBQUksRUFBQyxJQUF4QztBQUE2QyxjQUFJLEVBQUMsSUFBbEQ7QUFBdUQscUJBQVcsRUFBQyxhQUFuRTtBQUFpRixrQkFBUSxFQUFFLGtCQUFBcEIsQ0FBQztBQUFBLG1CQUFJRixXQUFXLGlDQUFNRCxRQUFOO0FBQWdCbUIsY0FBQUEsV0FBVyxFQUFFaEIsQ0FBQyxDQUFDbUIsTUFBRixDQUFTQztBQUF0QyxlQUFmO0FBQUE7QUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIscUJBQVcsRUFBQyxNQUEvQjtBQUFzQyxjQUFJLEVBQUMsTUFBM0M7QUFBa0Qsa0JBQVEsRUFBRSxrQkFBQXBCLENBQUM7QUFBQSxtQkFBSUYsV0FBVyxpQ0FBTUQsUUFBTjtBQUFnQndCLGNBQUFBLElBQUksRUFBRXJCLENBQUMsQ0FBQ21CLE1BQUYsQ0FBU0M7QUFBL0IsZUFBZjtBQUFBO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztHQXpDdUJ6Qjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEubW92aWUuZmluZE1hbnkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XG5cbiAgICBjb25zdCBbIGZvcm1EYXRhLCBzZXRGb3JtRGF0YSBdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgY29uc3Qgc2F2ZU1vdmllID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9tb3ZpZXMnLHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TW92aWUgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVsaXN0fT5cbiAgICAgICAgICAgICAgeyBkYXRhLm1hcCgobW92aWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bW92aWUuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Ryb25nPlRpdGxlOiB7bW92aWUudGl0bGV9PC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ZZWFyOiB7bW92aWUueWVhcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlc2NyaXB0aW9uOiB7bW92aWUuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZWZvcm19IG9uU3VibWl0PXtzYXZlTW92aWV9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgbmFtZT1cInRpdGxlXCIgb25DaGFuZ2U9e2UgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pfS8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWWVhclwiIG5hbWU9XCJ5ZWFyXCIgb25DaGFuZ2U9e2UgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgeWVhcjogK2UudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgb25DaGFuZ2U9e2UgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNsdWdcIiBuYW1lPVwic2x1Z1wiIG9uQ2hhbmdlPXtlID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHNsdWc6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgbW92aWU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlU3RhdGUiLCJIb21lIiwiZGF0YSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJzYXZlTW92aWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImNvbnRhaW5lciIsIm1haW4iLCJtb3ZpZWxpc3QiLCJtYXAiLCJtb3ZpZSIsInRpdGxlIiwieWVhciIsImRlc2NyaXB0aW9uIiwiaWQiLCJtb3ZpZWZvcm0iLCJ0YXJnZXQiLCJ2YWx1ZSIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9