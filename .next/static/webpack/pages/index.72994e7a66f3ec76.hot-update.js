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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Experience\": function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _cards_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/Card */ \"./components/cards/Card.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Experience = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)(), 2), ref1 = ref[0], inView = ref[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)(), 2), ref21 = ref2[0], inView2 = ref2[1];\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation)();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), expCounter = ref3[0], setExpCounter = ref3[1];\n    var showAnimation = function(start, end, one, two) {\n        if (start) {\n            if (one) {\n                animation.start({\n                    scale: 1,\n                    opacity: 1,\n                    x: 0,\n                    transition: {\n                        duration: 1.2,\n                        delay: 1,\n                        type: \"spring\",\n                        bounce: 0.4\n                    }\n                });\n            }\n        }\n        if (end) {\n            setExpCounter(function(val) {\n                return val + 1;\n            });\n            animation.start({\n                scale: 0.1,\n                opacity: 0,\n                x: \"-70vw\"\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (inView) {\n            showAnimation(true, false);\n        }\n        if (!inView) {\n            showAnimation(false, true);\n        }\n    }, [\n        inView\n    ]);\n    // useEffect(()=> {\n    //   if (inView2) {\n    //     showAnimation(true,false)\n    //   } \n    //   if (!inView2) {\n    //     showAnimation(false,true)\n    //   }\n    // },[inView2])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref1,\n        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().about), \" \").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().experience)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: \"MY WORK EXPERIENCE\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"WHAT IS MY WORK EXPERIENCE?\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 73,\n                columnNumber: 47\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                animate: animation,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Junior developer/intern at ZZDIGITAL (2020-2021) \"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Satisfactorily created functional static websites for clients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Worked on and updated web user interfaces according to demands\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Collaborated with the iOS and Design teams turning client's designs to functional User Interfaces and developing the front end \\n              of a mobile software project with Swift.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Learned Swift on the job\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Developed the front end of a reputable Health oragnization's website\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \" Worked on the front end of web applications\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: ref21,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrow),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-solid fa-caret-left\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Freelance (now)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Currently open to job opportunities and freelancing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrow),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-caret-left\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, _this);\n};\n_s(Experience, \"tQptFXZiGIw2DZUzB3Irb23hir4=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation\n    ];\n});\n_c = Experience;\nvar _c;\n$RefreshReg$(_c, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQThCO0FBQ21CO0FBQ2I7QUFDSjtBQUN1QjtBQUN0QjtBQUNLO0FBQ007QUFFckMsSUFBTVEsVUFBVSxHQUFHLFdBQU07O0lBRTlCLElBQXNCSixHQUFXLG9GQUFYQSxzRUFBUyxFQUFFLE1BQTFCSyxJQUFHLEdBQVlMLEdBQVcsR0FBdkIsRUFBRU0sTUFBTSxHQUFJTixHQUFXLEdBQWY7SUFDbEIsSUFBdUJBLElBQVcsb0ZBQVhBLHNFQUFTLEVBQUUsTUFBM0JPLEtBQUksR0FBWVAsSUFBVyxHQUF2QixFQUFDUSxPQUFPLEdBQUlSLElBQVcsR0FBZjtJQUNuQixJQUFNUyxTQUFTLEdBQUdOLDJEQUFZLEVBQUU7SUFDaEMsSUFBbUNKLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBdkNXLFVBQVUsR0FBa0JYLElBQVcsR0FBN0IsRUFBQ1ksYUFBYSxHQUFJWixJQUFXLEdBQWY7SUFFL0IsSUFBTWEsYUFBYSxHQUFHLFNBQUNDLEtBQUssRUFBQ0MsR0FBRyxFQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBSztRQUMzQyxJQUFHSCxLQUFLLEVBQUU7WUFFUixJQUFJRSxHQUFHLEVBQUU7Z0JBQ1BOLFNBQVMsQ0FBQ0ksS0FBSyxDQUFDO29CQUNkSSxLQUFLLEVBQUMsQ0FBQztvQkFDUEMsT0FBTyxFQUFDLENBQUM7b0JBQ1RDLENBQUMsRUFBQyxDQUFDO29CQUNIQyxVQUFVLEVBQUU7d0JBQ1ZDLFFBQVEsRUFBRSxHQUFHO3dCQUNiQyxLQUFLLEVBQUMsQ0FBQzt3QkFDUEMsSUFBSSxFQUFDLFFBQVE7d0JBQ2JDLE1BQU0sRUFBQyxHQUFHO3FCQUNYO2lCQUNGLENBQUM7WUFFSixDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUlWLEdBQUcsRUFBRTtZQUNQSCxhQUFhLENBQUNjLFNBQUFBLEdBQUc7dUJBQUlBLEdBQUcsR0FBRyxDQUFDO2FBQUEsQ0FBQztZQUM3QmhCLFNBQVMsQ0FBQ0ksS0FBSyxDQUFDO2dCQUNkSSxLQUFLLEVBQUMsR0FBRztnQkFDVEMsT0FBTyxFQUFDLENBQUM7Z0JBQ1RDLENBQUMsRUFBQyxPQUFPO2FBQ1YsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRURsQixnREFBUyxDQUFDLFdBQUs7UUFFYixJQUFJSyxNQUFNLEVBQUU7WUFDVk0sYUFBYSxDQUFDLElBQUksRUFBQyxLQUFLLENBQUM7UUFDM0IsQ0FBQztRQUVELElBQUksQ0FBQ04sTUFBTSxFQUFFO1lBQ1hNLGFBQWEsQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDLEVBQUM7UUFBQ04sTUFBTTtLQUFDLENBQUM7SUFFWCxtQkFBbUI7SUFFbkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxPQUFPO0lBRVAsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxNQUFNO0lBQ04sZUFBZTtJQUlmLHFCQUNFLDhEQUFDb0IsS0FBRztRQUFDckIsR0FBRyxFQUFFQSxJQUFHO1FBQUVzQixTQUFTLEVBQUUsRUFBQyxDQUFrQjlCLE1BQWlCLENBQWpDQSxzRUFBWSxFQUFDLEdBQUMsQ0FBb0IsUUFBbEJBLDJFQUFpQixDQUFFOzswQkFDNUQsOERBQUNpQyxJQUFFOzBCQUFDLG9CQUFrQjs7Ozs7cUJBQUs7MEJBQzNCLDhEQUFDQyxJQUFFOzBCQUFFLDZCQUEyQjs7Ozs7cUJBQUs7WUFBQSxHQUFDOzBCQUFBLDhEQUFDQyxJQUFFOzs7O3FCQUFHOzBCQUc1Qyw4REFBQzlCLHFEQUFVO2dCQUFDK0IsT0FBTyxFQUFFeEIsU0FBUzswQkFDOUIsNEVBQUNpQixLQUFHOztzQ0FDRiw4REFBQ1EsSUFBRTtzQ0FBQyxtREFBaUQ7Ozs7O2lDQUFLO3NDQUMxRCw4REFBQ0MsSUFBRTs7OENBQ0gsOERBQUNDLElBQUU7OENBQUMsK0RBQTZEOzs7Ozt5Q0FBSzs4Q0FDdEUsOERBQUNBLElBQUU7OENBQUMsZ0VBQThEOzs7Ozt5Q0FBSzs4Q0FDdkUsOERBQUNBLElBQUU7OENBQUcseUxBQ3NDOzs7Ozt5Q0FDdkM7OENBQ0wsOERBQUNBLElBQUU7OENBQUMsMEJBQXdCOzs7Ozt5Q0FBSzs4Q0FDakMsOERBQUNBLElBQUU7OENBQUcsc0VBQW9FOzs7Ozt5Q0FBTzs4Q0FDakYsOERBQUNBLElBQUU7OENBQUMsOENBQTRDOzs7Ozt5Q0FBSzs7Ozs7O2lDQUVoRDtzQ0FDTCw4REFBQ1YsS0FBRzs0QkFBQ3JCLEdBQUcsRUFBRUUsS0FBSTs0QkFBRW9CLFNBQVMsRUFBRTlCLHNFQUFZO3NDQUNuQyw0RUFBQ3lDLEdBQUM7Z0NBQUNYLFNBQVMsRUFBQyx3QkFBd0I7Ozs7O3FDQUFLOzs7OztpQ0FFeEM7Ozs7Ozt5QkFDRjs7Ozs7cUJBQ087MEJBSWIsOERBQUNELEtBQUc7O2tDQUNKLDhEQUFDUSxJQUFFO2tDQUFDLGlCQUFlOzs7Ozs2QkFBSztrQ0FDeEIsOERBQUNDLElBQUU7a0NBQ0gsNEVBQUNDLElBQUU7c0NBQUMscURBQW1EOzs7OztpQ0FBSzs7Ozs7NkJBQ3ZEO2tDQUNMLDhEQUFDVixLQUFHO3dCQUFDQyxTQUFTLEVBQUU5QixzRUFBWTtrQ0FDeEIsNEVBQUN5QyxHQUFDOzRCQUFDWCxTQUFTLEVBQUMsd0JBQXdCOzs7OztpQ0FBSzs7Ozs7NkJBRXhDOzs7Ozs7cUJBQ0E7Ozs7OzthQUVKLENBQ1A7QUFDSCxDQUFDO0dBdEdZdkIsVUFBVTs7UUFFQ0osa0VBQVM7UUFDUkEsa0VBQVM7UUFDZEcsdURBQVk7OztBQUpuQkMsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qc3g/MGZlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jYXJkcy9DYXJkXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcblxuZXhwb3J0IGNvbnN0IEV4cGVyaWVuY2UgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpXG4gIGNvbnN0IFtyZWYyLGluVmlldzJdID0gdXNlSW5WaWV3KClcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKClcbiAgY29uc3QgW2V4cENvdW50ZXIsc2V0RXhwQ291bnRlcl0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IHNob3dBbmltYXRpb24gPSAoc3RhcnQsZW5kLG9uZSx0d28pID0+IHtcbiAgICBpZihzdGFydCkge1xuXG4gICAgICBpZiAob25lKSB7XG4gICAgICAgIGFuaW1hdGlvbi5zdGFydCh7XG4gICAgICAgICAgc2NhbGU6MSxcbiAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgeDowLFxuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLjIsXG4gICAgICAgICAgICBkZWxheToxLFxuICAgICAgICAgICAgdHlwZTonc3ByaW5nJyxcbiAgICAgICAgICAgIGJvdW5jZTowLjRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW5kKSB7XG4gICAgICBzZXRFeHBDb3VudGVyKHZhbCA9PiB2YWwgKyAxKVxuICAgICAgYW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgc2NhbGU6MC4xLFxuICAgICAgICBvcGFjaXR5OjAsXG4gICAgICAgIHg6XCItNzB2d1wiXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKT0+IHtcblxuICAgIGlmIChpblZpZXcpIHtcbiAgICAgIHNob3dBbmltYXRpb24odHJ1ZSxmYWxzZSlcbiAgICB9IFxuICAgIFxuICAgIGlmICghaW5WaWV3KSB7XG4gICAgICBzaG93QW5pbWF0aW9uKGZhbHNlLHRydWUpXG4gICAgfVxuICB9LFtpblZpZXddKVxuXG4gIC8vIHVzZUVmZmVjdCgoKT0+IHtcblxuICAvLyAgIGlmIChpblZpZXcyKSB7XG4gIC8vICAgICBzaG93QW5pbWF0aW9uKHRydWUsZmFsc2UpXG4gIC8vICAgfSBcbiAgICBcbiAgLy8gICBpZiAoIWluVmlldzIpIHtcbiAgLy8gICAgIHNob3dBbmltYXRpb24oZmFsc2UsdHJ1ZSlcbiAgLy8gICB9XG4gIC8vIH0sW2luVmlldzJdKVxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmFib3V0fSAke3N0eWxlcy5leHBlcmllbmNlfWB9PlxuICAgICAgICA8aDU+TVkgV09SSyBFWFBFUklFTkNFPC9oNT5cbiAgICAgICAgPGgzID5XSEFUIElTIE1ZIFdPUksgRVhQRVJJRU5DRT88L2gzPiA8YnIgLz5cbiAgICAgICAgXG5cbiAgICAgICAgPG1vdGlvbi5kaXYgYW5pbWF0ZT17YW5pbWF0aW9ufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQ+SnVuaW9yIGRldmVsb3Blci9pbnRlcm4gYXQgWlpESUdJVEFMICgyMDIwLTIwMjEpIDwvaDQ+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5TYXRpc2ZhY3RvcmlseSBjcmVhdGVkIGZ1bmN0aW9uYWwgc3RhdGljIHdlYnNpdGVzIGZvciBjbGllbnRzPC9saT5cbiAgICAgICAgICA8bGk+V29ya2VkIG9uIGFuZCB1cGRhdGVkIHdlYiB1c2VyIGludGVyZmFjZXMgYWNjb3JkaW5nIHRvIGRlbWFuZHM8L2xpPlxuICAgICAgICAgIDxsaT57YENvbGxhYm9yYXRlZCB3aXRoIHRoZSBpT1MgYW5kIERlc2lnbiB0ZWFtcyB0dXJuaW5nIGNsaWVudCdzIGRlc2lnbnMgdG8gZnVuY3Rpb25hbCBVc2VyIEludGVyZmFjZXMgYW5kIGRldmVsb3BpbmcgdGhlIGZyb250IGVuZCBcbiAgICAgICAgICAgICAgb2YgYSBtb2JpbGUgc29mdHdhcmUgcHJvamVjdCB3aXRoIFN3aWZ0LmB9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+TGVhcm5lZCBTd2lmdCBvbiB0aGUgam9iPC9saT5cbiAgICAgICAgICA8bGk+e2BEZXZlbG9wZWQgdGhlIGZyb250IGVuZCBvZiBhIHJlcHV0YWJsZSBIZWFsdGggb3JhZ25pemF0aW9uJ3Mgd2Vic2l0ZWB9PC9saT5cbiAgICAgICAgICA8bGk+IFdvcmtlZCBvbiB0aGUgZnJvbnQgZW5kIG9mIHdlYiBhcHBsaWNhdGlvbnM8L2xpPlxuICAgICAgICAgIFxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiByZWY9e3JlZjJ9IGNsYXNzTmFtZT17c3R5bGVzLmFycm93fT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYS1zb2xpZCBmYS1jYXJldC1sZWZ0Jz48L2k+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIFxuICAgICAgICB7LyogPG1vdGlvbi5kaXYgYW5pbWF0ZT17YW5pbWF0aW9ufT4gKi99XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoND5GcmVlbGFuY2UgKG5vdyk8L2g0PlxuICAgICAgICA8dWw+XG4gICAgICAgIDxsaT5DdXJyZW50bHkgb3BlbiB0byBqb2Igb3Bwb3J0dW5pdGllcyBhbmQgZnJlZWxhbmNpbmc8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93fT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEtc29saWQgZmEtY2FyZXQtbGVmdCc+PC9pPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICB7LyogPC9tb3Rpb24uZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwiQ2FyZCIsInVzZVN0YXRlIiwidXNlSW5WaWV3IiwidXNlRWZmZWN0IiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwiRXhwZXJpZW5jZSIsInJlZiIsImluVmlldyIsInJlZjIiLCJpblZpZXcyIiwiYW5pbWF0aW9uIiwiZXhwQ291bnRlciIsInNldEV4cENvdW50ZXIiLCJzaG93QW5pbWF0aW9uIiwic3RhcnQiLCJlbmQiLCJvbmUiLCJ0d28iLCJzY2FsZSIsIm9wYWNpdHkiLCJ4IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ0eXBlIiwiYm91bmNlIiwidmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWJvdXQiLCJleHBlcmllbmNlIiwiaDUiLCJoMyIsImJyIiwiYW5pbWF0ZSIsImg0IiwidWwiLCJsaSIsImFycm93IiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/experience/Experience.jsx\n"));

/***/ })

});