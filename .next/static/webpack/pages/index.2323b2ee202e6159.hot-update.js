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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hero\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero.module.css */ \"./components/hero/Hero.module.css\");\n/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar assets = [\n    \"./Images/devspace.jpeg\",\n    \"./Images/smile.jpg\",\n    \"./Images/me2.PNG\"\n];\nvar Hero = function(param) {\n    var openSideBar = param.openSideBar, open = param.open;\n    _s();\n    var screenSize = (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.useScreenWidth)();\n    console.log(screenSize === 1280);\n    var SideBar = function() {\n        openSideBar();\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), counter = ref[0], setCounter = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (screenSize <= 460) {\n            var interval = setInterval(function() {\n                setCounter(function(val) {\n                    return val >= 2 ? 0 : val + 1;\n                });\n            }, 7000);\n            return function() {\n                return clearInterval(interval);\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {}, [\n        counter\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            background: \"url('\".concat(assets[counter], \"')\")\n        },\n        className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().hero),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().overlay)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: SideBar,\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    opacity: open ? \"0\" : \"1\"\n                },\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            y: \"-100vh\",\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 1.8,\n                            duration: 1,\n                            bounce: 0.5,\n                            type: \"spring\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Bonjour!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            x: \"-300\",\n                            opacity: 0\n                        },\n                        animate: {\n                            x: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 2.5,\n                            duration: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"I am called \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Moe,\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            y: \"100vh\",\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 4,\n                            duration: 1,\n                            type: \"spring\",\n                            bounce: 0.6\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: counter === 0 ? \"I'm a Front End Web Developer.\" : counter === 1 ? \"\" : \"I'm a mobile developer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, _this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 62\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: counter === 0 ? \"I create websites! ain't that cool?\" : counter === 1 ? \"I make web apps\" : \"I make iOS apps\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"View portfolio\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this);\n};\n_s(Hero, \"l8TZfiMWp0qLo9j4DGWSd/551f4=\", false, function() {\n    return [\n        _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.useScreenWidth\n    ];\n});\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXZELDhEQUFDQyxJQUFFOzBDQUFFN0IsT0FBTyxLQUFLLENBQUMsR0FBSSxxQ0FBbUMsR0FDbkRBLE9BQU8sS0FBSyxDQUFDLEdBQUcsaUJBQWlCLEdBQzNCLGlCQUFpQjs7Ozs7cUNBQU07MENBQ25DLDhEQUFDOEIsUUFBTTswQ0FBQyxnQkFBYzs7Ozs7cUNBQVM7Ozs7Ozs2QkFDbEI7Ozs7OztxQkFHWDs7Ozs7O2FBQ0osQ0FDUDtBQUNILENBQUM7R0F6RllyQyxJQUFJOztRQUVJRiw0REFBYzs7O0FBRnRCRSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby9IZXJvLmpzeD80YzZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVyby5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VTY3JlZW5XaWR0aCB9IGZyb20gXCIuLi8uLi9wYWdlcy9hcGkvaGVsbG9cIlxuXG5cbmNvbnN0IGFzc2V0cyA9IFtcbiAgJy4vSW1hZ2VzL2RldnNwYWNlLmpwZWcnLFxuICAnLi9JbWFnZXMvc21pbGUuanBnJyxcbiAgJy4vSW1hZ2VzL21lMi5QTkcnXG5dXG5cblxuXG5leHBvcnQgY29uc3QgSGVybyA9ICh7b3BlblNpZGVCYXIsb3Blbn0pID0+IHtcblxuICBjb25zdCBzY3JlZW5TaXplID0gdXNlU2NyZWVuV2lkdGgoKVxuICBjb25zb2xlLmxvZyhzY3JlZW5TaXplPT09MTI4MClcbiAgY29uc3QgU2lkZUJhciA9ICgpPT4ge1xuICAgIG9wZW5TaWRlQmFyKClcbiAgfVxuICBjb25zdCBbY291bnRlcixzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDApXG5cblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICBcbiAgICBpZiAoc2NyZWVuU2l6ZSA8PSA0NjApIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRDb3VudGVyKHZhbCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHZhbCA+PSAyID8gMCA6IHZhbCsxXG4gICAgICAgIH0pXG4gICAgICB9LCA3MDAwKTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG5cbiAgfSxbXSlcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgXG4gIH0sW2NvdW50ZXJdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZDogYHVybCgnJHthc3NldHNbY291bnRlcl19JylgLFxuICAgIH19IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICB7LyogPGltZyB3aWR0aD17XCIxMDAlXCJ9IGhlaWdodD17XCIxMDAlXCJ9IHNyYz1cIi9JbWFnZXMvZGV2c3BhY2UuanBlZ1wiIGFsdD1cImRldiBzcGFjZVwiIC8+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PjwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e1NpZGVCYXJ9IGNsYXNzTmFtZT17c3R5bGVzLmhhbWJ1cmdlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e29wZW4gPyBgJHtzdHlsZXMuYW5pbWF0ZX0gJHtzdHlsZXMuYmFyfWA6c3R5bGVzLmJhcn0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e29wZW4gPyBgJHtzdHlsZXMuYW5pbWF0ZX0gJHtzdHlsZXMuYmFyfWA6c3R5bGVzLmJhcn0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e29wZW4gPyBgJHtzdHlsZXMuYW5pbWF0ZX0gJHtzdHlsZXMuYmFyfWA6c3R5bGVzLmJhcn0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgb3BhY2l0eTogb3BlbiA/IFwiMFwiOlwiMVwiXG4gICAgICAgIH19IGNsYXNzTmFtZT17c3R5bGVzLmRlc2N9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17e3k6Jy0xMDB2aCcsIG9wYWNpdHk6MH19XG4gICAgICAgICAgICAgIGFuaW1hdGUgPXt7eTowLCBvcGFjaXR5OjF9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uID0ge3tcbiAgICAgICAgICAgICAgICBkZWxheTogMS44LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgICAgIGJvdW5jZTowLjUsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NwcmluZydcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMT5Cb25qb3VyITwvaDE+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3t4OictMzAwJywgb3BhY2l0eTowfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZSA9e3t4OjAsIG9wYWNpdHk6MX19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7e1xuICAgICAgICAgICAgICAgIGRlbGF5OiAyLjUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuOVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMT5JIGFtIGNhbGxlZCA8c3Bhbj5Nb2UsPC9zcGFuPjwvaDE+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cblxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17e3k6JzEwMHZoJywgb3BhY2l0eTowfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZSA9e3t5OjAsIG9wYWNpdHk6MX19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7e1xuICAgICAgICAgICAgICAgIGRlbGF5OjQsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgICAgdHlwZTonc3ByaW5nJyxcbiAgICAgICAgICAgICAgICBib3VuY2U6MC42XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8aDE+e2NvdW50ZXIgPT09IDAgPyBcIkknbSBhIEZyb250IEVuZCBXZWIgRGV2ZWxvcGVyLlwiOlxuICAgICAgICAgICAgY291bnRlciA9PT0xID8gXCJcIjpcIkknbSBhIG1vYmlsZSBkZXZlbG9wZXJcIn08L2gxPiA8YnIgLz5cblxuICAgICAgICAgICAgPGgzPntjb3VudGVyID09PSAwID8gYEkgY3JlYXRlIHdlYnNpdGVzISBhaW4ndCB0aGF0IGNvb2w/YDpcbiAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPT09IDEgPyBcIkkgbWFrZSB3ZWIgYXBwc1wiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICdJIG1ha2UgaU9TIGFwcHMnfTwvaDM+XG4gICAgICAgICAgICA8YnV0dG9uPlZpZXcgcG9ydGZvbGlvPC9idXR0b24+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwibW90aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTY3JlZW5XaWR0aCIsImFzc2V0cyIsIkhlcm8iLCJvcGVuU2lkZUJhciIsIm9wZW4iLCJzY3JlZW5TaXplIiwiY29uc29sZSIsImxvZyIsIlNpZGVCYXIiLCJjb3VudGVyIiwic2V0Q291bnRlciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiY2xhc3NOYW1lIiwiaGVybyIsIm92ZXJsYXkiLCJvbkNsaWNrIiwiaGFtYnVyZ2VyIiwiYW5pbWF0ZSIsImJhciIsIm9wYWNpdHkiLCJkZXNjIiwiaW5pdGlhbCIsInkiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJkdXJhdGlvbiIsImJvdW5jZSIsInR5cGUiLCJoMSIsIngiLCJzcGFuIiwiYnIiLCJoMyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero/Hero.jsx\n"));

/***/ })

});