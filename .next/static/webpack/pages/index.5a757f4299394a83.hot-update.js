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

/***/ "./components/hero/Hero.jsx":
/*!**********************************!*\
  !*** ./components/hero/Hero.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hero\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Hero.module.css */ \"./components/hero/Hero.module.css\");\n/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_Images_vector2_JPG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/Images/vector2.JPG */ \"./public/Images/vector2.JPG\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar assets = [\n    \"./Images/vector.JPG\",\n    \"./Images/vector2.JPG\",\n    \"./Images/vector3.jpg\"\n];\nvar Hero = function(param) {\n    var openSideBar = param.openSideBar, open = param.open;\n    _s();\n    var SideBar = function() {\n        openSideBar();\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), counter = ref[0], setCounter = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n    // const interval = setInterval(() => {\n    //   setCounter(val => {\n    //     return val >= 2 ? 0 : val+1\n    //   })\n    // }, 7000);\n    // return () => clearInterval(interval);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {}, [\n        counter\n    ]);\n    var carousel = function() {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().hero),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                layout: \"fill\",\n                priority: true,\n                src: _public_Images_vector2_JPG__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                alt: \"Hero image\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().overlay)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: SideBar,\n                className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().hamburger), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().animate)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().hamburger),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    opacity: open ? \"0\" : \"1\"\n                },\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().desc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        initial: {\n                            y: \"-100vh\",\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 1.8,\n                            duration: 1,\n                            bounce: 0.5,\n                            type: \"spring\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Bonjour!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        initial: {\n                            x: \"-300\",\n                            opacity: 0\n                        },\n                        animate: {\n                            x: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 2.5,\n                            duration: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"I am called \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Moe,\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 27\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        initial: {\n                            y: \"100vh\",\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 4,\n                            duration: 1,\n                            type: \"spring\",\n                            bounce: 0.6\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: counter === 0 ? \"I'm a Front End Web Developer.\" : counter === 1 ? \"\" : \"I'm a mobile developer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 65\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: counter === 0 ? \"I  create websites! ain't that cool?\" : counter === 1 ? \"I make web apps\" : \"I make iOS apps\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"./assets/resume2.pdf\",\n                                    target: \"_blank\",\n                                    children: \"View Resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio-Page/components/hero/Hero.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(Hero, \"tOl6vX2uhC762Ysfz0OEuOgY4MU=\");\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQ0MsR0FBQztvQ0FDQUMsSUFBSSxFQUFDLHNCQUFzQjtvQ0FDM0JDLE1BQU0sRUFBQyxRQUFROzhDQUNoQixhQUVEOzs7Ozt5Q0FBSTs7Ozs7cUNBQ0c7Ozs7Ozs2QkFFRTs7Ozs7O3FCQUdUOzs7Ozs7YUFDRixDQUNQO0FBQ0gsQ0FBQztHQTlGWXJDLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlcm8vSGVyby5qc3g/NGM2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlcm8ubW9kdWxlLmNzcydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlU2NyZWVuV2lkdGggfSBmcm9tIFwiLi4vLi4vcGFnZXMvYXBpL2hlbGxvXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHZlY3RvciBmcm9tICcuLi8uLi9wdWJsaWMvSW1hZ2VzL3ZlY3RvcjIuSlBHJ1xuXG5cblxuY29uc3QgYXNzZXRzID0gW1xuICAnLi9JbWFnZXMvdmVjdG9yLkpQRycsXG4gICcuL0ltYWdlcy92ZWN0b3IyLkpQRycsXG4gICcuL0ltYWdlcy92ZWN0b3IzLmpwZydcbl1cblxuZXhwb3J0IGNvbnN0IEhlcm8gPSAoeyBvcGVuU2lkZUJhciwgb3BlbiB9KSA9PiB7XG5cbiAgY29uc3QgU2lkZUJhciA9ICgpID0+IHtcbiAgICBvcGVuU2lkZUJhcigpXG4gIH1cbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgLy8gY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgLy8gICBzZXRDb3VudGVyKHZhbCA9PiB7XG4gICAgLy8gICAgIHJldHVybiB2YWwgPj0gMiA/IDAgOiB2YWwrMVxuICAgIC8vICAgfSlcbiAgICAvLyB9LCA3MDAwKTtcbiAgICAvLyByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgfSwgW2NvdW50ZXJdKVxuXG4gIGNvbnN0IGNhcm91c2VsID0gKCk9PiB7XG4gICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICA8SW1hZ2UgbGF5b3V0PVwiZmlsbFwiIHByaW9yaXR5IHNyYz17dmVjdG9yfSBhbHQ9XCJIZXJvIGltYWdlXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+PC9kaXY+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e1NpZGVCYXJ9IGNsYXNzTmFtZT17b3BlbiA/IGAke3N0eWxlcy5oYW1idXJnZXJ9ICR7c3R5bGVzLmFuaW1hdGV9YCA6IHN0eWxlcy5oYW1idXJnZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3BlbiA/IGAke3N0eWxlcy5hbmltYXRlfSAke3N0eWxlcy5iYXJ9YCA6IHN0eWxlcy5iYXJ9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3BlbiA/IGAke3N0eWxlcy5hbmltYXRlfSAke3N0eWxlcy5iYXJ9YCA6IHN0eWxlcy5iYXJ9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3BlbiA/IGAke3N0eWxlcy5hbmltYXRlfSAke3N0eWxlcy5iYXJ9YCA6IHN0eWxlcy5iYXJ9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIG9wYWNpdHk6IG9wZW4gPyBcIjBcIiA6IFwiMVwiXG4gICAgICB9fSBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPXt7IHk6ICctMTAwdmgnLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZGVsYXk6IDEuOCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgYm91bmNlOiAwLjUsXG4gICAgICAgICAgICB0eXBlOiAnc3ByaW5nJ1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aDE+Qm9uam91ciE8L2gxPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPXt7IHg6ICctMzAwJywgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeDogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIGRlbGF5OiAyLjUsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC45XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMT5JIGFtIGNhbGxlZCA8c3Bhbj5Nb2UsPC9zcGFuPjwvaDE+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyB5OiAnMTAwdmgnLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZGVsYXk6IDQsXG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgICAgICAgYm91bmNlOiAwLjZcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgxPntjb3VudGVyID09PSAwID8gXCJJJ20gYSBGcm9udCBFbmQgV2ViIERldmVsb3Blci5cIiA6XG4gICAgICAgICAgICBjb3VudGVyID09PSAxID8gXCJcIiA6IFwiSSdtIGEgbW9iaWxlIGRldmVsb3BlclwifTwvaDE+IDxiciAvPlxuXG4gICAgICAgICAgPGgzPntjb3VudGVyID09PSAwID8gYEkgIGNyZWF0ZSB3ZWJzaXRlcyEgYWluJ3QgdGhhdCBjb29sP2AgOlxuICAgICAgICAgICAgY291bnRlciA9PT0gMSA/IFwiSSBtYWtlIHdlYiBhcHBzXCIgOlxuICAgICAgICAgICAgICAnSSBtYWtlIGlPUyBhcHBzJ308L2gzPlxuICAgICAgICAgIDxidXR0b24+XG5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCIuL2Fzc2V0cy9yZXN1bWUyLnBkZlwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZpZXcgUmVzdW1lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJtb3Rpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNjcmVlbldpZHRoIiwiTGluayIsInZlY3RvciIsImFzc2V0cyIsIkhlcm8iLCJvcGVuU2lkZUJhciIsIm9wZW4iLCJTaWRlQmFyIiwiY291bnRlciIsInNldENvdW50ZXIiLCJjYXJvdXNlbCIsImRpdiIsImNsYXNzTmFtZSIsImhlcm8iLCJsYXlvdXQiLCJwcmlvcml0eSIsInNyYyIsImFsdCIsIm92ZXJsYXkiLCJvbkNsaWNrIiwiaGFtYnVyZ2VyIiwiYW5pbWF0ZSIsImJhciIsInN0eWxlIiwib3BhY2l0eSIsImRlc2MiLCJpbml0aWFsIiwieSIsInRyYW5zaXRpb24iLCJkZWxheSIsImR1cmF0aW9uIiwiYm91bmNlIiwidHlwZSIsImgxIiwieCIsInNwYW4iLCJiciIsImgzIiwiYnV0dG9uIiwiYSIsImhyZWYiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero/Hero.jsx\n"));

/***/ })

});