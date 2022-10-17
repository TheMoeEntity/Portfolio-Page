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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/Card */ \"./components/cards/Card.jsx\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About.module.css */ \"./components/about_me/About.module.css\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_About_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar About = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), AboutCounter = ref[0], setAboutCounter = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            icon: \"fa-solid fa-code\",\n            name: \"Web Development\",\n            color: \"purple\"\n        },\n        {\n            icon: \"fa-brands fa-apple\",\n            name: \"iOS Applications\",\n            color: \"#2c98f0\"\n        },\n        {\n            icon: \"fa-solid fa-mobile\",\n            name: \"Web Applications\",\n            color: \"red\"\n        },\n        {\n            icon: \"fa-solid fa-database\",\n            name: \"SE Optimization\",\n            color: \"rgba(0, 0, 0, 0.6)\"\n        }\n    ]), classes = ref1[0], setClasses = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), 2), ref3 = ref2[0], inView = ref2[1];\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    var ref4 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), 2), offerRef = ref4[0], offerInView = ref4[1];\n    var offerAnimation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    var animationEnd = function() {\n        setAboutCounter(function(counter) {\n            return counter + 1;\n        });\n        animation.start({\n            x: \"-90vw\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (inView) {\n            animation.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 1\n                }\n            });\n        }\n        if (!inView) {\n            if (AboutCounter >= 1) {\n                return;\n            }\n            animationEnd();\n        }\n    }, [\n        inView\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (offerInView) {\n            offerAnimation.start({\n                scale: 1,\n                opacity: 1,\n                transition: {\n                    duration: 0.8,\n                    delay: 0.8,\n                    type: \"spring\",\n                    bounce: 0.5\n                }\n            });\n        }\n        if (!offerInView) {\n            offerAnimation.start({\n                scale: 0.1,\n                opacity: 0\n            });\n        }\n    }, [\n        offerInView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                animate: animation,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"about\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"ABOUT US\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"WHO AM I?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 9\n                        }, _this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 28\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Hi, bet you already know this, but \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"my name is Moses Chukwudi Nwigberi\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 46\n                    }, _this),\n                    \". I am mostly a front end web developer with good interest in iOS development. Leveraging the latest web technologies, I create single page web applications, properly responsive, functional SE optimized websites.  Hey I am for the most part a front end developer but, I can integrate with a backend if needed, creating a full stack website on request\\uD83D\\uDE09. I create front IOS applications with Swift too.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 18\n                    }, _this),\n                    \"At the moment, I am a 300L student of Chemical Engineering in the University of Lagos, Akoka. My hobbies include coding(duh), web development(obviously), mobile development(lol\\uD83D\\uDE02) and FIFA. I am also pretty decent in french language( ola amigo!)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                lineNumber: 115,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: offerRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    animate: offerAnimation,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"services\",\n                        className: (_About_module_css__WEBPACK_IMPORTED_MODULE_6___default().classesContainer),\n                        children: classes.map(function(skill, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                                progress: false,\n                                border: skill.color,\n                                classname: skill.icon,\n                                name: skill.name\n                            }, key, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio-Page/components/about_me/About.jsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n};\n_s(About, \"dR8Oi/jcsY2H6Tm4ZA2VUz0+wjI=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVGOzs7Ozt5QkFDTzs7Ozs7cUJBQ1A7MEJBQ04sOERBQUNJLE1BQUk7Ozs7cUJBQVE7Ozs7OzthQUVYLENBQ1A7QUFDSCxDQUFDO0dBN0hZekMsS0FBSzs7UUE2QlVKLGtFQUFTO1FBQ2JHLHVEQUFZO1FBQ0VILGtFQUFTO1FBQ2xCRyx1REFBWTs7O0FBaEM1QkMsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Fib3V0X21lL0Fib3V0LmpzeD80NDNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZHMvQ2FyZFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWJvdXQubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcblxuXG5leHBvcnQgY29uc3QgQWJvdXQgPSAoKSA9PiB7XG5cblxuICAgIGNvbnN0IFtBYm91dENvdW50ZXIsc2V0QWJvdXRDb3VudGVyXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2NsYXNzZXMsc2V0Q2xhc3Nlc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLXNvbGlkIGZhLWNvZGVcIixcbiAgICAgICAgICBuYW1lOiBcIldlYiBEZXZlbG9wbWVudFwiLFxuICAgICAgICAgIGNvbG9yOiBcInB1cnBsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLWJyYW5kcyBmYS1hcHBsZVwiLFxuICAgICAgICAgIG5hbWU6IFwiaU9TIEFwcGxpY2F0aW9uc1wiLFxuICAgICAgICAgIGNvbG9yOiBcIiMyYzk4ZjBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJmYS1zb2xpZCBmYS1tb2JpbGVcIixcbiAgICAgICAgICBuYW1lOiBcIldlYiBBcHBsaWNhdGlvbnNcIixcbiAgICAgICAgICBjb2xvcjogXCJyZWRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJmYS1zb2xpZCBmYS1kYXRhYmFzZVwiLFxuICAgICAgICAgIG5hbWU6IFwiU0UgT3B0aW1pemF0aW9uXCIsXG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCJcbiAgICAgICAgfVxuICAgIFxuICAgIFxuICAgICAgXSlcblxuICAgICAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpXG4gICAgICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24oKVxuICAgICAgY29uc3QgW29mZmVyUmVmLCBvZmZlckluVmlld10gPSB1c2VJblZpZXcoKVxuICAgICAgY29uc3Qgb2ZmZXJBbmltYXRpb24gPSB1c2VBbmltYXRpb24oKVxuXG4gICAgICBjb25zdCBhbmltYXRpb25FbmQgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBzZXRBYm91dENvdW50ZXIoY291bnRlciA9PiBjb3VudGVyICsgMSlcbiAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgICB4OlwiLTkwdndcIlxuICAgICAgfSkgXG4gICAgICB9XG4gICAgXG4gICAgICB1c2VFZmZlY3QoKCk9PiB7XG5cbiAgICAgICAgaWYgKGluVmlldykge1xuICAgICAgICAgIGFuaW1hdGlvbi5zdGFydCh7XG4gICAgICAgICAgICAgIHg6MCxcbiAgICAgICAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICBpZiAoIWluVmlldykge1xuICAgICAgICAgIGlmIChBYm91dENvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgYW5pbWF0aW9uRW5kKClcbiAgICAgICAgfVxuICAgICAgfSxbaW5WaWV3XSlcblxuICAgICAgdXNlRWZmZWN0KCgpPT4ge1xuXG4gICAgICAgIGlmIChvZmZlckluVmlldykge1xuICAgICAgICAgXG4gICAgICAgICAgb2ZmZXJBbmltYXRpb24uc3RhcnQoe1xuICAgICAgICAgICAgICBzY2FsZToxLFxuICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgICAgIGRlbGF5OjAuOCxcbiAgICAgICAgICAgICAgICB0eXBlOidzcHJpbmcnLFxuICAgICAgICAgICAgICAgIGJvdW5jZTowLjVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIGlmICghb2ZmZXJJblZpZXcpIHtcbiAgICAgICAgICBcbiAgICAgICAgICBvZmZlckFuaW1hdGlvbi5zdGFydCh7XG4gICAgICAgICAgICBzY2FsZTowLjEsXG4gICAgICAgICAgICBvcGFjaXR5OjBcbiAgICAgICAgICB9KSBcbiAgICAgICAgfVxuICAgICAgfSxbb2ZmZXJJblZpZXddKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17cmVmfT5cblxuICAgIDxtb3Rpb24uZGl2IGFuaW1hdGU9e2FuaW1hdGlvbn0+XG4gICAgICAgIDxkaXYgaWQ9XCJhYm91dFwiPlxuICAgICAgICA8aDU+QUJPVVQgVVM8L2g1PlxuICAgICAgICA8aDM+V0hPIEFNIEk/PC9oMz4gPGJyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIFxuICAgICAgICA8cD5cbiAgICAgICAgICBIaSwgYmV0IHlvdSBhbHJlYWR5IGtub3cgdGhpcywgYnV0IDxiPm15IG5hbWUgaXMgTW9zZXMgQ2h1a3d1ZGkgTndpZ2Jlcmk8L2I+LiBJIGFtIG1vc3RseSBhIGZyb250IGVuZCB3ZWIgZGV2ZWxvcGVyIHdpdGhcbiAgICAgICAgICAgIGdvb2QgaW50ZXJlc3QgaW4gaU9TIGRldmVsb3BtZW50LiBMZXZlcmFnaW5nIHRoZSBsYXRlc3Qgd2ViIHRlY2hub2xvZ2llcywgSSBjcmVhdGUgc2luZ2xlIHBhZ2Ugd2ViIGFwcGxpY2F0aW9ucywgcHJvcGVybHkgcmVzcG9uc2l2ZSwgZnVuY3Rpb25hbCBTRSBvcHRpbWl6ZWQgd2Vic2l0ZXMuICBIZXkgSSBhbSBmb3IgdGhlIG1vc3QgcGFydCBhIGZyb250IGVuZCBkZXZlbG9wZXIgYnV0LCBJIGNhbiBpbnRlZ3JhdGUgd2l0aCBhIGJhY2tlbmQgaWYgbmVlZGVkLCBjcmVhdGluZyBhIGZ1bGwgc3RhY2sgd2Vic2l0ZSBvbiByZXF1ZXN08J+YiS4gSSBjcmVhdGUgZnJvbnQgSU9TIGFwcGxpY2F0aW9ucyB3aXRoIFN3aWZ0IHRvby5cbiAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgIEF0IHRoZSBtb21lbnQsIEkgYW0gYSAzMDBMIHN0dWRlbnQgb2YgQ2hlbWljYWwgRW5naW5lZXJpbmcgaW4gdGhlIFVuaXZlcnNpdHkgb2YgTGFnb3MsIEFrb2thLiBNeSBob2JiaWVzIGluY2x1ZGUgY29kaW5nKGR1aCksIHdlYiBkZXZlbG9wbWVudChvYnZpb3VzbHkpLCBtb2JpbGUgZGV2ZWxvcG1lbnQobG9s8J+YgikgYW5kIEZJRkEuIEkgYW0gYWxzbyBwcmV0dHkgZGVjZW50IGluIGZyZW5jaCBsYW5ndWFnZSggb2xhIGFtaWdvISlcbiAgICAgICAgPC9wPiA8YnIgLz5cblxuICAgICAgICA8ZGl2IHJlZj17b2ZmZXJSZWZ9PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICBhbmltYXRlPXtvZmZlckFuaW1hdGlvbn1cbiAgICAgICAgPlxuICAgICAgICA8ZGl2IGlkPVwic2VydmljZXNcIiBjbGFzc05hbWU9e3N0eWxlcy5jbGFzc2VzQ29udGFpbmVyfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsYXNzZXMubWFwKChza2lsbCxrZXkpPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBwcm9ncmVzcz17ZmFsc2V9IGJvcmRlcj17c2tpbGwuY29sb3J9IGNsYXNzbmFtZT17c2tpbGwuaWNvbn0ga2V5PXtrZXl9IG5hbWU9e3NraWxsLm5hbWV9IC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUluVmlldyIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsIkFib3V0IiwiQWJvdXRDb3VudGVyIiwic2V0QWJvdXRDb3VudGVyIiwiaWNvbiIsIm5hbWUiLCJjb2xvciIsImNsYXNzZXMiLCJzZXRDbGFzc2VzIiwicmVmIiwiaW5WaWV3IiwiYW5pbWF0aW9uIiwib2ZmZXJSZWYiLCJvZmZlckluVmlldyIsIm9mZmVyQW5pbWF0aW9uIiwiYW5pbWF0aW9uRW5kIiwiY291bnRlciIsInN0YXJ0IiwieCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzY2FsZSIsImRlbGF5IiwidHlwZSIsImJvdW5jZSIsImRpdiIsImFuaW1hdGUiLCJpZCIsImg1IiwiaDMiLCJiciIsInAiLCJiIiwiY2xhc3NOYW1lIiwiY2xhc3Nlc0NvbnRhaW5lciIsIm1hcCIsInNraWxsIiwia2V5IiwicHJvZ3Jlc3MiLCJib3JkZXIiLCJjbGFzc25hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/about_me/About.jsx\n"));

/***/ })

});