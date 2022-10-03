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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/Card */ \"./components/cards/Card.jsx\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About.module.css */ \"./components/about_me/About.module.css\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_About_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar About = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), AboutCounter = ref[0], setAboutCounter = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            icon: \"fa-solid fa-code\",\n            name: \"Web Development\",\n            color: \"purple\"\n        },\n        {\n            icon: \"fa-brands fa-apple\",\n            name: \"iOS Applications\",\n            color: \"#2c98f0\"\n        },\n        {\n            icon: \"fa-solid fa-mobile\",\n            name: \"Web Applications\",\n            color: \"red\"\n        },\n        {\n            icon: \"fa-solid fa-database\",\n            name: \"SEO Optimization\",\n            color: \"rgba(0, 0, 0, 0.6)\"\n        }\n    ]), classes = ref1[0], setClasses = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), 2), ref3 = ref2[0], inView = ref2[1];\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    var ref4 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), 2), offerRef = ref4[0], offerInView = ref4[1];\n    var offerAnimation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    var animationEnd = function() {\n        setAboutCounter(function(counter) {\n            return counter + 1;\n        });\n        animation.start({\n            x: \"-90vw\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (inView) {\n            animation.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 1\n                }\n            });\n        }\n        if (!inView) {\n            if (AboutCounter >= 1) {\n                return;\n            }\n            animationEnd();\n        }\n    }, [\n        inView\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (offerInView) {\n            console.log(\"inview\");\n            offerAnimation.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 1\n                }\n            });\n        }\n        if (!offerInView) {\n            console.log(\"notinview\");\n            offerAnimation.start({\n                x: \"-100vw\"\n            });\n        }\n    }, [\n        offerInView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                animate: animation,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"about\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"ABOUT US\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"WHO AM I?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 9\n                        }, _this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 28\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 100,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Hi, bet you already know this, but \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"my name is Moses Chukwudi Nwigberi\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 46\n                    }, _this),\n                    \". I identify as an entry level, junior front end web developer with good interest in iOS. Leveraging the latest web technologies, I create single page web applications, properly responsive, functional and SEO optimized websites. Hey, I am for the most part a front end developer but, I can integrate with a backend if needed, creating a full stack website on request\\uD83D\\uDE09. I create front IOS applications with Swift too.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 13\n                    }, _this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 20\n                    }, _this),\n                    \"At the moment, I am a 300L student of Chemical Engineering in the University of Lagos, Akoka. My hobbies include coding(duh), web development(obviously), mobile development(lol\\uD83D\\uDE02) and FIFA. I am also pretty decent in french language( ola amigo!)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 112,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: offerRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    animate: offerAnimation,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"services\",\n                        className: (_About_module_css__WEBPACK_IMPORTED_MODULE_6___default().classesContainer),\n                        children: classes.map(function(skill, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                                progress: false,\n                                border: skill.color,\n                                classname: skill.icon,\n                                name: skill.name\n                            }, key, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, _this);\n};\n_s(About, \"NUwAb0IjW7VoDyf/R81KZUog1V8=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzZCQUVGOzs7Ozt5QkFDTzs7Ozs7cUJBQ1A7Ozs7OzthQUdKLENBQ1A7QUFDSCxDQUFDO0dBMUhZbkMsS0FBSzs7UUE2QlVMLGtFQUFTO1FBQ2JHLHVEQUFZO1FBQ0VILGtFQUFTO1FBQ2xCRyx1REFBWTs7O0FBaEM1QkUsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Fib3V0X21lL0Fib3V0LmpzeD80NDNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZHMvQ2FyZFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWJvdXQubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBtYWluc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBjb25zdCBBYm91dCA9ICgpID0+IHtcblxuXG4gICAgY29uc3QgW0Fib3V0Q291bnRlcixzZXRBYm91dENvdW50ZXJdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbY2xhc3NlcyxzZXRDbGFzc2VzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtc29saWQgZmEtY29kZVwiLFxuICAgICAgICAgIG5hbWU6IFwiV2ViIERldmVsb3BtZW50XCIsXG4gICAgICAgICAgY29sb3I6IFwicHVycGxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtYnJhbmRzIGZhLWFwcGxlXCIsXG4gICAgICAgICAgbmFtZTogXCJpT1MgQXBwbGljYXRpb25zXCIsXG4gICAgICAgICAgY29sb3I6IFwiIzJjOThmMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLXNvbGlkIGZhLW1vYmlsZVwiLFxuICAgICAgICAgIG5hbWU6IFwiV2ViIEFwcGxpY2F0aW9uc1wiLFxuICAgICAgICAgIGNvbG9yOiBcInJlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLXNvbGlkIGZhLWRhdGFiYXNlXCIsXG4gICAgICAgICAgbmFtZTogXCJTRU8gT3B0aW1pemF0aW9uXCIsXG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCJcbiAgICAgICAgfVxuICAgIFxuICAgIFxuICAgICAgXSlcblxuICAgICAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpXG4gICAgICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24oKVxuICAgICAgY29uc3QgW29mZmVyUmVmLCBvZmZlckluVmlld10gPSB1c2VJblZpZXcoKVxuICAgICAgY29uc3Qgb2ZmZXJBbmltYXRpb24gPSB1c2VBbmltYXRpb24oKVxuXG4gICAgICBjb25zdCBhbmltYXRpb25FbmQgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBzZXRBYm91dENvdW50ZXIoY291bnRlciA9PiBjb3VudGVyICsgMSlcbiAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgICB4OlwiLTkwdndcIlxuICAgICAgfSkgXG4gICAgICB9XG4gICAgXG4gICAgICB1c2VFZmZlY3QoKCk9PiB7XG5cbiAgICAgICAgaWYgKGluVmlldykge1xuICAgICAgICAgIGFuaW1hdGlvbi5zdGFydCh7XG4gICAgICAgICAgICAgIHg6MCxcbiAgICAgICAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICBpZiAoIWluVmlldykge1xuICAgICAgICAgIGlmIChBYm91dENvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgYW5pbWF0aW9uRW5kKClcbiAgICAgICAgfVxuICAgICAgfSxbaW5WaWV3XSlcblxuICAgICAgdXNlRWZmZWN0KCgpPT4ge1xuXG4gICAgICAgIGlmIChvZmZlckluVmlldykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW52aWV3XCIpXG4gICAgICAgICAgb2ZmZXJBbmltYXRpb24uc3RhcnQoe1xuICAgICAgICAgICAgICB4OjAsXG4gICAgICAgICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgaWYgKCFvZmZlckluVmlldykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90aW52aWV3XCIpXG4gICAgICAgICAgb2ZmZXJBbmltYXRpb24uc3RhcnQoe1xuICAgICAgICAgICAgeDpcIi0xMDB2d1wiXG4gICAgICAgICAgfSkgXG4gICAgICAgIH1cbiAgICAgIH0sW29mZmVySW5WaWV3XSlcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17cmVmfT5cblxuICAgIDxtb3Rpb24uZGl2IGFuaW1hdGU9e2FuaW1hdGlvbn0+XG4gICAgICAgIDxkaXYgaWQ9XCJhYm91dFwiPlxuICAgICAgICA8aDU+QUJPVVQgVVM8L2g1PlxuICAgICAgICA8aDM+V0hPIEFNIEk/PC9oMz4gPGJyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIFxuICAgICAgICA8cD5cbiAgICAgICAgICBIaSwgYmV0IHlvdSBhbHJlYWR5IGtub3cgdGhpcywgYnV0IDxiPm15IG5hbWUgaXMgTW9zZXMgQ2h1a3d1ZGkgTndpZ2Jlcmk8L2I+LiBJIGlkZW50aWZ5IGFzIGFuIGVudHJ5IGxldmVsLCBqdW5pb3IgZnJvbnQgZW5kIHdlYiBkZXZlbG9wZXJcbiAgICAgICAgICAgIHdpdGggZ29vZCBpbnRlcmVzdCBpbiBpT1MuIExldmVyYWdpbmcgdGhlIGxhdGVzdCB3ZWIgdGVjaG5vbG9naWVzLCBJIGNyZWF0ZSBzaW5nbGUgcGFnZSB3ZWIgYXBwbGljYXRpb25zLCBwcm9wZXJseSByZXNwb25zaXZlLCBmdW5jdGlvbmFsIGFuZCBTRU8gb3B0aW1pemVkIHdlYnNpdGVzLiBIZXksIEkgYW0gZm9yIHRoZSBtb3N0IHBhcnQgYSBmcm9udCBlbmQgZGV2ZWxvcGVyIGJ1dCwgSSBjYW4gaW50ZWdyYXRlIHdpdGggYSBiYWNrZW5kIGlmIG5lZWRlZCwgY3JlYXRpbmcgYSBmdWxsIHN0YWNrIHdlYnNpdGUgb24gcmVxdWVzdPCfmIkuIEkgY3JlYXRlIGZyb250IElPUyBhcHBsaWNhdGlvbnMgd2l0aCBTd2lmdCB0b28uXG4gICAgICAgICAgICA8YnIgLz4gPGJyIC8+XG4gICAgICAgICAgICBBdCB0aGUgbW9tZW50LCBJIGFtIGEgMzAwTCBzdHVkZW50IG9mIENoZW1pY2FsIEVuZ2luZWVyaW5nIGluIHRoZSBVbml2ZXJzaXR5IG9mIExhZ29zLCBBa29rYS4gTXkgaG9iYmllcyBpbmNsdWRlIGNvZGluZyhkdWgpLCB3ZWIgZGV2ZWxvcG1lbnQob2J2aW91c2x5KSwgbW9iaWxlIGRldmVsb3BtZW50KGxvbPCfmIIpIGFuZCBGSUZBLiBJIGFtIGFsc28gcHJldHR5IGRlY2VudCBpbiBmcmVuY2ggbGFuZ3VhZ2UoIG9sYSBhbWlnbyEpXG4gICAgICAgIDwvcD4gPGJyIC8+XG5cbiAgICAgICAgPGRpdiByZWY9e29mZmVyUmVmfT5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgYW5pbWF0ZT17b2ZmZXJBbmltYXRpb259XG4gICAgICAgID5cbiAgICAgICAgPGRpdiBpZD1cInNlcnZpY2VzXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2xhc3Nlc0NvbnRhaW5lcn0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbGFzc2VzLm1hcCgoc2tpbGwsa2V5KT0+IChcbiAgICAgICAgICAgICAgPENhcmQgcHJvZ3Jlc3M9e2ZhbHNlfSBib3JkZXI9e3NraWxsLmNvbG9yfSBjbGFzc25hbWU9e3NraWxsLmljb259IGtleT17a2V5fSBuYW1lPXtza2lsbC5uYW1lfSAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VJblZpZXciLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJtYWluc3R5bGVzIiwiQWJvdXQiLCJBYm91dENvdW50ZXIiLCJzZXRBYm91dENvdW50ZXIiLCJpY29uIiwibmFtZSIsImNvbG9yIiwiY2xhc3NlcyIsInNldENsYXNzZXMiLCJyZWYiLCJpblZpZXciLCJhbmltYXRpb24iLCJvZmZlclJlZiIsIm9mZmVySW5WaWV3Iiwib2ZmZXJBbmltYXRpb24iLCJhbmltYXRpb25FbmQiLCJjb3VudGVyIiwic3RhcnQiLCJ4Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJhbmltYXRlIiwiaWQiLCJoNSIsImgzIiwiYnIiLCJwIiwiYiIsImNsYXNzTmFtZSIsImNsYXNzZXNDb250YWluZXIiLCJtYXAiLCJza2lsbCIsImtleSIsInByb2dyZXNzIiwiYm9yZGVyIiwiY2xhc3NuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/about_me/About.jsx\n"));

/***/ })

});