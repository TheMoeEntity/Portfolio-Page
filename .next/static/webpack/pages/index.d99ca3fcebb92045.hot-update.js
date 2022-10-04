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

/***/ "./components/experience/Experience.jsx":
/*!**********************************************!*\
  !*** ./components/experience/Experience.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Experience\": function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _cards_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/Card */ \"./components/cards/Card.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Experience = function() {\n    _s();\n    var ref = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), ref1 = ref.ref, inView = ref.inView;\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), AboutCounter = ref2[0], setAboutCounter = ref2[1];\n    var animationEnd = function() {\n        setAboutCounter(function(counter) {\n            return counter + 1;\n        });\n        animation.start({\n            x: \"-90vw\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (inView) {\n            animation.start({\n                scale: 1,\n                opacity: 1,\n                transition: {\n                    duration: 0.8,\n                    delay: 0.8,\n                    type: \"spring\",\n                    bounce: 0.5\n                }\n            });\n        }\n        if (!inView) {\n            if (AboutCounter >= 1) {\n                return;\n            }\n            // animationEnd()\n            animation.start;\n        }\n    }, [\n        inView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().about), \" \").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().experience)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: \"MY WORK EXPERIENCE\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                ref: ref1,\n                children: \"WHAT IS MY WORK EXPERIENCE?\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 54,\n                columnNumber: 56\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Junior developer/intern at ZZDIGITAL (2020-2021) \"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Satisfactorily created functional static websites for clients\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Worked on and updated web user interfaces according to demands\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Collaborated with the iOS and Design teams turning client's designs to functional User Interfaces and developing the front end \\n            of a mobile software project with Swift.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Learned Swift on the job\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Developed the front end of a reputable Health oragnization's website\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \" Worked on the front end of web applications\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().arrow),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-caret-left\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Freelance (now)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Currently open to job opportunities and freelancing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().arrow),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-caret-left\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_s(Experience, \"rg/aThC4n1Jj6nRFLGmHBSo4pyU=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation\n    ];\n});\n_c = Experience;\nvar _c;\n$RefreshReg$(_c, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE4QjtBQUNtQjtBQUNiO0FBQ0o7QUFDdUI7QUFDdEI7QUFDSztBQUNNO0FBRXJDLElBQU1RLFVBQVUsR0FBRyxXQUFNOztJQUU5QixJQUFzQkosR0FBVyxHQUFYQSxzRUFBUyxFQUFFLEVBQTFCSyxJQUFHLEdBQVlMLEdBQVcsQ0FBMUJLLEdBQUcsRUFBRUMsTUFBTSxHQUFJTixHQUFXLENBQXJCTSxNQUFNO0lBQ2xCLElBQU1DLFNBQVMsR0FBR0osMkRBQVksRUFBRTtJQUNoQyxJQUF1Q0osSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUEzQ1MsWUFBWSxHQUFvQlQsSUFBVyxHQUEvQixFQUFDVSxlQUFlLEdBQUlWLElBQVcsR0FBZjtJQUVuQyxJQUFNVyxZQUFZLEdBQUcsV0FBTTtRQUV6QkQsZUFBZSxDQUFDRSxTQUFBQSxPQUFPO21CQUFJQSxPQUFPLEdBQUcsQ0FBQztTQUFBLENBQUM7UUFDdkNKLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDO1lBQ2RDLENBQUMsRUFBQyxPQUFPO1NBQ1osQ0FBQztJQUNGLENBQUM7SUFFRFosZ0RBQVMsQ0FBQyxXQUFLO1FBRWIsSUFBSUssTUFBTSxFQUFFO1lBQ1ZDLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDO2dCQUNkRSxLQUFLLEVBQUMsQ0FBQztnQkFDUEMsT0FBTyxFQUFDLENBQUM7Z0JBQ1RDLFVBQVUsRUFBRTtvQkFDVkMsUUFBUSxFQUFFLEdBQUc7b0JBQ2JDLEtBQUssRUFBQyxHQUFHO29CQUNUQyxJQUFJLEVBQUMsUUFBUTtvQkFDYkMsTUFBTSxFQUFDLEdBQUc7aUJBQ1g7YUFDRixDQUFDO1FBRUosQ0FBQztRQUVELElBQUksQ0FBQ2QsTUFBTSxFQUFFO1lBQ1gsSUFBSUUsWUFBWSxJQUFJLENBQUMsRUFBRTtnQkFDbkIsT0FBTTtZQUNWLENBQUM7WUFDRCxpQkFBaUI7WUFDakJELFNBQVMsQ0FBQ0ssS0FBSztRQUNqQixDQUFDO0lBQ0gsQ0FBQyxFQUFDO1FBQUNOLE1BQU07S0FBQyxDQUFDO0lBSVgscUJBQ0UsOERBQUNlLEtBQUc7UUFBQ0MsU0FBUyxFQUFFLEVBQUMsQ0FBa0J6QixNQUFpQixDQUFqQ0Esc0VBQVksRUFBQyxHQUFDLENBQW9CLFFBQWxCQSwyRUFBaUIsQ0FBRTs7MEJBQ2xELDhEQUFDNEIsSUFBRTswQkFBQyxvQkFBa0I7Ozs7O3FCQUFLOzBCQUMzQiw4REFBQ0MsSUFBRTtnQkFBQ3JCLEdBQUcsRUFBRUEsSUFBRzswQkFBRSw2QkFBMkI7Ozs7O3FCQUFLO1lBQUEsR0FBQzswQkFBQSw4REFBQ3NCLElBQUU7Ozs7cUJBQUc7MEJBRXJELDhEQUFDTixLQUFHOztrQ0FDSiw4REFBQ08sSUFBRTtrQ0FBQyxtREFBaUQ7Ozs7OzZCQUFLO2tDQUMxRCw4REFBQ0MsSUFBRTs7MENBQ0gsOERBQUNDLElBQUU7MENBQUMsK0RBQTZEOzs7OztxQ0FBSzswQ0FDdEUsOERBQUNBLElBQUU7MENBQUMsZ0VBQThEOzs7OztxQ0FBSzswQ0FDdkUsOERBQUNBLElBQUU7MENBQUcsdUxBQ3NDOzs7OztxQ0FDdkM7MENBQ0wsOERBQUNBLElBQUU7MENBQUMsMEJBQXdCOzs7OztxQ0FBSzswQ0FDakMsOERBQUNBLElBQUU7MENBQUcsc0VBQW9FOzs7OztxQ0FBTzswQ0FDakYsOERBQUNBLElBQUU7MENBQUMsOENBQTRDOzs7OztxQ0FBSzs7Ozs7OzZCQUVoRDtrQ0FDTCw4REFBQ1QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFekIsc0VBQVk7a0NBQ3hCLDRFQUFDbUMsR0FBQzs0QkFBQ1YsU0FBUyxFQUFDLHdCQUF3Qjs7Ozs7aUNBQUs7Ozs7OzZCQUV4Qzs7Ozs7O3FCQUNBOzBCQUVOLDhEQUFDRCxLQUFHOztrQ0FDSiw4REFBQ08sSUFBRTtrQ0FBQyxpQkFBZTs7Ozs7NkJBQUs7a0NBQ3hCLDhEQUFDQyxJQUFFO2tDQUNILDRFQUFDQyxJQUFFO3NDQUFDLHFEQUFtRDs7Ozs7aUNBQUs7Ozs7OzZCQUN2RDtrQ0FDTCw4REFBQ1QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFekIsc0VBQVk7a0NBQ3hCLDRFQUFDbUMsR0FBQzs0QkFBQ1YsU0FBUyxFQUFDLHdCQUF3Qjs7Ozs7aUNBQUs7Ozs7OzZCQUV4Qzs7Ozs7O3FCQUNBOzs7Ozs7YUFDSixDQUNQO0FBQ0gsQ0FBQztHQTdFWWxCLFVBQVU7O1FBRUNKLGtFQUFTO1FBQ2JHLHVEQUFZOzs7QUFIbkJDLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9leHBlcmllbmNlL0V4cGVyaWVuY2UuanN4PzBmZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZHMvQ2FyZFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VBbmltYXRpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5cbmV4cG9ydCBjb25zdCBFeHBlcmllbmNlID0gKCkgPT4ge1xuXG4gIGNvbnN0IHtyZWYsIGluVmlld30gPSB1c2VJblZpZXcoKVxuICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24oKVxuICBjb25zdCBbQWJvdXRDb3VudGVyLHNldEFib3V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IGFuaW1hdGlvbkVuZCA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgc2V0QWJvdXRDb3VudGVyKGNvdW50ZXIgPT4gY291bnRlciArIDEpXG4gICAgYW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgIHg6XCItOTB2d1wiXG4gIH0pIFxuICB9XG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuXG4gICAgaWYgKGluVmlldykge1xuICAgICAgYW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgc2NhbGU6MSxcbiAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBkZWxheTowLjgsXG4gICAgICAgICAgdHlwZTonc3ByaW5nJyxcbiAgICAgICAgICBib3VuY2U6MC41XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IFxuICAgIFxuICAgIGlmICghaW5WaWV3KSB7XG4gICAgICBpZiAoQWJvdXRDb3VudGVyID49IDEpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8vIGFuaW1hdGlvbkVuZCgpXG4gICAgICBhbmltYXRpb24uc3RhcnRcbiAgICB9XG4gIH0sW2luVmlld10pXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hYm91dH0gJHtzdHlsZXMuZXhwZXJpZW5jZX1gfT5cbiAgICAgICAgPGg1Pk1ZIFdPUksgRVhQRVJJRU5DRTwvaDU+XG4gICAgICAgIDxoMyByZWY9e3JlZn0+V0hBVCBJUyBNWSBXT1JLIEVYUEVSSUVOQ0U/PC9oMz4gPGJyIC8+XG4gICAgICAgIFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aDQ+SnVuaW9yIGRldmVsb3Blci9pbnRlcm4gYXQgWlpESUdJVEFMICgyMDIwLTIwMjEpIDwvaDQ+XG4gICAgICAgIDx1bD5cbiAgICAgICAgPGxpPlNhdGlzZmFjdG9yaWx5IGNyZWF0ZWQgZnVuY3Rpb25hbCBzdGF0aWMgd2Vic2l0ZXMgZm9yIGNsaWVudHM8L2xpPlxuICAgICAgICA8bGk+V29ya2VkIG9uIGFuZCB1cGRhdGVkIHdlYiB1c2VyIGludGVyZmFjZXMgYWNjb3JkaW5nIHRvIGRlbWFuZHM8L2xpPlxuICAgICAgICA8bGk+e2BDb2xsYWJvcmF0ZWQgd2l0aCB0aGUgaU9TIGFuZCBEZXNpZ24gdGVhbXMgdHVybmluZyBjbGllbnQncyBkZXNpZ25zIHRvIGZ1bmN0aW9uYWwgVXNlciBJbnRlcmZhY2VzIGFuZCBkZXZlbG9waW5nIHRoZSBmcm9udCBlbmQgXG4gICAgICAgICAgICBvZiBhIG1vYmlsZSBzb2Z0d2FyZSBwcm9qZWN0IHdpdGggU3dpZnQuYH1cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPkxlYXJuZWQgU3dpZnQgb24gdGhlIGpvYjwvbGk+XG4gICAgICAgIDxsaT57YERldmVsb3BlZCB0aGUgZnJvbnQgZW5kIG9mIGEgcmVwdXRhYmxlIEhlYWx0aCBvcmFnbml6YXRpb24ncyB3ZWJzaXRlYH08L2xpPlxuICAgICAgICA8bGk+IFdvcmtlZCBvbiB0aGUgZnJvbnQgZW5kIG9mIHdlYiBhcHBsaWNhdGlvbnM8L2xpPlxuICAgICAgICBcbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd30+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhLXNvbGlkIGZhLWNhcmV0LWxlZnQnPjwvaT5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGg0PkZyZWVsYW5jZSAobm93KTwvaDQ+XG4gICAgICAgIDx1bD5cbiAgICAgICAgPGxpPkN1cnJlbnRseSBvcGVuIHRvIGpvYiBvcHBvcnR1bml0aWVzIGFuZCBmcmVlbGFuY2luZzwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYS1zb2xpZCBmYS1jYXJldC1sZWZ0Jz48L2k+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUluVmlldyIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsIkV4cGVyaWVuY2UiLCJyZWYiLCJpblZpZXciLCJhbmltYXRpb24iLCJBYm91dENvdW50ZXIiLCJzZXRBYm91dENvdW50ZXIiLCJhbmltYXRpb25FbmQiLCJjb3VudGVyIiwic3RhcnQiLCJ4Iiwic2NhbGUiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ0eXBlIiwiYm91bmNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWJvdXQiLCJleHBlcmllbmNlIiwiaDUiLCJoMyIsImJyIiwiaDQiLCJ1bCIsImxpIiwiYXJyb3ciLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/experience/Experience.jsx\n"));

/***/ })

});