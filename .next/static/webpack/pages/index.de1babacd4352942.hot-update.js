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

/***/ "./components/sidebar/SideBar.jsx":
/*!****************************************!*\
  !*** ./components/sidebar/SideBar.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideBar\": function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_Images_me2_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/Images/me2.PNG */ \"./public/Images/me2.PNG\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar SideBar = function(param) {\n    var open = param.open, close = param.close;\n    var links = {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            left: open ? \"0%\" : \"-100%\",\n            width: open ? \"75%\" : \"30%\",\n            justifyContent: open ? \"flex-start\" : \"flex-end\"\n        },\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebar),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebarcontent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: \"hidden\",\n                    animate: \"visible\",\n                    variants: {\n                        hidden: {\n                            scale: 0.3,\n                            opacity: 0\n                        },\n                        visible: {\n                            scale: 1,\n                            opacity: 1,\n                            transition: {\n                                delay: 1,\n                                duration: 0.8\n                            }\n                        }\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().profile),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                width: \"100%\",\n                                priority: true,\n                                layout: \"responsive\",\n                                height: \"100%\",\n                                src: _public_Images_me2_PNG__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().caption),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Moses Nwigberi\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    children: [\n                                        \"WEB/iOS DEVELOPER \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"IN LAGOS, NIGERIA\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 35\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 10\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: {\n                        y: \"100vh\",\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    transition: {\n                        delay: 4,\n                        duration: 1,\n                        type: \"spring\",\n                        bounce: 0.6\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navLinks),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().centered),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"/\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                onClick: close,\n                                                children: \"HOME\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 30\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"#about\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"ABOUT\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 35\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"#services\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"SERVICES\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 38\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"#skills\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"SKILLS\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 36\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"#projects\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"PROJECTS\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 38\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"#contact\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"CONTACT\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 37\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().copyright),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            children: \"\\xa9 Copyright \\xa92022 All rights reserved |\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 12\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/sidebar/SideBar.jsx\",\n        lineNumber: 15,\n        columnNumber: 4\n    }, _this);\n};\n_c = SideBar;\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBSzs7Ozs7aURBQU87c0RBQy9DLDhEQUFDdEMsa0RBQUk7NENBQUNxQyxJQUFJLEVBQUMsU0FBUztzREFBQyw0RUFBQ0MsSUFBRTswREFBQyxRQUFNOzs7OztxREFBSzs7Ozs7aURBQU87c0RBQzNDLDhEQUFDdEMsa0RBQUk7NENBQUNxQyxJQUFJLEVBQUMsV0FBVztzREFBQyw0RUFBQ0MsSUFBRTswREFBQyxVQUFROzs7OztxREFBSzs7Ozs7aURBQU87c0RBQy9DLDhEQUFDdEMsa0RBQUk7NENBQUNxQyxJQUFJLEVBQUMsVUFBVTtzREFBQyw0RUFBQ0MsSUFBRTswREFBQyxTQUFPOzs7OztxREFBSzs7Ozs7aURBQU87Ozs7Ozt5Q0FDMUM7Ozs7O3FDQUNEOzBDQUNOLDhEQUFDakMsS0FBRztnQ0FBQ0ssU0FBUyxFQUFFZCwwRUFBZ0I7MENBQy9CLDRFQUFDa0MsTUFBSTs7d0NBQUMsR0FBQztzREFBQSw4REFBQ1csSUFBRTtzREFBQywrQ0FBdUM7Ozs7O2lEQUFLOzs7Ozs7eUNBQU87Ozs7O3FDQUN6RDs7Ozs7OzZCQUNGOzs7Ozt5QkFDTzs7Ozs7O2lCQUVYOzs7OzthQUNGLENBQ0w7QUFDSCxDQUFDO0FBekVZeEMsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGViYXIvU2lkZUJhci5qc3g/N2Q3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBwcm9maWxlIGZyb20gJy4uLy4uL3B1YmxpYy9JbWFnZXMvbWUyLlBORydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBjb25zdCBTaWRlQmFyID0gKHtvcGVuLGNsb3NlfSkgPT4ge1xuXG4gIGNvbnN0IGxpbmtzID0ge1xuICAgIFxuICB9XG4gIHJldHVybiAoXG5cbiAgIDxkaXYgc3R5bGU9e1xuICAgICAgICB7XG4gICAgICAgICAgICBsZWZ0Om9wZW4gPyBcIjAlXCI6XCItMTAwJVwiLFxuICAgICAgICAgICAgd2lkdGg6IG9wZW4gPyBcIjc1JVwiOiBcIjMwJVwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6b3BlbiA/IFwiZmxleC1zdGFydFwiOlwiZmxleC1lbmRcIlxuICAgICAgICB9XG4gICAgfVxuICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcmNvbnRlbnR9PlxuICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgaGlkZGVuOiB7XG4gICAgICAgICAgICAgIHNjYWxlOjAuMyxcbiAgICAgICAgICAgICAgb3BhY2l0eTowXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlzaWJsZToge1xuICAgICAgICAgICAgICBzY2FsZToxLFxuICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkZWxheTogMSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjowLjhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XG4gICAgICAgICAgICB7LyogPEltYWdlIG9iamVjdEZpdD0nY292ZXInIGxheW91dD0ncmVzcG9uc2l2ZScgd2lkdGg9XCIxMDAlXCIgcHJpb3JpdHkgaGVpZ2h0PVwiMTAwJVwiIHNyYz17YC9JbWFnZXMvbWUucG5nYH0gLz4gKi99XG4gICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIxMDAlXCIgcHJpb3JpdHkgbGF5b3V0PSdyZXNwb25zaXZlJyBoZWlnaHQ9XCIxMDAlXCIgc3JjPXtwcm9maWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXB0aW9ufT5cbiAgICAgICAgICAgIDxoMz5Nb3NlcyBOd2lnYmVyaTwvaDM+XG4gICAgICAgICAgICA8aDY+V0VCL2lPUyBERVZFTE9QRVIgPHNwYW4+SU4gTEFHT1MsIE5JR0VSSUE8L3NwYW4+PC9oNj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17e3k6JzEwMHZoJywgb3BhY2l0eTowfX1cbiAgICAgICAgICAgIGFuaW1hdGUgPXt7eTowLCBvcGFjaXR5OjF9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt7XG4gICAgICAgICAgICBkZWxheTo0LFxuICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICB0eXBlOidzcHJpbmcnLFxuICAgICAgICAgICAgYm91bmNlOjAuNlxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmtzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcmVkfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48bGkgb25DbGljaz17Y2xvc2V9PkhPTUU8L2xpPjwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNhYm91dFwiPjxsaT5BQk9VVDwvbGk+PC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI3NlcnZpY2VzXCI+PGxpPlNFUlZJQ0VTPC9saT48L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjc2tpbGxzXCI+PGxpPlNLSUxMUzwvbGk+PC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI3Byb2plY3RzXCI+PGxpPlBST0pFQ1RTPC9saT48L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjY29udGFjdFwiPjxsaT5DT05UQUNUPC9saT48L0xpbms+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0fT5cbiAgICAgICAgICAgPHNwYW4+IDxoNT7CqSBDb3B5cmlnaHQgwqkyMDIyIEFsbCByaWdodHMgcmVzZXJ2ZWQgfDwvaDU+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJJbWFnZSIsInByb2ZpbGUiLCJtb3Rpb24iLCJMaW5rIiwiU2lkZUJhciIsIm9wZW4iLCJjbG9zZSIsImxpbmtzIiwiZGl2Iiwic3R5bGUiLCJsZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNsYXNzTmFtZSIsInNpZGViYXIiLCJzaWRlYmFyY29udGVudCIsImluaXRpYWwiLCJhbmltYXRlIiwidmFyaWFudHMiLCJoaWRkZW4iLCJzY2FsZSIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJwcmlvcml0eSIsImxheW91dCIsImhlaWdodCIsInNyYyIsImNhcHRpb24iLCJoMyIsImg2Iiwic3BhbiIsInkiLCJ0eXBlIiwiYm91bmNlIiwibmF2TGlua3MiLCJjZW50ZXJlZCIsInVsIiwiaHJlZiIsImxpIiwib25DbGljayIsImNvcHlyaWdodCIsImg1Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebar/SideBar.jsx\n"));

/***/ })

});