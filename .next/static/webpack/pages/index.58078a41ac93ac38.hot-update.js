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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hero\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero.module.css */ \"./components/hero/Hero.module.css\");\n/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar assets = [\n    \"./Images/devspace.jpeg\",\n    \"./Images/smile.jpg\",\n    \"./Images/me2.PNG\"\n];\nvar Hero = function(param) {\n    var openSideBar = param.openSideBar, open = param.open;\n    _s();\n    var screenSize = (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.useScreenWidth)();\n    var SideBar = function() {\n        openSideBar();\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), counter = ref[0], setCounter = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n    // const interval = setInterval(() => {\n    //   setCounter(val => {\n    //     return val >= 2 ? 0 : val+1\n    //   })\n    // }, 7000);\n    // return () => clearInterval(interval);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {}, [\n        counter\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            background: \"url('\".concat(assets[counter], \"')\"),\n            marginLeft: open ? \"75%\" : \"0\"\n        },\n        className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().hero),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().overlay)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: SideBar,\n                className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: open ? \"\".concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().animate), \" \").concat((_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)) : (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    opacity: open ? \"0\" : \"1\"\n                },\n                className: (_Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            y: \"-100vh\",\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 1.8,\n                            duration: 1,\n                            bounce: 0.5,\n                            type: \"spring\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Bonjour!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            x: \"-300\",\n                            opacity: 0\n                        },\n                        animate: {\n                            x: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 2.5,\n                            duration: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"I am called \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Moe,\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            y: \"100vh\",\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 4,\n                            duration: 1,\n                            type: \"spring\",\n                            bounce: 0.6\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: counter === 0 ? \"I'm a Front End Web Developer.\" : counter === 1 ? \"\" : \"I'm a mobile developer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, _this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 62\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: counter === 0 ? \"I create websites! ain't that cool?\" : counter === 1 ? \"I make web apps\" : \"I make iOS apps\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"View Resume\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/hero/Hero.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(Hero, \"l8TZfiMWp0qLo9j4DGWSd/551f4=\", false, function() {\n    return [\n        _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.useScreenWidth\n    ];\n});\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTswQ0FBQyxhQUFXOzs7OztxQ0FBUzs7Ozs7OzZCQUNmOzs7Ozs7cUJBR1g7Ozs7OzthQUNKLENBQ1A7QUFDSCxDQUFDO0dBdEZZaEMsSUFBSTs7UUFFSUYsNERBQWM7OztBQUZ0QkUsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlcm8vSGVyby5qc3g/NGM2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlcm8ubW9kdWxlLmNzcydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlU2NyZWVuV2lkdGggfSBmcm9tIFwiLi4vLi4vcGFnZXMvYXBpL2hlbGxvXCJcblxuXG5jb25zdCBhc3NldHMgPSBbXG4gICcuL0ltYWdlcy9kZXZzcGFjZS5qcGVnJyxcbiAgJy4vSW1hZ2VzL3NtaWxlLmpwZycsXG4gICcuL0ltYWdlcy9tZTIuUE5HJ1xuXVxuXG5leHBvcnQgY29uc3QgSGVybyA9ICh7b3BlblNpZGVCYXIsb3Blbn0pID0+IHtcblxuICBjb25zdCBzY3JlZW5TaXplID0gdXNlU2NyZWVuV2lkdGgoKVxuICBjb25zdCBTaWRlQmFyID0gKCk9PiB7XG4gICAgb3BlblNpZGVCYXIoKVxuICB9XG4gIGNvbnN0IFtjb3VudGVyLHNldENvdW50ZXJdID0gdXNlU3RhdGUoMClcbiAgXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgIFxuICAgICAgLy8gY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyAgIHNldENvdW50ZXIodmFsID0+IHtcbiAgICAgIC8vICAgICByZXR1cm4gdmFsID49IDIgPyAwIDogdmFsKzFcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vIH0sIDcwMDApO1xuICAgICAgLy8gcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gIH0sW10pXG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIFxuICB9LFtjb3VudGVyXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmQ6IGB1cmwoJyR7YXNzZXRzW2NvdW50ZXJdfScpYCxcbiAgICAgIG1hcmdpbkxlZnQ6IG9wZW4gPyBcIjc1JVwiOlwiMFwiXG4gICAgfX0gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgIHsvKiA8aW1nIHdpZHRoPXtcIjEwMCVcIn0gaGVpZ2h0PXtcIjEwMCVcIn0gc3JjPVwiL0ltYWdlcy9kZXZzcGFjZS5qcGVnXCIgYWx0PVwiZGV2IHNwYWNlXCIgLz4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+PC9kaXY+XG4gICAgICAgIDxkaXYgb25DbGljaz17U2lkZUJhcn0gY2xhc3NOYW1lPXtvcGVuID8gYCR7c3R5bGVzLmhhbWJ1cmdlcn0gJHtzdHlsZXMuYW5pbWF0ZX1gOiBzdHlsZXMuaGFtYnVyZ2VyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3BlbiA/IGAke3N0eWxlcy5hbmltYXRlfSAke3N0eWxlcy5iYXJ9YDpzdHlsZXMuYmFyfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3BlbiA/IGAke3N0eWxlcy5hbmltYXRlfSAke3N0eWxlcy5iYXJ9YDpzdHlsZXMuYmFyfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3BlbiA/IGAke3N0eWxlcy5hbmltYXRlfSAke3N0eWxlcy5iYXJ9YDpzdHlsZXMuYmFyfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBvcGFjaXR5OiBvcGVuID8gXCIwXCI6XCIxXCJcbiAgICAgICAgfX0gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7eTonLTEwMHZoJywgb3BhY2l0eTowfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZSA9e3t5OjAsIG9wYWNpdHk6MX19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7e1xuICAgICAgICAgICAgICAgIGRlbGF5OiAxLjgsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgICAgYm91bmNlOjAuNSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3ByaW5nJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGgxPkJvbmpvdXIhPC9oMT5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17e3g6Jy0zMDAnLCBvcGFjaXR5OjB9fVxuICAgICAgICAgICAgICBhbmltYXRlID17e3g6MCwgb3BhY2l0eToxfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt7XG4gICAgICAgICAgICAgICAgZGVsYXk6IDIuNSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC45XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGgxPkkgYW0gY2FsbGVkIDxzcGFuPk1vZSw8L3NwYW4+PC9oMT5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7eTonMTAwdmgnLCBvcGFjaXR5OjB9fVxuICAgICAgICAgICAgICBhbmltYXRlID17e3k6MCwgb3BhY2l0eToxfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt7XG4gICAgICAgICAgICAgICAgZGVsYXk6NCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgICB0eXBlOidzcHJpbmcnLFxuICAgICAgICAgICAgICAgIGJvdW5jZTowLjZcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMT57Y291bnRlciA9PT0gMCA/IFwiSSdtIGEgRnJvbnQgRW5kIFdlYiBEZXZlbG9wZXIuXCI6XG4gICAgICAgICAgICBjb3VudGVyID09PTEgPyBcIlwiOlwiSSdtIGEgbW9iaWxlIGRldmVsb3BlclwifTwvaDE+IDxiciAvPlxuXG4gICAgICAgICAgICA8aDM+e2NvdW50ZXIgPT09IDAgPyBgSSBjcmVhdGUgd2Vic2l0ZXMhIGFpbid0IHRoYXQgY29vbD9gOlxuICAgICAgICAgICAgICAgICAgY291bnRlciA9PT0gMSA/IFwiSSBtYWtlIHdlYiBhcHBzXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgJ0kgbWFrZSBpT1MgYXBwcyd9PC9oMz5cbiAgICAgICAgICAgIDxidXR0b24+VmlldyBSZXN1bWU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJtb3Rpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNjcmVlbldpZHRoIiwiYXNzZXRzIiwiSGVybyIsIm9wZW5TaWRlQmFyIiwib3BlbiIsInNjcmVlblNpemUiLCJTaWRlQmFyIiwiY291bnRlciIsInNldENvdW50ZXIiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmQiLCJtYXJnaW5MZWZ0IiwiY2xhc3NOYW1lIiwiaGVybyIsIm92ZXJsYXkiLCJvbkNsaWNrIiwiaGFtYnVyZ2VyIiwiYW5pbWF0ZSIsImJhciIsIm9wYWNpdHkiLCJkZXNjIiwiaW5pdGlhbCIsInkiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJkdXJhdGlvbiIsImJvdW5jZSIsInR5cGUiLCJoMSIsIngiLCJzcGFuIiwiYnIiLCJoMyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero/Hero.jsx\n"));

/***/ })

});