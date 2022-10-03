"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/about_me/About.jsx":
/*!***************************************!*\
  !*** ./components/about_me/About.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/Card */ \"./components/cards/Card.jsx\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./About.module.css */ \"./components/about_me/About.module.css\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_About_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar About = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), AboutCounter = ref[0], setAboutCounter = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            icon: \"fa-solid fa-code\",\n            name: \"Web Development\",\n            color: \"purple\"\n        },\n        {\n            icon: \"fa-brands fa-apple\",\n            name: \"iOS Applications\",\n            color: \"#2c98f0\"\n        },\n        {\n            icon: \"fa-solid fa-mobile\",\n            name: \"Web Applications\",\n            color: \"red\"\n        },\n        {\n            icon: \"fa-solid fa-database\",\n            name: \"SEO Optimization\",\n            color: \"rgba(0, 0, 0, 0.6)\"\n        }\n    ]), classes = ref1[0], setClasses = ref1[1];\n    var ref2 = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)(), ref3 = ref2.ref, inView = ref2.inView;\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    var ref4 = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)(), offerRef = ref4.offerRef, offerInView = ref4.offerInView;\n    var offerAnimation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    var animationEnd = function() {\n        setAboutCounter(function(counter) {\n            return counter + 1;\n        });\n        animation.start({\n            x: \"-90vw\"\n        });\n    };\n    var offerEnd = function() {};\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (inView) {\n            animation.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 1\n                }\n            });\n        }\n        if (!inView) {\n            if (AboutCounter >= 1) {\n                return;\n            }\n            animationEnd();\n        }\n    }, [\n        inView\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (offerInView) {\n            offerAnimation.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 1\n                }\n            });\n        }\n        if (!offerInView) {\n            offerAnimation.start({\n                x: \"-100vw\"\n            });\n        }\n    }, [\n        offerInView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                animate: animation,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"about\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"ABOUT US\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"WHO AM I?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 9\n                        }, _this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 28\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Hi, bet you already know this, but \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"my name is Moses Chukwudi Nwigberi\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 46\n                    }, _this),\n                    \". I identify as an entry level, junior front end web developer with good interest in iOS. Leveraging the latest web technologies, I create single page web applications, properly responsive, functional and SEO optimized websites. Hey, I am for the most part a front end developer but, I can integrate with a backend if needed, creating a full stack website on request\\uD83D\\uDE09. I create front IOS applications with Swift too.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, _this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 20\n                    }, _this),\n                    \"At the moment, I am a 300L student of Chemical Engineering in the University of Lagos, Akoka. My hobbies include coding(duh), web development(obviously), mobile development(lol\\uD83D\\uDE02) and FIFA. I am also pretty decent in french language( ola amigo!)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 115,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                animate: offerAnimation,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"services\",\n                    className: (_About_module_css__WEBPACK_IMPORTED_MODULE_5___default().classesContainer),\n                    children: classes.map(function(skill, key) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                            progress: false,\n                            border: skill.color,\n                            classname: skill.icon,\n                            name: skill.name\n                        }, key, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 125,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n};\n_s(About, \"r3btsunt5Y8xTWut/EVQaMyzuKw=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBNkJVTCxrRUFBUztRQUNiRyx1REFBWTtRQUNFSCxrRUFBUztRQUNsQkcsdURBQVk7OztBQWhDNUJFLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dF9tZS9BYm91dC5qc3g/NDQzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmRzL0NhcmRcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Fib3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VBbmltYXRpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgbWFpbnN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgY29uc3QgQWJvdXQgPSAoKSA9PiB7XG5cblxuICAgIGNvbnN0IFtBYm91dENvdW50ZXIsc2V0QWJvdXRDb3VudGVyXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2NsYXNzZXMsc2V0Q2xhc3Nlc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLXNvbGlkIGZhLWNvZGVcIixcbiAgICAgICAgICBuYW1lOiBcIldlYiBEZXZlbG9wbWVudFwiLFxuICAgICAgICAgIGNvbG9yOiBcInB1cnBsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLWJyYW5kcyBmYS1hcHBsZVwiLFxuICAgICAgICAgIG5hbWU6IFwiaU9TIEFwcGxpY2F0aW9uc1wiLFxuICAgICAgICAgIGNvbG9yOiBcIiMyYzk4ZjBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJmYS1zb2xpZCBmYS1tb2JpbGVcIixcbiAgICAgICAgICBuYW1lOiBcIldlYiBBcHBsaWNhdGlvbnNcIixcbiAgICAgICAgICBjb2xvcjogXCJyZWRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJmYS1zb2xpZCBmYS1kYXRhYmFzZVwiLFxuICAgICAgICAgIG5hbWU6IFwiU0VPIE9wdGltaXphdGlvblwiLFxuICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiXG4gICAgICAgIH1cbiAgICBcbiAgICBcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IHtyZWYsIGluVmlld30gPSB1c2VJblZpZXcoKVxuICAgICAgY29uc3QgYW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKClcbiAgICAgIGNvbnN0IHtvZmZlclJlZiwgb2ZmZXJJblZpZXd9ID0gdXNlSW5WaWV3KClcbiAgICAgIGNvbnN0IG9mZmVyQW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKClcblxuICAgICAgY29uc3QgYW5pbWF0aW9uRW5kID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgc2V0QWJvdXRDb3VudGVyKGNvdW50ZXIgPT4gY291bnRlciArIDEpXG4gICAgICAgIGFuaW1hdGlvbi5zdGFydCh7XG4gICAgICAgICAgeDpcIi05MHZ3XCJcbiAgICAgIH0pIFxuICAgICAgfVxuXG4gICAgICBjb25zdCBvZmZlckVuZCA9ICgpPT4ge1xuXG4gICAgICB9XG4gICAgXG4gICAgICB1c2VFZmZlY3QoKCk9PiB7XG5cbiAgICAgICAgaWYgKGluVmlldykge1xuICAgICAgICAgIGFuaW1hdGlvbi5zdGFydCh7XG4gICAgICAgICAgICAgIHg6MCxcbiAgICAgICAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICBpZiAoIWluVmlldykge1xuICAgICAgICAgIGlmIChBYm91dENvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgYW5pbWF0aW9uRW5kKClcbiAgICAgICAgfVxuICAgICAgfSxbaW5WaWV3XSlcblxuICAgICAgdXNlRWZmZWN0KCgpPT4ge1xuXG4gICAgICAgIGlmIChvZmZlckluVmlldykge1xuICAgICAgICAgIG9mZmVyQW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgICAgICAgeDowLFxuICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIGlmICghb2ZmZXJJblZpZXcpIHtcblxuICAgICAgICAgIG9mZmVyQW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgICAgIHg6XCItMTAwdndcIlxuICAgICAgICAgIH0pIFxuICAgICAgICB9XG4gICAgICB9LFtvZmZlckluVmlld10pXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e3JlZn0+XG5cbiAgICA8bW90aW9uLmRpdiBhbmltYXRlPXthbmltYXRpb259PlxuICAgICAgICA8ZGl2IGlkPVwiYWJvdXRcIj5cbiAgICAgICAgPGg1PkFCT1VUIFVTPC9oNT5cbiAgICAgICAgPGgzPldITyBBTSBJPzwvaDM+IDxiciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICAgICBcbiAgICAgICAgPHA+XG4gICAgICAgICAgSGksIGJldCB5b3UgYWxyZWFkeSBrbm93IHRoaXMsIGJ1dCA8Yj5teSBuYW1lIGlzIE1vc2VzIENodWt3dWRpIE53aWdiZXJpPC9iPi4gSSBpZGVudGlmeSBhcyBhbiBlbnRyeSBsZXZlbCwganVuaW9yIGZyb250IGVuZCB3ZWIgZGV2ZWxvcGVyXG4gICAgICAgICAgICB3aXRoIGdvb2QgaW50ZXJlc3QgaW4gaU9TLiBMZXZlcmFnaW5nIHRoZSBsYXRlc3Qgd2ViIHRlY2hub2xvZ2llcywgSSBjcmVhdGUgc2luZ2xlIHBhZ2Ugd2ViIGFwcGxpY2F0aW9ucywgcHJvcGVybHkgcmVzcG9uc2l2ZSwgZnVuY3Rpb25hbCBhbmQgU0VPIG9wdGltaXplZCB3ZWJzaXRlcy4gSGV5LCBJIGFtIGZvciB0aGUgbW9zdCBwYXJ0IGEgZnJvbnQgZW5kIGRldmVsb3BlciBidXQsIEkgY2FuIGludGVncmF0ZSB3aXRoIGEgYmFja2VuZCBpZiBuZWVkZWQsIGNyZWF0aW5nIGEgZnVsbCBzdGFjayB3ZWJzaXRlIG9uIHJlcXVlc3Twn5iJLiBJIGNyZWF0ZSBmcm9udCBJT1MgYXBwbGljYXRpb25zIHdpdGggU3dpZnQgdG9vLlxuICAgICAgICAgICAgPGJyIC8+IDxiciAvPlxuICAgICAgICAgICAgQXQgdGhlIG1vbWVudCwgSSBhbSBhIDMwMEwgc3R1ZGVudCBvZiBDaGVtaWNhbCBFbmdpbmVlcmluZyBpbiB0aGUgVW5pdmVyc2l0eSBvZiBMYWdvcywgQWtva2EuIE15IGhvYmJpZXMgaW5jbHVkZSBjb2RpbmcoZHVoKSwgd2ViIGRldmVsb3BtZW50KG9idmlvdXNseSksIG1vYmlsZSBkZXZlbG9wbWVudChsb2zwn5iCKSBhbmQgRklGQS4gSSBhbSBhbHNvIHByZXR0eSBkZWNlbnQgaW4gZnJlbmNoIGxhbmd1YWdlKCBvbGEgYW1pZ28hKVxuICAgICAgICA8L3A+IDxiciAvPlxuXG4gICAgICAgIFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICBhbmltYXRlPXtvZmZlckFuaW1hdGlvbn1cbiAgICAgICAgPlxuICAgICAgICA8ZGl2IGlkPVwic2VydmljZXNcIiBjbGFzc05hbWU9e3N0eWxlcy5jbGFzc2VzQ29udGFpbmVyfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsYXNzZXMubWFwKChza2lsbCxrZXkpPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBwcm9ncmVzcz17ZmFsc2V9IGJvcmRlcj17c2tpbGwuY29sb3J9IGNsYXNzbmFtZT17c2tpbGwuaWNvbn0ga2V5PXtrZXl9IG5hbWU9e3NraWxsLm5hbWV9IC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICBcblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlSW5WaWV3IiwidXNlRWZmZWN0IiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwibWFpbnN0eWxlcyIsIkFib3V0IiwiQWJvdXRDb3VudGVyIiwic2V0QWJvdXRDb3VudGVyIiwiaWNvbiIsIm5hbWUiLCJjb2xvciIsImNsYXNzZXMiLCJzZXRDbGFzc2VzIiwicmVmIiwiaW5WaWV3IiwiYW5pbWF0aW9uIiwib2ZmZXJSZWYiLCJvZmZlckluVmlldyIsIm9mZmVyQW5pbWF0aW9uIiwiYW5pbWF0aW9uRW5kIiwiY291bnRlciIsInN0YXJ0IiwieCIsIm9mZmVyRW5kIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRpdiIsImFuaW1hdGUiLCJpZCIsImg1IiwiaDMiLCJiciIsInAiLCJiIiwiY2xhc3NOYW1lIiwiY2xhc3Nlc0NvbnRhaW5lciIsIm1hcCIsInNraWxsIiwia2V5IiwicHJvZ3Jlc3MiLCJib3JkZXIiLCJjbGFzc25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/about_me/About.jsx\n"));

/***/ })

});