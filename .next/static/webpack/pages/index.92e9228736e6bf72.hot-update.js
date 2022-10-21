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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideBar\": function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_Images_me2_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/Images/me2.PNG */ \"./public/Images/me2.PNG\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar SideBar = function(param) {\n    var open = param.open, close = param.close;\n    var links = [\n        {\n            title: \"HOME\",\n            href: \"/\"\n        },\n        {\n            title: \"ABOUT\",\n            href: \"#about\"\n        },\n        {\n            title: \"SERVICES\",\n            href: \"#services\"\n        },\n        {\n            title: \"SKILLS\",\n            href: \"#skill\"\n        },\n        {\n            title: \"PROJECTS\",\n            href: \"#projects\"\n        },\n        {\n            title: \"CONTACT\",\n            href: \"#contact\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            left: open ? \"0%\" : \"-100%\",\n            width: open ? \"75%\" : \"30%\",\n            justifyContent: open ? \"flex-start\" : \"flex-end\"\n        },\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebar),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebarcontent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: \"hidden\",\n                    animate: \"visible\",\n                    variants: {\n                        hidden: {\n                            scale: 0.3,\n                            opacity: 0\n                        },\n                        visible: {\n                            scale: 1,\n                            opacity: 1,\n                            transition: {\n                                delay: 1,\n                                duration: 0.8\n                            }\n                        }\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().profile),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                width: \"100%\",\n                                priority: true,\n                                layout: \"responsive\",\n                                height: \"100%\",\n                                src: _public_Images_me2_PNG__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"switch\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-solid fa-toggle-off\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 40\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().caption),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Moses Nwigberi\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    children: [\n                                        \"WEB/iOS DEVELOPER \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"IN LAGOS, NIGERIA\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 35\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 10\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: {\n                        y: \"100vh\",\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    transition: {\n                        delay: 4,\n                        duration: 1,\n                        type: \"spring\",\n                        bounce: 0.6\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navLinks),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().centered),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: links.map(function(item, key) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: item.href,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                onClick: close,\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 52\n                                            }, _this)\n                                        }, key, false, {\n                                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().copyright),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            children: \"\\xa9 Copyright \\xa92022 All rights reserved |\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 12\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n            lineNumber: 47,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n        lineNumber: 39,\n        columnNumber: 4\n    }, _this);\n};\n_c = SideBar;\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxRQUFRO3dCQUNiQyxNQUFNLEVBQUMsR0FBRztxQkFDVDs4QkFFTCw0RUFBQzlCLEtBQUc7d0JBQUNLLFNBQVMsRUFBRWhCLHlFQUFlOzswQ0FDN0IsOERBQUNXLEtBQUc7Z0NBQUNLLFNBQVMsRUFBRWhCLHlFQUFlOzBDQUM3Qiw0RUFBQzRDLElBQUU7OENBRUNwQyxLQUFLLENBQUNxQyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFDQyxHQUFHOzZEQUNqQiw4REFBQzNDLGtEQUFJOzRDQUFXTSxJQUFJLEVBQUVvQyxJQUFJLENBQUNwQyxJQUFJO3NEQUFFLDRFQUFDc0MsSUFBRTtnREFBQ0MsT0FBTyxFQUFFMUMsS0FBSzswREFBR3VDLElBQUksQ0FBQ3JDLEtBQUs7Ozs7O3FEQUFNOzJDQUEzRHNDLEdBQUc7Ozs7aURBQStEO3FDQUM5RSxDQUFDOzs7Ozt5Q0FHRDs7Ozs7cUNBQ0Q7MENBQ04sOERBQUNwQyxLQUFHO2dDQUFDSyxTQUFTLEVBQUVoQiwwRUFBZ0I7MENBQy9CLDRFQUFDc0MsTUFBSTs7d0NBQUMsR0FBQztzREFBQSw4REFBQ2EsSUFBRTtzREFBQywrQ0FBdUM7Ozs7O2lEQUFLOzs7Ozs7eUNBQU87Ozs7O3FDQUN6RDs7Ozs7OzZCQUNGOzs7Ozt5QkFDTzs7Ozs7O2lCQUVYOzs7OzthQUNGLENBQ0w7QUFDSCxDQUFDO0FBbEdZOUMsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGViYXIvU2lkZUJhci5qc3g/N2Q3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBwcm9maWxlIGZyb20gJy4uLy4uL3B1YmxpYy9JbWFnZXMvbWUyLlBORydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBjb25zdCBTaWRlQmFyID0gKHtvcGVuLGNsb3NlfSkgPT4ge1xuXG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhPTUVcIixcbiAgICAgIGhyZWY6IFwiL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJBQk9VVFwiLFxuICAgICAgaHJlZjogXCIjYWJvdXRcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU0VSVklDRVNcIixcbiAgICAgIGhyZWY6IFwiI3NlcnZpY2VzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNLSUxMU1wiLFxuICAgICAgaHJlZjogXCIjc2tpbGxcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiUFJPSkVDVFNcIixcbiAgICAgIGhyZWY6IFwiI3Byb2plY3RzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNPTlRBQ1RcIixcbiAgICAgIGhyZWY6IFwiI2NvbnRhY3RcIlxuICAgIH1cbiAgXVxuICBcbiAgcmV0dXJuIChcblxuICAgPGRpdiBzdHlsZT17XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxlZnQ6b3BlbiA/IFwiMCVcIjpcIi0xMDAlXCIsXG4gICAgICAgICAgICB3aWR0aDogb3BlbiA/IFwiNzUlXCI6IFwiMzAlXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpvcGVuID8gXCJmbGV4LXN0YXJ0XCI6XCJmbGV4LWVuZFwiXG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyY29udGVudH0+XG4gICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICBoaWRkZW46IHtcbiAgICAgICAgICAgICAgc2NhbGU6MC4zLFxuICAgICAgICAgICAgICBvcGFjaXR5OjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aXNpYmxlOiB7XG4gICAgICAgICAgICAgIHNjYWxlOjEsXG4gICAgICAgICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGRlbGF5OiAxLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOjAuOFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cbiAgICAgICAgICAgIHsvKiA8SW1hZ2Ugb2JqZWN0Rml0PSdjb3ZlcicgbGF5b3V0PSdyZXNwb25zaXZlJyB3aWR0aD1cIjEwMCVcIiBwcmlvcml0eSBoZWlnaHQ9XCIxMDAlXCIgc3JjPXtgL0ltYWdlcy9tZS5wbmdgfSAvPiAqL31cbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjEwMCVcIiBwcmlvcml0eSBsYXlvdXQ9J3Jlc3BvbnNpdmUnIGhlaWdodD1cIjEwMCVcIiBzcmM9e3Byb2ZpbGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN3aXRjaH0+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtdG9nZ2xlLW9mZlwiPjwvaT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXB0aW9ufT5cbiAgICAgICAgICAgIDxoMz5Nb3NlcyBOd2lnYmVyaTwvaDM+XG4gICAgICAgICAgICA8aDY+V0VCL2lPUyBERVZFTE9QRVIgPHNwYW4+SU4gTEFHT1MsIE5JR0VSSUE8L3NwYW4+PC9oNj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17e3k6JzEwMHZoJywgb3BhY2l0eTowfX1cbiAgICAgICAgICAgIGFuaW1hdGUgPXt7eTowLCBvcGFjaXR5OjF9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt7XG4gICAgICAgICAgICBkZWxheTo0LFxuICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICB0eXBlOidzcHJpbmcnLFxuICAgICAgICAgICAgYm91bmNlOjAuNlxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmtzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcmVkfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpbmtzLm1hcCgoaXRlbSxrZXkpPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtrZXl9IGhyZWY9e2l0ZW0uaHJlZn0+PGxpIG9uQ2xpY2s9e2Nsb3NlfT57aXRlbS50aXRsZX08L2xpPjwvTGluaz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHR9PlxuICAgICAgICAgICA8c3Bhbj4gPGg1PsKpIENvcHlyaWdodCDCqTIwMjIgQWxsIHJpZ2h0cyByZXNlcnZlZCB8PC9oNT48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkltYWdlIiwicHJvZmlsZSIsIm1vdGlvbiIsIkxpbmsiLCJTaWRlQmFyIiwib3BlbiIsImNsb3NlIiwibGlua3MiLCJ0aXRsZSIsImhyZWYiLCJkaXYiLCJzdHlsZSIsImxlZnQiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiY2xhc3NOYW1lIiwic2lkZWJhciIsInNpZGViYXJjb250ZW50IiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ2YXJpYW50cyIsImhpZGRlbiIsInNjYWxlIiwib3BhY2l0eSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJkdXJhdGlvbiIsInByaW9yaXR5IiwibGF5b3V0IiwiaGVpZ2h0Iiwic3JjIiwic3dpdGNoIiwiaSIsImNhcHRpb24iLCJoMyIsImg2Iiwic3BhbiIsInkiLCJ0eXBlIiwiYm91bmNlIiwibmF2TGlua3MiLCJjZW50ZXJlZCIsInVsIiwibWFwIiwiaXRlbSIsImtleSIsImxpIiwib25DbGljayIsImNvcHlyaWdodCIsImg1Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebar/SideBar.jsx\n"));

/***/ })

});