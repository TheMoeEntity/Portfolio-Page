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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hero\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero.module.css */ \"./components/hero/Hero.module.css\");\n/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar assets = [\n    \"./Images/devspace.jpeg\",\n    \"./Images/smile.jpg\",\n    \"./Images/me2.PNG\"\n];\nvar Hero = function(param) {\n    var openSideBar = param.openSideBar, open = param.open;\n    _s();\n    var screenSize = (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.useScreenWidth)();\n    var SideBar = function() {\n        openSideBar();\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), counter = ref[0], setCounter = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n    // const interval = setInterval(() => {\n    //   setCounter(val => {\n    //     return val >= 2 ? 0 : val+1\n    //   })\n    // }, 7000);\n    // return () => clearInterval(interval);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {}, [\n        counter\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            background: \"url('\".concat(assets[counter], \"')\")\n        },\n        className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().hero),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().overlay)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: SideBar,\n                className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    opacity: open ? \"0\" : \"1\"\n                },\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            y: \"-100vh\",\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 1.8,\n                            duration: 1,\n                            bounce: 0.5,\n                            type: \"spring\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Bonjour!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            x: \"-300\",\n                            opacity: 0\n                        },\n                        animate: {\n                            x: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 2.5,\n                            duration: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"I am called \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Moe,\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            y: \"100vh\",\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 4,\n                            duration: 1,\n                            type: \"spring\",\n                            bounce: 0.6\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: counter === 0 ? \"I'm a Front End Web Developer.\" : counter === 1 ? \"\" : \"I'm a mobile developer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, _this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 62\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: counter === 0 ? \"I create websites! ain't that cool?\" : counter === 1 ? \"I make web apps\" : \"I make iOS apps\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"View Resume\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(Hero, \"l8TZfiMWp0qLo9j4DGWSd/551f4=\", false, function() {\n    return [\n        _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.useScreenWidth\n    ];\n});\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7YUFDSixDQUNQO0FBQ0gsQ0FBQztHQXRGWS9CLElBQUk7O1FBRUlGLDREQUFjOzs7QUFGdEJFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvL0hlcm8uanN4PzRjNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZXJvLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVNjcmVlbldpZHRoIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2FwaS9oZWxsb1wiXG5cblxuY29uc3QgYXNzZXRzID0gW1xuICAnLi9JbWFnZXMvZGV2c3BhY2UuanBlZycsXG4gICcuL0ltYWdlcy9zbWlsZS5qcGcnLFxuICAnLi9JbWFnZXMvbWUyLlBORydcbl1cblxuZXhwb3J0IGNvbnN0IEhlcm8gPSAoe29wZW5TaWRlQmFyLG9wZW59KSA9PiB7XG5cbiAgY29uc3Qgc2NyZWVuU2l6ZSA9IHVzZVNjcmVlbldpZHRoKClcbiAgY29uc3QgU2lkZUJhciA9ICgpPT4ge1xuICAgIG9wZW5TaWRlQmFyKClcbiAgfVxuICBjb25zdCBbY291bnRlcixzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDApXG4gIFxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICBcbiAgICAgIC8vIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gICBzZXRDb3VudGVyKHZhbCA9PiB7XG4gICAgICAvLyAgICAgcmV0dXJuIHZhbCA+PSAyID8gMCA6IHZhbCsxXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyB9LCA3MDAwKTtcbiAgICAgIC8vIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICB9LFtdKVxuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBcbiAgfSxbY291bnRlcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiBgdXJsKCcke2Fzc2V0c1tjb3VudGVyXX0nKWAsXG4gICAgICBcbiAgICB9fSBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgey8qIDxpbWcgd2lkdGg9e1wiMTAwJVwifSBoZWlnaHQ9e1wiMTAwJVwifSBzcmM9XCIvSW1hZ2VzL2RldnNwYWNlLmpwZWdcIiBhbHQ9XCJkZXYgc3BhY2VcIiAvPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT48L2Rpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXtTaWRlQmFyfSBjbGFzc05hbWU9e29wZW4gPyBgJHtzdHlsZXMuaGFtYnVyZ2VyfSAke3N0eWxlcy5hbmltYXRlfWA6IHN0eWxlcy5oYW1idXJnZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvcGVuID8gYCR7c3R5bGVzLmFuaW1hdGV9ICR7c3R5bGVzLmJhcn1gOnN0eWxlcy5iYXJ9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvcGVuID8gYCR7c3R5bGVzLmFuaW1hdGV9ICR7c3R5bGVzLmJhcn1gOnN0eWxlcy5iYXJ9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvcGVuID8gYCR7c3R5bGVzLmFuaW1hdGV9ICR7c3R5bGVzLmJhcn1gOnN0eWxlcy5iYXJ9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgIG9wYWNpdHk6IG9wZW4gPyBcIjBcIjpcIjFcIlxuICAgICAgICB9fSBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3t5OictMTAwdmgnLCBvcGFjaXR5OjB9fVxuICAgICAgICAgICAgICBhbmltYXRlID17e3k6MCwgb3BhY2l0eToxfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt7XG4gICAgICAgICAgICAgICAgZGVsYXk6IDEuOCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgICBib3VuY2U6MC41LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzcHJpbmcnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8aDE+Qm9uam91ciE8L2gxPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7eDonLTMwMCcsIG9wYWNpdHk6MH19XG4gICAgICAgICAgICAgIGFuaW1hdGUgPXt7eDowLCBvcGFjaXR5OjF9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uID0ge3tcbiAgICAgICAgICAgICAgICBkZWxheTogMi41LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8aDE+SSBhbSBjYWxsZWQgPHNwYW4+TW9lLDwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3t5OicxMDB2aCcsIG9wYWNpdHk6MH19XG4gICAgICAgICAgICAgIGFuaW1hdGUgPXt7eTowLCBvcGFjaXR5OjF9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uID0ge3tcbiAgICAgICAgICAgICAgICBkZWxheTo0LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgICAgIHR5cGU6J3NwcmluZycsXG4gICAgICAgICAgICAgICAgYm91bmNlOjAuNlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGgxPntjb3VudGVyID09PSAwID8gXCJJJ20gYSBGcm9udCBFbmQgV2ViIERldmVsb3Blci5cIjpcbiAgICAgICAgICAgIGNvdW50ZXIgPT09MSA/IFwiXCI6XCJJJ20gYSBtb2JpbGUgZGV2ZWxvcGVyXCJ9PC9oMT4gPGJyIC8+XG5cbiAgICAgICAgICAgIDxoMz57Y291bnRlciA9PT0gMCA/IGBJIGNyZWF0ZSB3ZWJzaXRlcyEgYWluJ3QgdGhhdCBjb29sP2A6XG4gICAgICAgICAgICAgICAgICBjb3VudGVyID09PSAxID8gXCJJIG1ha2Ugd2ViIGFwcHNcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAnSSBtYWtlIGlPUyBhcHBzJ308L2gzPlxuICAgICAgICAgICAgPGJ1dHRvbj5WaWV3IFJlc3VtZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsIm1vdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2NyZWVuV2lkdGgiLCJhc3NldHMiLCJIZXJvIiwib3BlblNpZGVCYXIiLCJvcGVuIiwic2NyZWVuU2l6ZSIsIlNpZGVCYXIiLCJjb3VudGVyIiwic2V0Q291bnRlciIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNsYXNzTmFtZSIsImhlcm8iLCJvdmVybGF5Iiwib25DbGljayIsImhhbWJ1cmdlciIsImFuaW1hdGUiLCJiYXIiLCJvcGFjaXR5IiwiZGVzYyIsImluaXRpYWwiLCJ5IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJib3VuY2UiLCJ0eXBlIiwiaDEiLCJ4Iiwic3BhbiIsImJyIiwiaDMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero/Hero.jsx\n"));

/***/ })

});