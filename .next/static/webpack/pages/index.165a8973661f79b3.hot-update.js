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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideBar\": function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_Images_me2_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/Images/me2.PNG */ \"./public/Images/me2.PNG\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SideBar = function(param) {\n    var open = param.open, close = param.close;\n    _s();\n    var links = [\n        {\n            title: \"HOME\",\n            href: \"/\"\n        },\n        {\n            title: \"ABOUT\",\n            href: \"#about\"\n        },\n        {\n            title: \"SERVICES\",\n            href: \"#services\"\n        },\n        {\n            title: \"SKILLS\",\n            href: \"#skill\"\n        },\n        {\n            title: \"PROJECTS\",\n            href: \"#projects\"\n        },\n        {\n            title: \"CONTACT\",\n            href: \"#contact\"\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\"), mode = ref[0], setMode = ref[1];\n    var onSelectMode = function(mode) {\n        setMode(mode);\n        if (mode === \"dark\") document.body.classList.add(\"dark-mode\");\n        else document.body.classList.remove(\"dark-mode\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            left: open ? \"0%\" : \"-100%\",\n            width: open ? \"75%\" : \"30%\",\n            justifyContent: open ? \"flex-start\" : \"flex-end\"\n        },\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebar),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebarcontent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: \"hidden\",\n                    animate: \"visible\",\n                    variants: {\n                        hidden: {\n                            scale: 0.3,\n                            opacity: 0\n                        },\n                        visible: {\n                            scale: 1,\n                            opacity: 1,\n                            transition: {\n                                delay: 1,\n                                duration: 0.8\n                            }\n                        }\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().profile),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                width: \"100%\",\n                                priority: true,\n                                layout: \"responsive\",\n                                height: \"100%\",\n                                src: _public_Images_me2_PNG__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"switch\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-solid fa-toggle-on\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 40\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().caption),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Moses Nwigberi\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    children: [\n                                        \"WEB/iOS DEVELOPER \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"IN LAGOS, NIGERIA\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 35\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 10\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: {\n                        y: \"100vh\",\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    transition: {\n                        delay: 4,\n                        duration: 1,\n                        type: \"spring\",\n                        bounce: 0.6\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navLinks),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().centered),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: links.map(function(item, key) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: item.href,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                onClick: close,\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 52\n                                            }, _this)\n                                        }, key, false, {\n                                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 19\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().copyright),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            children: \"\\xa9 Copyright \\xa92022 All rights reserved |\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 12\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n            lineNumber: 56,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/github/Portfolio-Page/components/sidebar/SideBar.jsx\",\n        lineNumber: 48,\n        columnNumber: 4\n    }, _this);\n};\n_s(SideBar, \"uVv1eMZHDj80nGfAj5rqZmm/ENI=\");\n_c = SideBar;\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBRVg7Ozs7O2FBQ0YsQ0FDTDtBQUNILENBQUM7R0ExR1l0RCxPQUFPO0FBQVBBLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGVCYXIuanN4PzdkNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuLi8uLi9wdWJsaWMvSW1hZ2VzL21lMi5QTkcnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IFNpZGVCYXIgPSAoe29wZW4sY2xvc2V9KSA9PiB7XG5cbiAgY29uc3QgbGlua3MgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiSE9NRVwiLFxuICAgICAgaHJlZjogXCIvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkFCT1VUXCIsXG4gICAgICBocmVmOiBcIiNhYm91dFwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJTRVJWSUNFU1wiLFxuICAgICAgaHJlZjogXCIjc2VydmljZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU0tJTExTXCIsXG4gICAgICBocmVmOiBcIiNza2lsbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJQUk9KRUNUU1wiLFxuICAgICAgaHJlZjogXCIjcHJvamVjdHNcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ09OVEFDVFwiLFxuICAgICAgaHJlZjogXCIjY29udGFjdFwiXG4gICAgfVxuICBdXG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xuXG4gIGNvbnN0IG9uU2VsZWN0TW9kZSA9IChtb2RlKSA9PiB7XG4gICAgc2V0TW9kZShtb2RlKVxuICAgIGlmIChtb2RlID09PSAnZGFyaycpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpXG4gICAgZWxzZVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnKVxuICB9XG4gIHJldHVybiAoXG5cbiAgIDxkaXYgc3R5bGU9e1xuICAgICAgICB7XG4gICAgICAgICAgICBsZWZ0Om9wZW4gPyBcIjAlXCI6XCItMTAwJVwiLFxuICAgICAgICAgICAgd2lkdGg6IG9wZW4gPyBcIjc1JVwiOiBcIjMwJVwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6b3BlbiA/IFwiZmxleC1zdGFydFwiOlwiZmxleC1lbmRcIlxuICAgICAgICB9XG4gICAgfVxuICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcmNvbnRlbnR9PlxuICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgaGlkZGVuOiB7XG4gICAgICAgICAgICAgIHNjYWxlOjAuMyxcbiAgICAgICAgICAgICAgb3BhY2l0eTowXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlzaWJsZToge1xuICAgICAgICAgICAgICBzY2FsZToxLFxuICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkZWxheTogMSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjowLjhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XG4gICAgICAgICAgICB7LyogPEltYWdlIG9iamVjdEZpdD0nY292ZXInIGxheW91dD0ncmVzcG9uc2l2ZScgd2lkdGg9XCIxMDAlXCIgcHJpb3JpdHkgaGVpZ2h0PVwiMTAwJVwiIHNyYz17YC9JbWFnZXMvbWUucG5nYH0gLz4gKi99XG4gICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIxMDAlXCIgcHJpb3JpdHkgbGF5b3V0PSdyZXNwb25zaXZlJyBoZWlnaHQ9XCIxMDAlXCIgc3JjPXtwcm9maWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zd2l0Y2h9PjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXRvZ2dsZS1vblwiPjwvaT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXB0aW9ufT5cbiAgICAgICAgICAgIDxoMz5Nb3NlcyBOd2lnYmVyaTwvaDM+XG4gICAgICAgICAgICA8aDY+V0VCL2lPUyBERVZFTE9QRVIgPHNwYW4+SU4gTEFHT1MsIE5JR0VSSUE8L3NwYW4+PC9oNj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17e3k6JzEwMHZoJywgb3BhY2l0eTowfX1cbiAgICAgICAgICAgIGFuaW1hdGUgPXt7eTowLCBvcGFjaXR5OjF9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt7XG4gICAgICAgICAgICBkZWxheTo0LFxuICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICB0eXBlOidzcHJpbmcnLFxuICAgICAgICAgICAgYm91bmNlOjAuNlxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmtzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcmVkfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpbmtzLm1hcCgoaXRlbSxrZXkpPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtrZXl9IGhyZWY9e2l0ZW0uaHJlZn0+PGxpIG9uQ2xpY2s9e2Nsb3NlfT57aXRlbS50aXRsZX08L2xpPjwvTGluaz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHR9PlxuICAgICAgICAgICA8c3Bhbj4gPGg1PsKpIENvcHlyaWdodCDCqTIwMjIgQWxsIHJpZ2h0cyByZXNlcnZlZCB8PC9oNT48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkltYWdlIiwicHJvZmlsZSIsIm1vdGlvbiIsIkxpbmsiLCJ1c2VTdGF0ZSIsIlNpZGVCYXIiLCJvcGVuIiwiY2xvc2UiLCJsaW5rcyIsInRpdGxlIiwiaHJlZiIsIm1vZGUiLCJzZXRNb2RlIiwib25TZWxlY3RNb2RlIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZGl2Iiwic3R5bGUiLCJsZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNsYXNzTmFtZSIsInNpZGViYXIiLCJzaWRlYmFyY29udGVudCIsImluaXRpYWwiLCJhbmltYXRlIiwidmFyaWFudHMiLCJoaWRkZW4iLCJzY2FsZSIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJwcmlvcml0eSIsImxheW91dCIsImhlaWdodCIsInNyYyIsInN3aXRjaCIsImkiLCJjYXB0aW9uIiwiaDMiLCJoNiIsInNwYW4iLCJ5IiwidHlwZSIsImJvdW5jZSIsIm5hdkxpbmtzIiwiY2VudGVyZWQiLCJ1bCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJsaSIsIm9uQ2xpY2siLCJjb3B5cmlnaHQiLCJoNSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidebar/SideBar.jsx\n"));

/***/ })

});