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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/Card */ \"./components/cards/Card.jsx\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About.module.css */ \"./components/about_me/About.module.css\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_About_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar About = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), AboutCounter = ref[0], setAboutCounter = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            icon: \"fa-solid fa-code\",\n            name: \"Web Development\",\n            color: \"purple\"\n        },\n        {\n            icon: \"fa-brands fa-apple\",\n            name: \"iOS Applications\",\n            color: \"#2c98f0\"\n        },\n        {\n            icon: \"fa-solid fa-mobile\",\n            name: \"Web Applications\",\n            color: \"red\"\n        }\n    ]), classes = ref1[0], setClasses = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), 2), ref3 = ref2[0], inView = ref2[1];\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    var ref4 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), 2), offerRef = ref4[0], offerInView = ref4[1];\n    var offerAnimation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    var animationEnd = function() {\n        setAboutCounter(function(counter) {\n            return counter + 1;\n        });\n        animation.start({\n            x: \"-90vw\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (inView) {\n            animation.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 1\n                }\n            });\n        }\n        if (!inView) {\n            if (AboutCounter >= 1) {\n                return;\n            }\n            animationEnd();\n        }\n    }, [\n        inView\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (offerInView) {\n            offerAnimation.start({\n                scale: 1,\n                opacity: 1,\n                transition: {\n                    duration: 0.8,\n                    delay: 0.8,\n                    type: \"spring\",\n                    bounce: 0.5\n                }\n            });\n        }\n        if (!offerInView) {\n            offerAnimation.start({\n                scale: 0.1,\n                opacity: 0\n            });\n        }\n    }, [\n        offerInView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                animate: animation,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"about\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"ABOUT US\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"WHO AM I?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 9\n                        }, _this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 28\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Hi, bet you already know this, but \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"my name is Moses Chukwudi Nwigberi\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 46\n                    }, _this),\n                    \" and I enjoy creating things that live on the internet. I am a front end web developer with good interest in iOS. Leveraging the latest web technologies, I design and code beautifully simple things and I love what I do. Check out some of my work in the Projects section.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 18\n                    }, _this),\n                    \"As a web developer, I love writing code, creating front end and full stack web apps, and of course, mobile development(probably mentioned this 200 times). I am outdoorsy, when I am not sitting in front of my Mac, squashing bugs and wondering why the code I wrote yesterday \",\n                    \"isn't working now,\",\n                    \" I am most probably with friends and family or scrolling through my Twitter timeline, Quora or Medium.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                lineNumber: 115,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: offerRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    animate: offerAnimation,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"services\",\n                        className: (_About_module_css__WEBPACK_IMPORTED_MODULE_6___default().classesContainer),\n                        children: classes.map(function(skill, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                                progress: false,\n                                border: skill.color,\n                                classname: skill.icon,\n                                name: skill.name\n                            }, key, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n};\n_s(About, \"W1RQVDHyqPEO/lGZxNtrEoBDZB0=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2FBRVgsQ0FDUDtBQUNILENBQUM7R0E3SFl6QyxLQUFLOztRQTZCVUosa0VBQVM7UUFDYkcsdURBQVk7UUFDRUgsa0VBQVM7UUFDbEJHLHVEQUFZOzs7QUFoQzVCQyxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWJvdXRfbWUvQWJvdXQuanN4PzQ0M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jYXJkcy9DYXJkXCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BYm91dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuXG5cbmV4cG9ydCBjb25zdCBBYm91dCA9ICgpID0+IHtcblxuXG4gICAgY29uc3QgW0Fib3V0Q291bnRlcixzZXRBYm91dENvdW50ZXJdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbY2xhc3NlcyxzZXRDbGFzc2VzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtc29saWQgZmEtY29kZVwiLFxuICAgICAgICAgIG5hbWU6IFwiV2ViIERldmVsb3BtZW50XCIsXG4gICAgICAgICAgY29sb3I6IFwicHVycGxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtYnJhbmRzIGZhLWFwcGxlXCIsXG4gICAgICAgICAgbmFtZTogXCJpT1MgQXBwbGljYXRpb25zXCIsXG4gICAgICAgICAgY29sb3I6IFwiIzJjOThmMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLXNvbGlkIGZhLW1vYmlsZVwiLFxuICAgICAgICAgIG5hbWU6IFwiV2ViIEFwcGxpY2F0aW9uc1wiLFxuICAgICAgICAgIGNvbG9yOiBcInJlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBpY29uOiBcImZhLXNvbGlkIGZhLWRhdGFiYXNlXCIsXG4gICAgICAgIC8vICAgbmFtZTogXCJSZXNwb25zaXZlIFdlYiBEZXNpZ25cIixcbiAgICAgICAgLy8gICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIlxuICAgICAgICAvLyB9XG4gICAgXG4gICAgXG4gICAgICBdKVxuXG4gICAgICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KClcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHVzZUFuaW1hdGlvbigpXG4gICAgICBjb25zdCBbb2ZmZXJSZWYsIG9mZmVySW5WaWV3XSA9IHVzZUluVmlldygpXG4gICAgICBjb25zdCBvZmZlckFuaW1hdGlvbiA9IHVzZUFuaW1hdGlvbigpXG5cbiAgICAgIGNvbnN0IGFuaW1hdGlvbkVuZCA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHNldEFib3V0Q291bnRlcihjb3VudGVyID0+IGNvdW50ZXIgKyAxKVxuICAgICAgICBhbmltYXRpb24uc3RhcnQoe1xuICAgICAgICAgIHg6XCItOTB2d1wiXG4gICAgICB9KSBcbiAgICAgIH1cbiAgICBcbiAgICAgIHVzZUVmZmVjdCgoKT0+IHtcblxuICAgICAgICBpZiAoaW5WaWV3KSB7XG4gICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgICAgICAgeDowLFxuICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIGlmICghaW5WaWV3KSB7XG4gICAgICAgICAgaWYgKEFib3V0Q291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBhbmltYXRpb25FbmQoKVxuICAgICAgICB9XG4gICAgICB9LFtpblZpZXddKVxuXG4gICAgICB1c2VFZmZlY3QoKCk9PiB7XG5cbiAgICAgICAgaWYgKG9mZmVySW5WaWV3KSB7XG4gICAgICAgICBcbiAgICAgICAgICBvZmZlckFuaW1hdGlvbi5zdGFydCh7XG4gICAgICAgICAgICAgIHNjYWxlOjEsXG4gICAgICAgICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgICAgICAgZGVsYXk6MC44LFxuICAgICAgICAgICAgICAgIHR5cGU6J3NwcmluZycsXG4gICAgICAgICAgICAgICAgYm91bmNlOjAuNVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgaWYgKCFvZmZlckluVmlldykge1xuICAgICAgICAgIFxuICAgICAgICAgIG9mZmVyQW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgICAgIHNjYWxlOjAuMSxcbiAgICAgICAgICAgIG9wYWNpdHk6MFxuICAgICAgICAgIH0pIFxuICAgICAgICB9XG4gICAgICB9LFtvZmZlckluVmlld10pXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtyZWZ9PlxuXG4gICAgPG1vdGlvbi5kaXYgYW5pbWF0ZT17YW5pbWF0aW9ufT5cbiAgICAgICAgPGRpdiBpZD1cImFib3V0XCI+XG4gICAgICAgIDxoNT5BQk9VVCBVUzwvaDU+XG4gICAgICAgIDxoMz5XSE8gQU0gST88L2gzPiA8YnIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICAgICAgXG4gICAgICAgIDxwPlxuICAgICAgICAgIEhpLCBiZXQgeW91IGFscmVhZHkga25vdyB0aGlzLCBidXQgPGI+bXkgbmFtZSBpcyBNb3NlcyBDaHVrd3VkaSBOd2lnYmVyaTwvYj4gYW5kIEkgZW5qb3kgY3JlYXRpbmcgdGhpbmdzIHRoYXQgbGl2ZSBvbiB0aGUgaW50ZXJuZXQuIEkgYW0gYSBmcm9udCBlbmQgd2ViIGRldmVsb3BlciB3aXRoXG4gICAgICAgICAgICBnb29kIGludGVyZXN0IGluIGlPUy4gTGV2ZXJhZ2luZyB0aGUgbGF0ZXN0IHdlYiB0ZWNobm9sb2dpZXMsIEkgZGVzaWduIGFuZCBjb2RlIGJlYXV0aWZ1bGx5IHNpbXBsZSB0aGluZ3MgYW5kIEkgbG92ZSB3aGF0IEkgZG8uIENoZWNrIG91dCBzb21lIG9mIG15IHdvcmsgaW4gdGhlIFByb2plY3RzIHNlY3Rpb24uXG4gICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgIEFzIGEgd2ViIGRldmVsb3BlciwgSSBsb3ZlIHdyaXRpbmcgY29kZSwgY3JlYXRpbmcgZnJvbnQgZW5kIGFuZCBmdWxsIHN0YWNrIHdlYiBhcHBzLCBhbmQgb2YgY291cnNlLCBtb2JpbGUgZGV2ZWxvcG1lbnQocHJvYmFibHkgbWVudGlvbmVkIHRoaXMgMjAwIHRpbWVzKS4gSSBhbSBvdXRkb29yc3ksIHdoZW4gSSBhbSBub3Qgc2l0dGluZyBpbiBmcm9udCBvZiBteSBNYWMsIHNxdWFzaGluZyBidWdzIGFuZCB3b25kZXJpbmcgd2h5IHRoZSBjb2RlIEkgd3JvdGUgeWVzdGVyZGF5IHtgaXNuJ3Qgd29ya2luZyBub3csYH0gSSBhbSBtb3N0IHByb2JhYmx5IHdpdGggZnJpZW5kcyBhbmQgZmFtaWx5IG9yIHNjcm9sbGluZyB0aHJvdWdoIG15IFR3aXR0ZXIgdGltZWxpbmUsIFF1b3JhIG9yIE1lZGl1bS5cbiAgICAgICAgPC9wPiA8YnIgLz5cblxuICAgICAgICA8ZGl2IHJlZj17b2ZmZXJSZWZ9PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICBhbmltYXRlPXtvZmZlckFuaW1hdGlvbn1cbiAgICAgICAgPlxuICAgICAgICA8ZGl2IGlkPVwic2VydmljZXNcIiBjbGFzc05hbWU9e3N0eWxlcy5jbGFzc2VzQ29udGFpbmVyfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsYXNzZXMubWFwKChza2lsbCxrZXkpPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBwcm9ncmVzcz17ZmFsc2V9IGJvcmRlcj17c2tpbGwuY29sb3J9IGNsYXNzbmFtZT17c2tpbGwuaWNvbn0ga2V5PXtrZXl9IG5hbWU9e3NraWxsLm5hbWV9IC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUluVmlldyIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsIkFib3V0IiwiQWJvdXRDb3VudGVyIiwic2V0QWJvdXRDb3VudGVyIiwiaWNvbiIsIm5hbWUiLCJjb2xvciIsImNsYXNzZXMiLCJzZXRDbGFzc2VzIiwicmVmIiwiaW5WaWV3IiwiYW5pbWF0aW9uIiwib2ZmZXJSZWYiLCJvZmZlckluVmlldyIsIm9mZmVyQW5pbWF0aW9uIiwiYW5pbWF0aW9uRW5kIiwiY291bnRlciIsInN0YXJ0IiwieCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzY2FsZSIsImRlbGF5IiwidHlwZSIsImJvdW5jZSIsImRpdiIsImFuaW1hdGUiLCJpZCIsImg1IiwiaDMiLCJiciIsInAiLCJiIiwiY2xhc3NOYW1lIiwiY2xhc3Nlc0NvbnRhaW5lciIsIm1hcCIsInNraWxsIiwia2V5IiwicHJvZ3Jlc3MiLCJib3JkZXIiLCJjbGFzc25hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/about_me/About.jsx\n"));

/***/ })

});