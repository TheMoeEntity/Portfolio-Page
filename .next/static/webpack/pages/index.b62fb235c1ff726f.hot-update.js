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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Experience\": function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _cards_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/Card */ \"./components/cards/Card.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Experience = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)(), 2), ref1 = ref[0], inView = ref[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)(), 2), ref21 = ref2[0], inView2 = ref2[1];\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation)();\n    var animation2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation)();\n    var showAnimation = function(start, end, one, two) {\n        var inAnim = {\n            scale: 1,\n            opacity: 1,\n            x: 0,\n            transition: {\n                duration: 1.2,\n                delay: 0.6,\n                type: \"spring\",\n                bounce: 0.4\n            }\n        };\n        var outAnim = {\n            scale: 0.1,\n            opacity: 0,\n            x: \"-70vw\"\n        };\n        if (start) {\n            if (one) {\n                animation.start(inAnim);\n            }\n            if (two) {\n                animation2.start(inAnim);\n            }\n        }\n        if (end) {\n            if (one) {\n                animation.start(outAnim);\n            }\n            if (two) {\n                animation2.start(outAnim);\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (inView) {\n            showAnimation(true, false, true, false);\n        }\n        if (!inView) {\n            showAnimation(false, true, true, false);\n        }\n    }, [\n        inView\n    ]);\n    // useEffect(()=> {\n    //   if (inView2) {\n    //     showAnimation(true,false)\n    //   } \n    //   if (!inView2) {\n    //     showAnimation(false,true)\n    //   }\n    // },[inView2])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref1,\n        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().about), \" \").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().experience)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: \"MY WORK EXPERIENCE\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"WHAT IS MY WORK EXPERIENCE?\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 92,\n                columnNumber: 47\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                animate: animation,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Junior developer/intern at ZZDIGITAL (2020-2021) \"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Satisfactorily created functional static websites for clients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Worked on and updated web user interfaces according to demands\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Collaborated with the iOS and Design teams turning client's designs to functional User Interfaces and developing the front end \\n              of a mobile software project with Swift.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Learned Swift on the job\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Developed the front end of a reputable Health oragnization's website\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \" Worked on the front end of web applications\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: ref21,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrow),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-solid fa-caret-left\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Freelance (now)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Currently open to job opportunities and freelancing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 121,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrow),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-caret-left\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/experience/Experience.jsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, _this);\n};\n_s(Experience, \"svjVhheE3poAYB2xwtAsj3W2uZQ=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation\n    ];\n});\n_c = Experience;\nvar _c;\n$RefreshReg$(_c, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQThCO0FBQ21CO0FBQ2I7QUFDSjtBQUN1QjtBQUN0QjtBQUNLO0FBQ007QUFFckMsSUFBTVEsVUFBVSxHQUFHLFdBQU07O0lBRTlCLElBQXNCSixHQUFXLG9GQUFYQSxzRUFBUyxFQUFFLE1BQTFCSyxJQUFHLEdBQVlMLEdBQVcsR0FBdkIsRUFBRU0sTUFBTSxHQUFJTixHQUFXLEdBQWY7SUFDbEIsSUFBdUJBLElBQVcsb0ZBQVhBLHNFQUFTLEVBQUUsTUFBM0JPLEtBQUksR0FBWVAsSUFBVyxHQUF2QixFQUFDUSxPQUFPLEdBQUlSLElBQVcsR0FBZjtJQUNuQixJQUFNUyxTQUFTLEdBQUdOLDJEQUFZLEVBQUU7SUFDaEMsSUFBTU8sVUFBVSxHQUFHUCwyREFBWSxFQUFFO0lBRWpDLElBQU1RLGFBQWEsR0FBRyxTQUFDQyxLQUFLLEVBQUNDLEdBQUcsRUFBQ0MsR0FBRyxFQUFDQyxHQUFHLEVBQUs7UUFFM0MsSUFBTUMsTUFBTSxHQUNWO1lBQ0VDLEtBQUssRUFBQyxDQUFDO1lBQ1BDLE9BQU8sRUFBQyxDQUFDO1lBQ1RDLENBQUMsRUFBQyxDQUFDO1lBQ0hDLFVBQVUsRUFBRTtnQkFDVkMsUUFBUSxFQUFFLEdBQUc7Z0JBQ2JDLEtBQUssRUFBQyxHQUFHO2dCQUNUQyxJQUFJLEVBQUMsUUFBUTtnQkFDYkMsTUFBTSxFQUFDLEdBQUc7YUFDWDtTQUNGO1FBRUgsSUFBTUMsT0FBTyxHQUFHO1lBQ2RSLEtBQUssRUFBQyxHQUFHO1lBQ1RDLE9BQU8sRUFBQyxDQUFDO1lBQ1RDLENBQUMsRUFBQyxPQUFPO1NBQ1Y7UUFFRCxJQUFHUCxLQUFLLEVBQUU7WUFFUixJQUFJRSxHQUFHLEVBQUU7Z0JBQ1BMLFNBQVMsQ0FBQ0csS0FBSyxDQUFDSSxNQUFNLENBQUM7WUFDekIsQ0FBQztZQUVELElBQUlELEdBQUcsRUFBRTtnQkFDUEwsVUFBVSxDQUFDRSxLQUFLLENBQUNJLE1BQU0sQ0FBQztZQUMxQixDQUFDO1FBRUgsQ0FBQztRQUVELElBQUlILEdBQUcsRUFBRTtZQUVQLElBQUlDLEdBQUcsRUFBRTtnQkFFUEwsU0FBUyxDQUFDRyxLQUFLLENBQUNhLE9BQU8sQ0FBQztZQUMxQixDQUFDO1lBRUQsSUFBSVYsR0FBRyxFQUFFO2dCQUNQTCxVQUFVLENBQUNFLEtBQUssQ0FBQ2EsT0FBTyxDQUFDO1lBQzNCLENBQUM7UUFFSCxDQUFDO0lBRUgsQ0FBQztJQUVEeEIsZ0RBQVMsQ0FBQyxXQUFLO1FBRWIsSUFBSUssTUFBTSxFQUFFO1lBQ1ZLLGFBQWEsQ0FBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLENBQUM7UUFDdEMsQ0FBQztRQUVELElBQUksQ0FBQ0wsTUFBTSxFQUFFO1lBQ1hLLGFBQWEsQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUMsRUFBQztRQUFDTCxNQUFNO0tBQUMsQ0FBQztJQUVYLG1CQUFtQjtJQUVuQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLE9BQU87SUFFUCxvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLE1BQU07SUFDTixlQUFlO0lBSWYscUJBQ0UsOERBQUNvQixLQUFHO1FBQUNyQixHQUFHLEVBQUVBLElBQUc7UUFBRXNCLFNBQVMsRUFBRSxFQUFDLENBQWtCOUIsTUFBaUIsQ0FBakNBLHNFQUFZLEVBQUMsR0FBQyxDQUFvQixRQUFsQkEsMkVBQWlCLENBQUU7OzBCQUM1RCw4REFBQ2lDLElBQUU7MEJBQUMsb0JBQWtCOzs7OztxQkFBSzswQkFDM0IsOERBQUNDLElBQUU7MEJBQUUsNkJBQTJCOzs7OztxQkFBSztZQUFBLEdBQUM7MEJBQUEsOERBQUNDLElBQUU7Ozs7cUJBQUc7MEJBRzVDLDhEQUFDOUIscURBQVU7Z0JBQUMrQixPQUFPLEVBQUV4QixTQUFTOzBCQUM5Qiw0RUFBQ2lCLEtBQUc7O3NDQUNGLDhEQUFDUSxJQUFFO3NDQUFDLG1EQUFpRDs7Ozs7aUNBQUs7c0NBQzFELDhEQUFDQyxJQUFFOzs4Q0FDSCw4REFBQ0MsSUFBRTs4Q0FBQywrREFBNkQ7Ozs7O3lDQUFLOzhDQUN0RSw4REFBQ0EsSUFBRTs4Q0FBQyxnRUFBOEQ7Ozs7O3lDQUFLOzhDQUN2RSw4REFBQ0EsSUFBRTs4Q0FBRyx5TEFDc0M7Ozs7O3lDQUN2Qzs4Q0FDTCw4REFBQ0EsSUFBRTs4Q0FBQywwQkFBd0I7Ozs7O3lDQUFLOzhDQUNqQyw4REFBQ0EsSUFBRTs4Q0FBRyxzRUFBb0U7Ozs7O3lDQUFPOzhDQUNqRiw4REFBQ0EsSUFBRTs4Q0FBQyw4Q0FBNEM7Ozs7O3lDQUFLOzs7Ozs7aUNBRWhEO3NDQUNMLDhEQUFDVixLQUFHOzRCQUFDckIsR0FBRyxFQUFFRSxLQUFJOzRCQUFFb0IsU0FBUyxFQUFFOUIsc0VBQVk7c0NBQ25DLDRFQUFDeUMsR0FBQztnQ0FBQ1gsU0FBUyxFQUFDLHdCQUF3Qjs7Ozs7cUNBQUs7Ozs7O2lDQUV4Qzs7Ozs7O3lCQUNGOzs7OztxQkFDTzswQkFJYiw4REFBQ0QsS0FBRzs7a0NBQ0osOERBQUNRLElBQUU7a0NBQUMsaUJBQWU7Ozs7OzZCQUFLO2tDQUN4Qiw4REFBQ0MsSUFBRTtrQ0FDSCw0RUFBQ0MsSUFBRTtzQ0FBQyxxREFBbUQ7Ozs7O2lDQUFLOzs7Ozs2QkFDdkQ7a0NBQ0wsOERBQUNWLEtBQUc7d0JBQUNDLFNBQVMsRUFBRTlCLHNFQUFZO2tDQUN4Qiw0RUFBQ3lDLEdBQUM7NEJBQUNYLFNBQVMsRUFBQyx3QkFBd0I7Ozs7O2lDQUFLOzs7Ozs2QkFFeEM7Ozs7OztxQkFDQTs7Ozs7O2FBRUosQ0FDUDtBQUNILENBQUM7R0F6SFl2QixVQUFVOztRQUVDSixrRUFBUztRQUNSQSxrRUFBUztRQUNkRyx1REFBWTtRQUNYQSx1REFBWTs7O0FBTHBCQyxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9FeHBlcmllbmNlLmpzeD8wZmVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmRzL0NhcmRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuXG5leHBvcnQgY29uc3QgRXhwZXJpZW5jZSA9ICgpID0+IHtcblxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KClcbiAgY29uc3QgW3JlZjIsaW5WaWV3Ml0gPSB1c2VJblZpZXcoKVxuICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24oKVxuICBjb25zdCBhbmltYXRpb24yID0gdXNlQW5pbWF0aW9uKClcblxuICBjb25zdCBzaG93QW5pbWF0aW9uID0gKHN0YXJ0LGVuZCxvbmUsdHdvKSA9PiB7XG5cbiAgICBjb25zdCBpbkFuaW0gPSBcbiAgICAgIHtcbiAgICAgICAgc2NhbGU6MSxcbiAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICB4OjAsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBkdXJhdGlvbjogMS4yLFxuICAgICAgICAgIGRlbGF5OjAuNixcbiAgICAgICAgICB0eXBlOidzcHJpbmcnLFxuICAgICAgICAgIGJvdW5jZTowLjRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgY29uc3Qgb3V0QW5pbSA9IHtcbiAgICAgIHNjYWxlOjAuMSxcbiAgICAgIG9wYWNpdHk6MCxcbiAgICAgIHg6XCItNzB2d1wiXG4gICAgfVxuICAgXG4gICAgaWYoc3RhcnQpIHtcblxuICAgICAgaWYgKG9uZSkge1xuICAgICAgICBhbmltYXRpb24uc3RhcnQoaW5BbmltKVxuICAgICAgfVxuXG4gICAgICBpZiAodHdvKSB7XG4gICAgICAgIGFuaW1hdGlvbjIuc3RhcnQoaW5BbmltKVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYgKGVuZCkge1xuICAgICAgXG4gICAgICBpZiAob25lKSB7XG5cbiAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KG91dEFuaW0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0d28pIHtcbiAgICAgICAgYW5pbWF0aW9uMi5zdGFydChvdXRBbmltKVxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PiB7XG5cbiAgICBpZiAoaW5WaWV3KSB7XG4gICAgICBzaG93QW5pbWF0aW9uKHRydWUsZmFsc2UsdHJ1ZSxmYWxzZSlcbiAgICB9IFxuICAgIFxuICAgIGlmICghaW5WaWV3KSB7XG4gICAgICBzaG93QW5pbWF0aW9uKGZhbHNlLHRydWUsdHJ1ZSxmYWxzZSlcbiAgICB9XG4gIH0sW2luVmlld10pXG5cbiAgLy8gdXNlRWZmZWN0KCgpPT4ge1xuXG4gIC8vICAgaWYgKGluVmlldzIpIHtcbiAgLy8gICAgIHNob3dBbmltYXRpb24odHJ1ZSxmYWxzZSlcbiAgLy8gICB9IFxuICAgIFxuICAvLyAgIGlmICghaW5WaWV3Mikge1xuICAvLyAgICAgc2hvd0FuaW1hdGlvbihmYWxzZSx0cnVlKVxuICAvLyAgIH1cbiAgLy8gfSxbaW5WaWV3Ml0pXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWJvdXR9ICR7c3R5bGVzLmV4cGVyaWVuY2V9YH0+XG4gICAgICAgIDxoNT5NWSBXT1JLIEVYUEVSSUVOQ0U8L2g1PlxuICAgICAgICA8aDMgPldIQVQgSVMgTVkgV09SSyBFWFBFUklFTkNFPzwvaDM+IDxiciAvPlxuICAgICAgICBcblxuICAgICAgICA8bW90aW9uLmRpdiBhbmltYXRlPXthbmltYXRpb259PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoND5KdW5pb3IgZGV2ZWxvcGVyL2ludGVybiBhdCBaWkRJR0lUQUwgKDIwMjAtMjAyMSkgPC9oND5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlNhdGlzZmFjdG9yaWx5IGNyZWF0ZWQgZnVuY3Rpb25hbCBzdGF0aWMgd2Vic2l0ZXMgZm9yIGNsaWVudHM8L2xpPlxuICAgICAgICAgIDxsaT5Xb3JrZWQgb24gYW5kIHVwZGF0ZWQgd2ViIHVzZXIgaW50ZXJmYWNlcyBhY2NvcmRpbmcgdG8gZGVtYW5kczwvbGk+XG4gICAgICAgICAgPGxpPntgQ29sbGFib3JhdGVkIHdpdGggdGhlIGlPUyBhbmQgRGVzaWduIHRlYW1zIHR1cm5pbmcgY2xpZW50J3MgZGVzaWducyB0byBmdW5jdGlvbmFsIFVzZXIgSW50ZXJmYWNlcyBhbmQgZGV2ZWxvcGluZyB0aGUgZnJvbnQgZW5kIFxuICAgICAgICAgICAgICBvZiBhIG1vYmlsZSBzb2Z0d2FyZSBwcm9qZWN0IHdpdGggU3dpZnQuYH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5MZWFybmVkIFN3aWZ0IG9uIHRoZSBqb2I8L2xpPlxuICAgICAgICAgIDxsaT57YERldmVsb3BlZCB0aGUgZnJvbnQgZW5kIG9mIGEgcmVwdXRhYmxlIEhlYWx0aCBvcmFnbml6YXRpb24ncyB3ZWJzaXRlYH08L2xpPlxuICAgICAgICAgIDxsaT4gV29ya2VkIG9uIHRoZSBmcm9udCBlbmQgb2Ygd2ViIGFwcGxpY2F0aW9uczwvbGk+XG4gICAgICAgICAgXG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IHJlZj17cmVmMn0gY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhLXNvbGlkIGZhLWNhcmV0LWxlZnQnPjwvaT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgXG4gICAgICAgIHsvKiA8bW90aW9uLmRpdiBhbmltYXRlPXthbmltYXRpb259PiAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGg0PkZyZWVsYW5jZSAobm93KTwvaDQ+XG4gICAgICAgIDx1bD5cbiAgICAgICAgPGxpPkN1cnJlbnRseSBvcGVuIHRvIGpvYiBvcHBvcnR1bml0aWVzIGFuZCBmcmVlbGFuY2luZzwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYS1zb2xpZCBmYS1jYXJldC1sZWZ0Jz48L2k+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgIHsvKiA8L21vdGlvbi5kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJDYXJkIiwidXNlU3RhdGUiLCJ1c2VJblZpZXciLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJFeHBlcmllbmNlIiwicmVmIiwiaW5WaWV3IiwicmVmMiIsImluVmlldzIiLCJhbmltYXRpb24iLCJhbmltYXRpb24yIiwic2hvd0FuaW1hdGlvbiIsInN0YXJ0IiwiZW5kIiwib25lIiwidHdvIiwiaW5BbmltIiwic2NhbGUiLCJvcGFjaXR5IiwieCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwidHlwZSIsImJvdW5jZSIsIm91dEFuaW0iLCJkaXYiLCJjbGFzc05hbWUiLCJhYm91dCIsImV4cGVyaWVuY2UiLCJoNSIsImgzIiwiYnIiLCJhbmltYXRlIiwiaDQiLCJ1bCIsImxpIiwiYXJyb3ciLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/experience/Experience.jsx\n"));

/***/ })

});