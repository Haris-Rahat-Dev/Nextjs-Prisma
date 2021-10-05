"use strict";
(() => {
var exports = {};
exports.id = "pages/api/movies";
exports.ids = ["pages/api/movies"];
exports.modules = {

/***/ "./pages/api/movies.js":
/*!*****************************!*\
  !*** ./pages/api/movies.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  const data = JSON.parse(req.body);
  const createdMovie = await prisma.movie.create({
    data
  });
  res.json(createdMovie);
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/movies.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL21vdmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQUosRUFBZjtBQUVBLGlFQUFlLE9BQU9FLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixRQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixHQUFHLENBQUNLLElBQWYsQ0FBYjtBQUNBLFFBQU1DLFlBQVksR0FBRyxNQUFNUCxNQUFNLENBQUNRLEtBQVAsQ0FBYUMsTUFBYixDQUFvQjtBQUMzQ04sSUFBQUE7QUFEMkMsR0FBcEIsQ0FBM0I7QUFHQUQsRUFBQUEsR0FBRyxDQUFDUSxJQUFKLENBQVNILFlBQVQ7QUFDSCxDQU5EOzs7Ozs7Ozs7O0FDSEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9hcGkvbW92aWVzLmpzIiwid2VicGFjazovL2FwcC9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xyXG4gICAgY29uc3QgY3JlYXRlZE1vdmllID0gYXdhaXQgcHJpc21hLm1vdmllLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YVxyXG4gICAgfSk7XHJcbiAgICByZXMuanNvbihjcmVhdGVkTW92aWUpO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInJlcSIsInJlcyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiY3JlYXRlZE1vdmllIiwibW92aWUiLCJjcmVhdGUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==