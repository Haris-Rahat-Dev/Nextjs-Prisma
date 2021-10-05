(() => {
var exports = {};
exports.id = "pages/movies/[slug]";
exports.ids = ["pages/movies/[slug]"];
exports.modules = {

/***/ "./pages/movies/[slug].js":
/*!********************************!*\
  !*** ./pages/movies/[slug].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Movies)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Web Projects\\GitHub Local Repositories\\Nextjs + Prisma\\app\\pages\\movies\\[slug].js";




const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();
const getStaticPaths = async () => {
  const slugs = await prisma.movie.findMany();
  const paths = slugs.map(slug => {
    return {
      params: {
        slug: slug.slug.toString()
      }
    };
  });
  return {
    paths: paths,
    fallback: false
  };
};
const getStaticProps = async context => {
  const slug = context.params.slug;
  const movie = await prisma.movie.findFirst({
    where: {
      slug: slug
    }
  });
  return {
    props: {
      movie: movie
    }
  };
};
function Movies({
  movie
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: movie.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        children: movie.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"movielist": "Home_movielist__6d8Hr",
	"movieform": "Home_movieform__2x4-q",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/[slug].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbW92aWVzL1tzbHVnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUNBLE1BQU1HLE1BQU0sR0FBSSxJQUFJRCx3REFBSixFQUFoQjtBQUVPLE1BQU1FLGNBQWMsR0FBRyxZQUFZO0FBQ3RDLFFBQU9DLEtBQUssR0FBRyxNQUFNRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsUUFBYixFQUFyQjtBQUdBLFFBQU1DLEtBQUssR0FBR0gsS0FBSyxDQUFDSSxHQUFOLENBQVdDLElBQUQsSUFBUztBQUM3QixXQUFPO0FBQ0hDLE1BQUFBLE1BQU0sRUFBRTtBQUNKRCxRQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0EsSUFBTCxDQUFVRSxRQUFWO0FBREY7QUFETCxLQUFQO0FBS0gsR0FOYSxDQUFkO0FBUUEsU0FBTztBQUNISixJQUFBQSxLQUFLLEVBQUVBLEtBREo7QUFFSEssSUFBQUEsUUFBUSxFQUFFO0FBRlAsR0FBUDtBQUlILENBaEJNO0FBa0JBLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQzdDLFFBQU1MLElBQUksR0FBR0ssT0FBTyxDQUFDSixNQUFSLENBQWVELElBQTVCO0FBQ0EsUUFBTUosS0FBSyxHQUFHLE1BQU1ILE1BQU0sQ0FBQ0csS0FBUCxDQUFhVSxTQUFiLENBQXVCO0FBQ3ZDQyxJQUFBQSxLQUFLLEVBQUM7QUFDRlAsTUFBQUEsSUFBSSxFQUFFQTtBQURKO0FBRGlDLEdBQXZCLENBQXBCO0FBTUEsU0FBTztBQUNIUSxJQUFBQSxLQUFLLEVBQUU7QUFDSFosTUFBQUEsS0FBSyxFQUFHQTtBQURMO0FBREosR0FBUDtBQUtILENBYk07QUFpQlEsU0FBU2EsTUFBVCxDQUFnQjtBQUFFYixFQUFBQTtBQUFGLENBQWhCLEVBQTBCO0FBQ3JDLHNCQUNJO0FBQUssYUFBUyxFQUFFTCwwRUFBaEI7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUEsa0JBQVNLLEtBQUssQ0FBQ2U7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBQSw2QkFDSTtBQUFBLGtCQUFNZixLQUFLLENBQUNlO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOzs7Ozs7Ozs7O0FDcEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL21vdmllcy9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vYXBwLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9hcHAvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL2FwcC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2FwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuY29uc3QgcHJpc21hICA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0ICBzbHVncyA9IGF3YWl0IHByaXNtYS5tb3ZpZS5maW5kTWFueSgpO1xyXG5cclxuXHJcbiAgICBjb25zdCBwYXRocyA9IHNsdWdzLm1hcCgoc2x1Zyk9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBzbHVnOiBzbHVnLnNsdWcudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBzbHVnID0gY29udGV4dC5wYXJhbXMuc2x1ZztcclxuICAgIGNvbnN0IG1vdmllID0gYXdhaXQgcHJpc21hLm1vdmllLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6e1xyXG4gICAgICAgICAgICBzbHVnOiBzbHVnXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtb3ZpZSA6IG1vdmllXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7IG1vdmllIH0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+eyBtb3ZpZS50aXRsZSB9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxoMj57IG1vdmllLnRpdGxlIH08L2gyPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1vdmllbGlzdFwiOiBcIkhvbWVfbW92aWVsaXN0X182ZDhIclwiLFxuXHRcIm1vdmllZm9ybVwiOiBcIkhvbWVfbW92aWVmb3JtX18yeDQtcVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnZXRTdGF0aWNQYXRocyIsInNsdWdzIiwibW92aWUiLCJmaW5kTWFueSIsInBhdGhzIiwibWFwIiwic2x1ZyIsInBhcmFtcyIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInByb3BzIiwiTW92aWVzIiwiY29udGFpbmVyIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9