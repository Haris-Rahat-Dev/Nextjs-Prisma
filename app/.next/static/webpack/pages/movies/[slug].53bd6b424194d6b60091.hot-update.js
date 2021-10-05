self["webpackHotUpdate_N_E"]("pages/movies/[slug]",{

/***/ "./node_modules/.prisma/client/index-browser.js":
/*!******************************************************!*\
  !*** ./node_modules/.prisma/client/index-browser.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));

const {
  Decimal
} = __webpack_require__(/*! @prisma/client/runtime/index-browser */ "./node_modules/@prisma/client/runtime/index-browser.js")


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.1.1
 * Query Engine version: c22652b7e418506fab23052d569b85d3aec4883f
 */
Prisma.prismaVersion = {
  client: "3.1.1",
  engine: "c22652b7e418506fab23052d569b85d3aec4883f"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.MovieScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  year: 'year',
  description: 'description',
  slug: 'slug'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  Movie: 'Movie'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)


/***/ }),

/***/ "./pages/movies/[slug].js":
/*!********************************!*\
  !*** ./pages/movies/[slug].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Movies; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ "./node_modules/@prisma/client/index-browser.js");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web Projects\\GitHub Local Repositories\\Nextjs + Prisma\\app\\pages\\movies\\[slug].js";




var prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();
var __N_SSG = true;
function Movies() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}
_c = Movies;

var _c;

$RefreshReg$(_c, "Movies");

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


/***/ }),

/***/ "./node_modules/@prisma/client/index-browser.js":
/*!******************************************************!*\
  !*** ./node_modules/@prisma/client/index-browser.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const prisma = __webpack_require__(/*! .prisma/client/index-browser */ "./node_modules/.prisma/client/index-browser.js")

module.exports = prisma


/***/ }),

/***/ "./node_modules/@prisma/client/runtime/index-browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/@prisma/client/runtime/index-browser.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {

var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __name = (target, value) => __defProp(target, "name", {value, configurable: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// src/runtime/index-browser.ts
__markAsModule(exports);
__export(exports, {
  Decimal: () => decimal_default
});

// ../../node_modules/.pnpm/decimal.js@10.3.1/node_modules/decimal.js/decimal.mjs
var EXP_LIMIT = 9e15;
var MAX_DIGITS = 1e9;
var NUMERALS = "0123456789abcdef";
var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
var DEFAULTS = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -EXP_LIMIT,
  maxE: EXP_LIMIT,
  crypto: false
};
var inexact;
var quadrant;
var external = true;
var decimalError = "[DecimalError] ";
var invalidArgument = decimalError + "Invalid argument: ";
var precisionLimitExceeded = decimalError + "Precision limit exceeded";
var cryptoUnavailable = decimalError + "crypto unavailable";
var tag = "[object Decimal]";
var mathfloor = Math.floor;
var mathpow = Math.pow;
var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
var BASE = 1e7;
var LOG_BASE = 7;
var MAX_SAFE_INTEGER = 9007199254740991;
var LN10_PRECISION = LN10.length - 1;
var PI_PRECISION = PI.length - 1;
var P = {toStringTag: tag};
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0)
    x.s = 1;
  return finalise(x);
};
P.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
  var k, x = this, Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s)
    return new Ctor(NaN);
  if (min2.gt(max2))
    throw Error(invalidArgument + max2);
  k = x.cmp(min2);
  return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0])
    return xd[0] ? xs : yd[0] ? -ys : 0;
  if (xs !== ys)
    return xs;
  if (x.e !== y.e)
    return x.e > y.e ^ xs < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i])
      return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.d)
    return new Ctor(NaN);
  if (!x.d[0])
    return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
  var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;
    if (s = (e - n.length + 1) % 3)
      n += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
  var w, d = this.d, n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w)
      for (; w % 10 == 0; w /= 10)
        n--;
    if (n < 0)
      n = 0;
  }
  return n;
};
P.dividedBy = P.div = function(y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function() {
  var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite())
    return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero())
    return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x, i = k, d8 = new Ctor(8);
  for (; i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
  var k, pr, rm, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(x.s);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
  var halfPi, x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
  if (k !== -1) {
    return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero())
    return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.asin();
  halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return halfPi.minus(x);
};
P.inverseHyperbolicCosine = P.acosh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (x.lte(1))
    return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
  var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.e >= 0)
    return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1)
    return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P.inverseSine = P.asin = function() {
  var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
  if (x.isZero())
    return new Ctor(x);
  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k !== -1) {
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseTangent = P.atan = function() {
  var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s)
      return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k; i; --i)
    x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (; i !== -1; ) {
    px = px.times(x2);
    t = r.minus(px.div(n += 2));
    px = px.times(x2);
    r = t.plus(px.div(n += 2));
    if (r.d[j] !== void 0)
      for (i = j; r.d[i] === t.d[i] && i--; )
        ;
  }
  if (k)
    r = r.times(2 << k - 1);
  external = true;
  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
  return !!this.d;
};
P.isInteger = P.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
  return !this.s;
};
P.isNegative = P.isNeg = function() {
  return this.s < 0;
};
P.isPositive = P.isPos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;
    if (base.s < 0 || !d || !d[0] || base.eq(1))
      return new Ctor(NaN);
    isBase10 = base.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0]; k % 10 === 0; )
        k /= 10;
      inf = k !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
  r = divide(num, denominator, sd, 1);
  if (checkRoundingDigits(r.d, k = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k += 10, rm));
  }
  external = true;
  return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
  var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (x.d)
      y.s = -y.s;
    else
      y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0])
      y.s = -y.s;
    else if (xd[0])
      y = new Ctor(x);
    else
      return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; )
      d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy)
      len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i)
    xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; )
        xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; )
    xd.pop();
  for (; xd[0] === 0; xd.shift())
    --e;
  if (!xd[0])
    return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0])
    return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
  return naturalLogarithm(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function(y) {
  var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (!x.d)
      y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0])
      y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; )
      d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; )
    xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
  var k, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
    throw Error(invalidArgument + z);
  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k)
      k = x.e + 1;
  } else {
    k = NaN;
  }
  return k;
};
P.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
  var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e) % 2 == 0)
      n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
  var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; )
    r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL]; )
    r.pop();
  if (carry)
    ++e;
  else
    r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0)
    return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0)
    rm = Ctor.rounding;
  else
    checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
  var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
  if (!xd)
    return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
  if (maxD == null) {
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1))
      throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (; ; ) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1)
      break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d)
      return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d)
      return y.s ? x : y;
    if (!y.d) {
      if (y.s)
        y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function() {
  return +this;
};
P.toOctal = function(sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
  var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0])
    return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1))
    return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1))
    return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }
  s = x.s;
  if (s < 0) {
    if (e < y.d.length - 1)
      return new Ctor(NaN);
    if ((y.d[e] & 1) == 0)
      s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
    return new Ctor(e > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k = Math.min(12, (e + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
  if (r.d) {
    r = finalise(r, pr + 5, 1);
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm;
  return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
  var str, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k)
        str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k)
      str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; )
    w /= 10;
  return str + w;
}
__name(digitsToString, "digitsToString");
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
__name(checkInt32, "checkInt32");
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;
  for (k = d[0]; k >= 10; k /= 10)
    --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0)
        rd = rd / 100 | 0;
      else if (i == 1)
        rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0)
        rd = rd / 1e3 | 0;
      else if (i == 1)
        rd = rd / 100 | 0;
      else if (i == 2)
        rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
__name(checkRoundingDigits, "checkRoundingDigits");
function convertBase(str, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; )
      arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0)
          arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
__name(convertBase, "convertBase");
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero())
    return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k; i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
__name(cosine, "cosine");
var divide = function() {
  function multiplyInteger(x, k, base) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }
    if (carry)
      x.unshift(carry);
    return x;
  }
  __name(multiplyInteger, "multiplyInteger");
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  __name(compare, "compare");
  function subtract(a, b, aL, base) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  __name(subtract, "subtract");
  return function(x, y, pr, rm, dp, base) {
    var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0);
    }
    if (base) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign2);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); i++)
      ;
    if (yd[i] > (xd[i] || 0))
      e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k) && sd--; i++) {
          t = k * base + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }
        more = k || i < xL;
      } else {
        k = base / (yd[0] + 1) | 0;
        if (k > 1) {
          yd = multiplyInteger(yd, k, base);
          xd = multiplyInteger(xd, k, base);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; )
          rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base / 2)
          ++yd0;
        do {
          k = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base + (rem[1] || 0);
            k = rem0 / yd0 | 0;
            if (k > 1) {
              if (k >= base)
                k = base - 1;
              prod = multiplyInteger(yd, k, base);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base);
              }
            } else {
              if (k == 0)
                cmp = k = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL)
              prod.unshift(0);
            subtract(rem, prod, remL, base);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k++;
                subtract(rem, yL < remL ? yz : yd, remL, base);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }
          qd[i++] = k;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
        more = rem[0] !== void 0;
      }
      if (!qd[0])
        qd.shift();
    }
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {
      for (i = 1, k = qd[0]; k >= 10; k /= 10)
        i++;
      q.e = i + e * logBase - 1;
      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }
    return q;
  };
}();
function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out:
    if (sd != null) {
      xd = x.d;
      if (!xd)
        return x;
      for (digits = 1, k = xd[0]; k >= 10; k /= 10)
        digits++;
      i = sd - digits;
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {
            for (; k++ <= xdi; )
              xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];
          for (digits = 1; k >= 10; k /= 10)
            digits++;
          i %= LOG_BASE;
          j = i - LOG_BASE + digits;
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }
      isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
      roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {
          sd -= x.e + 1;
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {
          xd[0] = x.e = 0;
        }
        return x;
      }
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }
      if (roundUp) {
        for (; ; ) {
          if (xdi == 0) {
            for (i = 1, j = xd[0]; j >= 10; j /= 10)
              i++;
            j = xd[0] += k;
            for (k = 1; j >= 10; j /= 10)
              k++;
            if (i != k) {
              x.e++;
              if (xd[0] == BASE)
                xd[0] = 1;
            }
            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE)
              break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }
      for (i = xd.length; xd[--i] === 0; )
        xd.pop();
    }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
__name(finalise, "finalise");
function finiteToString(x, isExp, sd) {
  if (!x.isFinite())
    return nonFiniteToString(x);
  var k, e = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0)
      str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0)
      str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len)
      str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len)
        str += ".";
      str += getZeroString(k);
    }
  }
  return str;
}
__name(finiteToString, "finiteToString");
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE; w >= 10; w /= 10)
    e++;
  return e;
}
__name(getBase10Exponent, "getBase10Exponent");
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr)
      Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
__name(getLn10, "getLn10");
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION)
    throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
__name(getPi, "getPi");
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (; w % 10 == 0; w /= 10)
      len--;
    for (w = digits[0]; w >= 10; w /= 10)
      len++;
  }
  return len;
}
__name(getPrecision, "getPrecision");
function getZeroString(k) {
  var zs = "";
  for (; k--; )
    zs += "0";
  return zs;
}
__name(getZeroString, "getZeroString");
function intPow(Ctor, x, n, pr) {
  var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (; ; ) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k))
        isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0)
        ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r;
}
__name(intPow, "intPow");
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
__name(isOdd, "isOdd");
function maxOrMin(Ctor, args, ltgt) {
  var y, x = new Ctor(args[0]), i = 0;
  for (; ++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    } else if (x[ltgt](y)) {
      x = y;
    }
  }
  return x;
}
__name(maxOrMin, "maxOrMin");
function naturalExponential(x, sd) {
  var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (; ; ) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide(pow2, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k;
      while (j--)
        sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
  }
}
__name(naturalExponential, "naturalExponential");
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (; ; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0)
        sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
__name(naturalLogarithm, "naturalLogarithm");
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
__name(nonFiniteToString, "nonFiniteToString");
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1)
    str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0)
      e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; i++)
    ;
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len)
    ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0)
      i += LOG_BASE;
    if (i < len) {
      if (i)
        x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; )
        x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; )
      str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
__name(parseDecimal, "parseDecimal");
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str))
      return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str)
      x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str, base, BASE);
  xe = xd.length - 1;
  for (i = xe; xd[i] === 0; --i)
    xd.pop();
  if (i < 0)
    return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat)
    x = divide(x, divisor, len * 4);
  if (p)
    x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
__name(parseOther, "parseOther");
function sine(Ctor, x) {
  var k, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (; k--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
__name(sine, "sine");
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (; ; ) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);
    if (t.d[k] !== void 0) {
      for (j = k; t.d[j] === u.d[j] && j--; )
        ;
      if (j == -1)
        break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
    i++;
  }
  external = true;
  t.d.length = k + 1;
  return t;
}
__name(taylorSeries, "taylorSeries");
function tinyPow(b, e) {
  var n = b;
  while (--e)
    n *= b;
  return n;
}
__name(tinyPow, "tinyPow");
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
__name(toLessThanHalfPi, "toLessThanHalfPi");
function toStringBinary(x, baseOut, sd, rm) {
  var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base);
    e = len = xd.length;
    for (; xd[--len] == 0; )
      xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;
      roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (; ++xd[--sd] > base - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length; !xd[len - 1]; --len)
        ;
      for (i = 0, str = ""; i < len; i++)
        str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++)
              str += "0";
            xd = convertBase(str, base, baseOut);
            for (len = xd.length; !xd[len - 1]; --len)
              ;
            for (i = 1, str = "1."; i < len; i++)
              str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e; )
          str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len)
          for (e -= len; e--; )
            str += "0";
        else if (e < len)
          str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
__name(toStringBinary, "toStringBinary");
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
__name(truncate, "truncate");
function abs(x) {
  return new this(x).abs();
}
__name(abs, "abs");
function acos(x) {
  return new this(x).acos();
}
__name(acos, "acos");
function acosh(x) {
  return new this(x).acosh();
}
__name(acosh, "acosh");
function add(x, y) {
  return new this(x).plus(y);
}
__name(add, "add");
function asin(x) {
  return new this(x).asin();
}
__name(asin, "asin");
function asinh(x) {
  return new this(x).asinh();
}
__name(asinh, "asinh");
function atan(x) {
  return new this(x).atan();
}
__name(atan, "atan");
function atanh(x) {
  return new this(x).atanh();
}
__name(atanh, "atanh");
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
__name(atan2, "atan2");
function cbrt(x) {
  return new this(x).cbrt();
}
__name(cbrt, "cbrt");
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
__name(ceil, "ceil");
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
__name(clamp, "clamp");
function config(obj) {
  if (!obj || typeof obj !== "object")
    throw Error(decimalError + "Object expected");
  var i, p, v, useDefaults = obj.defaults === true, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < ps.length; i += 3) {
    if (p = ps[i], useDefaults)
      this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
        this[p] = v;
      else
        throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults)
    this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
__name(config, "config");
function cos(x) {
  return new this(x).cos();
}
__name(cos, "cos");
function cosh(x) {
  return new this(x).cosh();
}
__name(cosh, "cosh");
function clone(obj) {
  var i, p, ps;
  function Decimal2(v) {
    var e, i2, t, x = this;
    if (!(x instanceof Decimal2))
      return new Decimal2(v);
    x.constructor = Decimal2;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v; i2 >= 10; i2 /= 10)
          e++;
        if (external) {
          if (e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      } else if (v * 0 !== 0) {
        if (!v)
          x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    } else if (t !== "string") {
      throw Error(invalidArgument + v);
    }
    if ((i2 = v.charCodeAt(0)) === 45) {
      v = v.slice(1);
      x.s = -1;
    } else {
      if (i2 === 43)
        v = v.slice(1);
      x.s = 1;
    }
    return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
  }
  __name(Decimal2, "Decimal");
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config;
  Decimal2.clone = clone;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs;
  Decimal2.acos = acos;
  Decimal2.acosh = acosh;
  Decimal2.add = add;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln;
  Decimal2.log = log;
  Decimal2.log10 = log10;
  Decimal2.log2 = log2;
  Decimal2.max = max;
  Decimal2.min = min;
  Decimal2.mod = mod;
  Decimal2.mul = mul;
  Decimal2.pow = pow;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign;
  Decimal2.sin = sin;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt;
  Decimal2.sub = sub;
  Decimal2.sum = sum;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === void 0)
    obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps.length; )
        if (!obj.hasOwnProperty(p = ps[i++]))
          obj[p] = this[p];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
