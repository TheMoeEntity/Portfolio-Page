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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/Card */ \"./components/cards/Card.jsx\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./About.module.css */ \"./components/about_me/About.module.css\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_About_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar About = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), AboutCounter = ref[0], setAboutCounter = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            icon: \"fa-solid fa-code\",\n            name: \"Web Development\",\n            color: \"purple\"\n        },\n        {\n            icon: \"fa-brands fa-apple\",\n            name: \"iOS Applications\",\n            color: \"#2c98f0\"\n        },\n        {\n            icon: \"fa-solid fa-mobile\",\n            name: \"Web Applications\",\n            color: \"red\"\n        },\n        {\n            icon: \"fa-solid fa-database\",\n            name: \"SEO Optimization\",\n            color: \"rgba(0, 0, 0, 0.6)\"\n        }\n    ]), classes = ref1[0], setClasses = ref1[1];\n    var ref2 = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)(), ref3 = ref2.ref, inView = ref2.inView;\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    var ref4 = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)(), offerRef = ref4.offerRef, offerInView = ref4.offerInView;\n    var offerAnimation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    var animationEnd = function() {\n        setAboutCounter(function(counter) {\n            return counter + 1;\n        });\n        animation.start({\n            x: \"-90vw\"\n        });\n    };\n    var offerEnd = function() {};\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (inView) {\n            animation.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 1\n                }\n            });\n        }\n        if (!inView) {\n            if (AboutCounter >= 1) {\n                return;\n            }\n            animationEnd();\n        }\n    }, [\n        inView\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (offerInView) {\n            offerAnimation.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 1\n                }\n            });\n        }\n        if (!offerInView) {\n            offerAnimation.start({\n                x: \"-100vw\"\n            });\n        }\n    }, [\n        offerInView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                animate: animation,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"about\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"ABOUT US\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"WHO AM I?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 9\n                        }, _this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 28\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Hi, bet you already know this, but \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"my name is Moses Chukwudi Nwigberi\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 46\n                    }, _this),\n                    \". I identify as an entry level, junior front end web developer with good interest in iOS. Leveraging the latest web technologies, I create single page web applications, properly responsive, functional and SEO optimized websites. Hey, I am for the most part a front end developer but, I can integrate with a backend if needed, creating a full stack website on request\\uD83D\\uDE09. I create front IOS applications with Swift too.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, _this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 20\n                    }, _this),\n                    \"At the moment, I am a 300L student of Chemical Engineering in the University of Lagos, Akoka. My hobbies include coding(duh), web development(obviously), mobile development(lol\\uD83D\\uDE02) and FIFA. I am also pretty decent in french language( ola amigo!)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 115,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"services\",\n                className: (_About_module_css__WEBPACK_IMPORTED_MODULE_5___default().classesContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: classes.map(function(skill, key) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {}, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 122,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n};\n_s(About, \"r3btsunt5Y8xTWut/EVQaMyzuKw=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7SUFJcEIscUJBQ0UsOERBQUNVLEtBQUc7UUFBQ2QsR0FBRyxFQUFFQSxJQUFHOzswQkFFYiw4REFBQ1gscURBQVU7Z0JBQUMwQixPQUFPLEVBQUViLFNBQVM7MEJBQzFCLDRFQUFDWSxLQUFHO29CQUFDRSxFQUFFLEVBQUMsT0FBTzs7c0NBQ2YsOERBQUNDLElBQUU7c0NBQUMsVUFBUTs7Ozs7aUNBQUs7c0NBQ2pCLDhEQUFDQyxJQUFFO3NDQUFDLFdBQVM7Ozs7O2lDQUFLO3dCQUFBLEdBQUM7c0NBQUEsOERBQUNDLElBQUU7Ozs7aUNBQUc7Ozs7Ozt5QkFDbkI7Ozs7O3FCQUNHOzBCQUVULDhEQUFDQyxHQUFDOztvQkFBQyxxQ0FDa0M7a0NBQUEsOERBQUNDLEdBQUM7a0NBQUMsb0NBQWtDOzs7Ozs2QkFBSTtvQkFBQSw2YUFFMUU7a0NBQUEsOERBQUNGLElBQUU7Ozs7NkJBQUc7b0JBQUEsR0FBQztrQ0FBQSw4REFBQ0EsSUFBRTs7Ozs2QkFBRztvQkFBQSxpUUFFakI7Ozs7OztxQkFBSTtZQUFBLEdBQUM7MEJBQUEsOERBQUNBLElBQUU7Ozs7cUJBQUc7MEJBRVgsOERBQUNMLEtBQUc7Z0JBQUNFLEVBQUUsRUFBQyxVQUFVO2dCQUFDTSxTQUFTLEVBQUVyQywyRUFBdUI7MEJBQ3JELDRFQUFDdUMsSUFBRTs4QkFHQzFCLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUNDLEdBQUc7NkNBQ3BCLDhEQUFDdEMsb0RBQVM7Ozs7aUNBRUU7cUJBRWIsQ0FBQzs7Ozs7eUJBRUQ7Ozs7O3FCQUNDOzs7Ozs7YUFHSixDQUNQO0FBQ0gsQ0FBQztHQTVIWUcsS0FBSzs7UUE2QlVMLGtFQUFTO1FBQ2JHLHVEQUFZO1FBQ0VILGtFQUFTO1FBQ2xCRyx1REFBWTs7O0FBaEM1QkUsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Fib3V0X21lL0Fib3V0LmpzeD80NDNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZHMvQ2FyZFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWJvdXQubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBtYWluc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBjb25zdCBBYm91dCA9ICgpID0+IHtcblxuXG4gICAgY29uc3QgW0Fib3V0Q291bnRlcixzZXRBYm91dENvdW50ZXJdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbY2xhc3NlcyxzZXRDbGFzc2VzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtc29saWQgZmEtY29kZVwiLFxuICAgICAgICAgIG5hbWU6IFwiV2ViIERldmVsb3BtZW50XCIsXG4gICAgICAgICAgY29sb3I6IFwicHVycGxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtYnJhbmRzIGZhLWFwcGxlXCIsXG4gICAgICAgICAgbmFtZTogXCJpT1MgQXBwbGljYXRpb25zXCIsXG4gICAgICAgICAgY29sb3I6IFwiIzJjOThmMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLXNvbGlkIGZhLW1vYmlsZVwiLFxuICAgICAgICAgIG5hbWU6IFwiV2ViIEFwcGxpY2F0aW9uc1wiLFxuICAgICAgICAgIGNvbG9yOiBcInJlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLXNvbGlkIGZhLWRhdGFiYXNlXCIsXG4gICAgICAgICAgbmFtZTogXCJTRU8gT3B0aW1pemF0aW9uXCIsXG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCJcbiAgICAgICAgfVxuICAgIFxuICAgIFxuICAgICAgXSlcblxuICAgICAgY29uc3Qge3JlZiwgaW5WaWV3fSA9IHVzZUluVmlldygpXG4gICAgICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24oKVxuICAgICAgY29uc3Qge29mZmVyUmVmLCBvZmZlckluVmlld30gPSB1c2VJblZpZXcoKVxuICAgICAgY29uc3Qgb2ZmZXJBbmltYXRpb24gPSB1c2VBbmltYXRpb24oKVxuXG4gICAgICBjb25zdCBhbmltYXRpb25FbmQgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBzZXRBYm91dENvdW50ZXIoY291bnRlciA9PiBjb3VudGVyICsgMSlcbiAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgICB4OlwiLTkwdndcIlxuICAgICAgfSkgXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9mZmVyRW5kID0gKCk9PiB7XG5cbiAgICAgIH1cbiAgICBcbiAgICAgIHVzZUVmZmVjdCgoKT0+IHtcblxuICAgICAgICBpZiAoaW5WaWV3KSB7XG4gICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgICAgICAgeDowLFxuICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIGlmICghaW5WaWV3KSB7XG4gICAgICAgICAgaWYgKEFib3V0Q291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBhbmltYXRpb25FbmQoKVxuICAgICAgICB9XG4gICAgICB9LFtpblZpZXddKVxuXG4gICAgICB1c2VFZmZlY3QoKCk9PiB7XG5cbiAgICAgICAgaWYgKG9mZmVySW5WaWV3KSB7XG4gICAgICAgICAgb2ZmZXJBbmltYXRpb24uc3RhcnQoe1xuICAgICAgICAgICAgICB4OjAsXG4gICAgICAgICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgaWYgKCFvZmZlckluVmlldykge1xuXG4gICAgICAgICAgb2ZmZXJBbmltYXRpb24uc3RhcnQoe1xuICAgICAgICAgICAgeDpcIi0xMDB2d1wiXG4gICAgICAgICAgfSkgXG4gICAgICAgIH1cbiAgICAgIH0sW29mZmVySW5WaWV3XSlcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17cmVmfT5cblxuICAgIDxtb3Rpb24uZGl2IGFuaW1hdGU9e2FuaW1hdGlvbn0+XG4gICAgICAgIDxkaXYgaWQ9XCJhYm91dFwiPlxuICAgICAgICA8aDU+QUJPVVQgVVM8L2g1PlxuICAgICAgICA8aDM+V0hPIEFNIEk/PC9oMz4gPGJyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIFxuICAgICAgICA8cD5cbiAgICAgICAgICBIaSwgYmV0IHlvdSBhbHJlYWR5IGtub3cgdGhpcywgYnV0IDxiPm15IG5hbWUgaXMgTW9zZXMgQ2h1a3d1ZGkgTndpZ2Jlcmk8L2I+LiBJIGlkZW50aWZ5IGFzIGFuIGVudHJ5IGxldmVsLCBqdW5pb3IgZnJvbnQgZW5kIHdlYiBkZXZlbG9wZXJcbiAgICAgICAgICAgIHdpdGggZ29vZCBpbnRlcmVzdCBpbiBpT1MuIExldmVyYWdpbmcgdGhlIGxhdGVzdCB3ZWIgdGVjaG5vbG9naWVzLCBJIGNyZWF0ZSBzaW5nbGUgcGFnZSB3ZWIgYXBwbGljYXRpb25zLCBwcm9wZXJseSByZXNwb25zaXZlLCBmdW5jdGlvbmFsIGFuZCBTRU8gb3B0aW1pemVkIHdlYnNpdGVzLiBIZXksIEkgYW0gZm9yIHRoZSBtb3N0IHBhcnQgYSBmcm9udCBlbmQgZGV2ZWxvcGVyIGJ1dCwgSSBjYW4gaW50ZWdyYXRlIHdpdGggYSBiYWNrZW5kIGlmIG5lZWRlZCwgY3JlYXRpbmcgYSBmdWxsIHN0YWNrIHdlYnNpdGUgb24gcmVxdWVzdPCfmIkuIEkgY3JlYXRlIGZyb250IElPUyBhcHBsaWNhdGlvbnMgd2l0aCBTd2lmdCB0b28uXG4gICAgICAgICAgICA8YnIgLz4gPGJyIC8+XG4gICAgICAgICAgICBBdCB0aGUgbW9tZW50LCBJIGFtIGEgMzAwTCBzdHVkZW50IG9mIENoZW1pY2FsIEVuZ2luZWVyaW5nIGluIHRoZSBVbml2ZXJzaXR5IG9mIExhZ29zLCBBa29rYS4gTXkgaG9iYmllcyBpbmNsdWRlIGNvZGluZyhkdWgpLCB3ZWIgZGV2ZWxvcG1lbnQob2J2aW91c2x5KSwgbW9iaWxlIGRldmVsb3BtZW50KGxvbPCfmIIpIGFuZCBGSUZBLiBJIGFtIGFsc28gcHJldHR5IGRlY2VudCBpbiBmcmVuY2ggbGFuZ3VhZ2UoIG9sYSBhbWlnbyEpXG4gICAgICAgIDwvcD4gPGJyIC8+XG4gICAgICBcbiAgICAgICAgPGRpdiBpZD1cInNlcnZpY2VzXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2xhc3Nlc0NvbnRhaW5lcn0+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsYXNzZXMubWFwKChza2lsbCxrZXkpPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmxpPlxuXG4gICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VJblZpZXciLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJtYWluc3R5bGVzIiwiQWJvdXQiLCJBYm91dENvdW50ZXIiLCJzZXRBYm91dENvdW50ZXIiLCJpY29uIiwibmFtZSIsImNvbG9yIiwiY2xhc3NlcyIsInNldENsYXNzZXMiLCJyZWYiLCJpblZpZXciLCJhbmltYXRpb24iLCJvZmZlclJlZiIsIm9mZmVySW5WaWV3Iiwib2ZmZXJBbmltYXRpb24iLCJhbmltYXRpb25FbmQiLCJjb3VudGVyIiwic3RhcnQiLCJ4Iiwib2ZmZXJFbmQiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGl2IiwiYW5pbWF0ZSIsImlkIiwiaDUiLCJoMyIsImJyIiwicCIsImIiLCJjbGFzc05hbWUiLCJjbGFzc2VzQ29udGFpbmVyIiwidWwiLCJtYXAiLCJza2lsbCIsImtleSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/about_me/About.jsx\n"));

/***/ })

});