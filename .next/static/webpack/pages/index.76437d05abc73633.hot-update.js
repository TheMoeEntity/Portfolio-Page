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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideBar\": function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_Images_me2_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/Images/me2.PNG */ \"./public/Images/me2.PNG\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SideBar = function(param) {\n    var open = param.open, close = param.close;\n    _s();\n    var links = [\n        {\n            title: \"HOME\",\n            href: \"/\"\n        },\n        {\n            title: \"ABOUT\",\n            href: \"#about\"\n        },\n        {\n            title: \"SERVICES\",\n            href: \"#services\"\n        },\n        {\n            title: \"SKILLS\",\n            href: \"#skill\"\n        },\n        {\n            title: \"PROJECTS\",\n            href: \"#projects\"\n        },\n        {\n            title: \"CONTACT\",\n            href: \"#contact\"\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\"), mode = ref[0], setMode = ref[1];\n    var onSelectMode = function(mode) {\n        setMode(mode);\n        if (mode === \"dark\") document.body.classList.add(\"dark-mode\");\n        else document.body.classList.remove(\"dark-mode\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Add listener to update styles\n        window.matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\", function(e) {\n            return onSelectMode(e.matches ? \"dark\" : \"light\");\n        });\n        // Setup dark/light mode for the first time\n        onSelectMode(window.matchMedia(\"(prefers-color-scheme: dark)\").matches ? \"dark\" : \"light\");\n        // Remove listener\n        return function() {\n            window.matchMedia(\"(prefers-color-scheme: dark)\").removeEventListener(\"change\", function() {});\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            left: open ? \"0%\" : \"-100%\",\n            width: open ? \"75%\" : \"30%\",\n            justifyContent: open ? \"flex-start\" : \"flex-end\"\n        },\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebar),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebarcontent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: \"hidden\",\n                    animate: \"visible\",\n                    variants: {\n                        hidden: {\n                            scale: 0.3,\n                            opacity: 0\n                        },\n                        visible: {\n                            scale: 1,\n                            opacity: 1,\n                            transition: {\n                                delay: 1,\n                                duration: 0.8\n                            }\n                        }\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().profile),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                width: \"100%\",\n                                priority: true,\n                                layout: \"responsive\",\n                                height: \"100%\",\n                                src: _public_Images_me2_PNG__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"switch\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-solid fa-toggle-on\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 40\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().caption),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Moses Nwigberi\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    children: [\n                                        \"WEB/iOS DEVELOPER \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"IN LAGOS, NIGERIA\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 35\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 10\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: {\n                        y: \"100vh\",\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    transition: {\n                        delay: 4,\n                        duration: 1,\n                        type: \"spring\",\n                        bounce: 0.6\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navLinks),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().centered),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: links.map(function(item, key) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: item.href,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                onClick: close,\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                                lineNumber: 114,\n                                                columnNumber: 52\n                                            }, _this)\n                                        }, key, false, {\n                                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 19\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().copyright),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            children: \"\\xa9 Copyright \\xa92022 All rights reserved |\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 12\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n            lineNumber: 70,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n        lineNumber: 62,\n        columnNumber: 4\n    }, _this);\n};\n_s(SideBar, \"PrVcnLwzerhoOz2Veem6igNKVQ8=\");\n_c = SideBar;\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNLLFNBQVMsRUFBRWhDLHlFQUFlOzBDQUM3Qiw0RUFBQzRELElBQUU7OENBRUNsRCxLQUFLLENBQUNtRCxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFDQyxHQUFHOzZEQUNqQiw4REFBQzNELGtEQUFJOzRDQUFXUSxJQUFJLEVBQUVrRCxJQUFJLENBQUNsRCxJQUFJO3NEQUFFLDRFQUFDb0QsSUFBRTtnREFBQ0MsT0FBTyxFQUFFeEQsS0FBSzswREFBR3FELElBQUksQ0FBQ25ELEtBQUs7Ozs7O3FEQUFNOzJDQUEzRG9ELEdBQUc7Ozs7aURBQStEO3FDQUM5RSxDQUFDOzs7Ozt5Q0FHRDs7Ozs7cUNBQ0Q7MENBQ04sOERBQUNwQyxLQUFHO2dDQUFDSyxTQUFTLEVBQUVoQywwRUFBZ0I7MENBQy9CLDRFQUFDc0QsTUFBSTs7d0NBQUMsR0FBQztzREFBQSw4REFBQ2EsSUFBRTtzREFBQywrQ0FBdUM7Ozs7O2lEQUFLOzs7Ozs7eUNBQU87Ozs7O3FDQUN6RDs7Ozs7OzZCQUNGOzs7Ozt5QkFDTzs7Ozs7O2lCQUVYOzs7OzthQUNGLENBQ0w7QUFDSCxDQUFDO0dBeEhZNUQsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlQmFyLmpzeD83ZDcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi4vLi4vcHVibGljL0ltYWdlcy9tZTIuUE5HJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBTaWRlQmFyID0gKHtvcGVuLGNsb3NlfSkgPT4ge1xuXG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhPTUVcIixcbiAgICAgIGhyZWY6IFwiL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJBQk9VVFwiLFxuICAgICAgaHJlZjogXCIjYWJvdXRcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU0VSVklDRVNcIixcbiAgICAgIGhyZWY6IFwiI3NlcnZpY2VzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNLSUxMU1wiLFxuICAgICAgaHJlZjogXCIjc2tpbGxcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiUFJPSkVDVFNcIixcbiAgICAgIGhyZWY6IFwiI3Byb2plY3RzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNPTlRBQ1RcIixcbiAgICAgIGhyZWY6IFwiI2NvbnRhY3RcIlxuICAgIH1cbiAgXVxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcblxuICBjb25zdCBvblNlbGVjdE1vZGUgPSAobW9kZSkgPT4ge1xuICAgIHNldE1vZGUobW9kZSlcbiAgICBpZiAobW9kZSA9PT0gJ2RhcmsnKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKVxuICAgIGVsc2VcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJylcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQWRkIGxpc3RlbmVyIHRvIHVwZGF0ZSBzdHlsZXNcbiAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gb25TZWxlY3RNb2RlKGUubWF0Y2hlcyA/ICdkYXJrJyA6ICdsaWdodCcpKTtcbiAgXG4gICAgLy8gU2V0dXAgZGFyay9saWdodCBtb2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgIG9uU2VsZWN0TW9kZSh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMgPyAnZGFyaycgOiAnbGlnaHQnKVxuICBcbiAgICAvLyBSZW1vdmUgbGlzdGVuZXJcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcblxuICAgPGRpdiBzdHlsZT17XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxlZnQ6b3BlbiA/IFwiMCVcIjpcIi0xMDAlXCIsXG4gICAgICAgICAgICB3aWR0aDogb3BlbiA/IFwiNzUlXCI6IFwiMzAlXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpvcGVuID8gXCJmbGV4LXN0YXJ0XCI6XCJmbGV4LWVuZFwiXG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyY29udGVudH0+XG4gICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICBoaWRkZW46IHtcbiAgICAgICAgICAgICAgc2NhbGU6MC4zLFxuICAgICAgICAgICAgICBvcGFjaXR5OjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aXNpYmxlOiB7XG4gICAgICAgICAgICAgIHNjYWxlOjEsXG4gICAgICAgICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGRlbGF5OiAxLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOjAuOFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cbiAgICAgICAgICAgIHsvKiA8SW1hZ2Ugb2JqZWN0Rml0PSdjb3ZlcicgbGF5b3V0PSdyZXNwb25zaXZlJyB3aWR0aD1cIjEwMCVcIiBwcmlvcml0eSBoZWlnaHQ9XCIxMDAlXCIgc3JjPXtgL0ltYWdlcy9tZS5wbmdgfSAvPiAqL31cbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjEwMCVcIiBwcmlvcml0eSBsYXlvdXQ9J3Jlc3BvbnNpdmUnIGhlaWdodD1cIjEwMCVcIiBzcmM9e3Byb2ZpbGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN3aXRjaH0+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtdG9nZ2xlLW9uXCI+PC9pPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcHRpb259PlxuICAgICAgICAgICAgPGgzPk1vc2VzIE53aWdiZXJpPC9oMz5cbiAgICAgICAgICAgIDxoNj5XRUIvaU9TIERFVkVMT1BFUiA8c3Bhbj5JTiBMQUdPUywgTklHRVJJQTwvc3Bhbj48L2g2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7eTonMTAwdmgnLCBvcGFjaXR5OjB9fVxuICAgICAgICAgICAgYW5pbWF0ZSA9e3t5OjAsIG9wYWNpdHk6MX19XG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge3tcbiAgICAgICAgICAgIGRlbGF5OjQsXG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgIHR5cGU6J3NwcmluZycsXG4gICAgICAgICAgICBib3VuY2U6MC42XG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua3N9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyZWR9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlua3MubWFwKChpdGVtLGtleSk9PiAoXG4gICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2tleX0gaHJlZj17aXRlbS5ocmVmfT48bGkgb25DbGljaz17Y2xvc2V9PntpdGVtLnRpdGxlfTwvbGk+PC9MaW5rPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvcHlyaWdodH0+XG4gICAgICAgICAgIDxzcGFuPiA8aDU+wqkgQ29weXJpZ2h0IMKpMjAyMiBBbGwgcmlnaHRzIHJlc2VydmVkIHw8L2g1Pjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiSW1hZ2UiLCJwcm9maWxlIiwibW90aW9uIiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2lkZUJhciIsIm9wZW4iLCJjbG9zZSIsImxpbmtzIiwidGl0bGUiLCJocmVmIiwibW9kZSIsInNldE1vZGUiLCJvblNlbGVjdE1vZGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJtYXRjaGVzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsInN0eWxlIiwibGVmdCIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJjbGFzc05hbWUiLCJzaWRlYmFyIiwic2lkZWJhcmNvbnRlbnQiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInZhcmlhbnRzIiwiaGlkZGVuIiwic2NhbGUiLCJvcGFjaXR5IiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJkZWxheSIsImR1cmF0aW9uIiwicHJpb3JpdHkiLCJsYXlvdXQiLCJoZWlnaHQiLCJzcmMiLCJzd2l0Y2giLCJpIiwiY2FwdGlvbiIsImgzIiwiaDYiLCJzcGFuIiwieSIsInR5cGUiLCJib3VuY2UiLCJuYXZMaW5rcyIsImNlbnRlcmVkIiwidWwiLCJtYXAiLCJpdGVtIiwia2V5IiwibGkiLCJvbkNsaWNrIiwiY29weXJpZ2h0IiwiaDUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sidebar/SideBar.jsx\n"));

/***/ })

});