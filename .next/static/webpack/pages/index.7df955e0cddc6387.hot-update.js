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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hero\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero.module.css */ \"./components/hero/Hero.module.css\");\n/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar assets = [\n    \"./Images/devspace.jpeg\",\n    \"./Images/smile.jpg\",\n    \"./Images/me2.PNG\"\n];\nvar Hero = function(param) {\n    var openSideBar = param.openSideBar, open = param.open;\n    _s();\n    var screenSize = (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.useScreenWidth)();\n    console.log(screenSize === 1280);\n    var SideBar = function() {\n        openSideBar();\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), counter = ref[0], setCounter = ref[1];\n    if (screenSize <= 460) {}\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var interval = setInterval(function() {\n            setCounter(function(val) {\n                return val >= 2 ? 0 : val + 1;\n            });\n        }, 7000);\n        return function() {\n            return clearInterval(interval);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {}, [\n        counter\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            background: \"url('\".concat(assets[counter], \"')\")\n        },\n        className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().hero),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().overlay)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: SideBar,\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    opacity: open ? \"0\" : \"1\"\n                },\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            y: \"-100vh\",\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 1.8,\n                            duration: 1,\n                            bounce: 0.5,\n                            type: \"spring\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Bonjour!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            x: \"-300\",\n                            opacity: 0\n                        },\n                        animate: {\n                            x: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 2.5,\n                            duration: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"I am called \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Moe,\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            y: \"100vh\",\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 4,\n                            duration: 1,\n                            type: \"spring\",\n                            bounce: 0.6\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: counter === 0 ? \"I'm a Front End Web Developer.\" : counter === 1 ? \"\" : \"I'm a mobile developer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, _this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 62\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: counter === 0 ? \"I create websites! ain't that cool?\" : counter === 1 ? \"I make web apps\" : \"I make iOS apps\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"View portfolio\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this);\n};\n_s(Hero, \"l8TZfiMWp0qLo9j4DGWSd/551f4=\", false, function() {\n    return [\n        _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.useScreenWidth\n    ];\n});\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCw4REFBQ0MsSUFBRTswQ0FBRTdCLE9BQU8sS0FBSyxDQUFDLEdBQUkscUNBQW1DLEdBQ25EQSxPQUFPLEtBQUssQ0FBQyxHQUFHLGlCQUFpQixHQUMzQixpQkFBaUI7Ozs7O3FDQUFNOzBDQUNuQyw4REFBQzhCLFFBQU07MENBQUMsZ0JBQWM7Ozs7O3FDQUFTOzs7Ozs7NkJBQ2xCOzs7Ozs7cUJBR1g7Ozs7OzthQUNKLENBQ1A7QUFDSCxDQUFDO0dBekZZckMsSUFBSTs7UUFFSUYsNERBQWM7OztBQUZ0QkUsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlcm8vSGVyby5qc3g/NGM2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlcm8ubW9kdWxlLmNzcydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlU2NyZWVuV2lkdGggfSBmcm9tIFwiLi4vLi4vcGFnZXMvYXBpL2hlbGxvXCJcblxuXG5jb25zdCBhc3NldHMgPSBbXG4gICcuL0ltYWdlcy9kZXZzcGFjZS5qcGVnJyxcbiAgJy4vSW1hZ2VzL3NtaWxlLmpwZycsXG4gICcuL0ltYWdlcy9tZTIuUE5HJ1xuXVxuXG5cblxuZXhwb3J0IGNvbnN0IEhlcm8gPSAoe29wZW5TaWRlQmFyLG9wZW59KSA9PiB7XG5cbiAgY29uc3Qgc2NyZWVuU2l6ZSA9IHVzZVNjcmVlbldpZHRoKClcbiAgY29uc29sZS5sb2coc2NyZWVuU2l6ZT09PTEyODApXG4gIGNvbnN0IFNpZGVCYXIgPSAoKT0+IHtcbiAgICBvcGVuU2lkZUJhcigpXG4gIH1cbiAgY29uc3QgW2NvdW50ZXIsc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKVxuXG4gIGlmIChzY3JlZW5TaXplIDw9IDQ2MCkgeyBcbiAgICBcbiAgfVxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICBcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRDb3VudGVyKHZhbCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHZhbCA+PSAyID8gMCA6IHZhbCsxXG4gICAgICAgIH0pXG4gICAgICB9LCA3MDAwKTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICB9LFtdKVxuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBcbiAgfSxbY291bnRlcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiBgdXJsKCcke2Fzc2V0c1tjb3VudGVyXX0nKWAsXG4gICAgfX0gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgIHsvKiA8aW1nIHdpZHRoPXtcIjEwMCVcIn0gaGVpZ2h0PXtcIjEwMCVcIn0gc3JjPVwiL0ltYWdlcy9kZXZzcGFjZS5qcGVnXCIgYWx0PVwiZGV2IHNwYWNlXCIgLz4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+PC9kaXY+XG4gICAgICAgIDxkaXYgb25DbGljaz17U2lkZUJhcn0gY2xhc3NOYW1lPXtzdHlsZXMuaGFtYnVyZ2VyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3BlbiA/IGAke3N0eWxlcy5hbmltYXRlfSAke3N0eWxlcy5iYXJ9YDpzdHlsZXMuYmFyfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3BlbiA/IGAke3N0eWxlcy5hbmltYXRlfSAke3N0eWxlcy5iYXJ9YDpzdHlsZXMuYmFyfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3BlbiA/IGAke3N0eWxlcy5hbmltYXRlfSAke3N0eWxlcy5iYXJ9YDpzdHlsZXMuYmFyfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBvcGFjaXR5OiBvcGVuID8gXCIwXCI6XCIxXCJcbiAgICAgICAgfX0gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7eTonLTEwMHZoJywgb3BhY2l0eTowfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZSA9e3t5OjAsIG9wYWNpdHk6MX19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7e1xuICAgICAgICAgICAgICAgIGRlbGF5OiAxLjgsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgICAgYm91bmNlOjAuNSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3ByaW5nJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGgxPkJvbmpvdXIhPC9oMT5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17e3g6Jy0zMDAnLCBvcGFjaXR5OjB9fVxuICAgICAgICAgICAgICBhbmltYXRlID17e3g6MCwgb3BhY2l0eToxfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt7XG4gICAgICAgICAgICAgICAgZGVsYXk6IDIuNSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC45XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGgxPkkgYW0gY2FsbGVkIDxzcGFuPk1vZSw8L3NwYW4+PC9oMT5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7eTonMTAwdmgnLCBvcGFjaXR5OjB9fVxuICAgICAgICAgICAgICBhbmltYXRlID17e3k6MCwgb3BhY2l0eToxfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt7XG4gICAgICAgICAgICAgICAgZGVsYXk6NCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgICB0eXBlOidzcHJpbmcnLFxuICAgICAgICAgICAgICAgIGJvdW5jZTowLjZcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMT57Y291bnRlciA9PT0gMCA/IFwiSSdtIGEgRnJvbnQgRW5kIFdlYiBEZXZlbG9wZXIuXCI6XG4gICAgICAgICAgICBjb3VudGVyID09PTEgPyBcIlwiOlwiSSdtIGEgbW9iaWxlIGRldmVsb3BlclwifTwvaDE+IDxiciAvPlxuXG4gICAgICAgICAgICA8aDM+e2NvdW50ZXIgPT09IDAgPyBgSSBjcmVhdGUgd2Vic2l0ZXMhIGFpbid0IHRoYXQgY29vbD9gOlxuICAgICAgICAgICAgICAgICAgY291bnRlciA9PT0gMSA/IFwiSSBtYWtlIHdlYiBhcHBzXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgJ0kgbWFrZSBpT1MgYXBwcyd9PC9oMz5cbiAgICAgICAgICAgIDxidXR0b24+VmlldyBwb3J0Zm9saW88L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJtb3Rpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNjcmVlbldpZHRoIiwiYXNzZXRzIiwiSGVybyIsIm9wZW5TaWRlQmFyIiwib3BlbiIsInNjcmVlblNpemUiLCJjb25zb2xlIiwibG9nIiwiU2lkZUJhciIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjbGFzc05hbWUiLCJoZXJvIiwib3ZlcmxheSIsIm9uQ2xpY2siLCJoYW1idXJnZXIiLCJhbmltYXRlIiwiYmFyIiwib3BhY2l0eSIsImRlc2MiLCJpbml0aWFsIiwieSIsInRyYW5zaXRpb24iLCJkZWxheSIsImR1cmF0aW9uIiwiYm91bmNlIiwidHlwZSIsImgxIiwieCIsInNwYW4iLCJiciIsImgzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero/Hero.jsx\n"));

/***/ })

});