__name(clone, "clone");
function div(x, y) {
  return new this(x).div(y);
}
__name(div, "div");
function exp(x) {
  return new this(x).exp();
}
__name(exp, "exp");
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
__name(floor, "floor");
function hypot() {
  var i, n, t = new this(0);
  external = false;
  for (i = 0; i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
__name(hypot, "hypot");
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
__name(isDecimalInstance, "isDecimalInstance");
function ln(x) {
  return new this(x).ln();
}
__name(ln, "ln");
function log(x, y) {
  return new this(x).log(y);
}
__name(log, "log");
function log2(x) {
  return new this(x).log(2);
}
__name(log2, "log2");
function log10(x) {
  return new this(x).log(10);
}
__name(log10, "log10");
function max() {
  return maxOrMin(this, arguments, "lt");
}
__name(max, "max");
function min() {
  return maxOrMin(this, arguments, "gt");
}
__name(min, "min");
function mod(x, y) {
  return new this(x).mod(y);
}
__name(mod, "mod");
function mul(x, y) {
  return new this(x).mul(y);
}
__name(mul, "mul");
function pow(x, y) {
  return new this(x).pow(y);
}
__name(pow, "pow");
function random(sd) {
  var d, e, k, n, i = 0, r = new this(1), rd = [];
  if (sd === void 0)
    sd = this.precision;
  else
    checkInt32(sd, 1, MAX_DIGITS);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (; i < k; )
      rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (; i < k; ) {
      n = d[i];
      if (n >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (; i < k; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (; rd[i] === 0; i--)
    rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (; rd[0] === 0; e -= LOG_BASE)
      rd.shift();
    for (k = 1, n = rd[0]; n >= 10; n /= 10)
      k++;
    if (k < LOG_BASE)
      e -= LOG_BASE - k;
  }
  r.e = e;
  r.d = rd;
  return r;
}
__name(random, "random");
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
__name(round, "round");
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
__name(sign, "sign");
function sin(x) {
  return new this(x).sin();
}
__name(sin, "sin");
function sinh(x) {
  return new this(x).sinh();
}
__name(sinh, "sinh");
function sqrt(x) {
  return new this(x).sqrt();
}
__name(sqrt, "sqrt");
function sub(x, y) {
  return new this(x).sub(y);
}
__name(sub, "sub");
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length; )
    x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
__name(sum, "sum");
function tan(x) {
  return new this(x).tan();
}
__name(tan, "tan");
function tanh(x) {
  return new this(x).tanh();
}
__name(tanh, "tanh");
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
__name(trunc, "trunc");
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
var decimal_default = Decimal;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW92aWVzL1tzbHVnXS41M2JkNmI0MjQxOTRkNmI2MDA5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0Q7QUFDQTtBQUNBLEVBQUUsRUFBRSxtQkFBTyxDQUFDLG9HQUFzQzs7O0FBR2xEOztBQUVBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkIsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Qsd0JBQXdCO0FBQ3hCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNRyxNQUFNLEdBQUksSUFBSUQsd0RBQUosRUFBaEI7O0FBTWUsU0FBU0UsTUFBVCxHQUFpQjtBQUM1QixzQkFDSTtBQUFLLGFBQVMsRUFBRUgsMEVBQWhCO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7S0FYdUJHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnhCLGVBQWUsbUJBQU8sQ0FBQyxvRkFBOEI7O0FBRXJEOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0Esa0VBQWtFLFlBQVk7QUFDOUUsMkRBQTJELDBCQUEwQjtBQUNyRjtBQUNBO0FBQ0EsNkJBQTZCLGlDQUFpQztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxpQkFBaUI7QUFDMUI7QUFDQSxTQUFTLGFBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEdBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixLQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNCQUFzQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLElBQUk7QUFDSjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxXQUFXLGFBQWE7QUFDeEI7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzLy5wcmlzbWEvY2xpZW50L2luZGV4LWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcHJpc21hL2NsaWVudC9pbmRleC1icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHByaXNtYS9jbGllbnQvcnVudGltZS9pbmRleC1icm93c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5jb25zdCB7XG4gIERlY2ltYWxcbn0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudC9ydW50aW1lL2luZGV4LWJyb3dzZXInKVxuXG5cbmNvbnN0IFByaXNtYSA9IHt9XG5cbmV4cG9ydHMuUHJpc21hID0gUHJpc21hXG5cbi8qKlxuICogUHJpc21hIENsaWVudCBKUyB2ZXJzaW9uOiAzLjEuMVxuICogUXVlcnkgRW5naW5lIHZlcnNpb246IGMyMjY1MmI3ZTQxODUwNmZhYjIzMDUyZDU2OWI4NWQzYWVjNDg4M2ZcbiAqL1xuUHJpc21hLnByaXNtYVZlcnNpb24gPSB7XG4gIGNsaWVudDogXCIzLjEuMVwiLFxuICBlbmdpbmU6IFwiYzIyNjUyYjdlNDE4NTA2ZmFiMjMwNTJkNTY5Yjg1ZDNhZWM0ODgzZlwiXG59XG5cblByaXNtYS5QcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvciA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBQcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvciBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuKX07XG5QcmlzbWEuUHJpc21hQ2xpZW50VW5rbm93blJlcXVlc3RFcnJvciA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBQcmlzbWFDbGllbnRVbmtub3duUmVxdWVzdEVycm9yIGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLlByaXNtYUNsaWVudFJ1c3RQYW5pY0Vycm9yID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoYFByaXNtYUNsaWVudFJ1c3RQYW5pY0Vycm9yIGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLlByaXNtYUNsaWVudEluaXRpYWxpemF0aW9uRXJyb3IgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgUHJpc21hQ2xpZW50SW5pdGlhbGl6YXRpb25FcnJvciBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuKX1cblByaXNtYS5QcmlzbWFDbGllbnRWYWxpZGF0aW9uRXJyb3IgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgUHJpc21hQ2xpZW50VmFsaWRhdGlvbkVycm9yIGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLkRlY2ltYWwgPSBEZWNpbWFsXG5cbi8qKlxuICogUmUtZXhwb3J0IG9mIHNxbC10ZW1wbGF0ZS10YWdcbiAqL1xuUHJpc21hLnNxbCA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBzcWx0YWcgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9XG5QcmlzbWEuZW1wdHkgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihgZW1wdHkgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9XG5QcmlzbWEuam9pbiA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGBqb2luIGlzIHVuYWJsZSB0byBiZSBydW4gaW4gdGhlIGJyb3dzZXIuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2lzc3Vlc2AsXG4pfVxuUHJpc21hLnJhdyA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGByYXcgaXMgdW5hYmxlIHRvIGJlIHJ1biBpbiB0aGUgYnJvd3Nlci5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzYCxcbil9XG5QcmlzbWEudmFsaWRhdG9yID0gKCkgPT4gKHZhbCkgPT4gdmFsXG5cbi8qKlxuICogU2hvcnRoYW5kIHV0aWxpdGllcyBmb3IgSlNPTiBmaWx0ZXJpbmdcbiAqL1xuUHJpc21hLkRiTnVsbCA9ICdEYk51bGwnXG5QcmlzbWEuSnNvbk51bGwgPSAnSnNvbk51bGwnXG5QcmlzbWEuQW55TnVsbCA9ICdBbnlOdWxsJ1xuXG4vKipcbiAqIEVudW1zXG4gKi9cbi8vIEJhc2VkIG9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMxOTIjaXNzdWVjb21tZW50LTI2MTcyMDI3NVxuZnVuY3Rpb24gbWFrZUVudW0oeCkgeyByZXR1cm4geDsgfVxuXG5leHBvcnRzLlByaXNtYS5Nb3ZpZVNjYWxhckZpZWxkRW51bSA9IG1ha2VFbnVtKHtcbiAgaWQ6ICdpZCcsXG4gIHRpdGxlOiAndGl0bGUnLFxuICB5ZWFyOiAneWVhcicsXG4gIGRlc2NyaXB0aW9uOiAnZGVzY3JpcHRpb24nLFxuICBzbHVnOiAnc2x1Zydcbn0pO1xuXG5leHBvcnRzLlByaXNtYS5Tb3J0T3JkZXIgPSBtYWtlRW51bSh7XG4gIGFzYzogJ2FzYycsXG4gIGRlc2M6ICdkZXNjJ1xufSk7XG5cblxuZXhwb3J0cy5QcmlzbWEuTW9kZWxOYW1lID0gbWFrZUVudW0oe1xuICBNb3ZpZTogJ01vdmllJ1xufSk7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBDbGllbnRcbiAqL1xuY2xhc3MgUHJpc21hQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFByaXNtYUNsaWVudCBpcyB1bmFibGUgdG8gYmUgcnVuIGluIHRoZSBicm93c2VyLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9pc3N1ZXNgLFxuICAgIClcbiAgfVxufVxuZXhwb3J0cy5QcmlzbWFDbGllbnQgPSBQcmlzbWFDbGllbnRcblxuT2JqZWN0LmFzc2lnbihleHBvcnRzLCBQcmlzbWEpXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmNvbnN0IHByaXNtYSAgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSAoKSA9PiB7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT48L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPGgyPjwvaDI+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiY29uc3QgcHJpc21hID0gcmVxdWlyZSgnLnByaXNtYS9jbGllbnQvaW5kZXgtYnJvd3NlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gcHJpc21hXG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fbWFya0FzTW9kdWxlID0gKHRhcmdldCkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogdHJ1ZX0pO1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwge3ZhbHVlLCBjb25maWd1cmFibGU6IHRydWV9KTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7Z2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWV9KTtcbn07XG5cbi8vIHNyYy9ydW50aW1lL2luZGV4LWJyb3dzZXIudHNcbl9fbWFya0FzTW9kdWxlKGV4cG9ydHMpO1xuX19leHBvcnQoZXhwb3J0cywge1xuICBEZWNpbWFsOiAoKSA9PiBkZWNpbWFsX2RlZmF1bHRcbn0pO1xuXG4vLyAuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZGVjaW1hbC5qc0AxMC4zLjEvbm9kZV9tb2R1bGVzL2RlY2ltYWwuanMvZGVjaW1hbC5tanNcbnZhciBFWFBfTElNSVQgPSA5ZTE1O1xudmFyIE1BWF9ESUdJVFMgPSAxZTk7XG52YXIgTlVNRVJBTFMgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcbnZhciBMTjEwID0gXCIyLjMwMjU4NTA5Mjk5NDA0NTY4NDAxNzk5MTQ1NDY4NDM2NDIwNzYwMTEwMTQ4ODYyODc3Mjk3NjAzMzMyNzkwMDk2NzU3MjYwOTY3NzM1MjQ4MDIzNTk5NzIwNTA4OTU5ODI5ODM0MTk2Nzc4NDA0MjI4NjI0ODYzMzQwOTUyNTQ2NTA4MjgwNjc1NjY2NjI4NzM2OTA5ODc4MTY4OTQ4MjkwNzIwODMyNTU1NDY4MDg0Mzc5OTg5NDgyNjIzMzE5ODUyODM5MzUwNTMwODk2NTM3NzczMjYyODg0NjE2MzM2NjIyMjI4NzY5ODIxOTg4Njc0NjU0MzY2NzQ3NDQwNDI0MzI3NDM2NTE1NTA0ODkzNDMxNDkzOTM5MTQ3OTYxOTQwNDQwMDIyMjEwNTEwMTcxNDE3NDgwMDM2ODgwODQwMTI2NDcwODA2ODU1Njc3NDMyMTYyMjgzNTUyMjAxMTQ4MDQ2NjM3MTU2NTkxMjEzNzM0NTA3NDc4NTY5NDc2ODM0NjM2MTY3OTIxMDE4MDY0NDUwNzA2NDgwMDAyNzc1MDI2ODQ5MTY3NDY1NTA1ODY4NTY5MzU2NzM0MjA2NzA1ODExMzY0MjkyMjQ1NTQ0MDU3NTg5MjU3MjQyMDgyNDEzMTQ2OTU2ODkwMTY3NTg5NDAyNTY3NzYzMTEzNTY5MTkyOTIwMzMzNzY1ODcxNDE2NjAyMzAxMDU3MDMwODk2MzQ1NzIwNzU0NDAzNzA4NDc0Njk5NDAxNjgyNjkyODI4MDg0ODExODQyODkzMTQ4NDg1MjQ5NDg2NDQ4NzE5Mjc4MDk2NzYyNzEyNzU3NzUzOTcwMjc2Njg2MDU5NTI0OTY3MTY2NzQxODM0ODU3MDQ0MjI1MDcxOTc5NjUwMDQ3MTQ5NTEwNTA0OTIyMTQ3NzY1Njc2MzY5Mzg2NjI5NzY5Nzk1MjIxMTA3MTgyNjQ1NDk3MzQ3NzI2NjI0MjU3MDk0MjkzMjI1ODI3OTg1MDI1ODU1MDk3ODUyNjUzODMyMDc2MDY3MjYzMTcxNjQzMDk1MDU5OTUwODc4MDc1MjM3MTAzMzMxMDExOTc4NTc1NDczMzE1NDE0MjE4MDg0Mjc1NDM4NjM1OTE3NzgxMTcwNTQzMDk4Mjc0ODIzODUwNDU2NDgwMTkwOTU2MTAyOTkyOTE4MjQzMTgyMzc1MjUzNTc3MDk3NTA1Mzk1NjUxODc2OTc1MTAzNzQ5NzA4ODg2OTIxODAyMDUxODkzMzk1MDcyMzg1MzkyMDUxNDQ2MzQxOTcyNjUyODcyODY5NjUxMTA4NjI1NzE0OTIxOTg4NDk5Nzg3NDg4NzM3NzEzNDU2ODYyMDkxNjcwNThcIjtcbnZhciBQSSA9IFwiMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1MDI4ODQxOTcxNjkzOTkzNzUxMDU4MjA5NzQ5NDQ1OTIzMDc4MTY0MDYyODYyMDg5OTg2MjgwMzQ4MjUzNDIxMTcwNjc5ODIxNDgwODY1MTMyODIzMDY2NDcwOTM4NDQ2MDk1NTA1ODIyMzE3MjUzNTk0MDgxMjg0ODExMTc0NTAyODQxMDI3MDE5Mzg1MjExMDU1NTk2NDQ2MjI5NDg5NTQ5MzAzODE5NjQ0Mjg4MTA5NzU2NjU5MzM0NDYxMjg0NzU2NDgyMzM3ODY3ODMxNjUyNzEyMDE5MDkxNDU2NDg1NjY5MjM0NjAzNDg2MTA0NTQzMjY2NDgyMTMzOTM2MDcyNjAyNDkxNDEyNzM3MjQ1ODcwMDY2MDYzMTU1ODgxNzQ4ODE1MjA5MjA5NjI4MjkyNTQwOTE3MTUzNjQzNjc4OTI1OTAzNjAwMTEzMzA1MzA1NDg4MjA0NjY1MjEzODQxNDY5NTE5NDE1MTE2MDk0MzMwNTcyNzAzNjU3NTk1OTE5NTMwOTIxODYxMTczODE5MzI2MTE3OTMxMDUxMTg1NDgwNzQ0NjIzNzk5NjI3NDk1NjczNTE4ODU3NTI3MjQ4OTEyMjc5MzgxODMwMTE5NDkxMjk4MzM2NzMzNjI0NDA2NTY2NDMwODYwMjEzOTQ5NDYzOTUyMjQ3MzcxOTA3MDIxNzk4NjA5NDM3MDI3NzA1MzkyMTcxNzYyOTMxNzY3NTIzODQ2NzQ4MTg0Njc2Njk0MDUxMzIwMDA1NjgxMjcxNDUyNjM1NjA4Mjc3ODU3NzEzNDI3NTc3ODk2MDkxNzM2MzcxNzg3MjE0Njg0NDA5MDEyMjQ5NTM0MzAxNDY1NDk1ODUzNzEwNTA3OTIyNzk2ODkyNTg5MjM1NDIwMTk5NTYxMTIxMjkwMjE5NjA4NjQwMzQ0MTgxNTk4MTM2Mjk3NzQ3NzEzMDk5NjA1MTg3MDcyMTEzNDk5OTk5OTgzNzI5NzgwNDk5NTEwNTk3MzE3MzI4MTYwOTYzMTg1OTUwMjQ0NTk0NTUzNDY5MDgzMDI2NDI1MjIzMDgyNTMzNDQ2ODUwMzUyNjE5MzExODgxNzEwMTAwMDMxMzc4Mzg3NTI4ODY1ODc1MzMyMDgzODE0MjA2MTcxNzc2NjkxNDczMDM1OTgyNTM0OTA0Mjg3NTU0Njg3MzExNTk1NjI4NjM4ODIzNTM3ODc1OTM3NTE5NTc3ODE4NTc3ODA1MzIxNzEyMjY4MDY2MTMwMDE5Mjc4NzY2MTExOTU5MDkyMTY0MjAxOTg5MzgwOTUyNTcyMDEwNjU0ODU4NjMyNzg5XCI7XG52YXIgREVGQVVMVFMgPSB7XG4gIHByZWNpc2lvbjogMjAsXG4gIHJvdW5kaW5nOiA0LFxuICBtb2R1bG86IDEsXG4gIHRvRXhwTmVnOiAtNyxcbiAgdG9FeHBQb3M6IDIxLFxuICBtaW5FOiAtRVhQX0xJTUlULFxuICBtYXhFOiBFWFBfTElNSVQsXG4gIGNyeXB0bzogZmFsc2Vcbn07XG52YXIgaW5leGFjdDtcbnZhciBxdWFkcmFudDtcbnZhciBleHRlcm5hbCA9IHRydWU7XG52YXIgZGVjaW1hbEVycm9yID0gXCJbRGVjaW1hbEVycm9yXSBcIjtcbnZhciBpbnZhbGlkQXJndW1lbnQgPSBkZWNpbWFsRXJyb3IgKyBcIkludmFsaWQgYXJndW1lbnQ6IFwiO1xudmFyIHByZWNpc2lvbkxpbWl0RXhjZWVkZWQgPSBkZWNpbWFsRXJyb3IgKyBcIlByZWNpc2lvbiBsaW1pdCBleGNlZWRlZFwiO1xudmFyIGNyeXB0b1VuYXZhaWxhYmxlID0gZGVjaW1hbEVycm9yICsgXCJjcnlwdG8gdW5hdmFpbGFibGVcIjtcbnZhciB0YWcgPSBcIltvYmplY3QgRGVjaW1hbF1cIjtcbnZhciBtYXRoZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIG1hdGhwb3cgPSBNYXRoLnBvdztcbnZhciBpc0JpbmFyeSA9IC9eMGIoWzAxXSsoXFwuWzAxXSopP3xcXC5bMDFdKykocFsrLV0/XFxkKyk/JC9pO1xudmFyIGlzSGV4ID0gL14weChbMC05YS1mXSsoXFwuWzAtOWEtZl0qKT98XFwuWzAtOWEtZl0rKShwWystXT9cXGQrKT8kL2k7XG52YXIgaXNPY3RhbCA9IC9eMG8oWzAtN10rKFxcLlswLTddKik/fFxcLlswLTddKykocFsrLV0/XFxkKyk/JC9pO1xudmFyIGlzRGVjaW1hbCA9IC9eKFxcZCsoXFwuXFxkKik/fFxcLlxcZCspKGVbKy1dP1xcZCspPyQvaTtcbnZhciBCQVNFID0gMWU3O1xudmFyIExPR19CQVNFID0gNztcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcbnZhciBMTjEwX1BSRUNJU0lPTiA9IExOMTAubGVuZ3RoIC0gMTtcbnZhciBQSV9QUkVDSVNJT04gPSBQSS5sZW5ndGggLSAxO1xudmFyIFAgPSB7dG9TdHJpbmdUYWc6IHRhZ307XG5QLmFic29sdXRlVmFsdWUgPSBQLmFicyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpO1xuICBpZiAoeC5zIDwgMClcbiAgICB4LnMgPSAxO1xuICByZXR1cm4gZmluYWxpc2UoeCk7XG59O1xuUC5jZWlsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmaW5hbGlzZShuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzKSwgdGhpcy5lICsgMSwgMik7XG59O1xuUC5jbGFtcGVkVG8gPSBQLmNsYW1wID0gZnVuY3Rpb24obWluMiwgbWF4Mikge1xuICB2YXIgaywgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBtaW4yID0gbmV3IEN0b3IobWluMik7XG4gIG1heDIgPSBuZXcgQ3RvcihtYXgyKTtcbiAgaWYgKCFtaW4yLnMgfHwgIW1heDIucylcbiAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgaWYgKG1pbjIuZ3QobWF4MikpXG4gICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgbWF4Mik7XG4gIGsgPSB4LmNtcChtaW4yKTtcbiAgcmV0dXJuIGsgPCAwID8gbWluMiA6IHguY21wKG1heDIpID4gMCA/IG1heDIgOiBuZXcgQ3Rvcih4KTtcbn07XG5QLmNvbXBhcmVkVG8gPSBQLmNtcCA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIGksIGosIHhkTCwgeWRMLCB4ID0gdGhpcywgeGQgPSB4LmQsIHlkID0gKHkgPSBuZXcgeC5jb25zdHJ1Y3Rvcih5KSkuZCwgeHMgPSB4LnMsIHlzID0geS5zO1xuICBpZiAoIXhkIHx8ICF5ZCkge1xuICAgIHJldHVybiAheHMgfHwgIXlzID8gTmFOIDogeHMgIT09IHlzID8geHMgOiB4ZCA9PT0geWQgPyAwIDogIXhkIF4geHMgPCAwID8gMSA6IC0xO1xuICB9XG4gIGlmICgheGRbMF0gfHwgIXlkWzBdKVxuICAgIHJldHVybiB4ZFswXSA/IHhzIDogeWRbMF0gPyAteXMgOiAwO1xuICBpZiAoeHMgIT09IHlzKVxuICAgIHJldHVybiB4cztcbiAgaWYgKHguZSAhPT0geS5lKVxuICAgIHJldHVybiB4LmUgPiB5LmUgXiB4cyA8IDAgPyAxIDogLTE7XG4gIHhkTCA9IHhkLmxlbmd0aDtcbiAgeWRMID0geWQubGVuZ3RoO1xuICBmb3IgKGkgPSAwLCBqID0geGRMIDwgeWRMID8geGRMIDogeWRMOyBpIDwgajsgKytpKSB7XG4gICAgaWYgKHhkW2ldICE9PSB5ZFtpXSlcbiAgICAgIHJldHVybiB4ZFtpXSA+IHlkW2ldIF4geHMgPCAwID8gMSA6IC0xO1xuICB9XG4gIHJldHVybiB4ZEwgPT09IHlkTCA/IDAgOiB4ZEwgPiB5ZEwgXiB4cyA8IDAgPyAxIDogLTE7XG59O1xuUC5jb3NpbmUgPSBQLmNvcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcHIsIHJtLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICgheC5kKVxuICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICBpZiAoIXguZFswXSlcbiAgICByZXR1cm4gbmV3IEN0b3IoMSk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIE1hdGgubWF4KHguZSwgeC5zZCgpKSArIExPR19CQVNFO1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgeCA9IGNvc2luZShDdG9yLCB0b0xlc3NUaGFuSGFsZlBpKEN0b3IsIHgpKTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4gZmluYWxpc2UocXVhZHJhbnQgPT0gMiB8fCBxdWFkcmFudCA9PSAzID8geC5uZWcoKSA6IHgsIHByLCBybSwgdHJ1ZSk7XG59O1xuUC5jdWJlUm9vdCA9IFAuY2JydCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZSwgbSwgbiwgciwgcmVwLCBzLCBzZCwgdCwgdDMsIHQzcGx1c3gsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4LmlzRmluaXRlKCkgfHwgeC5pc1plcm8oKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIHMgPSB4LnMgKiBtYXRocG93KHgucyAqIHgsIDEgLyAzKTtcbiAgaWYgKCFzIHx8IE1hdGguYWJzKHMpID09IDEgLyAwKSB7XG4gICAgbiA9IGRpZ2l0c1RvU3RyaW5nKHguZCk7XG4gICAgZSA9IHguZTtcbiAgICBpZiAocyA9IChlIC0gbi5sZW5ndGggKyAxKSAlIDMpXG4gICAgICBuICs9IHMgPT0gMSB8fCBzID09IC0yID8gXCIwXCIgOiBcIjAwXCI7XG4gICAgcyA9IG1hdGhwb3cobiwgMSAvIDMpO1xuICAgIGUgPSBtYXRoZmxvb3IoKGUgKyAxKSAvIDMpIC0gKGUgJSAzID09IChlIDwgMCA/IC0xIDogMikpO1xuICAgIGlmIChzID09IDEgLyAwKSB7XG4gICAgICBuID0gXCI1ZVwiICsgZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IHMudG9FeHBvbmVudGlhbCgpO1xuICAgICAgbiA9IG4uc2xpY2UoMCwgbi5pbmRleE9mKFwiZVwiKSArIDEpICsgZTtcbiAgICB9XG4gICAgciA9IG5ldyBDdG9yKG4pO1xuICAgIHIucyA9IHgucztcbiAgfSBlbHNlIHtcbiAgICByID0gbmV3IEN0b3Iocy50b1N0cmluZygpKTtcbiAgfVxuICBzZCA9IChlID0gQ3Rvci5wcmVjaXNpb24pICsgMztcbiAgZm9yICg7IDsgKSB7XG4gICAgdCA9IHI7XG4gICAgdDMgPSB0LnRpbWVzKHQpLnRpbWVzKHQpO1xuICAgIHQzcGx1c3ggPSB0My5wbHVzKHgpO1xuICAgIHIgPSBkaXZpZGUodDNwbHVzeC5wbHVzKHgpLnRpbWVzKHQpLCB0M3BsdXN4LnBsdXModDMpLCBzZCArIDIsIDEpO1xuICAgIGlmIChkaWdpdHNUb1N0cmluZyh0LmQpLnNsaWNlKDAsIHNkKSA9PT0gKG4gPSBkaWdpdHNUb1N0cmluZyhyLmQpKS5zbGljZSgwLCBzZCkpIHtcbiAgICAgIG4gPSBuLnNsaWNlKHNkIC0gMywgc2QgKyAxKTtcbiAgICAgIGlmIChuID09IFwiOTk5OVwiIHx8ICFyZXAgJiYgbiA9PSBcIjQ5OTlcIikge1xuICAgICAgICBpZiAoIXJlcCkge1xuICAgICAgICAgIGZpbmFsaXNlKHQsIGUgKyAxLCAwKTtcbiAgICAgICAgICBpZiAodC50aW1lcyh0KS50aW1lcyh0KS5lcSh4KSkge1xuICAgICAgICAgICAgciA9IHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2QgKz0gNDtcbiAgICAgICAgcmVwID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghK24gfHwgIStuLnNsaWNlKDEpICYmIG4uY2hhckF0KDApID09IFwiNVwiKSB7XG4gICAgICAgICAgZmluYWxpc2UociwgZSArIDEsIDEpO1xuICAgICAgICAgIG0gPSAhci50aW1lcyhyKS50aW1lcyhyKS5lcSh4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gZmluYWxpc2UociwgZSwgQ3Rvci5yb3VuZGluZywgbSk7XG59O1xuUC5kZWNpbWFsUGxhY2VzID0gUC5kcCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdywgZCA9IHRoaXMuZCwgbiA9IE5hTjtcbiAgaWYgKGQpIHtcbiAgICB3ID0gZC5sZW5ndGggLSAxO1xuICAgIG4gPSAodyAtIG1hdGhmbG9vcih0aGlzLmUgLyBMT0dfQkFTRSkpICogTE9HX0JBU0U7XG4gICAgdyA9IGRbd107XG4gICAgaWYgKHcpXG4gICAgICBmb3IgKDsgdyAlIDEwID09IDA7IHcgLz0gMTApXG4gICAgICAgIG4tLTtcbiAgICBpZiAobiA8IDApXG4gICAgICBuID0gMDtcbiAgfVxuICByZXR1cm4gbjtcbn07XG5QLmRpdmlkZWRCeSA9IFAuZGl2ID0gZnVuY3Rpb24oeSkge1xuICByZXR1cm4gZGl2aWRlKHRoaXMsIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHkpKTtcbn07XG5QLmRpdmlkZWRUb0ludGVnZXJCeSA9IFAuZGl2VG9JbnQgPSBmdW5jdGlvbih5KSB7XG4gIHZhciB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIHJldHVybiBmaW5hbGlzZShkaXZpZGUoeCwgbmV3IEN0b3IoeSksIDAsIDEsIDEpLCBDdG9yLnByZWNpc2lvbiwgQ3Rvci5yb3VuZGluZyk7XG59O1xuUC5lcXVhbHMgPSBQLmVxID0gZnVuY3Rpb24oeSkge1xuICByZXR1cm4gdGhpcy5jbXAoeSkgPT09IDA7XG59O1xuUC5mbG9vciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZmluYWxpc2UobmV3IHRoaXMuY29uc3RydWN0b3IodGhpcyksIHRoaXMuZSArIDEsIDMpO1xufTtcblAuZ3JlYXRlclRoYW4gPSBQLmd0ID0gZnVuY3Rpb24oeSkge1xuICByZXR1cm4gdGhpcy5jbXAoeSkgPiAwO1xufTtcblAuZ3JlYXRlclRoYW5PckVxdWFsVG8gPSBQLmd0ZSA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIGsgPSB0aGlzLmNtcCh5KTtcbiAgcmV0dXJuIGsgPT0gMSB8fCBrID09PSAwO1xufTtcblAuaHlwZXJib2xpY0Nvc2luZSA9IFAuY29zaCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaywgbiwgcHIsIHJtLCBsZW4sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3Rvciwgb25lID0gbmV3IEN0b3IoMSk7XG4gIGlmICgheC5pc0Zpbml0ZSgpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4LnMgPyAxIC8gMCA6IE5hTik7XG4gIGlmICh4LmlzWmVybygpKVxuICAgIHJldHVybiBvbmU7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIE1hdGgubWF4KHguZSwgeC5zZCgpKSArIDQ7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICBsZW4gPSB4LmQubGVuZ3RoO1xuICBpZiAobGVuIDwgMzIpIHtcbiAgICBrID0gTWF0aC5jZWlsKGxlbiAvIDMpO1xuICAgIG4gPSAoMSAvIHRpbnlQb3coNCwgaykpLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgayA9IDE2O1xuICAgIG4gPSBcIjIuMzI4MzA2NDM2NTM4Njk2Mjg5MDYyNWUtMTBcIjtcbiAgfVxuICB4ID0gdGF5bG9yU2VyaWVzKEN0b3IsIDEsIHgudGltZXMobiksIG5ldyBDdG9yKDEpLCB0cnVlKTtcbiAgdmFyIGNvc2gyX3gsIGkgPSBrLCBkOCA9IG5ldyBDdG9yKDgpO1xuICBmb3IgKDsgaS0tOyApIHtcbiAgICBjb3NoMl94ID0geC50aW1lcyh4KTtcbiAgICB4ID0gb25lLm1pbnVzKGNvc2gyX3gudGltZXMoZDgubWludXMoY29zaDJfeC50aW1lcyhkOCkpKSk7XG4gIH1cbiAgcmV0dXJuIGZpbmFsaXNlKHgsIEN0b3IucHJlY2lzaW9uID0gcHIsIEN0b3Iucm91bmRpbmcgPSBybSwgdHJ1ZSk7XG59O1xuUC5oeXBlcmJvbGljU2luZSA9IFAuc2luaCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaywgcHIsIHJtLCBsZW4sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4LmlzRmluaXRlKCkgfHwgeC5pc1plcm8oKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIE1hdGgubWF4KHguZSwgeC5zZCgpKSArIDQ7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICBsZW4gPSB4LmQubGVuZ3RoO1xuICBpZiAobGVuIDwgMykge1xuICAgIHggPSB0YXlsb3JTZXJpZXMoQ3RvciwgMiwgeCwgeCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgayA9IDEuNCAqIE1hdGguc3FydChsZW4pO1xuICAgIGsgPSBrID4gMTYgPyAxNiA6IGsgfCAwO1xuICAgIHggPSB4LnRpbWVzKDEgLyB0aW55UG93KDUsIGspKTtcbiAgICB4ID0gdGF5bG9yU2VyaWVzKEN0b3IsIDIsIHgsIHgsIHRydWUpO1xuICAgIHZhciBzaW5oMl94LCBkNSA9IG5ldyBDdG9yKDUpLCBkMTYgPSBuZXcgQ3RvcigxNiksIGQyMCA9IG5ldyBDdG9yKDIwKTtcbiAgICBmb3IgKDsgay0tOyApIHtcbiAgICAgIHNpbmgyX3ggPSB4LnRpbWVzKHgpO1xuICAgICAgeCA9IHgudGltZXMoZDUucGx1cyhzaW5oMl94LnRpbWVzKGQxNi50aW1lcyhzaW5oMl94KS5wbHVzKGQyMCkpKSk7XG4gICAgfVxuICB9XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIGZpbmFsaXNlKHgsIHByLCBybSwgdHJ1ZSk7XG59O1xuUC5oeXBlcmJvbGljVGFuZ2VudCA9IFAudGFuaCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcHIsIHJtLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIGlmICgheC5pc0Zpbml0ZSgpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4LnMpO1xuICBpZiAoeC5pc1plcm8oKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIDc7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICByZXR1cm4gZGl2aWRlKHguc2luaCgpLCB4LmNvc2goKSwgQ3Rvci5wcmVjaXNpb24gPSBwciwgQ3Rvci5yb3VuZGluZyA9IHJtKTtcbn07XG5QLmludmVyc2VDb3NpbmUgPSBQLmFjb3MgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhhbGZQaSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBrID0geC5hYnMoKS5jbXAoMSksIHByID0gQ3Rvci5wcmVjaXNpb24sIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgaWYgKGsgIT09IC0xKSB7XG4gICAgcmV0dXJuIGsgPT09IDAgPyB4LmlzTmVnKCkgPyBnZXRQaShDdG9yLCBwciwgcm0pIDogbmV3IEN0b3IoMCkgOiBuZXcgQ3RvcihOYU4pO1xuICB9XG4gIGlmICh4LmlzWmVybygpKVxuICAgIHJldHVybiBnZXRQaShDdG9yLCBwciArIDQsIHJtKS50aW1lcygwLjUpO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgNjtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIHggPSB4LmFzaW4oKTtcbiAgaGFsZlBpID0gZ2V0UGkoQ3RvciwgcHIgKyA0LCBybSkudGltZXMoMC41KTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4gaGFsZlBpLm1pbnVzKHgpO1xufTtcblAuaW52ZXJzZUh5cGVyYm9saWNDb3NpbmUgPSBQLmFjb3NoID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwciwgcm0sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKHgubHRlKDEpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4LmVxKDEpID8gMCA6IE5hTik7XG4gIGlmICgheC5pc0Zpbml0ZSgpKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBDdG9yLnByZWNpc2lvbiA9IHByICsgTWF0aC5tYXgoTWF0aC5hYnMoeC5lKSwgeC5zZCgpKSArIDQ7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICB4ID0geC50aW1lcyh4KS5taW51cygxKS5zcXJ0KCkucGx1cyh4KTtcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiB4LmxuKCk7XG59O1xuUC5pbnZlcnNlSHlwZXJib2xpY1NpbmUgPSBQLmFzaW5oID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwciwgcm0sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCF4LmlzRmluaXRlKCkgfHwgeC5pc1plcm8oKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIDIgKiBNYXRoLm1heChNYXRoLmFicyh4LmUpLCB4LnNkKCkpICsgNjtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIHggPSB4LnRpbWVzKHgpLnBsdXMoMSkuc3FydCgpLnBsdXMoeCk7XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwcjtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4geC5sbigpO1xufTtcblAuaW52ZXJzZUh5cGVyYm9saWNUYW5nZW50ID0gUC5hdGFuaCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcHIsIHJtLCB3cHIsIHhzZCwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXguaXNGaW5pdGUoKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgaWYgKHguZSA+PSAwKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4LmFicygpLmVxKDEpID8geC5zIC8gMCA6IHguaXNaZXJvKCkgPyB4IDogTmFOKTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICB4c2QgPSB4LnNkKCk7XG4gIGlmIChNYXRoLm1heCh4c2QsIHByKSA8IDIgKiAteC5lIC0gMSlcbiAgICByZXR1cm4gZmluYWxpc2UobmV3IEN0b3IoeCksIHByLCBybSwgdHJ1ZSk7XG4gIEN0b3IucHJlY2lzaW9uID0gd3ByID0geHNkIC0geC5lO1xuICB4ID0gZGl2aWRlKHgucGx1cygxKSwgbmV3IEN0b3IoMSkubWludXMoeCksIHdwciArIHByLCAxKTtcbiAgQ3Rvci5wcmVjaXNpb24gPSBwciArIDQ7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICB4ID0geC5sbigpO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiB4LnRpbWVzKDAuNSk7XG59O1xuUC5pbnZlcnNlU2luZSA9IFAuYXNpbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaGFsZlBpLCBrLCBwciwgcm0sIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBrID0geC5hYnMoKS5jbXAoMSk7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgaWYgKGsgIT09IC0xKSB7XG4gICAgaWYgKGsgPT09IDApIHtcbiAgICAgIGhhbGZQaSA9IGdldFBpKEN0b3IsIHByICsgNCwgcm0pLnRpbWVzKDAuNSk7XG4gICAgICBoYWxmUGkucyA9IHgucztcbiAgICAgIHJldHVybiBoYWxmUGk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICB9XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyA2O1xuICBDdG9yLnJvdW5kaW5nID0gMTtcbiAgeCA9IHguZGl2KG5ldyBDdG9yKDEpLm1pbnVzKHgudGltZXMoeCkpLnNxcnQoKS5wbHVzKDEpKS5hdGFuKCk7XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIHgudGltZXMoMik7XG59O1xuUC5pbnZlcnNlVGFuZ2VudCA9IFAuYXRhbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaSwgaiwgaywgbiwgcHgsIHQsIHIsIHdwciwgeDIsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvciwgcHIgPSBDdG9yLnByZWNpc2lvbiwgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBpZiAoIXguaXNGaW5pdGUoKSkge1xuICAgIGlmICgheC5zKVxuICAgICAgcmV0dXJuIG5ldyBDdG9yKE5hTik7XG4gICAgaWYgKHByICsgNCA8PSBQSV9QUkVDSVNJT04pIHtcbiAgICAgIHIgPSBnZXRQaShDdG9yLCBwciArIDQsIHJtKS50aW1lcygwLjUpO1xuICAgICAgci5zID0geC5zO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICB9IGVsc2UgaWYgKHguaXNaZXJvKCkpIHtcbiAgICByZXR1cm4gbmV3IEN0b3IoeCk7XG4gIH0gZWxzZSBpZiAoeC5hYnMoKS5lcSgxKSAmJiBwciArIDQgPD0gUElfUFJFQ0lTSU9OKSB7XG4gICAgciA9IGdldFBpKEN0b3IsIHByICsgNCwgcm0pLnRpbWVzKDAuMjUpO1xuICAgIHIucyA9IHgucztcbiAgICByZXR1cm4gcjtcbiAgfVxuICBDdG9yLnByZWNpc2lvbiA9IHdwciA9IHByICsgMTA7XG4gIEN0b3Iucm91bmRpbmcgPSAxO1xuICBrID0gTWF0aC5taW4oMjgsIHdwciAvIExPR19CQVNFICsgMiB8IDApO1xuICBmb3IgKGkgPSBrOyBpOyAtLWkpXG4gICAgeCA9IHguZGl2KHgudGltZXMoeCkucGx1cygxKS5zcXJ0KCkucGx1cygxKSk7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIGogPSBNYXRoLmNlaWwod3ByIC8gTE9HX0JBU0UpO1xuICBuID0gMTtcbiAgeDIgPSB4LnRpbWVzKHgpO1xuICByID0gbmV3IEN0b3IoeCk7XG4gIHB4ID0geDtcbiAgZm9yICg7IGkgIT09IC0xOyApIHtcbiAgICBweCA9IHB4LnRpbWVzKHgyKTtcbiAgICB0ID0gci5taW51cyhweC5kaXYobiArPSAyKSk7XG4gICAgcHggPSBweC50aW1lcyh4Mik7XG4gICAgciA9IHQucGx1cyhweC5kaXYobiArPSAyKSk7XG4gICAgaWYgKHIuZFtqXSAhPT0gdm9pZCAwKVxuICAgICAgZm9yIChpID0gajsgci5kW2ldID09PSB0LmRbaV0gJiYgaS0tOyApXG4gICAgICAgIDtcbiAgfVxuICBpZiAoaylcbiAgICByID0gci50aW1lcygyIDw8IGsgLSAxKTtcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gZmluYWxpc2UociwgQ3Rvci5wcmVjaXNpb24gPSBwciwgQ3Rvci5yb3VuZGluZyA9IHJtLCB0cnVlKTtcbn07XG5QLmlzRmluaXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhIXRoaXMuZDtcbn07XG5QLmlzSW50ZWdlciA9IFAuaXNJbnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICEhdGhpcy5kICYmIG1hdGhmbG9vcih0aGlzLmUgLyBMT0dfQkFTRSkgPiB0aGlzLmQubGVuZ3RoIC0gMjtcbn07XG5QLmlzTmFOID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhdGhpcy5zO1xufTtcblAuaXNOZWdhdGl2ZSA9IFAuaXNOZWcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucyA8IDA7XG59O1xuUC5pc1Bvc2l0aXZlID0gUC5pc1BvcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zID4gMDtcbn07XG5QLmlzWmVybyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gISF0aGlzLmQgJiYgdGhpcy5kWzBdID09PSAwO1xufTtcblAubGVzc1RoYW4gPSBQLmx0ID0gZnVuY3Rpb24oeSkge1xuICByZXR1cm4gdGhpcy5jbXAoeSkgPCAwO1xufTtcblAubGVzc1RoYW5PckVxdWFsVG8gPSBQLmx0ZSA9IGZ1bmN0aW9uKHkpIHtcbiAgcmV0dXJuIHRoaXMuY21wKHkpIDwgMTtcbn07XG5QLmxvZ2FyaXRobSA9IFAubG9nID0gZnVuY3Rpb24oYmFzZSkge1xuICB2YXIgaXNCYXNlMTAsIGQsIGRlbm9taW5hdG9yLCBrLCBpbmYsIG51bSwgc2QsIHIsIGFyZyA9IHRoaXMsIEN0b3IgPSBhcmcuY29uc3RydWN0b3IsIHByID0gQ3Rvci5wcmVjaXNpb24sIHJtID0gQ3Rvci5yb3VuZGluZywgZ3VhcmQgPSA1O1xuICBpZiAoYmFzZSA9PSBudWxsKSB7XG4gICAgYmFzZSA9IG5ldyBDdG9yKDEwKTtcbiAgICBpc0Jhc2UxMCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYmFzZSA9IG5ldyBDdG9yKGJhc2UpO1xuICAgIGQgPSBiYXNlLmQ7XG4gICAgaWYgKGJhc2UucyA8IDAgfHwgIWQgfHwgIWRbMF0gfHwgYmFzZS5lcSgxKSlcbiAgICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICAgIGlzQmFzZTEwID0gYmFzZS5lcSgxMCk7XG4gIH1cbiAgZCA9IGFyZy5kO1xuICBpZiAoYXJnLnMgPCAwIHx8ICFkIHx8ICFkWzBdIHx8IGFyZy5lcSgxKSkge1xuICAgIHJldHVybiBuZXcgQ3RvcihkICYmICFkWzBdID8gLTEgLyAwIDogYXJnLnMgIT0gMSA/IE5hTiA6IGQgPyAwIDogMSAvIDApO1xuICB9XG4gIGlmIChpc0Jhc2UxMCkge1xuICAgIGlmIChkLmxlbmd0aCA+IDEpIHtcbiAgICAgIGluZiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoayA9IGRbMF07IGsgJSAxMCA9PT0gMDsgKVxuICAgICAgICBrIC89IDEwO1xuICAgICAgaW5mID0gayAhPT0gMTtcbiAgICB9XG4gIH1cbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgc2QgPSBwciArIGd1YXJkO1xuICBudW0gPSBuYXR1cmFsTG9nYXJpdGhtKGFyZywgc2QpO1xuICBkZW5vbWluYXRvciA9IGlzQmFzZTEwID8gZ2V0TG4xMChDdG9yLCBzZCArIDEwKSA6IG5hdHVyYWxMb2dhcml0aG0oYmFzZSwgc2QpO1xuICByID0gZGl2aWRlKG51bSwgZGVub21pbmF0b3IsIHNkLCAxKTtcbiAgaWYgKGNoZWNrUm91bmRpbmdEaWdpdHMoci5kLCBrID0gcHIsIHJtKSkge1xuICAgIGRvIHtcbiAgICAgIHNkICs9IDEwO1xuICAgICAgbnVtID0gbmF0dXJhbExvZ2FyaXRobShhcmcsIHNkKTtcbiAgICAgIGRlbm9taW5hdG9yID0gaXNCYXNlMTAgPyBnZXRMbjEwKEN0b3IsIHNkICsgMTApIDogbmF0dXJhbExvZ2FyaXRobShiYXNlLCBzZCk7XG4gICAgICByID0gZGl2aWRlKG51bSwgZGVub21pbmF0b3IsIHNkLCAxKTtcbiAgICAgIGlmICghaW5mKSB7XG4gICAgICAgIGlmICgrZGlnaXRzVG9TdHJpbmcoci5kKS5zbGljZShrICsgMSwgayArIDE1KSArIDEgPT0gMWUxNCkge1xuICAgICAgICAgIHIgPSBmaW5hbGlzZShyLCBwciArIDEsIDApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKGNoZWNrUm91bmRpbmdEaWdpdHMoci5kLCBrICs9IDEwLCBybSkpO1xuICB9XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIGZpbmFsaXNlKHIsIHByLCBybSk7XG59O1xuUC5taW51cyA9IFAuc3ViID0gZnVuY3Rpb24oeSkge1xuICB2YXIgZCwgZSwgaSwgaiwgaywgbGVuLCBwciwgcm0sIHhkLCB4ZSwgeExUeSwgeWQsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgeSA9IG5ldyBDdG9yKHkpO1xuICBpZiAoIXguZCB8fCAheS5kKSB7XG4gICAgaWYgKCF4LnMgfHwgIXkucylcbiAgICAgIHkgPSBuZXcgQ3RvcihOYU4pO1xuICAgIGVsc2UgaWYgKHguZClcbiAgICAgIHkucyA9IC15LnM7XG4gICAgZWxzZVxuICAgICAgeSA9IG5ldyBDdG9yKHkuZCB8fCB4LnMgIT09IHkucyA/IHggOiBOYU4pO1xuICAgIHJldHVybiB5O1xuICB9XG4gIGlmICh4LnMgIT0geS5zKSB7XG4gICAgeS5zID0gLXkucztcbiAgICByZXR1cm4geC5wbHVzKHkpO1xuICB9XG4gIHhkID0geC5kO1xuICB5ZCA9IHkuZDtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBpZiAoIXhkWzBdIHx8ICF5ZFswXSkge1xuICAgIGlmICh5ZFswXSlcbiAgICAgIHkucyA9IC15LnM7XG4gICAgZWxzZSBpZiAoeGRbMF0pXG4gICAgICB5ID0gbmV3IEN0b3IoeCk7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIG5ldyBDdG9yKHJtID09PSAzID8gLTAgOiAwKTtcbiAgICByZXR1cm4gZXh0ZXJuYWwgPyBmaW5hbGlzZSh5LCBwciwgcm0pIDogeTtcbiAgfVxuICBlID0gbWF0aGZsb29yKHkuZSAvIExPR19CQVNFKTtcbiAgeGUgPSBtYXRoZmxvb3IoeC5lIC8gTE9HX0JBU0UpO1xuICB4ZCA9IHhkLnNsaWNlKCk7XG4gIGsgPSB4ZSAtIGU7XG4gIGlmIChrKSB7XG4gICAgeExUeSA9IGsgPCAwO1xuICAgIGlmICh4TFR5KSB7XG4gICAgICBkID0geGQ7XG4gICAgICBrID0gLWs7XG4gICAgICBsZW4gPSB5ZC5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQgPSB5ZDtcbiAgICAgIGUgPSB4ZTtcbiAgICAgIGxlbiA9IHhkLmxlbmd0aDtcbiAgICB9XG4gICAgaSA9IE1hdGgubWF4KE1hdGguY2VpbChwciAvIExPR19CQVNFKSwgbGVuKSArIDI7XG4gICAgaWYgKGsgPiBpKSB7XG4gICAgICBrID0gaTtcbiAgICAgIGQubGVuZ3RoID0gMTtcbiAgICB9XG4gICAgZC5yZXZlcnNlKCk7XG4gICAgZm9yIChpID0gazsgaS0tOyApXG4gICAgICBkLnB1c2goMCk7XG4gICAgZC5yZXZlcnNlKCk7XG4gIH0gZWxzZSB7XG4gICAgaSA9IHhkLmxlbmd0aDtcbiAgICBsZW4gPSB5ZC5sZW5ndGg7XG4gICAgeExUeSA9IGkgPCBsZW47XG4gICAgaWYgKHhMVHkpXG4gICAgICBsZW4gPSBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHhkW2ldICE9IHlkW2ldKSB7XG4gICAgICAgIHhMVHkgPSB4ZFtpXSA8IHlkW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgayA9IDA7XG4gIH1cbiAgaWYgKHhMVHkpIHtcbiAgICBkID0geGQ7XG4gICAgeGQgPSB5ZDtcbiAgICB5ZCA9IGQ7XG4gICAgeS5zID0gLXkucztcbiAgfVxuICBsZW4gPSB4ZC5sZW5ndGg7XG4gIGZvciAoaSA9IHlkLmxlbmd0aCAtIGxlbjsgaSA+IDA7IC0taSlcbiAgICB4ZFtsZW4rK10gPSAwO1xuICBmb3IgKGkgPSB5ZC5sZW5ndGg7IGkgPiBrOyApIHtcbiAgICBpZiAoeGRbLS1pXSA8IHlkW2ldKSB7XG4gICAgICBmb3IgKGogPSBpOyBqICYmIHhkWy0tal0gPT09IDA7IClcbiAgICAgICAgeGRbal0gPSBCQVNFIC0gMTtcbiAgICAgIC0teGRbal07XG4gICAgICB4ZFtpXSArPSBCQVNFO1xuICAgIH1cbiAgICB4ZFtpXSAtPSB5ZFtpXTtcbiAgfVxuICBmb3IgKDsgeGRbLS1sZW5dID09PSAwOyApXG4gICAgeGQucG9wKCk7XG4gIGZvciAoOyB4ZFswXSA9PT0gMDsgeGQuc2hpZnQoKSlcbiAgICAtLWU7XG4gIGlmICgheGRbMF0pXG4gICAgcmV0dXJuIG5ldyBDdG9yKHJtID09PSAzID8gLTAgOiAwKTtcbiAgeS5kID0geGQ7XG4gIHkuZSA9IGdldEJhc2UxMEV4cG9uZW50KHhkLCBlKTtcbiAgcmV0dXJuIGV4dGVybmFsID8gZmluYWxpc2UoeSwgcHIsIHJtKSA6IHk7XG59O1xuUC5tb2R1bG8gPSBQLm1vZCA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIHEsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgeSA9IG5ldyBDdG9yKHkpO1xuICBpZiAoIXguZCB8fCAheS5zIHx8IHkuZCAmJiAheS5kWzBdKVxuICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICBpZiAoIXkuZCB8fCB4LmQgJiYgIXguZFswXSkge1xuICAgIHJldHVybiBmaW5hbGlzZShuZXcgQ3Rvcih4KSwgQ3Rvci5wcmVjaXNpb24sIEN0b3Iucm91bmRpbmcpO1xuICB9XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIGlmIChDdG9yLm1vZHVsbyA9PSA5KSB7XG4gICAgcSA9IGRpdmlkZSh4LCB5LmFicygpLCAwLCAzLCAxKTtcbiAgICBxLnMgKj0geS5zO1xuICB9IGVsc2Uge1xuICAgIHEgPSBkaXZpZGUoeCwgeSwgMCwgQ3Rvci5tb2R1bG8sIDEpO1xuICB9XG4gIHEgPSBxLnRpbWVzKHkpO1xuICBleHRlcm5hbCA9IHRydWU7XG4gIHJldHVybiB4Lm1pbnVzKHEpO1xufTtcblAubmF0dXJhbEV4cG9uZW50aWFsID0gUC5leHAgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5hdHVyYWxFeHBvbmVudGlhbCh0aGlzKTtcbn07XG5QLm5hdHVyYWxMb2dhcml0aG0gPSBQLmxuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuYXR1cmFsTG9nYXJpdGhtKHRoaXMpO1xufTtcblAubmVnYXRlZCA9IFAubmVnID0gZnVuY3Rpb24oKSB7XG4gIHZhciB4ID0gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcyk7XG4gIHgucyA9IC14LnM7XG4gIHJldHVybiBmaW5hbGlzZSh4KTtcbn07XG5QLnBsdXMgPSBQLmFkZCA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIGNhcnJ5LCBkLCBlLCBpLCBrLCBsZW4sIHByLCBybSwgeGQsIHlkLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIHkgPSBuZXcgQ3Rvcih5KTtcbiAgaWYgKCF4LmQgfHwgIXkuZCkge1xuICAgIGlmICgheC5zIHx8ICF5LnMpXG4gICAgICB5ID0gbmV3IEN0b3IoTmFOKTtcbiAgICBlbHNlIGlmICgheC5kKVxuICAgICAgeSA9IG5ldyBDdG9yKHkuZCB8fCB4LnMgPT09IHkucyA/IHggOiBOYU4pO1xuICAgIHJldHVybiB5O1xuICB9XG4gIGlmICh4LnMgIT0geS5zKSB7XG4gICAgeS5zID0gLXkucztcbiAgICByZXR1cm4geC5taW51cyh5KTtcbiAgfVxuICB4ZCA9IHguZDtcbiAgeWQgPSB5LmQ7XG4gIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgaWYgKCF4ZFswXSB8fCAheWRbMF0pIHtcbiAgICBpZiAoIXlkWzBdKVxuICAgICAgeSA9IG5ldyBDdG9yKHgpO1xuICAgIHJldHVybiBleHRlcm5hbCA/IGZpbmFsaXNlKHksIHByLCBybSkgOiB5O1xuICB9XG4gIGsgPSBtYXRoZmxvb3IoeC5lIC8gTE9HX0JBU0UpO1xuICBlID0gbWF0aGZsb29yKHkuZSAvIExPR19CQVNFKTtcbiAgeGQgPSB4ZC5zbGljZSgpO1xuICBpID0gayAtIGU7XG4gIGlmIChpKSB7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICBkID0geGQ7XG4gICAgICBpID0gLWk7XG4gICAgICBsZW4gPSB5ZC5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQgPSB5ZDtcbiAgICAgIGUgPSBrO1xuICAgICAgbGVuID0geGQubGVuZ3RoO1xuICAgIH1cbiAgICBrID0gTWF0aC5jZWlsKHByIC8gTE9HX0JBU0UpO1xuICAgIGxlbiA9IGsgPiBsZW4gPyBrICsgMSA6IGxlbiArIDE7XG4gICAgaWYgKGkgPiBsZW4pIHtcbiAgICAgIGkgPSBsZW47XG4gICAgICBkLmxlbmd0aCA9IDE7XG4gICAgfVxuICAgIGQucmV2ZXJzZSgpO1xuICAgIGZvciAoOyBpLS07IClcbiAgICAgIGQucHVzaCgwKTtcbiAgICBkLnJldmVyc2UoKTtcbiAgfVxuICBsZW4gPSB4ZC5sZW5ndGg7XG4gIGkgPSB5ZC5sZW5ndGg7XG4gIGlmIChsZW4gLSBpIDwgMCkge1xuICAgIGkgPSBsZW47XG4gICAgZCA9IHlkO1xuICAgIHlkID0geGQ7XG4gICAgeGQgPSBkO1xuICB9XG4gIGZvciAoY2FycnkgPSAwOyBpOyApIHtcbiAgICBjYXJyeSA9ICh4ZFstLWldID0geGRbaV0gKyB5ZFtpXSArIGNhcnJ5KSAvIEJBU0UgfCAwO1xuICAgIHhkW2ldICU9IEJBU0U7XG4gIH1cbiAgaWYgKGNhcnJ5KSB7XG4gICAgeGQudW5zaGlmdChjYXJyeSk7XG4gICAgKytlO1xuICB9XG4gIGZvciAobGVuID0geGQubGVuZ3RoOyB4ZFstLWxlbl0gPT0gMDsgKVxuICAgIHhkLnBvcCgpO1xuICB5LmQgPSB4ZDtcbiAgeS5lID0gZ2V0QmFzZTEwRXhwb25lbnQoeGQsIGUpO1xuICByZXR1cm4gZXh0ZXJuYWwgPyBmaW5hbGlzZSh5LCBwciwgcm0pIDogeTtcbn07XG5QLnByZWNpc2lvbiA9IFAuc2QgPSBmdW5jdGlvbih6KSB7XG4gIHZhciBrLCB4ID0gdGhpcztcbiAgaWYgKHogIT09IHZvaWQgMCAmJiB6ICE9PSAhIXogJiYgeiAhPT0gMSAmJiB6ICE9PSAwKVxuICAgIHRocm93IEVycm9yKGludmFsaWRBcmd1bWVudCArIHopO1xuICBpZiAoeC5kKSB7XG4gICAgayA9IGdldFByZWNpc2lvbih4LmQpO1xuICAgIGlmICh6ICYmIHguZSArIDEgPiBrKVxuICAgICAgayA9IHguZSArIDE7XG4gIH0gZWxzZSB7XG4gICAgayA9IE5hTjtcbiAgfVxuICByZXR1cm4gaztcbn07XG5QLnJvdW5kID0gZnVuY3Rpb24oKSB7XG4gIHZhciB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIHJldHVybiBmaW5hbGlzZShuZXcgQ3Rvcih4KSwgeC5lICsgMSwgQ3Rvci5yb3VuZGluZyk7XG59O1xuUC5zaW5lID0gUC5zaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHByLCBybSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXguaXNGaW5pdGUoKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgaWYgKHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyBNYXRoLm1heCh4LmUsIHguc2QoKSkgKyBMT0dfQkFTRTtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIHggPSBzaW5lKEN0b3IsIHRvTGVzc1RoYW5IYWxmUGkoQ3RvciwgeCkpO1xuICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICBDdG9yLnJvdW5kaW5nID0gcm07XG4gIHJldHVybiBmaW5hbGlzZShxdWFkcmFudCA+IDIgPyB4Lm5lZygpIDogeCwgcHIsIHJtLCB0cnVlKTtcbn07XG5QLnNxdWFyZVJvb3QgPSBQLnNxcnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG0sIG4sIHNkLCByLCByZXAsIHQsIHggPSB0aGlzLCBkID0geC5kLCBlID0geC5lLCBzID0geC5zLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKHMgIT09IDEgfHwgIWQgfHwgIWRbMF0pIHtcbiAgICByZXR1cm4gbmV3IEN0b3IoIXMgfHwgcyA8IDAgJiYgKCFkIHx8IGRbMF0pID8gTmFOIDogZCA/IHggOiAxIC8gMCk7XG4gIH1cbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgcyA9IE1hdGguc3FydCgreCk7XG4gIGlmIChzID09IDAgfHwgcyA9PSAxIC8gMCkge1xuICAgIG4gPSBkaWdpdHNUb1N0cmluZyhkKTtcbiAgICBpZiAoKG4ubGVuZ3RoICsgZSkgJSAyID09IDApXG4gICAgICBuICs9IFwiMFwiO1xuICAgIHMgPSBNYXRoLnNxcnQobik7XG4gICAgZSA9IG1hdGhmbG9vcigoZSArIDEpIC8gMikgLSAoZSA8IDAgfHwgZSAlIDIpO1xuICAgIGlmIChzID09IDEgLyAwKSB7XG4gICAgICBuID0gXCI1ZVwiICsgZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IHMudG9FeHBvbmVudGlhbCgpO1xuICAgICAgbiA9IG4uc2xpY2UoMCwgbi5pbmRleE9mKFwiZVwiKSArIDEpICsgZTtcbiAgICB9XG4gICAgciA9IG5ldyBDdG9yKG4pO1xuICB9IGVsc2Uge1xuICAgIHIgPSBuZXcgQ3RvcihzLnRvU3RyaW5nKCkpO1xuICB9XG4gIHNkID0gKGUgPSBDdG9yLnByZWNpc2lvbikgKyAzO1xuICBmb3IgKDsgOyApIHtcbiAgICB0ID0gcjtcbiAgICByID0gdC5wbHVzKGRpdmlkZSh4LCB0LCBzZCArIDIsIDEpKS50aW1lcygwLjUpO1xuICAgIGlmIChkaWdpdHNUb1N0cmluZyh0LmQpLnNsaWNlKDAsIHNkKSA9PT0gKG4gPSBkaWdpdHNUb1N0cmluZyhyLmQpKS5zbGljZSgwLCBzZCkpIHtcbiAgICAgIG4gPSBuLnNsaWNlKHNkIC0gMywgc2QgKyAxKTtcbiAgICAgIGlmIChuID09IFwiOTk5OVwiIHx8ICFyZXAgJiYgbiA9PSBcIjQ5OTlcIikge1xuICAgICAgICBpZiAoIXJlcCkge1xuICAgICAgICAgIGZpbmFsaXNlKHQsIGUgKyAxLCAwKTtcbiAgICAgICAgICBpZiAodC50aW1lcyh0KS5lcSh4KSkge1xuICAgICAgICAgICAgciA9IHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2QgKz0gNDtcbiAgICAgICAgcmVwID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghK24gfHwgIStuLnNsaWNlKDEpICYmIG4uY2hhckF0KDApID09IFwiNVwiKSB7XG4gICAgICAgICAgZmluYWxpc2UociwgZSArIDEsIDEpO1xuICAgICAgICAgIG0gPSAhci50aW1lcyhyKS5lcSh4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gZmluYWxpc2UociwgZSwgQ3Rvci5yb3VuZGluZywgbSk7XG59O1xuUC50YW5nZW50ID0gUC50YW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHByLCBybSwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXguaXNGaW5pdGUoKSlcbiAgICByZXR1cm4gbmV3IEN0b3IoTmFOKTtcbiAgaWYgKHguaXNaZXJvKCkpXG4gICAgcmV0dXJuIG5ldyBDdG9yKHgpO1xuICBwciA9IEN0b3IucHJlY2lzaW9uO1xuICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIEN0b3IucHJlY2lzaW9uID0gcHIgKyAxMDtcbiAgQ3Rvci5yb3VuZGluZyA9IDE7XG4gIHggPSB4LnNpbigpO1xuICB4LnMgPSAxO1xuICB4ID0gZGl2aWRlKHgsIG5ldyBDdG9yKDEpLm1pbnVzKHgudGltZXMoeCkpLnNxcnQoKSwgcHIgKyAxMCwgMCk7XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIEN0b3Iucm91bmRpbmcgPSBybTtcbiAgcmV0dXJuIGZpbmFsaXNlKHF1YWRyYW50ID09IDIgfHwgcXVhZHJhbnQgPT0gNCA/IHgubmVnKCkgOiB4LCBwciwgcm0sIHRydWUpO1xufTtcblAudGltZXMgPSBQLm11bCA9IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIGNhcnJ5LCBlLCBpLCBrLCByLCByTCwgdCwgeGRMLCB5ZEwsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvciwgeGQgPSB4LmQsIHlkID0gKHkgPSBuZXcgQ3Rvcih5KSkuZDtcbiAgeS5zICo9IHgucztcbiAgaWYgKCF4ZCB8fCAheGRbMF0gfHwgIXlkIHx8ICF5ZFswXSkge1xuICAgIHJldHVybiBuZXcgQ3RvcigheS5zIHx8IHhkICYmICF4ZFswXSAmJiAheWQgfHwgeWQgJiYgIXlkWzBdICYmICF4ZCA/IE5hTiA6ICF4ZCB8fCAheWQgPyB5LnMgLyAwIDogeS5zICogMCk7XG4gIH1cbiAgZSA9IG1hdGhmbG9vcih4LmUgLyBMT0dfQkFTRSkgKyBtYXRoZmxvb3IoeS5lIC8gTE9HX0JBU0UpO1xuICB4ZEwgPSB4ZC5sZW5ndGg7XG4gIHlkTCA9IHlkLmxlbmd0aDtcbiAgaWYgKHhkTCA8IHlkTCkge1xuICAgIHIgPSB4ZDtcbiAgICB4ZCA9IHlkO1xuICAgIHlkID0gcjtcbiAgICByTCA9IHhkTDtcbiAgICB4ZEwgPSB5ZEw7XG4gICAgeWRMID0gckw7XG4gIH1cbiAgciA9IFtdO1xuICByTCA9IHhkTCArIHlkTDtcbiAgZm9yIChpID0gckw7IGktLTsgKVxuICAgIHIucHVzaCgwKTtcbiAgZm9yIChpID0geWRMOyAtLWkgPj0gMDsgKSB7XG4gICAgY2FycnkgPSAwO1xuICAgIGZvciAoayA9IHhkTCArIGk7IGsgPiBpOyApIHtcbiAgICAgIHQgPSByW2tdICsgeWRbaV0gKiB4ZFtrIC0gaSAtIDFdICsgY2Fycnk7XG4gICAgICByW2stLV0gPSB0ICUgQkFTRSB8IDA7XG4gICAgICBjYXJyeSA9IHQgLyBCQVNFIHwgMDtcbiAgICB9XG4gICAgcltrXSA9IChyW2tdICsgY2FycnkpICUgQkFTRSB8IDA7XG4gIH1cbiAgZm9yICg7ICFyWy0tckxdOyApXG4gICAgci5wb3AoKTtcbiAgaWYgKGNhcnJ5KVxuICAgICsrZTtcbiAgZWxzZVxuICAgIHIuc2hpZnQoKTtcbiAgeS5kID0gcjtcbiAgeS5lID0gZ2V0QmFzZTEwRXhwb25lbnQociwgZSk7XG4gIHJldHVybiBleHRlcm5hbCA/IGZpbmFsaXNlKHksIEN0b3IucHJlY2lzaW9uLCBDdG9yLnJvdW5kaW5nKSA6IHk7XG59O1xuUC50b0JpbmFyeSA9IGZ1bmN0aW9uKHNkLCBybSkge1xuICByZXR1cm4gdG9TdHJpbmdCaW5hcnkodGhpcywgMiwgc2QsIHJtKTtcbn07XG5QLnRvRGVjaW1hbFBsYWNlcyA9IFAudG9EUCA9IGZ1bmN0aW9uKGRwLCBybSkge1xuICB2YXIgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICB4ID0gbmV3IEN0b3IoeCk7XG4gIGlmIChkcCA9PT0gdm9pZCAwKVxuICAgIHJldHVybiB4O1xuICBjaGVja0ludDMyKGRwLCAwLCBNQVhfRElHSVRTKTtcbiAgaWYgKHJtID09PSB2b2lkIDApXG4gICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBlbHNlXG4gICAgY2hlY2tJbnQzMihybSwgMCwgOCk7XG4gIHJldHVybiBmaW5hbGlzZSh4LCBkcCArIHguZSArIDEsIHJtKTtcbn07XG5QLnRvRXhwb25lbnRpYWwgPSBmdW5jdGlvbihkcCwgcm0pIHtcbiAgdmFyIHN0ciwgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoZHAgPT09IHZvaWQgMCkge1xuICAgIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGNoZWNrSW50MzIoZHAsIDAsIE1BWF9ESUdJVFMpO1xuICAgIGlmIChybSA9PT0gdm9pZCAwKVxuICAgICAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICAgIGVsc2VcbiAgICAgIGNoZWNrSW50MzIocm0sIDAsIDgpO1xuICAgIHggPSBmaW5hbGlzZShuZXcgQ3Rvcih4KSwgZHAgKyAxLCBybSk7XG4gICAgc3RyID0gZmluaXRlVG9TdHJpbmcoeCwgdHJ1ZSwgZHAgKyAxKTtcbiAgfVxuICByZXR1cm4geC5pc05lZygpICYmICF4LmlzWmVybygpID8gXCItXCIgKyBzdHIgOiBzdHI7XG59O1xuUC50b0ZpeGVkID0gZnVuY3Rpb24oZHAsIHJtKSB7XG4gIHZhciBzdHIsIHksIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGRwID09PSB2b2lkIDApIHtcbiAgICBzdHIgPSBmaW5pdGVUb1N0cmluZyh4KTtcbiAgfSBlbHNlIHtcbiAgICBjaGVja0ludDMyKGRwLCAwLCBNQVhfRElHSVRTKTtcbiAgICBpZiAocm0gPT09IHZvaWQgMClcbiAgICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgICBlbHNlXG4gICAgICBjaGVja0ludDMyKHJtLCAwLCA4KTtcbiAgICB5ID0gZmluYWxpc2UobmV3IEN0b3IoeCksIGRwICsgeC5lICsgMSwgcm0pO1xuICAgIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHksIGZhbHNlLCBkcCArIHkuZSArIDEpO1xuICB9XG4gIHJldHVybiB4LmlzTmVnKCkgJiYgIXguaXNaZXJvKCkgPyBcIi1cIiArIHN0ciA6IHN0cjtcbn07XG5QLnRvRnJhY3Rpb24gPSBmdW5jdGlvbihtYXhEKSB7XG4gIHZhciBkLCBkMCwgZDEsIGQyLCBlLCBrLCBuLCBuMCwgbjEsIHByLCBxLCByLCB4ID0gdGhpcywgeGQgPSB4LmQsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoIXhkKVxuICAgIHJldHVybiBuZXcgQ3Rvcih4KTtcbiAgbjEgPSBkMCA9IG5ldyBDdG9yKDEpO1xuICBkMSA9IG4wID0gbmV3IEN0b3IoMCk7XG4gIGQgPSBuZXcgQ3RvcihkMSk7XG4gIGUgPSBkLmUgPSBnZXRQcmVjaXNpb24oeGQpIC0geC5lIC0gMTtcbiAgayA9IGUgJSBMT0dfQkFTRTtcbiAgZC5kWzBdID0gbWF0aHBvdygxMCwgayA8IDAgPyBMT0dfQkFTRSArIGsgOiBrKTtcbiAgaWYgKG1heEQgPT0gbnVsbCkge1xuICAgIG1heEQgPSBlID4gMCA/IGQgOiBuMTtcbiAgfSBlbHNlIHtcbiAgICBuID0gbmV3IEN0b3IobWF4RCk7XG4gICAgaWYgKCFuLmlzSW50KCkgfHwgbi5sdChuMSkpXG4gICAgICB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyBuKTtcbiAgICBtYXhEID0gbi5ndChkKSA/IGUgPiAwID8gZCA6IG4xIDogbjtcbiAgfVxuICBleHRlcm5hbCA9IGZhbHNlO1xuICBuID0gbmV3IEN0b3IoZGlnaXRzVG9TdHJpbmcoeGQpKTtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgQ3Rvci5wcmVjaXNpb24gPSBlID0geGQubGVuZ3RoICogTE9HX0JBU0UgKiAyO1xuICBmb3IgKDsgOyApIHtcbiAgICBxID0gZGl2aWRlKG4sIGQsIDAsIDEsIDEpO1xuICAgIGQyID0gZDAucGx1cyhxLnRpbWVzKGQxKSk7XG4gICAgaWYgKGQyLmNtcChtYXhEKSA9PSAxKVxuICAgICAgYnJlYWs7XG4gICAgZDAgPSBkMTtcbiAgICBkMSA9IGQyO1xuICAgIGQyID0gbjE7XG4gICAgbjEgPSBuMC5wbHVzKHEudGltZXMoZDIpKTtcbiAgICBuMCA9IGQyO1xuICAgIGQyID0gZDtcbiAgICBkID0gbi5taW51cyhxLnRpbWVzKGQyKSk7XG4gICAgbiA9IGQyO1xuICB9XG4gIGQyID0gZGl2aWRlKG1heEQubWludXMoZDApLCBkMSwgMCwgMSwgMSk7XG4gIG4wID0gbjAucGx1cyhkMi50aW1lcyhuMSkpO1xuICBkMCA9IGQwLnBsdXMoZDIudGltZXMoZDEpKTtcbiAgbjAucyA9IG4xLnMgPSB4LnM7XG4gIHIgPSBkaXZpZGUobjEsIGQxLCBlLCAxKS5taW51cyh4KS5hYnMoKS5jbXAoZGl2aWRlKG4wLCBkMCwgZSwgMSkubWludXMoeCkuYWJzKCkpIDwgMSA/IFtuMSwgZDFdIDogW24wLCBkMF07XG4gIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIHI7XG59O1xuUC50b0hleGFkZWNpbWFsID0gUC50b0hleCA9IGZ1bmN0aW9uKHNkLCBybSkge1xuICByZXR1cm4gdG9TdHJpbmdCaW5hcnkodGhpcywgMTYsIHNkLCBybSk7XG59O1xuUC50b05lYXJlc3QgPSBmdW5jdGlvbih5LCBybSkge1xuICB2YXIgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICB4ID0gbmV3IEN0b3IoeCk7XG4gIGlmICh5ID09IG51bGwpIHtcbiAgICBpZiAoIXguZClcbiAgICAgIHJldHVybiB4O1xuICAgIHkgPSBuZXcgQ3RvcigxKTtcbiAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gIH0gZWxzZSB7XG4gICAgeSA9IG5ldyBDdG9yKHkpO1xuICAgIGlmIChybSA9PT0gdm9pZCAwKSB7XG4gICAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSW50MzIocm0sIDAsIDgpO1xuICAgIH1cbiAgICBpZiAoIXguZClcbiAgICAgIHJldHVybiB5LnMgPyB4IDogeTtcbiAgICBpZiAoIXkuZCkge1xuICAgICAgaWYgKHkucylcbiAgICAgICAgeS5zID0geC5zO1xuICAgICAgcmV0dXJuIHk7XG4gICAgfVxuICB9XG4gIGlmICh5LmRbMF0pIHtcbiAgICBleHRlcm5hbCA9IGZhbHNlO1xuICAgIHggPSBkaXZpZGUoeCwgeSwgMCwgcm0sIDEpLnRpbWVzKHkpO1xuICAgIGV4dGVybmFsID0gdHJ1ZTtcbiAgICBmaW5hbGlzZSh4KTtcbiAgfSBlbHNlIHtcbiAgICB5LnMgPSB4LnM7XG4gICAgeCA9IHk7XG4gIH1cbiAgcmV0dXJuIHg7XG59O1xuUC50b051bWJlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gK3RoaXM7XG59O1xuUC50b09jdGFsID0gZnVuY3Rpb24oc2QsIHJtKSB7XG4gIHJldHVybiB0b1N0cmluZ0JpbmFyeSh0aGlzLCA4LCBzZCwgcm0pO1xufTtcblAudG9Qb3dlciA9IFAucG93ID0gZnVuY3Rpb24oeSkge1xuICB2YXIgZSwgaywgcHIsIHIsIHJtLCBzLCB4ID0gdGhpcywgQ3RvciA9IHguY29uc3RydWN0b3IsIHluID0gKyh5ID0gbmV3IEN0b3IoeSkpO1xuICBpZiAoIXguZCB8fCAheS5kIHx8ICF4LmRbMF0gfHwgIXkuZFswXSlcbiAgICByZXR1cm4gbmV3IEN0b3IobWF0aHBvdygreCwgeW4pKTtcbiAgeCA9IG5ldyBDdG9yKHgpO1xuICBpZiAoeC5lcSgxKSlcbiAgICByZXR1cm4geDtcbiAgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgcm0gPSBDdG9yLnJvdW5kaW5nO1xuICBpZiAoeS5lcSgxKSlcbiAgICByZXR1cm4gZmluYWxpc2UoeCwgcHIsIHJtKTtcbiAgZSA9IG1hdGhmbG9vcih5LmUgLyBMT0dfQkFTRSk7XG4gIGlmIChlID49IHkuZC5sZW5ndGggLSAxICYmIChrID0geW4gPCAwID8gLXluIDogeW4pIDw9IE1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICByID0gaW50UG93KEN0b3IsIHgsIGssIHByKTtcbiAgICByZXR1cm4geS5zIDwgMCA/IG5ldyBDdG9yKDEpLmRpdihyKSA6IGZpbmFsaXNlKHIsIHByLCBybSk7XG4gIH1cbiAgcyA9IHgucztcbiAgaWYgKHMgPCAwKSB7XG4gICAgaWYgKGUgPCB5LmQubGVuZ3RoIC0gMSlcbiAgICAgIHJldHVybiBuZXcgQ3RvcihOYU4pO1xuICAgIGlmICgoeS5kW2VdICYgMSkgPT0gMClcbiAgICAgIHMgPSAxO1xuICAgIGlmICh4LmUgPT0gMCAmJiB4LmRbMF0gPT0gMSAmJiB4LmQubGVuZ3RoID09IDEpIHtcbiAgICAgIHgucyA9IHM7XG4gICAgICByZXR1cm4geDtcbiAgICB9XG4gIH1cbiAgayA9IG1hdGhwb3coK3gsIHluKTtcbiAgZSA9IGsgPT0gMCB8fCAhaXNGaW5pdGUoaykgPyBtYXRoZmxvb3IoeW4gKiAoTWF0aC5sb2coXCIwLlwiICsgZGlnaXRzVG9TdHJpbmcoeC5kKSkgLyBNYXRoLkxOMTAgKyB4LmUgKyAxKSkgOiBuZXcgQ3RvcihrICsgXCJcIikuZTtcbiAgaWYgKGUgPiBDdG9yLm1heEUgKyAxIHx8IGUgPCBDdG9yLm1pbkUgLSAxKVxuICAgIHJldHVybiBuZXcgQ3RvcihlID4gMCA/IHMgLyAwIDogMCk7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIEN0b3Iucm91bmRpbmcgPSB4LnMgPSAxO1xuICBrID0gTWF0aC5taW4oMTIsIChlICsgXCJcIikubGVuZ3RoKTtcbiAgciA9IG5hdHVyYWxFeHBvbmVudGlhbCh5LnRpbWVzKG5hdHVyYWxMb2dhcml0aG0oeCwgcHIgKyBrKSksIHByKTtcbiAgaWYgKHIuZCkge1xuICAgIHIgPSBmaW5hbGlzZShyLCBwciArIDUsIDEpO1xuICAgIGlmIChjaGVja1JvdW5kaW5nRGlnaXRzKHIuZCwgcHIsIHJtKSkge1xuICAgICAgZSA9IHByICsgMTA7XG4gICAgICByID0gZmluYWxpc2UobmF0dXJhbEV4cG9uZW50aWFsKHkudGltZXMobmF0dXJhbExvZ2FyaXRobSh4LCBlICsgaykpLCBlKSwgZSArIDUsIDEpO1xuICAgICAgaWYgKCtkaWdpdHNUb1N0cmluZyhyLmQpLnNsaWNlKHByICsgMSwgcHIgKyAxNSkgKyAxID09IDFlMTQpIHtcbiAgICAgICAgciA9IGZpbmFsaXNlKHIsIHByICsgMSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHIucyA9IHM7XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgQ3Rvci5yb3VuZGluZyA9IHJtO1xuICByZXR1cm4gZmluYWxpc2UociwgcHIsIHJtKTtcbn07XG5QLnRvUHJlY2lzaW9uID0gZnVuY3Rpb24oc2QsIHJtKSB7XG4gIHZhciBzdHIsIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKHNkID09PSB2b2lkIDApIHtcbiAgICBzdHIgPSBmaW5pdGVUb1N0cmluZyh4LCB4LmUgPD0gQ3Rvci50b0V4cE5lZyB8fCB4LmUgPj0gQ3Rvci50b0V4cFBvcyk7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2tJbnQzMihzZCwgMSwgTUFYX0RJR0lUUyk7XG4gICAgaWYgKHJtID09PSB2b2lkIDApXG4gICAgICBybSA9IEN0b3Iucm91bmRpbmc7XG4gICAgZWxzZVxuICAgICAgY2hlY2tJbnQzMihybSwgMCwgOCk7XG4gICAgeCA9IGZpbmFsaXNlKG5ldyBDdG9yKHgpLCBzZCwgcm0pO1xuICAgIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHgsIHNkIDw9IHguZSB8fCB4LmUgPD0gQ3Rvci50b0V4cE5lZywgc2QpO1xuICB9XG4gIHJldHVybiB4LmlzTmVnKCkgJiYgIXguaXNaZXJvKCkgPyBcIi1cIiArIHN0ciA6IHN0cjtcbn07XG5QLnRvU2lnbmlmaWNhbnREaWdpdHMgPSBQLnRvU0QgPSBmdW5jdGlvbihzZCwgcm0pIHtcbiAgdmFyIHggPSB0aGlzLCBDdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgaWYgKHNkID09PSB2b2lkIDApIHtcbiAgICBzZCA9IEN0b3IucHJlY2lzaW9uO1xuICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgfSBlbHNlIHtcbiAgICBjaGVja0ludDMyKHNkLCAxLCBNQVhfRElHSVRTKTtcbiAgICBpZiAocm0gPT09IHZvaWQgMClcbiAgICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgICBlbHNlXG4gICAgICBjaGVja0ludDMyKHJtLCAwLCA4KTtcbiAgfVxuICByZXR1cm4gZmluYWxpc2UobmV3IEN0b3IoeCksIHNkLCBybSk7XG59O1xuUC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBzdHIgPSBmaW5pdGVUb1N0cmluZyh4LCB4LmUgPD0gQ3Rvci50b0V4cE5lZyB8fCB4LmUgPj0gQ3Rvci50b0V4cFBvcyk7XG4gIHJldHVybiB4LmlzTmVnKCkgJiYgIXguaXNaZXJvKCkgPyBcIi1cIiArIHN0ciA6IHN0cjtcbn07XG5QLnRydW5jYXRlZCA9IFAudHJ1bmMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZpbmFsaXNlKG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpLCB0aGlzLmUgKyAxLCAxKTtcbn07XG5QLnZhbHVlT2YgPSBQLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IHRoaXMsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBzdHIgPSBmaW5pdGVUb1N0cmluZyh4LCB4LmUgPD0gQ3Rvci50b0V4cE5lZyB8fCB4LmUgPj0gQ3Rvci50b0V4cFBvcyk7XG4gIHJldHVybiB4LmlzTmVnKCkgPyBcIi1cIiArIHN0ciA6IHN0cjtcbn07XG5mdW5jdGlvbiBkaWdpdHNUb1N0cmluZyhkKSB7XG4gIHZhciBpLCBrLCB3cywgaW5kZXhPZkxhc3RXb3JkID0gZC5sZW5ndGggLSAxLCBzdHIgPSBcIlwiLCB3ID0gZFswXTtcbiAgaWYgKGluZGV4T2ZMYXN0V29yZCA+IDApIHtcbiAgICBzdHIgKz0gdztcbiAgICBmb3IgKGkgPSAxOyBpIDwgaW5kZXhPZkxhc3RXb3JkOyBpKyspIHtcbiAgICAgIHdzID0gZFtpXSArIFwiXCI7XG4gICAgICBrID0gTE9HX0JBU0UgLSB3cy5sZW5ndGg7XG4gICAgICBpZiAoaylcbiAgICAgICAgc3RyICs9IGdldFplcm9TdHJpbmcoayk7XG4gICAgICBzdHIgKz0gd3M7XG4gICAgfVxuICAgIHcgPSBkW2ldO1xuICAgIHdzID0gdyArIFwiXCI7XG4gICAgayA9IExPR19CQVNFIC0gd3MubGVuZ3RoO1xuICAgIGlmIChrKVxuICAgICAgc3RyICs9IGdldFplcm9TdHJpbmcoayk7XG4gIH0gZWxzZSBpZiAodyA9PT0gMCkge1xuICAgIHJldHVybiBcIjBcIjtcbiAgfVxuICBmb3IgKDsgdyAlIDEwID09PSAwOyApXG4gICAgdyAvPSAxMDtcbiAgcmV0dXJuIHN0ciArIHc7XG59XG5fX25hbWUoZGlnaXRzVG9TdHJpbmcsIFwiZGlnaXRzVG9TdHJpbmdcIik7XG5mdW5jdGlvbiBjaGVja0ludDMyKGksIG1pbjIsIG1heDIpIHtcbiAgaWYgKGkgIT09IH5+aSB8fCBpIDwgbWluMiB8fCBpID4gbWF4Mikge1xuICAgIHRocm93IEVycm9yKGludmFsaWRBcmd1bWVudCArIGkpO1xuICB9XG59XG5fX25hbWUoY2hlY2tJbnQzMiwgXCJjaGVja0ludDMyXCIpO1xuZnVuY3Rpb24gY2hlY2tSb3VuZGluZ0RpZ2l0cyhkLCBpLCBybSwgcmVwZWF0aW5nKSB7XG4gIHZhciBkaSwgaywgciwgcmQ7XG4gIGZvciAoayA9IGRbMF07IGsgPj0gMTA7IGsgLz0gMTApXG4gICAgLS1pO1xuICBpZiAoLS1pIDwgMCkge1xuICAgIGkgKz0gTE9HX0JBU0U7XG4gICAgZGkgPSAwO1xuICB9IGVsc2Uge1xuICAgIGRpID0gTWF0aC5jZWlsKChpICsgMSkgLyBMT0dfQkFTRSk7XG4gICAgaSAlPSBMT0dfQkFTRTtcbiAgfVxuICBrID0gbWF0aHBvdygxMCwgTE9HX0JBU0UgLSBpKTtcbiAgcmQgPSBkW2RpXSAlIGsgfCAwO1xuICBpZiAocmVwZWF0aW5nID09IG51bGwpIHtcbiAgICBpZiAoaSA8IDMpIHtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIHJkID0gcmQgLyAxMDAgfCAwO1xuICAgICAgZWxzZSBpZiAoaSA9PSAxKVxuICAgICAgICByZCA9IHJkIC8gMTAgfCAwO1xuICAgICAgciA9IHJtIDwgNCAmJiByZCA9PSA5OTk5OSB8fCBybSA+IDMgJiYgcmQgPT0gNDk5OTkgfHwgcmQgPT0gNWU0IHx8IHJkID09IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSAocm0gPCA0ICYmIHJkICsgMSA9PSBrIHx8IHJtID4gMyAmJiByZCArIDEgPT0gayAvIDIpICYmIChkW2RpICsgMV0gLyBrIC8gMTAwIHwgMCkgPT0gbWF0aHBvdygxMCwgaSAtIDIpIC0gMSB8fCAocmQgPT0gayAvIDIgfHwgcmQgPT0gMCkgJiYgKGRbZGkgKyAxXSAvIGsgLyAxMDAgfCAwKSA9PSAwO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaSA8IDQpIHtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIHJkID0gcmQgLyAxZTMgfCAwO1xuICAgICAgZWxzZSBpZiAoaSA9PSAxKVxuICAgICAgICByZCA9IHJkIC8gMTAwIHwgMDtcbiAgICAgIGVsc2UgaWYgKGkgPT0gMilcbiAgICAgICAgcmQgPSByZCAvIDEwIHwgMDtcbiAgICAgIHIgPSAocmVwZWF0aW5nIHx8IHJtIDwgNCkgJiYgcmQgPT0gOTk5OSB8fCAhcmVwZWF0aW5nICYmIHJtID4gMyAmJiByZCA9PSA0OTk5O1xuICAgIH0gZWxzZSB7XG4gICAgICByID0gKChyZXBlYXRpbmcgfHwgcm0gPCA0KSAmJiByZCArIDEgPT0gayB8fCAhcmVwZWF0aW5nICYmIHJtID4gMyAmJiByZCArIDEgPT0gayAvIDIpICYmIChkW2RpICsgMV0gLyBrIC8gMWUzIHwgMCkgPT0gbWF0aHBvdygxMCwgaSAtIDMpIC0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5fX25hbWUoY2hlY2tSb3VuZGluZ0RpZ2l0cywgXCJjaGVja1JvdW5kaW5nRGlnaXRzXCIpO1xuZnVuY3Rpb24gY29udmVydEJhc2Uoc3RyLCBiYXNlSW4sIGJhc2VPdXQpIHtcbiAgdmFyIGosIGFyciA9IFswXSwgYXJyTCwgaSA9IDAsIHN0ckwgPSBzdHIubGVuZ3RoO1xuICBmb3IgKDsgaSA8IHN0ckw7ICkge1xuICAgIGZvciAoYXJyTCA9IGFyci5sZW5ndGg7IGFyckwtLTsgKVxuICAgICAgYXJyW2FyckxdICo9IGJhc2VJbjtcbiAgICBhcnJbMF0gKz0gTlVNRVJBTFMuaW5kZXhPZihzdHIuY2hhckF0KGkrKykpO1xuICAgIGZvciAoaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChhcnJbal0gPiBiYXNlT3V0IC0gMSkge1xuICAgICAgICBpZiAoYXJyW2ogKyAxXSA9PT0gdm9pZCAwKVxuICAgICAgICAgIGFycltqICsgMV0gPSAwO1xuICAgICAgICBhcnJbaiArIDFdICs9IGFycltqXSAvIGJhc2VPdXQgfCAwO1xuICAgICAgICBhcnJbal0gJT0gYmFzZU91dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyci5yZXZlcnNlKCk7XG59XG5fX25hbWUoY29udmVydEJhc2UsIFwiY29udmVydEJhc2VcIik7XG5mdW5jdGlvbiBjb3NpbmUoQ3RvciwgeCkge1xuICB2YXIgaywgbGVuLCB5O1xuICBpZiAoeC5pc1plcm8oKSlcbiAgICByZXR1cm4geDtcbiAgbGVuID0geC5kLmxlbmd0aDtcbiAgaWYgKGxlbiA8IDMyKSB7XG4gICAgayA9IE1hdGguY2VpbChsZW4gLyAzKTtcbiAgICB5ID0gKDEgLyB0aW55UG93KDQsIGspKS50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIGsgPSAxNjtcbiAgICB5ID0gXCIyLjMyODMwNjQzNjUzODY5NjI4OTA2MjVlLTEwXCI7XG4gIH1cbiAgQ3Rvci5wcmVjaXNpb24gKz0gaztcbiAgeCA9IHRheWxvclNlcmllcyhDdG9yLCAxLCB4LnRpbWVzKHkpLCBuZXcgQ3RvcigxKSk7XG4gIGZvciAodmFyIGkgPSBrOyBpLS07ICkge1xuICAgIHZhciBjb3MyeCA9IHgudGltZXMoeCk7XG4gICAgeCA9IGNvczJ4LnRpbWVzKGNvczJ4KS5taW51cyhjb3MyeCkudGltZXMoOCkucGx1cygxKTtcbiAgfVxuICBDdG9yLnByZWNpc2lvbiAtPSBrO1xuICByZXR1cm4geDtcbn1cbl9fbmFtZShjb3NpbmUsIFwiY29zaW5lXCIpO1xudmFyIGRpdmlkZSA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBtdWx0aXBseUludGVnZXIoeCwgaywgYmFzZSkge1xuICAgIHZhciB0ZW1wLCBjYXJyeSA9IDAsIGkgPSB4Lmxlbmd0aDtcbiAgICBmb3IgKHggPSB4LnNsaWNlKCk7IGktLTsgKSB7XG4gICAgICB0ZW1wID0geFtpXSAqIGsgKyBjYXJyeTtcbiAgICAgIHhbaV0gPSB0ZW1wICUgYmFzZSB8IDA7XG4gICAgICBjYXJyeSA9IHRlbXAgLyBiYXNlIHwgMDtcbiAgICB9XG4gICAgaWYgKGNhcnJ5KVxuICAgICAgeC51bnNoaWZ0KGNhcnJ5KTtcbiAgICByZXR1cm4geDtcbiAgfVxuICBfX25hbWUobXVsdGlwbHlJbnRlZ2VyLCBcIm11bHRpcGx5SW50ZWdlclwiKTtcbiAgZnVuY3Rpb24gY29tcGFyZShhLCBiLCBhTCwgYkwpIHtcbiAgICB2YXIgaSwgcjtcbiAgICBpZiAoYUwgIT0gYkwpIHtcbiAgICAgIHIgPSBhTCA+IGJMID8gMSA6IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSByID0gMDsgaSA8IGFMOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gIT0gYltpXSkge1xuICAgICAgICAgIHIgPSBhW2ldID4gYltpXSA/IDEgOiAtMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuICBfX25hbWUoY29tcGFyZSwgXCJjb21wYXJlXCIpO1xuICBmdW5jdGlvbiBzdWJ0cmFjdChhLCBiLCBhTCwgYmFzZSkge1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKDsgYUwtLTsgKSB7XG4gICAgICBhW2FMXSAtPSBpO1xuICAgICAgaSA9IGFbYUxdIDwgYlthTF0gPyAxIDogMDtcbiAgICAgIGFbYUxdID0gaSAqIGJhc2UgKyBhW2FMXSAtIGJbYUxdO1xuICAgIH1cbiAgICBmb3IgKDsgIWFbMF0gJiYgYS5sZW5ndGggPiAxOyApXG4gICAgICBhLnNoaWZ0KCk7XG4gIH1cbiAgX19uYW1lKHN1YnRyYWN0LCBcInN1YnRyYWN0XCIpO1xuICByZXR1cm4gZnVuY3Rpb24oeCwgeSwgcHIsIHJtLCBkcCwgYmFzZSkge1xuICAgIHZhciBjbXAsIGUsIGksIGssIGxvZ0Jhc2UsIG1vcmUsIHByb2QsIHByb2RMLCBxLCBxZCwgcmVtLCByZW1MLCByZW0wLCBzZCwgdCwgeGksIHhMLCB5ZDAsIHlMLCB5eiwgQ3RvciA9IHguY29uc3RydWN0b3IsIHNpZ24yID0geC5zID09IHkucyA/IDEgOiAtMSwgeGQgPSB4LmQsIHlkID0geS5kO1xuICAgIGlmICgheGQgfHwgIXhkWzBdIHx8ICF5ZCB8fCAheWRbMF0pIHtcbiAgICAgIHJldHVybiBuZXcgQ3RvcigheC5zIHx8ICF5LnMgfHwgKHhkID8geWQgJiYgeGRbMF0gPT0geWRbMF0gOiAheWQpID8gTmFOIDogeGQgJiYgeGRbMF0gPT0gMCB8fCAheWQgPyBzaWduMiAqIDAgOiBzaWduMiAvIDApO1xuICAgIH1cbiAgICBpZiAoYmFzZSkge1xuICAgICAgbG9nQmFzZSA9IDE7XG4gICAgICBlID0geC5lIC0geS5lO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gQkFTRTtcbiAgICAgIGxvZ0Jhc2UgPSBMT0dfQkFTRTtcbiAgICAgIGUgPSBtYXRoZmxvb3IoeC5lIC8gbG9nQmFzZSkgLSBtYXRoZmxvb3IoeS5lIC8gbG9nQmFzZSk7XG4gICAgfVxuICAgIHlMID0geWQubGVuZ3RoO1xuICAgIHhMID0geGQubGVuZ3RoO1xuICAgIHEgPSBuZXcgQ3RvcihzaWduMik7XG4gICAgcWQgPSBxLmQgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyB5ZFtpXSA9PSAoeGRbaV0gfHwgMCk7IGkrKylcbiAgICAgIDtcbiAgICBpZiAoeWRbaV0gPiAoeGRbaV0gfHwgMCkpXG4gICAgICBlLS07XG4gICAgaWYgKHByID09IG51bGwpIHtcbiAgICAgIHNkID0gcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgICB9IGVsc2UgaWYgKGRwKSB7XG4gICAgICBzZCA9IHByICsgKHguZSAtIHkuZSkgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZCA9IHByO1xuICAgIH1cbiAgICBpZiAoc2QgPCAwKSB7XG4gICAgICBxZC5wdXNoKDEpO1xuICAgICAgbW9yZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNkID0gc2QgLyBsb2dCYXNlICsgMiB8IDA7XG4gICAgICBpID0gMDtcbiAgICAgIGlmICh5TCA9PSAxKSB7XG4gICAgICAgIGsgPSAwO1xuICAgICAgICB5ZCA9IHlkWzBdO1xuICAgICAgICBzZCsrO1xuICAgICAgICBmb3IgKDsgKGkgPCB4TCB8fCBrKSAmJiBzZC0tOyBpKyspIHtcbiAgICAgICAgICB0ID0gayAqIGJhc2UgKyAoeGRbaV0gfHwgMCk7XG4gICAgICAgICAgcWRbaV0gPSB0IC8geWQgfCAwO1xuICAgICAgICAgIGsgPSB0ICUgeWQgfCAwO1xuICAgICAgICB9XG4gICAgICAgIG1vcmUgPSBrIHx8IGkgPCB4TDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGsgPSBiYXNlIC8gKHlkWzBdICsgMSkgfCAwO1xuICAgICAgICBpZiAoayA+IDEpIHtcbiAgICAgICAgICB5ZCA9IG11bHRpcGx5SW50ZWdlcih5ZCwgaywgYmFzZSk7XG4gICAgICAgICAgeGQgPSBtdWx0aXBseUludGVnZXIoeGQsIGssIGJhc2UpO1xuICAgICAgICAgIHlMID0geWQubGVuZ3RoO1xuICAgICAgICAgIHhMID0geGQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHhpID0geUw7XG4gICAgICAgIHJlbSA9IHhkLnNsaWNlKDAsIHlMKTtcbiAgICAgICAgcmVtTCA9IHJlbS5sZW5ndGg7XG4gICAgICAgIGZvciAoOyByZW1MIDwgeUw7IClcbiAgICAgICAgICByZW1bcmVtTCsrXSA9IDA7XG4gICAgICAgIHl6ID0geWQuc2xpY2UoKTtcbiAgICAgICAgeXoudW5zaGlmdCgwKTtcbiAgICAgICAgeWQwID0geWRbMF07XG4gICAgICAgIGlmICh5ZFsxXSA+PSBiYXNlIC8gMilcbiAgICAgICAgICArK3lkMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGsgPSAwO1xuICAgICAgICAgIGNtcCA9IGNvbXBhcmUoeWQsIHJlbSwgeUwsIHJlbUwpO1xuICAgICAgICAgIGlmIChjbXAgPCAwKSB7XG4gICAgICAgICAgICByZW0wID0gcmVtWzBdO1xuICAgICAgICAgICAgaWYgKHlMICE9IHJlbUwpXG4gICAgICAgICAgICAgIHJlbTAgPSByZW0wICogYmFzZSArIChyZW1bMV0gfHwgMCk7XG4gICAgICAgICAgICBrID0gcmVtMCAvIHlkMCB8IDA7XG4gICAgICAgICAgICBpZiAoayA+IDEpIHtcbiAgICAgICAgICAgICAgaWYgKGsgPj0gYmFzZSlcbiAgICAgICAgICAgICAgICBrID0gYmFzZSAtIDE7XG4gICAgICAgICAgICAgIHByb2QgPSBtdWx0aXBseUludGVnZXIoeWQsIGssIGJhc2UpO1xuICAgICAgICAgICAgICBwcm9kTCA9IHByb2QubGVuZ3RoO1xuICAgICAgICAgICAgICByZW1MID0gcmVtLmxlbmd0aDtcbiAgICAgICAgICAgICAgY21wID0gY29tcGFyZShwcm9kLCByZW0sIHByb2RMLCByZW1MKTtcbiAgICAgICAgICAgICAgaWYgKGNtcCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgIHN1YnRyYWN0KHByb2QsIHlMIDwgcHJvZEwgPyB5eiA6IHlkLCBwcm9kTCwgYmFzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChrID09IDApXG4gICAgICAgICAgICAgICAgY21wID0gayA9IDE7XG4gICAgICAgICAgICAgIHByb2QgPSB5ZC5zbGljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZEwgPSBwcm9kLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChwcm9kTCA8IHJlbUwpXG4gICAgICAgICAgICAgIHByb2QudW5zaGlmdCgwKTtcbiAgICAgICAgICAgIHN1YnRyYWN0KHJlbSwgcHJvZCwgcmVtTCwgYmFzZSk7XG4gICAgICAgICAgICBpZiAoY21wID09IC0xKSB7XG4gICAgICAgICAgICAgIHJlbUwgPSByZW0ubGVuZ3RoO1xuICAgICAgICAgICAgICBjbXAgPSBjb21wYXJlKHlkLCByZW0sIHlMLCByZW1MKTtcbiAgICAgICAgICAgICAgaWYgKGNtcCA8IDEpIHtcbiAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgc3VidHJhY3QocmVtLCB5TCA8IHJlbUwgPyB5eiA6IHlkLCByZW1MLCBiYXNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtTCA9IHJlbS5sZW5ndGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChjbXAgPT09IDApIHtcbiAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgIHJlbSA9IFswXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcWRbaSsrXSA9IGs7XG4gICAgICAgICAgaWYgKGNtcCAmJiByZW1bMF0pIHtcbiAgICAgICAgICAgIHJlbVtyZW1MKytdID0geGRbeGldIHx8IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbSA9IFt4ZFt4aV1dO1xuICAgICAgICAgICAgcmVtTCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgoeGkrKyA8IHhMIHx8IHJlbVswXSAhPT0gdm9pZCAwKSAmJiBzZC0tKTtcbiAgICAgICAgbW9yZSA9IHJlbVswXSAhPT0gdm9pZCAwO1xuICAgICAgfVxuICAgICAgaWYgKCFxZFswXSlcbiAgICAgICAgcWQuc2hpZnQoKTtcbiAgICB9XG4gICAgaWYgKGxvZ0Jhc2UgPT0gMSkge1xuICAgICAgcS5lID0gZTtcbiAgICAgIGluZXhhY3QgPSBtb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAxLCBrID0gcWRbMF07IGsgPj0gMTA7IGsgLz0gMTApXG4gICAgICAgIGkrKztcbiAgICAgIHEuZSA9IGkgKyBlICogbG9nQmFzZSAtIDE7XG4gICAgICBmaW5hbGlzZShxLCBkcCA/IHByICsgcS5lICsgMSA6IHByLCBybSwgbW9yZSk7XG4gICAgfVxuICAgIHJldHVybiBxO1xuICB9O1xufSgpO1xuZnVuY3Rpb24gZmluYWxpc2UoeCwgc2QsIHJtLCBpc1RydW5jYXRlZCkge1xuICB2YXIgZGlnaXRzLCBpLCBqLCBrLCByZCwgcm91bmRVcCwgdywgeGQsIHhkaSwgQ3RvciA9IHguY29uc3RydWN0b3I7XG4gIG91dDpcbiAgICBpZiAoc2QgIT0gbnVsbCkge1xuICAgICAgeGQgPSB4LmQ7XG4gICAgICBpZiAoIXhkKVxuICAgICAgICByZXR1cm4geDtcbiAgICAgIGZvciAoZGlnaXRzID0gMSwgayA9IHhkWzBdOyBrID49IDEwOyBrIC89IDEwKVxuICAgICAgICBkaWdpdHMrKztcbiAgICAgIGkgPSBzZCAtIGRpZ2l0cztcbiAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICBpICs9IExPR19CQVNFO1xuICAgICAgICBqID0gc2Q7XG4gICAgICAgIHcgPSB4ZFt4ZGkgPSAwXTtcbiAgICAgICAgcmQgPSB3IC8gbWF0aHBvdygxMCwgZGlnaXRzIC0gaiAtIDEpICUgMTAgfCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGRpID0gTWF0aC5jZWlsKChpICsgMSkgLyBMT0dfQkFTRSk7XG4gICAgICAgIGsgPSB4ZC5sZW5ndGg7XG4gICAgICAgIGlmICh4ZGkgPj0gaykge1xuICAgICAgICAgIGlmIChpc1RydW5jYXRlZCkge1xuICAgICAgICAgICAgZm9yICg7IGsrKyA8PSB4ZGk7IClcbiAgICAgICAgICAgICAgeGQucHVzaCgwKTtcbiAgICAgICAgICAgIHcgPSByZCA9IDA7XG4gICAgICAgICAgICBkaWdpdHMgPSAxO1xuICAgICAgICAgICAgaSAlPSBMT0dfQkFTRTtcbiAgICAgICAgICAgIGogPSBpIC0gTE9HX0JBU0UgKyAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhayBvdXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHcgPSBrID0geGRbeGRpXTtcbiAgICAgICAgICBmb3IgKGRpZ2l0cyA9IDE7IGsgPj0gMTA7IGsgLz0gMTApXG4gICAgICAgICAgICBkaWdpdHMrKztcbiAgICAgICAgICBpICU9IExPR19CQVNFO1xuICAgICAgICAgIGogPSBpIC0gTE9HX0JBU0UgKyBkaWdpdHM7XG4gICAgICAgICAgcmQgPSBqIDwgMCA/IDAgOiB3IC8gbWF0aHBvdygxMCwgZGlnaXRzIC0gaiAtIDEpICUgMTAgfCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpc1RydW5jYXRlZCA9IGlzVHJ1bmNhdGVkIHx8IHNkIDwgMCB8fCB4ZFt4ZGkgKyAxXSAhPT0gdm9pZCAwIHx8IChqIDwgMCA/IHcgOiB3ICUgbWF0aHBvdygxMCwgZGlnaXRzIC0gaiAtIDEpKTtcbiAgICAgIHJvdW5kVXAgPSBybSA8IDQgPyAocmQgfHwgaXNUcnVuY2F0ZWQpICYmIChybSA9PSAwIHx8IHJtID09ICh4LnMgPCAwID8gMyA6IDIpKSA6IHJkID4gNSB8fCByZCA9PSA1ICYmIChybSA9PSA0IHx8IGlzVHJ1bmNhdGVkIHx8IHJtID09IDYgJiYgKGkgPiAwID8gaiA+IDAgPyB3IC8gbWF0aHBvdygxMCwgZGlnaXRzIC0gaikgOiAwIDogeGRbeGRpIC0gMV0pICUgMTAgJiAxIHx8IHJtID09ICh4LnMgPCAwID8gOCA6IDcpKTtcbiAgICAgIGlmIChzZCA8IDEgfHwgIXhkWzBdKSB7XG4gICAgICAgIHhkLmxlbmd0aCA9IDA7XG4gICAgICAgIGlmIChyb3VuZFVwKSB7XG4gICAgICAgICAgc2QgLT0geC5lICsgMTtcbiAgICAgICAgICB4ZFswXSA9IG1hdGhwb3coMTAsIChMT0dfQkFTRSAtIHNkICUgTE9HX0JBU0UpICUgTE9HX0JBU0UpO1xuICAgICAgICAgIHguZSA9IC1zZCB8fCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHhkWzBdID0geC5lID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geDtcbiAgICAgIH1cbiAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgeGQubGVuZ3RoID0geGRpO1xuICAgICAgICBrID0gMTtcbiAgICAgICAgeGRpLS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZC5sZW5ndGggPSB4ZGkgKyAxO1xuICAgICAgICBrID0gbWF0aHBvdygxMCwgTE9HX0JBU0UgLSBpKTtcbiAgICAgICAgeGRbeGRpXSA9IGogPiAwID8gKHcgLyBtYXRocG93KDEwLCBkaWdpdHMgLSBqKSAlIG1hdGhwb3coMTAsIGopIHwgMCkgKiBrIDogMDtcbiAgICAgIH1cbiAgICAgIGlmIChyb3VuZFVwKSB7XG4gICAgICAgIGZvciAoOyA7ICkge1xuICAgICAgICAgIGlmICh4ZGkgPT0gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gMSwgaiA9IHhkWzBdOyBqID49IDEwOyBqIC89IDEwKVxuICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqID0geGRbMF0gKz0gaztcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGogPj0gMTA7IGogLz0gMTApXG4gICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgIGlmIChpICE9IGspIHtcbiAgICAgICAgICAgICAgeC5lKys7XG4gICAgICAgICAgICAgIGlmICh4ZFswXSA9PSBCQVNFKVxuICAgICAgICAgICAgICAgIHhkWzBdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ZFt4ZGldICs9IGs7XG4gICAgICAgICAgICBpZiAoeGRbeGRpXSAhPSBCQVNFKVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIHhkW3hkaS0tXSA9IDA7XG4gICAgICAgICAgICBrID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IHhkLmxlbmd0aDsgeGRbLS1pXSA9PT0gMDsgKVxuICAgICAgICB4ZC5wb3AoKTtcbiAgICB9XG4gIGlmIChleHRlcm5hbCkge1xuICAgIGlmICh4LmUgPiBDdG9yLm1heEUpIHtcbiAgICAgIHguZCA9IG51bGw7XG4gICAgICB4LmUgPSBOYU47XG4gICAgfSBlbHNlIGlmICh4LmUgPCBDdG9yLm1pbkUpIHtcbiAgICAgIHguZSA9IDA7XG4gICAgICB4LmQgPSBbMF07XG4gICAgfVxuICB9XG4gIHJldHVybiB4O1xufVxuX19uYW1lKGZpbmFsaXNlLCBcImZpbmFsaXNlXCIpO1xuZnVuY3Rpb24gZmluaXRlVG9TdHJpbmcoeCwgaXNFeHAsIHNkKSB7XG4gIGlmICgheC5pc0Zpbml0ZSgpKVxuICAgIHJldHVybiBub25GaW5pdGVUb1N0cmluZyh4KTtcbiAgdmFyIGssIGUgPSB4LmUsIHN0ciA9IGRpZ2l0c1RvU3RyaW5nKHguZCksIGxlbiA9IHN0ci5sZW5ndGg7XG4gIGlmIChpc0V4cCkge1xuICAgIGlmIChzZCAmJiAoayA9IHNkIC0gbGVuKSA+IDApIHtcbiAgICAgIHN0ciA9IHN0ci5jaGFyQXQoMCkgKyBcIi5cIiArIHN0ci5zbGljZSgxKSArIGdldFplcm9TdHJpbmcoayk7XG4gICAgfSBlbHNlIGlmIChsZW4gPiAxKSB7XG4gICAgICBzdHIgPSBzdHIuY2hhckF0KDApICsgXCIuXCIgKyBzdHIuc2xpY2UoMSk7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArICh4LmUgPCAwID8gXCJlXCIgOiBcImUrXCIpICsgeC5lO1xuICB9IGVsc2UgaWYgKGUgPCAwKSB7XG4gICAgc3RyID0gXCIwLlwiICsgZ2V0WmVyb1N0cmluZygtZSAtIDEpICsgc3RyO1xuICAgIGlmIChzZCAmJiAoayA9IHNkIC0gbGVuKSA+IDApXG4gICAgICBzdHIgKz0gZ2V0WmVyb1N0cmluZyhrKTtcbiAgfSBlbHNlIGlmIChlID49IGxlbikge1xuICAgIHN0ciArPSBnZXRaZXJvU3RyaW5nKGUgKyAxIC0gbGVuKTtcbiAgICBpZiAoc2QgJiYgKGsgPSBzZCAtIGUgLSAxKSA+IDApXG4gICAgICBzdHIgPSBzdHIgKyBcIi5cIiArIGdldFplcm9TdHJpbmcoayk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKChrID0gZSArIDEpIDwgbGVuKVxuICAgICAgc3RyID0gc3RyLnNsaWNlKDAsIGspICsgXCIuXCIgKyBzdHIuc2xpY2Uoayk7XG4gICAgaWYgKHNkICYmIChrID0gc2QgLSBsZW4pID4gMCkge1xuICAgICAgaWYgKGUgKyAxID09PSBsZW4pXG4gICAgICAgIHN0ciArPSBcIi5cIjtcbiAgICAgIHN0ciArPSBnZXRaZXJvU3RyaW5nKGspO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufVxuX19uYW1lKGZpbml0ZVRvU3RyaW5nLCBcImZpbml0ZVRvU3RyaW5nXCIpO1xuZnVuY3Rpb24gZ2V0QmFzZTEwRXhwb25lbnQoZGlnaXRzLCBlKSB7XG4gIHZhciB3ID0gZGlnaXRzWzBdO1xuICBmb3IgKGUgKj0gTE9HX0JBU0U7IHcgPj0gMTA7IHcgLz0gMTApXG4gICAgZSsrO1xuICByZXR1cm4gZTtcbn1cbl9fbmFtZShnZXRCYXNlMTBFeHBvbmVudCwgXCJnZXRCYXNlMTBFeHBvbmVudFwiKTtcbmZ1bmN0aW9uIGdldExuMTAoQ3Rvciwgc2QsIHByKSB7XG4gIGlmIChzZCA+IExOMTBfUFJFQ0lTSU9OKSB7XG4gICAgZXh0ZXJuYWwgPSB0cnVlO1xuICAgIGlmIChwcilcbiAgICAgIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gICAgdGhyb3cgRXJyb3IocHJlY2lzaW9uTGltaXRFeGNlZWRlZCk7XG4gIH1cbiAgcmV0dXJuIGZpbmFsaXNlKG5ldyBDdG9yKExOMTApLCBzZCwgMSwgdHJ1ZSk7XG59XG5fX25hbWUoZ2V0TG4xMCwgXCJnZXRMbjEwXCIpO1xuZnVuY3Rpb24gZ2V0UGkoQ3Rvciwgc2QsIHJtKSB7XG4gIGlmIChzZCA+IFBJX1BSRUNJU0lPTilcbiAgICB0aHJvdyBFcnJvcihwcmVjaXNpb25MaW1pdEV4Y2VlZGVkKTtcbiAgcmV0dXJuIGZpbmFsaXNlKG5ldyBDdG9yKFBJKSwgc2QsIHJtLCB0cnVlKTtcbn1cbl9fbmFtZShnZXRQaSwgXCJnZXRQaVwiKTtcbmZ1bmN0aW9uIGdldFByZWNpc2lvbihkaWdpdHMpIHtcbiAgdmFyIHcgPSBkaWdpdHMubGVuZ3RoIC0gMSwgbGVuID0gdyAqIExPR19CQVNFICsgMTtcbiAgdyA9IGRpZ2l0c1t3XTtcbiAgaWYgKHcpIHtcbiAgICBmb3IgKDsgdyAlIDEwID09IDA7IHcgLz0gMTApXG4gICAgICBsZW4tLTtcbiAgICBmb3IgKHcgPSBkaWdpdHNbMF07IHcgPj0gMTA7IHcgLz0gMTApXG4gICAgICBsZW4rKztcbiAgfVxuICByZXR1cm4gbGVuO1xufVxuX19uYW1lKGdldFByZWNpc2lvbiwgXCJnZXRQcmVjaXNpb25cIik7XG5mdW5jdGlvbiBnZXRaZXJvU3RyaW5nKGspIHtcbiAgdmFyIHpzID0gXCJcIjtcbiAgZm9yICg7IGstLTsgKVxuICAgIHpzICs9IFwiMFwiO1xuICByZXR1cm4genM7XG59XG5fX25hbWUoZ2V0WmVyb1N0cmluZywgXCJnZXRaZXJvU3RyaW5nXCIpO1xuZnVuY3Rpb24gaW50UG93KEN0b3IsIHgsIG4sIHByKSB7XG4gIHZhciBpc1RydW5jYXRlZCwgciA9IG5ldyBDdG9yKDEpLCBrID0gTWF0aC5jZWlsKHByIC8gTE9HX0JBU0UgKyA0KTtcbiAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgZm9yICg7IDsgKSB7XG4gICAgaWYgKG4gJSAyKSB7XG4gICAgICByID0gci50aW1lcyh4KTtcbiAgICAgIGlmICh0cnVuY2F0ZShyLmQsIGspKVxuICAgICAgICBpc1RydW5jYXRlZCA9IHRydWU7XG4gICAgfVxuICAgIG4gPSBtYXRoZmxvb3IobiAvIDIpO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICBuID0gci5kLmxlbmd0aCAtIDE7XG4gICAgICBpZiAoaXNUcnVuY2F0ZWQgJiYgci5kW25dID09PSAwKVxuICAgICAgICArK3IuZFtuXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB4ID0geC50aW1lcyh4KTtcbiAgICB0cnVuY2F0ZSh4LmQsIGspO1xuICB9XG4gIGV4dGVybmFsID0gdHJ1ZTtcbiAgcmV0dXJuIHI7XG59XG5fX25hbWUoaW50UG93LCBcImludFBvd1wiKTtcbmZ1bmN0aW9uIGlzT2RkKG4pIHtcbiAgcmV0dXJuIG4uZFtuLmQubGVuZ3RoIC0gMV0gJiAxO1xufVxuX19uYW1lKGlzT2RkLCBcImlzT2RkXCIpO1xuZnVuY3Rpb24gbWF4T3JNaW4oQ3RvciwgYXJncywgbHRndCkge1xuICB2YXIgeSwgeCA9IG5ldyBDdG9yKGFyZ3NbMF0pLCBpID0gMDtcbiAgZm9yICg7ICsraSA8IGFyZ3MubGVuZ3RoOyApIHtcbiAgICB5ID0gbmV3IEN0b3IoYXJnc1tpXSk7XG4gICAgaWYgKCF5LnMpIHtcbiAgICAgIHggPSB5O1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIGlmICh4W2x0Z3RdKHkpKSB7XG4gICAgICB4ID0geTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5fX25hbWUobWF4T3JNaW4sIFwibWF4T3JNaW5cIik7XG5mdW5jdGlvbiBuYXR1cmFsRXhwb25lbnRpYWwoeCwgc2QpIHtcbiAgdmFyIGRlbm9taW5hdG9yLCBndWFyZCwgaiwgcG93Miwgc3VtMiwgdCwgd3ByLCByZXAgPSAwLCBpID0gMCwgayA9IDAsIEN0b3IgPSB4LmNvbnN0cnVjdG9yLCBybSA9IEN0b3Iucm91bmRpbmcsIHByID0gQ3Rvci5wcmVjaXNpb247XG4gIGlmICgheC5kIHx8ICF4LmRbMF0gfHwgeC5lID4gMTcpIHtcbiAgICByZXR1cm4gbmV3IEN0b3IoeC5kID8gIXguZFswXSA/IDEgOiB4LnMgPCAwID8gMCA6IDEgLyAwIDogeC5zID8geC5zIDwgMCA/IDAgOiB4IDogMCAvIDApO1xuICB9XG4gIGlmIChzZCA9PSBudWxsKSB7XG4gICAgZXh0ZXJuYWwgPSBmYWxzZTtcbiAgICB3cHIgPSBwcjtcbiAgfSBlbHNlIHtcbiAgICB3cHIgPSBzZDtcbiAgfVxuICB0ID0gbmV3IEN0b3IoMC4wMzEyNSk7XG4gIHdoaWxlICh4LmUgPiAtMikge1xuICAgIHggPSB4LnRpbWVzKHQpO1xuICAgIGsgKz0gNTtcbiAgfVxuICBndWFyZCA9IE1hdGgubG9nKG1hdGhwb3coMiwgaykpIC8gTWF0aC5MTjEwICogMiArIDUgfCAwO1xuICB3cHIgKz0gZ3VhcmQ7XG4gIGRlbm9taW5hdG9yID0gcG93MiA9IHN1bTIgPSBuZXcgQ3RvcigxKTtcbiAgQ3Rvci5wcmVjaXNpb24gPSB3cHI7XG4gIGZvciAoOyA7ICkge1xuICAgIHBvdzIgPSBmaW5hbGlzZShwb3cyLnRpbWVzKHgpLCB3cHIsIDEpO1xuICAgIGRlbm9taW5hdG9yID0gZGVub21pbmF0b3IudGltZXMoKytpKTtcbiAgICB0ID0gc3VtMi5wbHVzKGRpdmlkZShwb3cyLCBkZW5vbWluYXRvciwgd3ByLCAxKSk7XG4gICAgaWYgKGRpZ2l0c1RvU3RyaW5nKHQuZCkuc2xpY2UoMCwgd3ByKSA9PT0gZGlnaXRzVG9TdHJpbmcoc3VtMi5kKS5zbGljZSgwLCB3cHIpKSB7XG4gICAgICBqID0gaztcbiAgICAgIHdoaWxlIChqLS0pXG4gICAgICAgIHN1bTIgPSBmaW5hbGlzZShzdW0yLnRpbWVzKHN1bTIpLCB3cHIsIDEpO1xuICAgICAgaWYgKHNkID09IG51bGwpIHtcbiAgICAgICAgaWYgKHJlcCA8IDMgJiYgY2hlY2tSb3VuZGluZ0RpZ2l0cyhzdW0yLmQsIHdwciAtIGd1YXJkLCBybSwgcmVwKSkge1xuICAgICAgICAgIEN0b3IucHJlY2lzaW9uID0gd3ByICs9IDEwO1xuICAgICAgICAgIGRlbm9taW5hdG9yID0gcG93MiA9IHQgPSBuZXcgQ3RvcigxKTtcbiAgICAgICAgICBpID0gMDtcbiAgICAgICAgICByZXArKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmluYWxpc2Uoc3VtMiwgQ3Rvci5wcmVjaXNpb24gPSBwciwgcm0sIGV4dGVybmFsID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gICAgICAgIHJldHVybiBzdW0yO1xuICAgICAgfVxuICAgIH1cbiAgICBzdW0yID0gdDtcbiAgfVxufVxuX19uYW1lKG5hdHVyYWxFeHBvbmVudGlhbCwgXCJuYXR1cmFsRXhwb25lbnRpYWxcIik7XG5mdW5jdGlvbiBuYXR1cmFsTG9nYXJpdGhtKHksIHNkKSB7XG4gIHZhciBjLCBjMCwgZGVub21pbmF0b3IsIGUsIG51bWVyYXRvciwgcmVwLCBzdW0yLCB0LCB3cHIsIHgxLCB4MiwgbiA9IDEsIGd1YXJkID0gMTAsIHggPSB5LCB4ZCA9IHguZCwgQ3RvciA9IHguY29uc3RydWN0b3IsIHJtID0gQ3Rvci5yb3VuZGluZywgcHIgPSBDdG9yLnByZWNpc2lvbjtcbiAgaWYgKHgucyA8IDAgfHwgIXhkIHx8ICF4ZFswXSB8fCAheC5lICYmIHhkWzBdID09IDEgJiYgeGQubGVuZ3RoID09IDEpIHtcbiAgICByZXR1cm4gbmV3IEN0b3IoeGQgJiYgIXhkWzBdID8gLTEgLyAwIDogeC5zICE9IDEgPyBOYU4gOiB4ZCA/IDAgOiB4KTtcbiAgfVxuICBpZiAoc2QgPT0gbnVsbCkge1xuICAgIGV4dGVybmFsID0gZmFsc2U7XG4gICAgd3ByID0gcHI7XG4gIH0gZWxzZSB7XG4gICAgd3ByID0gc2Q7XG4gIH1cbiAgQ3Rvci5wcmVjaXNpb24gPSB3cHIgKz0gZ3VhcmQ7XG4gIGMgPSBkaWdpdHNUb1N0cmluZyh4ZCk7XG4gIGMwID0gYy5jaGFyQXQoMCk7XG4gIGlmIChNYXRoLmFicyhlID0geC5lKSA8IDE1ZTE0KSB7XG4gICAgd2hpbGUgKGMwIDwgNyAmJiBjMCAhPSAxIHx8IGMwID09IDEgJiYgYy5jaGFyQXQoMSkgPiAzKSB7XG4gICAgICB4ID0geC50aW1lcyh5KTtcbiAgICAgIGMgPSBkaWdpdHNUb1N0cmluZyh4LmQpO1xuICAgICAgYzAgPSBjLmNoYXJBdCgwKTtcbiAgICAgIG4rKztcbiAgICB9XG4gICAgZSA9IHguZTtcbiAgICBpZiAoYzAgPiAxKSB7XG4gICAgICB4ID0gbmV3IEN0b3IoXCIwLlwiICsgYyk7XG4gICAgICBlKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSBuZXcgQ3RvcihjMCArIFwiLlwiICsgYy5zbGljZSgxKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHQgPSBnZXRMbjEwKEN0b3IsIHdwciArIDIsIHByKS50aW1lcyhlICsgXCJcIik7XG4gICAgeCA9IG5hdHVyYWxMb2dhcml0aG0obmV3IEN0b3IoYzAgKyBcIi5cIiArIGMuc2xpY2UoMSkpLCB3cHIgLSBndWFyZCkucGx1cyh0KTtcbiAgICBDdG9yLnByZWNpc2lvbiA9IHByO1xuICAgIHJldHVybiBzZCA9PSBudWxsID8gZmluYWxpc2UoeCwgcHIsIHJtLCBleHRlcm5hbCA9IHRydWUpIDogeDtcbiAgfVxuICB4MSA9IHg7XG4gIHN1bTIgPSBudW1lcmF0b3IgPSB4ID0gZGl2aWRlKHgubWludXMoMSksIHgucGx1cygxKSwgd3ByLCAxKTtcbiAgeDIgPSBmaW5hbGlzZSh4LnRpbWVzKHgpLCB3cHIsIDEpO1xuICBkZW5vbWluYXRvciA9IDM7XG4gIGZvciAoOyA7ICkge1xuICAgIG51bWVyYXRvciA9IGZpbmFsaXNlKG51bWVyYXRvci50aW1lcyh4MiksIHdwciwgMSk7XG4gICAgdCA9IHN1bTIucGx1cyhkaXZpZGUobnVtZXJhdG9yLCBuZXcgQ3RvcihkZW5vbWluYXRvciksIHdwciwgMSkpO1xuICAgIGlmIChkaWdpdHNUb1N0cmluZyh0LmQpLnNsaWNlKDAsIHdwcikgPT09IGRpZ2l0c1RvU3RyaW5nKHN1bTIuZCkuc2xpY2UoMCwgd3ByKSkge1xuICAgICAgc3VtMiA9IHN1bTIudGltZXMoMik7XG4gICAgICBpZiAoZSAhPT0gMClcbiAgICAgICAgc3VtMiA9IHN1bTIucGx1cyhnZXRMbjEwKEN0b3IsIHdwciArIDIsIHByKS50aW1lcyhlICsgXCJcIikpO1xuICAgICAgc3VtMiA9IGRpdmlkZShzdW0yLCBuZXcgQ3RvcihuKSwgd3ByLCAxKTtcbiAgICAgIGlmIChzZCA9PSBudWxsKSB7XG4gICAgICAgIGlmIChjaGVja1JvdW5kaW5nRGlnaXRzKHN1bTIuZCwgd3ByIC0gZ3VhcmQsIHJtLCByZXApKSB7XG4gICAgICAgICAgQ3Rvci5wcmVjaXNpb24gPSB3cHIgKz0gZ3VhcmQ7XG4gICAgICAgICAgdCA9IG51bWVyYXRvciA9IHggPSBkaXZpZGUoeDEubWludXMoMSksIHgxLnBsdXMoMSksIHdwciwgMSk7XG4gICAgICAgICAgeDIgPSBmaW5hbGlzZSh4LnRpbWVzKHgpLCB3cHIsIDEpO1xuICAgICAgICAgIGRlbm9taW5hdG9yID0gcmVwID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmluYWxpc2Uoc3VtMiwgQ3Rvci5wcmVjaXNpb24gPSBwciwgcm0sIGV4dGVybmFsID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEN0b3IucHJlY2lzaW9uID0gcHI7XG4gICAgICAgIHJldHVybiBzdW0yO1xuICAgICAgfVxuICAgIH1cbiAgICBzdW0yID0gdDtcbiAgICBkZW5vbWluYXRvciArPSAyO1xuICB9XG59XG5fX25hbWUobmF0dXJhbExvZ2FyaXRobSwgXCJuYXR1cmFsTG9nYXJpdGhtXCIpO1xuZnVuY3Rpb24gbm9uRmluaXRlVG9TdHJpbmcoeCkge1xuICByZXR1cm4gU3RyaW5nKHgucyAqIHgucyAvIDApO1xufVxuX19uYW1lKG5vbkZpbml0ZVRvU3RyaW5nLCBcIm5vbkZpbml0ZVRvU3RyaW5nXCIpO1xuZnVuY3Rpb24gcGFyc2VEZWNpbWFsKHgsIHN0cikge1xuICB2YXIgZSwgaSwgbGVuO1xuICBpZiAoKGUgPSBzdHIuaW5kZXhPZihcIi5cIikpID4gLTEpXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoXCIuXCIsIFwiXCIpO1xuICBpZiAoKGkgPSBzdHIuc2VhcmNoKC9lL2kpKSA+IDApIHtcbiAgICBpZiAoZSA8IDApXG4gICAgICBlID0gaTtcbiAgICBlICs9ICtzdHIuc2xpY2UoaSArIDEpO1xuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgaSk7XG4gIH0gZWxzZSBpZiAoZSA8IDApIHtcbiAgICBlID0gc3RyLmxlbmd0aDtcbiAgfVxuICBmb3IgKGkgPSAwOyBzdHIuY2hhckNvZGVBdChpKSA9PT0gNDg7IGkrKylcbiAgICA7XG4gIGZvciAobGVuID0gc3RyLmxlbmd0aDsgc3RyLmNoYXJDb2RlQXQobGVuIC0gMSkgPT09IDQ4OyAtLWxlbilcbiAgICA7XG4gIHN0ciA9IHN0ci5zbGljZShpLCBsZW4pO1xuICBpZiAoc3RyKSB7XG4gICAgbGVuIC09IGk7XG4gICAgeC5lID0gZSA9IGUgLSBpIC0gMTtcbiAgICB4LmQgPSBbXTtcbiAgICBpID0gKGUgKyAxKSAlIExPR19CQVNFO1xuICAgIGlmIChlIDwgMClcbiAgICAgIGkgKz0gTE9HX0JBU0U7XG4gICAgaWYgKGkgPCBsZW4pIHtcbiAgICAgIGlmIChpKVxuICAgICAgICB4LmQucHVzaCgrc3RyLnNsaWNlKDAsIGkpKTtcbiAgICAgIGZvciAobGVuIC09IExPR19CQVNFOyBpIDwgbGVuOyApXG4gICAgICAgIHguZC5wdXNoKCtzdHIuc2xpY2UoaSwgaSArPSBMT0dfQkFTRSkpO1xuICAgICAgc3RyID0gc3RyLnNsaWNlKGkpO1xuICAgICAgaSA9IExPR19CQVNFIC0gc3RyLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgaSAtPSBsZW47XG4gICAgfVxuICAgIGZvciAoOyBpLS07IClcbiAgICAgIHN0ciArPSBcIjBcIjtcbiAgICB4LmQucHVzaCgrc3RyKTtcbiAgICBpZiAoZXh0ZXJuYWwpIHtcbiAgICAgIGlmICh4LmUgPiB4LmNvbnN0cnVjdG9yLm1heEUpIHtcbiAgICAgICAgeC5kID0gbnVsbDtcbiAgICAgICAgeC5lID0gTmFOO1xuICAgICAgfSBlbHNlIGlmICh4LmUgPCB4LmNvbnN0cnVjdG9yLm1pbkUpIHtcbiAgICAgICAgeC5lID0gMDtcbiAgICAgICAgeC5kID0gWzBdO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB4LmUgPSAwO1xuICAgIHguZCA9IFswXTtcbiAgfVxuICByZXR1cm4geDtcbn1cbl9fbmFtZShwYXJzZURlY2ltYWwsIFwicGFyc2VEZWNpbWFsXCIpO1xuZnVuY3Rpb24gcGFyc2VPdGhlcih4LCBzdHIpIHtcbiAgdmFyIGJhc2UsIEN0b3IsIGRpdmlzb3IsIGksIGlzRmxvYXQsIGxlbiwgcCwgeGQsIHhlO1xuICBpZiAoc3RyLmluZGV4T2YoXCJfXCIpID4gLTEpIHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFxcZClfKD89XFxkKS9nLCBcIiQxXCIpO1xuICAgIGlmIChpc0RlY2ltYWwudGVzdChzdHIpKVxuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCh4LCBzdHIpO1xuICB9IGVsc2UgaWYgKHN0ciA9PT0gXCJJbmZpbml0eVwiIHx8IHN0ciA9PT0gXCJOYU5cIikge1xuICAgIGlmICghK3N0cilcbiAgICAgIHgucyA9IE5hTjtcbiAgICB4LmUgPSBOYU47XG4gICAgeC5kID0gbnVsbDtcbiAgICByZXR1cm4geDtcbiAgfVxuICBpZiAoaXNIZXgudGVzdChzdHIpKSB7XG4gICAgYmFzZSA9IDE2O1xuICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKGlzQmluYXJ5LnRlc3Qoc3RyKSkge1xuICAgIGJhc2UgPSAyO1xuICB9IGVsc2UgaWYgKGlzT2N0YWwudGVzdChzdHIpKSB7XG4gICAgYmFzZSA9IDg7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgc3RyKTtcbiAgfVxuICBpID0gc3RyLnNlYXJjaCgvcC9pKTtcbiAgaWYgKGkgPiAwKSB7XG4gICAgcCA9ICtzdHIuc2xpY2UoaSArIDEpO1xuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMiwgaSk7XG4gIH0gZWxzZSB7XG4gICAgc3RyID0gc3RyLnNsaWNlKDIpO1xuICB9XG4gIGkgPSBzdHIuaW5kZXhPZihcIi5cIik7XG4gIGlzRmxvYXQgPSBpID49IDA7XG4gIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xuICBpZiAoaXNGbG9hdCkge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiLlwiLCBcIlwiKTtcbiAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgIGkgPSBsZW4gLSBpO1xuICAgIGRpdmlzb3IgPSBpbnRQb3coQ3RvciwgbmV3IEN0b3IoYmFzZSksIGksIGkgKiAyKTtcbiAgfVxuICB4ZCA9IGNvbnZlcnRCYXNlKHN0ciwgYmFzZSwgQkFTRSk7XG4gIHhlID0geGQubGVuZ3RoIC0gMTtcbiAgZm9yIChpID0geGU7IHhkW2ldID09PSAwOyAtLWkpXG4gICAgeGQucG9wKCk7XG4gIGlmIChpIDwgMClcbiAgICByZXR1cm4gbmV3IEN0b3IoeC5zICogMCk7XG4gIHguZSA9IGdldEJhc2UxMEV4cG9uZW50KHhkLCB4ZSk7XG4gIHguZCA9IHhkO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICBpZiAoaXNGbG9hdClcbiAgICB4ID0gZGl2aWRlKHgsIGRpdmlzb3IsIGxlbiAqIDQpO1xuICBpZiAocClcbiAgICB4ID0geC50aW1lcyhNYXRoLmFicyhwKSA8IDU0ID8gbWF0aHBvdygyLCBwKSA6IERlY2ltYWwucG93KDIsIHApKTtcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4geDtcbn1cbl9fbmFtZShwYXJzZU90aGVyLCBcInBhcnNlT3RoZXJcIik7XG5mdW5jdGlvbiBzaW5lKEN0b3IsIHgpIHtcbiAgdmFyIGssIGxlbiA9IHguZC5sZW5ndGg7XG4gIGlmIChsZW4gPCAzKSB7XG4gICAgcmV0dXJuIHguaXNaZXJvKCkgPyB4IDogdGF5bG9yU2VyaWVzKEN0b3IsIDIsIHgsIHgpO1xuICB9XG4gIGsgPSAxLjQgKiBNYXRoLnNxcnQobGVuKTtcbiAgayA9IGsgPiAxNiA/IDE2IDogayB8IDA7XG4gIHggPSB4LnRpbWVzKDEgLyB0aW55UG93KDUsIGspKTtcbiAgeCA9IHRheWxvclNlcmllcyhDdG9yLCAyLCB4LCB4KTtcbiAgdmFyIHNpbjJfeCwgZDUgPSBuZXcgQ3Rvcig1KSwgZDE2ID0gbmV3IEN0b3IoMTYpLCBkMjAgPSBuZXcgQ3RvcigyMCk7XG4gIGZvciAoOyBrLS07ICkge1xuICAgIHNpbjJfeCA9IHgudGltZXMoeCk7XG4gICAgeCA9IHgudGltZXMoZDUucGx1cyhzaW4yX3gudGltZXMoZDE2LnRpbWVzKHNpbjJfeCkubWludXMoZDIwKSkpKTtcbiAgfVxuICByZXR1cm4geDtcbn1cbl9fbmFtZShzaW5lLCBcInNpbmVcIik7XG5mdW5jdGlvbiB0YXlsb3JTZXJpZXMoQ3RvciwgbiwgeCwgeSwgaXNIeXBlcmJvbGljKSB7XG4gIHZhciBqLCB0LCB1LCB4MiwgaSA9IDEsIHByID0gQ3Rvci5wcmVjaXNpb24sIGsgPSBNYXRoLmNlaWwocHIgLyBMT0dfQkFTRSk7XG4gIGV4dGVybmFsID0gZmFsc2U7XG4gIHgyID0geC50aW1lcyh4KTtcbiAgdSA9IG5ldyBDdG9yKHkpO1xuICBmb3IgKDsgOyApIHtcbiAgICB0ID0gZGl2aWRlKHUudGltZXMoeDIpLCBuZXcgQ3RvcihuKysgKiBuKyspLCBwciwgMSk7XG4gICAgdSA9IGlzSHlwZXJib2xpYyA/IHkucGx1cyh0KSA6IHkubWludXModCk7XG4gICAgeSA9IGRpdmlkZSh0LnRpbWVzKHgyKSwgbmV3IEN0b3IobisrICogbisrKSwgcHIsIDEpO1xuICAgIHQgPSB1LnBsdXMoeSk7XG4gICAgaWYgKHQuZFtrXSAhPT0gdm9pZCAwKSB7XG4gICAgICBmb3IgKGogPSBrOyB0LmRbal0gPT09IHUuZFtqXSAmJiBqLS07IClcbiAgICAgICAgO1xuICAgICAgaWYgKGogPT0gLTEpXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBqID0gdTtcbiAgICB1ID0geTtcbiAgICB5ID0gdDtcbiAgICB0ID0gajtcbiAgICBpKys7XG4gIH1cbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICB0LmQubGVuZ3RoID0gayArIDE7XG4gIHJldHVybiB0O1xufVxuX19uYW1lKHRheWxvclNlcmllcywgXCJ0YXlsb3JTZXJpZXNcIik7XG5mdW5jdGlvbiB0aW55UG93KGIsIGUpIHtcbiAgdmFyIG4gPSBiO1xuICB3aGlsZSAoLS1lKVxuICAgIG4gKj0gYjtcbiAgcmV0dXJuIG47XG59XG5fX25hbWUodGlueVBvdywgXCJ0aW55UG93XCIpO1xuZnVuY3Rpb24gdG9MZXNzVGhhbkhhbGZQaShDdG9yLCB4KSB7XG4gIHZhciB0LCBpc05lZyA9IHgucyA8IDAsIHBpID0gZ2V0UGkoQ3RvciwgQ3Rvci5wcmVjaXNpb24sIDEpLCBoYWxmUGkgPSBwaS50aW1lcygwLjUpO1xuICB4ID0geC5hYnMoKTtcbiAgaWYgKHgubHRlKGhhbGZQaSkpIHtcbiAgICBxdWFkcmFudCA9IGlzTmVnID8gNCA6IDE7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgdCA9IHguZGl2VG9JbnQocGkpO1xuICBpZiAodC5pc1plcm8oKSkge1xuICAgIHF1YWRyYW50ID0gaXNOZWcgPyAzIDogMjtcbiAgfSBlbHNlIHtcbiAgICB4ID0geC5taW51cyh0LnRpbWVzKHBpKSk7XG4gICAgaWYgKHgubHRlKGhhbGZQaSkpIHtcbiAgICAgIHF1YWRyYW50ID0gaXNPZGQodCkgPyBpc05lZyA/IDIgOiAzIDogaXNOZWcgPyA0IDogMTtcbiAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBxdWFkcmFudCA9IGlzT2RkKHQpID8gaXNOZWcgPyAxIDogNCA6IGlzTmVnID8gMyA6IDI7XG4gIH1cbiAgcmV0dXJuIHgubWludXMocGkpLmFicygpO1xufVxuX19uYW1lKHRvTGVzc1RoYW5IYWxmUGksIFwidG9MZXNzVGhhbkhhbGZQaVwiKTtcbmZ1bmN0aW9uIHRvU3RyaW5nQmluYXJ5KHgsIGJhc2VPdXQsIHNkLCBybSkge1xuICB2YXIgYmFzZSwgZSwgaSwgaywgbGVuLCByb3VuZFVwLCBzdHIsIHhkLCB5LCBDdG9yID0geC5jb25zdHJ1Y3RvciwgaXNFeHAgPSBzZCAhPT0gdm9pZCAwO1xuICBpZiAoaXNFeHApIHtcbiAgICBjaGVja0ludDMyKHNkLCAxLCBNQVhfRElHSVRTKTtcbiAgICBpZiAocm0gPT09IHZvaWQgMClcbiAgICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgICBlbHNlXG4gICAgICBjaGVja0ludDMyKHJtLCAwLCA4KTtcbiAgfSBlbHNlIHtcbiAgICBzZCA9IEN0b3IucHJlY2lzaW9uO1xuICAgIHJtID0gQ3Rvci5yb3VuZGluZztcbiAgfVxuICBpZiAoIXguaXNGaW5pdGUoKSkge1xuICAgIHN0ciA9IG5vbkZpbml0ZVRvU3RyaW5nKHgpO1xuICB9IGVsc2Uge1xuICAgIHN0ciA9IGZpbml0ZVRvU3RyaW5nKHgpO1xuICAgIGkgPSBzdHIuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGlzRXhwKSB7XG4gICAgICBiYXNlID0gMjtcbiAgICAgIGlmIChiYXNlT3V0ID09IDE2KSB7XG4gICAgICAgIHNkID0gc2QgKiA0IC0gMztcbiAgICAgIH0gZWxzZSBpZiAoYmFzZU91dCA9PSA4KSB7XG4gICAgICAgIHNkID0gc2QgKiAzIC0gMjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZSA9IGJhc2VPdXQ7XG4gICAgfVxuICAgIGlmIChpID49IDApIHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiLlwiLCBcIlwiKTtcbiAgICAgIHkgPSBuZXcgQ3RvcigxKTtcbiAgICAgIHkuZSA9IHN0ci5sZW5ndGggLSBpO1xuICAgICAgeS5kID0gY29udmVydEJhc2UoZmluaXRlVG9TdHJpbmcoeSksIDEwLCBiYXNlKTtcbiAgICAgIHkuZSA9IHkuZC5sZW5ndGg7XG4gICAgfVxuICAgIHhkID0gY29udmVydEJhc2Uoc3RyLCAxMCwgYmFzZSk7XG4gICAgZSA9IGxlbiA9IHhkLmxlbmd0aDtcbiAgICBmb3IgKDsgeGRbLS1sZW5dID09IDA7IClcbiAgICAgIHhkLnBvcCgpO1xuICAgIGlmICgheGRbMF0pIHtcbiAgICAgIHN0ciA9IGlzRXhwID8gXCIwcCswXCIgOiBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIGUtLTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSBuZXcgQ3Rvcih4KTtcbiAgICAgICAgeC5kID0geGQ7XG4gICAgICAgIHguZSA9IGU7XG4gICAgICAgIHggPSBkaXZpZGUoeCwgeSwgc2QsIHJtLCAwLCBiYXNlKTtcbiAgICAgICAgeGQgPSB4LmQ7XG4gICAgICAgIGUgPSB4LmU7XG4gICAgICAgIHJvdW5kVXAgPSBpbmV4YWN0O1xuICAgICAgfVxuICAgICAgaSA9IHhkW3NkXTtcbiAgICAgIGsgPSBiYXNlIC8gMjtcbiAgICAgIHJvdW5kVXAgPSByb3VuZFVwIHx8IHhkW3NkICsgMV0gIT09IHZvaWQgMDtcbiAgICAgIHJvdW5kVXAgPSBybSA8IDQgPyAoaSAhPT0gdm9pZCAwIHx8IHJvdW5kVXApICYmIChybSA9PT0gMCB8fCBybSA9PT0gKHgucyA8IDAgPyAzIDogMikpIDogaSA+IGsgfHwgaSA9PT0gayAmJiAocm0gPT09IDQgfHwgcm91bmRVcCB8fCBybSA9PT0gNiAmJiB4ZFtzZCAtIDFdICYgMSB8fCBybSA9PT0gKHgucyA8IDAgPyA4IDogNykpO1xuICAgICAgeGQubGVuZ3RoID0gc2Q7XG4gICAgICBpZiAocm91bmRVcCkge1xuICAgICAgICBmb3IgKDsgKyt4ZFstLXNkXSA+IGJhc2UgLSAxOyApIHtcbiAgICAgICAgICB4ZFtzZF0gPSAwO1xuICAgICAgICAgIGlmICghc2QpIHtcbiAgICAgICAgICAgICsrZTtcbiAgICAgICAgICAgIHhkLnVuc2hpZnQoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxlbiA9IHhkLmxlbmd0aDsgIXhkW2xlbiAtIDFdOyAtLWxlbilcbiAgICAgICAgO1xuICAgICAgZm9yIChpID0gMCwgc3RyID0gXCJcIjsgaSA8IGxlbjsgaSsrKVxuICAgICAgICBzdHIgKz0gTlVNRVJBTFMuY2hhckF0KHhkW2ldKTtcbiAgICAgIGlmIChpc0V4cCkge1xuICAgICAgICBpZiAobGVuID4gMSkge1xuICAgICAgICAgIGlmIChiYXNlT3V0ID09IDE2IHx8IGJhc2VPdXQgPT0gOCkge1xuICAgICAgICAgICAgaSA9IGJhc2VPdXQgPT0gMTYgPyA0IDogMztcbiAgICAgICAgICAgIGZvciAoLS1sZW47IGxlbiAlIGk7IGxlbisrKVxuICAgICAgICAgICAgICBzdHIgKz0gXCIwXCI7XG4gICAgICAgICAgICB4ZCA9IGNvbnZlcnRCYXNlKHN0ciwgYmFzZSwgYmFzZU91dCk7XG4gICAgICAgICAgICBmb3IgKGxlbiA9IHhkLmxlbmd0aDsgIXhkW2xlbiAtIDFdOyAtLWxlbilcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgZm9yIChpID0gMSwgc3RyID0gXCIxLlwiOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgICAgIHN0ciArPSBOVU1FUkFMUy5jaGFyQXQoeGRbaV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuY2hhckF0KDApICsgXCIuXCIgKyBzdHIuc2xpY2UoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0ciA9IHN0ciArIChlIDwgMCA/IFwicFwiIDogXCJwK1wiKSArIGU7XG4gICAgICB9IGVsc2UgaWYgKGUgPCAwKSB7XG4gICAgICAgIGZvciAoOyArK2U7IClcbiAgICAgICAgICBzdHIgPSBcIjBcIiArIHN0cjtcbiAgICAgICAgc3RyID0gXCIwLlwiICsgc3RyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCsrZSA+IGxlbilcbiAgICAgICAgICBmb3IgKGUgLT0gbGVuOyBlLS07IClcbiAgICAgICAgICAgIHN0ciArPSBcIjBcIjtcbiAgICAgICAgZWxzZSBpZiAoZSA8IGxlbilcbiAgICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMCwgZSkgKyBcIi5cIiArIHN0ci5zbGljZShlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RyID0gKGJhc2VPdXQgPT0gMTYgPyBcIjB4XCIgOiBiYXNlT3V0ID09IDIgPyBcIjBiXCIgOiBiYXNlT3V0ID09IDggPyBcIjBvXCIgOiBcIlwiKSArIHN0cjtcbiAgfVxuICByZXR1cm4geC5zIDwgMCA/IFwiLVwiICsgc3RyIDogc3RyO1xufVxuX19uYW1lKHRvU3RyaW5nQmluYXJ5LCBcInRvU3RyaW5nQmluYXJ5XCIpO1xuZnVuY3Rpb24gdHJ1bmNhdGUoYXJyLCBsZW4pIHtcbiAgaWYgKGFyci5sZW5ndGggPiBsZW4pIHtcbiAgICBhcnIubGVuZ3RoID0gbGVuO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5fX25hbWUodHJ1bmNhdGUsIFwidHJ1bmNhdGVcIik7XG5mdW5jdGlvbiBhYnMoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuYWJzKCk7XG59XG5fX25hbWUoYWJzLCBcImFic1wiKTtcbmZ1bmN0aW9uIGFjb3MoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuYWNvcygpO1xufVxuX19uYW1lKGFjb3MsIFwiYWNvc1wiKTtcbmZ1bmN0aW9uIGFjb3NoKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmFjb3NoKCk7XG59XG5fX25hbWUoYWNvc2gsIFwiYWNvc2hcIik7XG5mdW5jdGlvbiBhZGQoeCwgeSkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkucGx1cyh5KTtcbn1cbl9fbmFtZShhZGQsIFwiYWRkXCIpO1xuZnVuY3Rpb24gYXNpbih4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5hc2luKCk7XG59XG5fX25hbWUoYXNpbiwgXCJhc2luXCIpO1xuZnVuY3Rpb24gYXNpbmgoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuYXNpbmgoKTtcbn1cbl9fbmFtZShhc2luaCwgXCJhc2luaFwiKTtcbmZ1bmN0aW9uIGF0YW4oeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuYXRhbigpO1xufVxuX19uYW1lKGF0YW4sIFwiYXRhblwiKTtcbmZ1bmN0aW9uIGF0YW5oKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmF0YW5oKCk7XG59XG5fX25hbWUoYXRhbmgsIFwiYXRhbmhcIik7XG5mdW5jdGlvbiBhdGFuMih5LCB4KSB7XG4gIHkgPSBuZXcgdGhpcyh5KTtcbiAgeCA9IG5ldyB0aGlzKHgpO1xuICB2YXIgciwgcHIgPSB0aGlzLnByZWNpc2lvbiwgcm0gPSB0aGlzLnJvdW5kaW5nLCB3cHIgPSBwciArIDQ7XG4gIGlmICgheS5zIHx8ICF4LnMpIHtcbiAgICByID0gbmV3IHRoaXMoTmFOKTtcbiAgfSBlbHNlIGlmICgheS5kICYmICF4LmQpIHtcbiAgICByID0gZ2V0UGkodGhpcywgd3ByLCAxKS50aW1lcyh4LnMgPiAwID8gMC4yNSA6IDAuNzUpO1xuICAgIHIucyA9IHkucztcbiAgfSBlbHNlIGlmICgheC5kIHx8IHkuaXNaZXJvKCkpIHtcbiAgICByID0geC5zIDwgMCA/IGdldFBpKHRoaXMsIHByLCBybSkgOiBuZXcgdGhpcygwKTtcbiAgICByLnMgPSB5LnM7XG4gIH0gZWxzZSBpZiAoIXkuZCB8fCB4LmlzWmVybygpKSB7XG4gICAgciA9IGdldFBpKHRoaXMsIHdwciwgMSkudGltZXMoMC41KTtcbiAgICByLnMgPSB5LnM7XG4gIH0gZWxzZSBpZiAoeC5zIDwgMCkge1xuICAgIHRoaXMucHJlY2lzaW9uID0gd3ByO1xuICAgIHRoaXMucm91bmRpbmcgPSAxO1xuICAgIHIgPSB0aGlzLmF0YW4oZGl2aWRlKHksIHgsIHdwciwgMSkpO1xuICAgIHggPSBnZXRQaSh0aGlzLCB3cHIsIDEpO1xuICAgIHRoaXMucHJlY2lzaW9uID0gcHI7XG4gICAgdGhpcy5yb3VuZGluZyA9IHJtO1xuICAgIHIgPSB5LnMgPCAwID8gci5taW51cyh4KSA6IHIucGx1cyh4KTtcbiAgfSBlbHNlIHtcbiAgICByID0gdGhpcy5hdGFuKGRpdmlkZSh5LCB4LCB3cHIsIDEpKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cbl9fbmFtZShhdGFuMiwgXCJhdGFuMlwiKTtcbmZ1bmN0aW9uIGNicnQoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuY2JydCgpO1xufVxuX19uYW1lKGNicnQsIFwiY2JydFwiKTtcbmZ1bmN0aW9uIGNlaWwoeCkge1xuICByZXR1cm4gZmluYWxpc2UoeCA9IG5ldyB0aGlzKHgpLCB4LmUgKyAxLCAyKTtcbn1cbl9fbmFtZShjZWlsLCBcImNlaWxcIik7XG5mdW5jdGlvbiBjbGFtcCh4LCBtaW4yLCBtYXgyKSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5jbGFtcChtaW4yLCBtYXgyKTtcbn1cbl9fbmFtZShjbGFtcCwgXCJjbGFtcFwiKTtcbmZ1bmN0aW9uIGNvbmZpZyhvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIilcbiAgICB0aHJvdyBFcnJvcihkZWNpbWFsRXJyb3IgKyBcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgdmFyIGksIHAsIHYsIHVzZURlZmF1bHRzID0gb2JqLmRlZmF1bHRzID09PSB0cnVlLCBwcyA9IFtcbiAgICBcInByZWNpc2lvblwiLFxuICAgIDEsXG4gICAgTUFYX0RJR0lUUyxcbiAgICBcInJvdW5kaW5nXCIsXG4gICAgMCxcbiAgICA4LFxuICAgIFwidG9FeHBOZWdcIixcbiAgICAtRVhQX0xJTUlULFxuICAgIDAsXG4gICAgXCJ0b0V4cFBvc1wiLFxuICAgIDAsXG4gICAgRVhQX0xJTUlULFxuICAgIFwibWF4RVwiLFxuICAgIDAsXG4gICAgRVhQX0xJTUlULFxuICAgIFwibWluRVwiLFxuICAgIC1FWFBfTElNSVQsXG4gICAgMCxcbiAgICBcIm1vZHVsb1wiLFxuICAgIDAsXG4gICAgOVxuICBdO1xuICBmb3IgKGkgPSAwOyBpIDwgcHMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBpZiAocCA9IHBzW2ldLCB1c2VEZWZhdWx0cylcbiAgICAgIHRoaXNbcF0gPSBERUZBVUxUU1twXTtcbiAgICBpZiAoKHYgPSBvYmpbcF0pICE9PSB2b2lkIDApIHtcbiAgICAgIGlmIChtYXRoZmxvb3IodikgPT09IHYgJiYgdiA+PSBwc1tpICsgMV0gJiYgdiA8PSBwc1tpICsgMl0pXG4gICAgICAgIHRoaXNbcF0gPSB2O1xuICAgICAgZWxzZVxuICAgICAgICB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyBwICsgXCI6IFwiICsgdik7XG4gICAgfVxuICB9XG4gIGlmIChwID0gXCJjcnlwdG9cIiwgdXNlRGVmYXVsdHMpXG4gICAgdGhpc1twXSA9IERFRkFVTFRTW3BdO1xuICBpZiAoKHYgPSBvYmpbcF0pICE9PSB2b2lkIDApIHtcbiAgICBpZiAodiA9PT0gdHJ1ZSB8fCB2ID09PSBmYWxzZSB8fCB2ID09PSAwIHx8IHYgPT09IDEpIHtcbiAgICAgIGlmICh2KSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvICE9IFwidW5kZWZpbmVkXCIgJiYgY3J5cHRvICYmIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzIHx8IGNyeXB0by5yYW5kb21CeXRlcykpIHtcbiAgICAgICAgICB0aGlzW3BdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihjcnlwdG9VbmF2YWlsYWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbcF0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgcCArIFwiOiBcIiArIHYpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbl9fbmFtZShjb25maWcsIFwiY29uZmlnXCIpO1xuZnVuY3Rpb24gY29zKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmNvcygpO1xufVxuX19uYW1lKGNvcywgXCJjb3NcIik7XG5mdW5jdGlvbiBjb3NoKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmNvc2goKTtcbn1cbl9fbmFtZShjb3NoLCBcImNvc2hcIik7XG5mdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgdmFyIGksIHAsIHBzO1xuICBmdW5jdGlvbiBEZWNpbWFsMih2KSB7XG4gICAgdmFyIGUsIGkyLCB0LCB4ID0gdGhpcztcbiAgICBpZiAoISh4IGluc3RhbmNlb2YgRGVjaW1hbDIpKVxuICAgICAgcmV0dXJuIG5ldyBEZWNpbWFsMih2KTtcbiAgICB4LmNvbnN0cnVjdG9yID0gRGVjaW1hbDI7XG4gICAgaWYgKGlzRGVjaW1hbEluc3RhbmNlKHYpKSB7XG4gICAgICB4LnMgPSB2LnM7XG4gICAgICBpZiAoZXh0ZXJuYWwpIHtcbiAgICAgICAgaWYgKCF2LmQgfHwgdi5lID4gRGVjaW1hbDIubWF4RSkge1xuICAgICAgICAgIHguZSA9IE5hTjtcbiAgICAgICAgICB4LmQgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHYuZSA8IERlY2ltYWwyLm1pbkUpIHtcbiAgICAgICAgICB4LmUgPSAwO1xuICAgICAgICAgIHguZCA9IFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4LmUgPSB2LmU7XG4gICAgICAgICAgeC5kID0gdi5kLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHguZSA9IHYuZTtcbiAgICAgICAgeC5kID0gdi5kID8gdi5kLnNsaWNlKCkgOiB2LmQ7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHQgPSB0eXBlb2YgdjtcbiAgICBpZiAodCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgaWYgKHYgPT09IDApIHtcbiAgICAgICAgeC5zID0gMSAvIHYgPCAwID8gLTEgOiAxO1xuICAgICAgICB4LmUgPSAwO1xuICAgICAgICB4LmQgPSBbMF07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh2IDwgMCkge1xuICAgICAgICB2ID0gLXY7XG4gICAgICAgIHgucyA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeC5zID0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh2ID09PSB+fnYgJiYgdiA8IDFlNykge1xuICAgICAgICBmb3IgKGUgPSAwLCBpMiA9IHY7IGkyID49IDEwOyBpMiAvPSAxMClcbiAgICAgICAgICBlKys7XG4gICAgICAgIGlmIChleHRlcm5hbCkge1xuICAgICAgICAgIGlmIChlID4gRGVjaW1hbDIubWF4RSkge1xuICAgICAgICAgICAgeC5lID0gTmFOO1xuICAgICAgICAgICAgeC5kID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUgPCBEZWNpbWFsMi5taW5FKSB7XG4gICAgICAgICAgICB4LmUgPSAwO1xuICAgICAgICAgICAgeC5kID0gWzBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4LmUgPSBlO1xuICAgICAgICAgICAgeC5kID0gW3ZdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4LmUgPSBlO1xuICAgICAgICAgIHguZCA9IFt2XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKHYgKiAwICE9PSAwKSB7XG4gICAgICAgIGlmICghdilcbiAgICAgICAgICB4LnMgPSBOYU47XG4gICAgICAgIHguZSA9IE5hTjtcbiAgICAgICAgeC5kID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCh4LCB2LnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSBpZiAodCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgdik7XG4gICAgfVxuICAgIGlmICgoaTIgPSB2LmNoYXJDb2RlQXQoMCkpID09PSA0NSkge1xuICAgICAgdiA9IHYuc2xpY2UoMSk7XG4gICAgICB4LnMgPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGkyID09PSA0MylcbiAgICAgICAgdiA9IHYuc2xpY2UoMSk7XG4gICAgICB4LnMgPSAxO1xuICAgIH1cbiAgICByZXR1cm4gaXNEZWNpbWFsLnRlc3QodikgPyBwYXJzZURlY2ltYWwoeCwgdikgOiBwYXJzZU90aGVyKHgsIHYpO1xuICB9XG4gIF9fbmFtZShEZWNpbWFsMiwgXCJEZWNpbWFsXCIpO1xuICBEZWNpbWFsMi5wcm90b3R5cGUgPSBQO1xuICBEZWNpbWFsMi5ST1VORF9VUCA9IDA7XG4gIERlY2ltYWwyLlJPVU5EX0RPV04gPSAxO1xuICBEZWNpbWFsMi5ST1VORF9DRUlMID0gMjtcbiAgRGVjaW1hbDIuUk9VTkRfRkxPT1IgPSAzO1xuICBEZWNpbWFsMi5ST1VORF9IQUxGX1VQID0gNDtcbiAgRGVjaW1hbDIuUk9VTkRfSEFMRl9ET1dOID0gNTtcbiAgRGVjaW1hbDIuUk9VTkRfSEFMRl9FVkVOID0gNjtcbiAgRGVjaW1hbDIuUk9VTkRfSEFMRl9DRUlMID0gNztcbiAgRGVjaW1hbDIuUk9VTkRfSEFMRl9GTE9PUiA9IDg7XG4gIERlY2ltYWwyLkVVQ0xJRCA9IDk7XG4gIERlY2ltYWwyLmNvbmZpZyA9IERlY2ltYWwyLnNldCA9IGNvbmZpZztcbiAgRGVjaW1hbDIuY2xvbmUgPSBjbG9uZTtcbiAgRGVjaW1hbDIuaXNEZWNpbWFsID0gaXNEZWNpbWFsSW5zdGFuY2U7XG4gIERlY2ltYWwyLmFicyA9IGFicztcbiAgRGVjaW1hbDIuYWNvcyA9IGFjb3M7XG4gIERlY2ltYWwyLmFjb3NoID0gYWNvc2g7XG4gIERlY2ltYWwyLmFkZCA9IGFkZDtcbiAgRGVjaW1hbDIuYXNpbiA9IGFzaW47XG4gIERlY2ltYWwyLmFzaW5oID0gYXNpbmg7XG4gIERlY2ltYWwyLmF0YW4gPSBhdGFuO1xuICBEZWNpbWFsMi5hdGFuaCA9IGF0YW5oO1xuICBEZWNpbWFsMi5hdGFuMiA9IGF0YW4yO1xuICBEZWNpbWFsMi5jYnJ0ID0gY2JydDtcbiAgRGVjaW1hbDIuY2VpbCA9IGNlaWw7XG4gIERlY2ltYWwyLmNsYW1wID0gY2xhbXA7XG4gIERlY2ltYWwyLmNvcyA9IGNvcztcbiAgRGVjaW1hbDIuY29zaCA9IGNvc2g7XG4gIERlY2ltYWwyLmRpdiA9IGRpdjtcbiAgRGVjaW1hbDIuZXhwID0gZXhwO1xuICBEZWNpbWFsMi5mbG9vciA9IGZsb29yO1xuICBEZWNpbWFsMi5oeXBvdCA9IGh5cG90O1xuICBEZWNpbWFsMi5sbiA9IGxuO1xuICBEZWNpbWFsMi5sb2cgPSBsb2c7XG4gIERlY2ltYWwyLmxvZzEwID0gbG9nMTA7XG4gIERlY2ltYWwyLmxvZzIgPSBsb2cyO1xuICBEZWNpbWFsMi5tYXggPSBtYXg7XG4gIERlY2ltYWwyLm1pbiA9IG1pbjtcbiAgRGVjaW1hbDIubW9kID0gbW9kO1xuICBEZWNpbWFsMi5tdWwgPSBtdWw7XG4gIERlY2ltYWwyLnBvdyA9IHBvdztcbiAgRGVjaW1hbDIucmFuZG9tID0gcmFuZG9tO1xuICBEZWNpbWFsMi5yb3VuZCA9IHJvdW5kO1xuICBEZWNpbWFsMi5zaWduID0gc2lnbjtcbiAgRGVjaW1hbDIuc2luID0gc2luO1xuICBEZWNpbWFsMi5zaW5oID0gc2luaDtcbiAgRGVjaW1hbDIuc3FydCA9IHNxcnQ7XG4gIERlY2ltYWwyLnN1YiA9IHN1YjtcbiAgRGVjaW1hbDIuc3VtID0gc3VtO1xuICBEZWNpbWFsMi50YW4gPSB0YW47XG4gIERlY2ltYWwyLnRhbmggPSB0YW5oO1xuICBEZWNpbWFsMi50cnVuYyA9IHRydW5jO1xuICBpZiAob2JqID09PSB2b2lkIDApXG4gICAgb2JqID0ge307XG4gIGlmIChvYmopIHtcbiAgICBpZiAob2JqLmRlZmF1bHRzICE9PSB0cnVlKSB7XG4gICAgICBwcyA9IFtcInByZWNpc2lvblwiLCBcInJvdW5kaW5nXCIsIFwidG9FeHBOZWdcIiwgXCJ0b0V4cFBvc1wiLCBcIm1heEVcIiwgXCJtaW5FXCIsIFwibW9kdWxvXCIsIFwiY3J5cHRvXCJdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHBzLmxlbmd0aDsgKVxuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShwID0gcHNbaSsrXSkpXG4gICAgICAgICAgb2JqW3BdID0gdGhpc1twXTtcbiAgICB9XG4gIH1cbiAgRGVjaW1hbDIuY29uZmlnKG9iaik7XG4gIHJldHVybiBEZWNpbWFsMjtcbn1cbl9fbmFtZShjbG9uZSwgXCJjbG9uZVwiKTtcbmZ1bmN0aW9uIGRpdih4LCB5KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5kaXYoeSk7XG59XG5fX25hbWUoZGl2LCBcImRpdlwiKTtcbmZ1bmN0aW9uIGV4cCh4KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5leHAoKTtcbn1cbl9fbmFtZShleHAsIFwiZXhwXCIpO1xuZnVuY3Rpb24gZmxvb3IoeCkge1xuICByZXR1cm4gZmluYWxpc2UoeCA9IG5ldyB0aGlzKHgpLCB4LmUgKyAxLCAzKTtcbn1cbl9fbmFtZShmbG9vciwgXCJmbG9vclwiKTtcbmZ1bmN0aW9uIGh5cG90KCkge1xuICB2YXIgaSwgbiwgdCA9IG5ldyB0aGlzKDApO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICBmb3IgKGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgKSB7XG4gICAgbiA9IG5ldyB0aGlzKGFyZ3VtZW50c1tpKytdKTtcbiAgICBpZiAoIW4uZCkge1xuICAgICAgaWYgKG4ucykge1xuICAgICAgICBleHRlcm5hbCA9IHRydWU7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcygxIC8gMCk7XG4gICAgICB9XG4gICAgICB0ID0gbjtcbiAgICB9IGVsc2UgaWYgKHQuZCkge1xuICAgICAgdCA9IHQucGx1cyhuLnRpbWVzKG4pKTtcbiAgICB9XG4gIH1cbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gdC5zcXJ0KCk7XG59XG5fX25hbWUoaHlwb3QsIFwiaHlwb3RcIik7XG5mdW5jdGlvbiBpc0RlY2ltYWxJbnN0YW5jZShvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERlY2ltYWwgfHwgb2JqICYmIG9iai50b1N0cmluZ1RhZyA9PT0gdGFnIHx8IGZhbHNlO1xufVxuX19uYW1lKGlzRGVjaW1hbEluc3RhbmNlLCBcImlzRGVjaW1hbEluc3RhbmNlXCIpO1xuZnVuY3Rpb24gbG4oeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkubG4oKTtcbn1cbl9fbmFtZShsbiwgXCJsblwiKTtcbmZ1bmN0aW9uIGxvZyh4LCB5KSB7XG4gIHJldHVybiBuZXcgdGhpcyh4KS5sb2coeSk7XG59XG5fX25hbWUobG9nLCBcImxvZ1wiKTtcbmZ1bmN0aW9uIGxvZzIoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkubG9nKDIpO1xufVxuX19uYW1lKGxvZzIsIFwibG9nMlwiKTtcbmZ1bmN0aW9uIGxvZzEwKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLmxvZygxMCk7XG59XG5fX25hbWUobG9nMTAsIFwibG9nMTBcIik7XG5mdW5jdGlvbiBtYXgoKSB7XG4gIHJldHVybiBtYXhPck1pbih0aGlzLCBhcmd1bWVudHMsIFwibHRcIik7XG59XG5fX25hbWUobWF4LCBcIm1heFwiKTtcbmZ1bmN0aW9uIG1pbigpIHtcbiAgcmV0dXJuIG1heE9yTWluKHRoaXMsIGFyZ3VtZW50cywgXCJndFwiKTtcbn1cbl9fbmFtZShtaW4sIFwibWluXCIpO1xuZnVuY3Rpb24gbW9kKHgsIHkpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLm1vZCh5KTtcbn1cbl9fbmFtZShtb2QsIFwibW9kXCIpO1xuZnVuY3Rpb24gbXVsKHgsIHkpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLm11bCh5KTtcbn1cbl9fbmFtZShtdWwsIFwibXVsXCIpO1xuZnVuY3Rpb24gcG93KHgsIHkpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnBvdyh5KTtcbn1cbl9fbmFtZShwb3csIFwicG93XCIpO1xuZnVuY3Rpb24gcmFuZG9tKHNkKSB7XG4gIHZhciBkLCBlLCBrLCBuLCBpID0gMCwgciA9IG5ldyB0aGlzKDEpLCByZCA9IFtdO1xuICBpZiAoc2QgPT09IHZvaWQgMClcbiAgICBzZCA9IHRoaXMucHJlY2lzaW9uO1xuICBlbHNlXG4gICAgY2hlY2tJbnQzMihzZCwgMSwgTUFYX0RJR0lUUyk7XG4gIGsgPSBNYXRoLmNlaWwoc2QgLyBMT0dfQkFTRSk7XG4gIGlmICghdGhpcy5jcnlwdG8pIHtcbiAgICBmb3IgKDsgaSA8IGs7IClcbiAgICAgIHJkW2krK10gPSBNYXRoLnJhbmRvbSgpICogMWU3IHwgMDtcbiAgfSBlbHNlIGlmIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgZCA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KGspKTtcbiAgICBmb3IgKDsgaSA8IGs7ICkge1xuICAgICAgbiA9IGRbaV07XG4gICAgICBpZiAobiA+PSA0MjllNykge1xuICAgICAgICBkW2ldID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoMSkpWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmRbaSsrXSA9IG4gJSAxZTc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGNyeXB0by5yYW5kb21CeXRlcykge1xuICAgIGQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoayAqPSA0KTtcbiAgICBmb3IgKDsgaSA8IGs7ICkge1xuICAgICAgbiA9IGRbaV0gKyAoZFtpICsgMV0gPDwgOCkgKyAoZFtpICsgMl0gPDwgMTYpICsgKChkW2kgKyAzXSAmIDEyNykgPDwgMjQpO1xuICAgICAgaWYgKG4gPj0gMjE0ZTcpIHtcbiAgICAgICAgY3J5cHRvLnJhbmRvbUJ5dGVzKDQpLmNvcHkoZCwgaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZC5wdXNoKG4gJSAxZTcpO1xuICAgICAgICBpICs9IDQ7XG4gICAgICB9XG4gICAgfVxuICAgIGkgPSBrIC8gNDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcihjcnlwdG9VbmF2YWlsYWJsZSk7XG4gIH1cbiAgayA9IHJkWy0taV07XG4gIHNkICU9IExPR19CQVNFO1xuICBpZiAoayAmJiBzZCkge1xuICAgIG4gPSBtYXRocG93KDEwLCBMT0dfQkFTRSAtIHNkKTtcbiAgICByZFtpXSA9IChrIC8gbiB8IDApICogbjtcbiAgfVxuICBmb3IgKDsgcmRbaV0gPT09IDA7IGktLSlcbiAgICByZC5wb3AoKTtcbiAgaWYgKGkgPCAwKSB7XG4gICAgZSA9IDA7XG4gICAgcmQgPSBbMF07XG4gIH0gZWxzZSB7XG4gICAgZSA9IC0xO1xuICAgIGZvciAoOyByZFswXSA9PT0gMDsgZSAtPSBMT0dfQkFTRSlcbiAgICAgIHJkLnNoaWZ0KCk7XG4gICAgZm9yIChrID0gMSwgbiA9IHJkWzBdOyBuID49IDEwOyBuIC89IDEwKVxuICAgICAgaysrO1xuICAgIGlmIChrIDwgTE9HX0JBU0UpXG4gICAgICBlIC09IExPR19CQVNFIC0gaztcbiAgfVxuICByLmUgPSBlO1xuICByLmQgPSByZDtcbiAgcmV0dXJuIHI7XG59XG5fX25hbWUocmFuZG9tLCBcInJhbmRvbVwiKTtcbmZ1bmN0aW9uIHJvdW5kKHgpIHtcbiAgcmV0dXJuIGZpbmFsaXNlKHggPSBuZXcgdGhpcyh4KSwgeC5lICsgMSwgdGhpcy5yb3VuZGluZyk7XG59XG5fX25hbWUocm91bmQsIFwicm91bmRcIik7XG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgeCA9IG5ldyB0aGlzKHgpO1xuICByZXR1cm4geC5kID8geC5kWzBdID8geC5zIDogMCAqIHgucyA6IHgucyB8fCBOYU47XG59XG5fX25hbWUoc2lnbiwgXCJzaWduXCIpO1xuZnVuY3Rpb24gc2luKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnNpbigpO1xufVxuX19uYW1lKHNpbiwgXCJzaW5cIik7XG5mdW5jdGlvbiBzaW5oKHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnNpbmgoKTtcbn1cbl9fbmFtZShzaW5oLCBcInNpbmhcIik7XG5mdW5jdGlvbiBzcXJ0KHgpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKHgpLnNxcnQoKTtcbn1cbl9fbmFtZShzcXJ0LCBcInNxcnRcIik7XG5mdW5jdGlvbiBzdWIoeCwgeSkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkuc3ViKHkpO1xufVxuX19uYW1lKHN1YiwgXCJzdWJcIik7XG5mdW5jdGlvbiBzdW0oKSB7XG4gIHZhciBpID0gMCwgYXJncyA9IGFyZ3VtZW50cywgeCA9IG5ldyB0aGlzKGFyZ3NbaV0pO1xuICBleHRlcm5hbCA9IGZhbHNlO1xuICBmb3IgKDsgeC5zICYmICsraSA8IGFyZ3MubGVuZ3RoOyApXG4gICAgeCA9IHgucGx1cyhhcmdzW2ldKTtcbiAgZXh0ZXJuYWwgPSB0cnVlO1xuICByZXR1cm4gZmluYWxpc2UoeCwgdGhpcy5wcmVjaXNpb24sIHRoaXMucm91bmRpbmcpO1xufVxuX19uYW1lKHN1bSwgXCJzdW1cIik7XG5mdW5jdGlvbiB0YW4oeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkudGFuKCk7XG59XG5fX25hbWUodGFuLCBcInRhblwiKTtcbmZ1bmN0aW9uIHRhbmgoeCkge1xuICByZXR1cm4gbmV3IHRoaXMoeCkudGFuaCgpO1xufVxuX19uYW1lKHRhbmgsIFwidGFuaFwiKTtcbmZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgcmV0dXJuIGZpbmFsaXNlKHggPSBuZXcgdGhpcyh4KSwgeC5lICsgMSwgMSk7XG59XG5fX25hbWUodHJ1bmMsIFwidHJ1bmNcIik7XG5QW1N5bWJvbC5mb3IoXCJub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbVwiKV0gPSBQLnRvU3RyaW5nO1xuUFtTeW1ib2wudG9TdHJpbmdUYWddID0gXCJEZWNpbWFsXCI7XG52YXIgRGVjaW1hbCA9IFAuY29uc3RydWN0b3IgPSBjbG9uZShERUZBVUxUUyk7XG5MTjEwID0gbmV3IERlY2ltYWwoTE4xMCk7XG5QSSA9IG5ldyBEZWNpbWFsKFBJKTtcbnZhciBkZWNpbWFsX2RlZmF1bHQgPSBEZWNpbWFsO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJNb3ZpZXMiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9