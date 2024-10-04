(self['webpackChunkwebdeck_plugin_clock'] = self['webpackChunkwebdeck_plugin_clock'] || []).push([["425"], {
"251": (function (__unused_webpack_module, exports, __webpack_require__) {
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var f = __webpack_require__(/*! react */"190"), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
    };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;
}),
"893": (function (module, __unused_webpack_exports, __webpack_require__) {
'use strict';
module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.production.min.js */"251");
}),
"130": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; },
  init: function() { return init; },
  manifest: function() { return manifest; }
});
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */"893");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */"190");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


 var init = function(param) {
    var drawKey = param.drawKey, config = param.config;
    var drawHand = function drawHand(ctx, centerX, centerY, angle, length, width) {
        var color = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : "black";
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + Math.cos(angle - Math.PI / 2) * length, centerY + Math.sin(angle - Math.PI / 2) * length);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.closePath();
    };
    console.log("webdeck-screensaver inited", drawKey, config);
    var interval = setInterval(function() {
        drawKey(function(param) {
            var ctx = param.ctx, canvas = param.canvas;
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Set the size of the clock to fit within a square
            var radius = Math.min(canvas.width, canvas.height) / 2 * 1;
            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;
            // Draw clock numbers
            ctx.font = "".concat(radius * 0.25, "px Arial");
            ctx.fillStyle = "white"; // White numbers
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            for(var num = 1; num <= 12; num++){
                var angle = num * Math.PI / 6;
                var x = centerX + Math.cos(angle - Math.PI / 2) * radius * 0.75;
                var y = centerY + Math.sin(angle - Math.PI / 2) * radius * 0.75;
                ctx.fillText(num.toString(), x, y);
            }
            // Get the current time
            var now = new Date();
            var hour = now.getHours() % 12;
            var minute = now.getMinutes();
            var second = now.getSeconds();
            // Calculate angles for each hand
            var hourAngle = (hour + minute / 60) * Math.PI / 6;
            var minuteAngle = (minute + second / 60) * Math.PI / 30;
            var secondAngle = second * Math.PI / 30;
            // Draw hour hand (white)
            drawHand(ctx, centerX, centerY, hourAngle, radius * 0.5, 3, "white");
            // Draw minute hand (white)
            drawHand(ctx, centerX, centerY, minuteAngle, radius * 0.7, 2, "gray");
            // Draw second hand (thin red)
            drawHand(ctx, centerX, centerY, secondAngle, radius * 0.8, 1, "red");
        });
    }, 100);
    return function() {
        clearInterval(interval);
    };
};
 var manifest = {
    version: 1,
    bespoke: true
};
var App = function(props) {
    console.log("App render", {
        props: props
    });
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        style: {
            borderRadius: "4px",
            padding: "2em",
            backgroundColor: "red",
            color: "white"
        },
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: "hello from webdeck-plugin-template"
        })
    });
};
var __WEBPACK_DEFAULT_EXPORT__ = App;
}),
"447": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */"893");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */"130");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */"190");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */"815");
/* harmony import */var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);




// Nothing needs to chagne here.
// Make all changes in <App> component.
react_dom__WEBPACK_IMPORTED_MODULE_3___default().render(/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    config: {},
    setConfig: function() {}
}), document.getElementById("root"));
}),

}]);
//# sourceMappingURL=425.js.map