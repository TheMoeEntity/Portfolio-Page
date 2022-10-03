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

/***/ "./components/about_me/About.jsx":
/*!***************************************!*\
  !*** ./components/about_me/About.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/Card */ \"./components/cards/Card.jsx\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About.module.css */ \"./components/about_me/About.module.css\");\n/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_About_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar About = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), AboutCounter = ref[0], setAboutCounter = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            icon: \"fa-solid fa-code\",\n            name: \"Web Development\",\n            color: \"purple\"\n        },\n        {\n            icon: \"fa-brands fa-apple\",\n            name: \"iOS Applications\",\n            color: \"#2c98f0\"\n        },\n        {\n            icon: \"fa-solid fa-mobile\",\n            name: \"Web Applications\",\n            color: \"red\"\n        },\n        {\n            icon: \"fa-solid fa-database\",\n            name: \"SEO Optimization\",\n            color: \"rgba(0, 0, 0, 0.6)\"\n        }\n    ]), classes = ref1[0], setClasses = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), 2), ref3 = ref2[0], inView = ref2[1];\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    var ref4 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), 2), offerRef = ref4[0], offerInView = ref4[1];\n    var offerAnimation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    var animationEnd = function() {\n        setAboutCounter(function(counter) {\n            return counter + 1;\n        });\n        animation.start({\n            x: \"-90vw\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (inView) {\n            animation.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 1\n                }\n            });\n        }\n        if (!inView) {\n            if (AboutCounter >= 1) {\n                return;\n            }\n            animationEnd();\n        }\n    }, [\n        inView\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (offerInView) {\n            offerAnimation.start({\n                scale: 1,\n                opacity: 1,\n                transition: {\n                    duration: 0.7,\n                    delay: 0.5,\n                    type: \"keyf\"\n                }\n            });\n        }\n        if (!offerInView) {\n            offerAnimation.start({\n                scale: 0.1,\n                opacity: 0\n            });\n        }\n    }, [\n        offerInView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                animate: animation,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"about\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"ABOUT US\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"WHO AM I?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 9\n                        }, _this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 28\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Hi, bet you already know this, but \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"my name is Moses Chukwudi Nwigberi\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 46\n                    }, _this),\n                    \". I identify as an entry level, junior front end web developer with good interest in iOS. Leveraging the latest web technologies, I create single page web applications, properly responsive, functional and SEO optimized websites. Hey, I am for the most part a front end developer but, I can integrate with a backend if needed, creating a full stack website on request\\uD83D\\uDE09. I create front IOS applications with Swift too.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, _this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 20\n                    }, _this),\n                    \"At the moment, I am a 300L student of Chemical Engineering in the University of Lagos, Akoka. My hobbies include coding(duh), web development(obviously), mobile development(lol\\uD83D\\uDE02) and FIFA. I am also pretty decent in french language( ola amigo!)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 115,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: offerRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    animate: offerAnimation,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"services\",\n                        className: (_About_module_css__WEBPACK_IMPORTED_MODULE_6___default().classesContainer),\n                        children: classes.map(function(skill, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                                progress: false,\n                                border: skill.color,\n                                classname: skill.icon,\n                                name: skill.name\n                            }, key, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/about_me/About.jsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n};\n_s(About, \"NUwAb0IjW7VoDyf/R81KZUog1V8=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Fib3V0X21lL0Fib3V0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQW9DO0FBQ0c7QUFDUDtBQUN1QjtBQUN0QjtBQUNLO0FBQ007QUFHckMsSUFBTU8sS0FBSyxHQUFHLFdBQU07O0lBR3ZCLElBQXVDTCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTNDTSxZQUFZLEdBQW9CTixHQUFXLEdBQS9CLEVBQUNPLGVBQWUsR0FBSVAsR0FBVyxHQUFmO0lBQ25DLElBQTZCQSxJQXVCekIsR0F2QnlCQSwrQ0FBUSxDQUFDO1FBQ2xDO1lBQ0VRLElBQUksRUFBRSxrQkFBa0I7WUFDeEJDLElBQUksRUFBRSxpQkFBaUI7WUFDdkJDLEtBQUssRUFBRSxRQUFRO1NBQ2hCO1FBQ0Q7WUFDRUYsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQkMsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QkMsS0FBSyxFQUFFLFNBQVM7U0FDakI7UUFDRDtZQUNFRixJQUFJLEVBQUUsb0JBQW9CO1lBQzFCQyxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCQyxLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0Q7WUFDRUYsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QkMsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QkMsS0FBSyxFQUFFLG9CQUFvQjtTQUM1QjtLQUdGLENBQUMsRUF2QkdDLE9BQU8sR0FBZVgsSUF1QnpCLEdBdkJVLEVBQUNZLFVBQVUsR0FBSVosSUF1QnpCLEdBdkJxQjtJQXlCdkIsSUFBc0JDLElBQVcsb0ZBQVhBLHNFQUFTLEVBQUUsTUFBMUJZLElBQUcsR0FBWVosSUFBVyxHQUF2QixFQUFFYSxNQUFNLEdBQUliLElBQVcsR0FBZjtJQUNsQixJQUFNYyxTQUFTLEdBQUdYLDJEQUFZLEVBQUU7SUFDaEMsSUFBZ0NILElBQVcsb0ZBQVhBLHNFQUFTLEVBQUUsTUFBcENlLFFBQVEsR0FBaUJmLElBQVcsR0FBNUIsRUFBRWdCLFdBQVcsR0FBSWhCLElBQVcsR0FBZjtJQUM1QixJQUFNaUIsY0FBYyxHQUFHZCwyREFBWSxFQUFFO0lBRXJDLElBQU1lLFlBQVksR0FBRyxXQUFNO1FBRXpCWixlQUFlLENBQUNhLFNBQUFBLE9BQU87bUJBQUlBLE9BQU8sR0FBRyxDQUFDO1NBQUEsQ0FBQztRQUN2Q0wsU0FBUyxDQUFDTSxLQUFLLENBQUM7WUFDZEMsQ0FBQyxFQUFDLE9BQU87U0FDWixDQUFDO0lBQ0YsQ0FBQztJQUVEcEIsZ0RBQVMsQ0FBQyxXQUFLO1FBRWIsSUFBSVksTUFBTSxFQUFFO1lBQ1ZDLFNBQVMsQ0FBQ00sS0FBSyxDQUFDO2dCQUNaQyxDQUFDLEVBQUMsQ0FBQztnQkFDSEMsT0FBTyxFQUFDLENBQUM7Z0JBQ1RDLFVBQVUsRUFBRTtvQkFDVkMsUUFBUSxFQUFFLENBQUM7aUJBQ1o7YUFDSixDQUFDO1FBRUosQ0FBQztRQUVELElBQUksQ0FBQ1gsTUFBTSxFQUFFO1lBQ1gsSUFBSVIsWUFBWSxJQUFJLENBQUMsRUFBRTtnQkFDbkIsT0FBTTtZQUNWLENBQUM7WUFDRGEsWUFBWSxFQUFFO1FBQ2hCLENBQUM7SUFDSCxDQUFDLEVBQUM7UUFBQ0wsTUFBTTtLQUFDLENBQUM7SUFFWFosZ0RBQVMsQ0FBQyxXQUFLO1FBRWIsSUFBSWUsV0FBVyxFQUFFO1lBRWZDLGNBQWMsQ0FBQ0csS0FBSyxDQUFDO2dCQUNqQkssS0FBSyxFQUFDLENBQUM7Z0JBQ1BILE9BQU8sRUFBQyxDQUFDO2dCQUNUQyxVQUFVLEVBQUU7b0JBQ1ZDLFFBQVEsRUFBRSxHQUFHO29CQUNiRSxLQUFLLEVBQUMsR0FBRztvQkFDVEMsSUFBSSxFQUFDLE1BQU07aUJBQ1o7YUFDSixDQUFDO1FBRUosQ0FBQztRQUVELElBQUksQ0FBQ1gsV0FBVyxFQUFFO1lBRWhCQyxjQUFjLENBQUNHLEtBQUssQ0FBQztnQkFDbkJLLEtBQUssRUFBQyxHQUFHO2dCQUNUSCxPQUFPLEVBQUMsQ0FBQzthQUNWLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQyxFQUFDO1FBQUNOLFdBQVc7S0FBQyxDQUFDO0lBSXBCLHFCQUNFLDhEQUFDWSxLQUFHO1FBQUNoQixHQUFHLEVBQUVBLElBQUc7OzBCQUViLDhEQUFDVixxREFBVTtnQkFBQzJCLE9BQU8sRUFBRWYsU0FBUzswQkFDMUIsNEVBQUNjLEtBQUc7b0JBQUNFLEVBQUUsRUFBQyxPQUFPOztzQ0FDZiw4REFBQ0MsSUFBRTtzQ0FBQyxVQUFROzs7OztpQ0FBSztzQ0FDakIsOERBQUNDLElBQUU7c0NBQUMsV0FBUzs7Ozs7aUNBQUs7d0JBQUEsR0FBQztzQ0FBQSw4REFBQ0MsSUFBRTs7OztpQ0FBRzs7Ozs7O3lCQUNuQjs7Ozs7cUJBQ0c7MEJBRVQsOERBQUNDLEdBQUM7O29CQUFDLHFDQUNrQztrQ0FBQSw4REFBQ0MsR0FBQztrQ0FBQyxvQ0FBa0M7Ozs7OzZCQUFJO29CQUFBLDZhQUUxRTtrQ0FBQSw4REFBQ0YsSUFBRTs7Ozs2QkFBRztvQkFBQSxHQUFDO2tDQUFBLDhEQUFDQSxJQUFFOzs7OzZCQUFHO29CQUFBLGlRQUVqQjs7Ozs7O3FCQUFJO1lBQUEsR0FBQzswQkFBQSw4REFBQ0EsSUFBRTs7OztxQkFBRzswQkFFWCw4REFBQ0wsS0FBRztnQkFBQ2hCLEdBQUcsRUFBRUcsUUFBUTswQkFDbEIsNEVBQUNiLHFEQUFVO29CQUNYMkIsT0FBTyxFQUFFWixjQUFjOzhCQUV2Qiw0RUFBQ1csS0FBRzt3QkFBQ0UsRUFBRSxFQUFDLFVBQVU7d0JBQUNNLFNBQVMsRUFBRXRDLDJFQUF1QjtrQ0FHakRZLE9BQU8sQ0FBQzRCLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUNDLEdBQUc7aURBQ3BCLDhEQUFDM0MsNkNBQUk7Z0NBQUM0QyxRQUFRLEVBQUUsS0FBSztnQ0FBRUMsTUFBTSxFQUFFSCxLQUFLLENBQUM5QixLQUFLO2dDQUFFa0MsU0FBUyxFQUFFSixLQUFLLENBQUNoQyxJQUFJO2dDQUFZQyxJQUFJLEVBQUUrQixLQUFLLENBQUMvQixJQUFJOytCQUFyQmdDLEdBQUc7Ozs7cUNBQXNCO3lCQUNoRyxDQUFDOzs7Ozs2QkFFRjs7Ozs7eUJBQ087Ozs7O3FCQUNQOzs7Ozs7YUFHSixDQUNQO0FBQ0gsQ0FBQztHQTdIWXBDLEtBQUs7O1FBNkJVSixrRUFBUztRQUNiRyx1REFBWTtRQUNFSCxrRUFBUztRQUNsQkcsdURBQVk7OztBQWhDNUJDLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dF9tZS9BYm91dC5qc3g/NDQzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmRzL0NhcmRcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Fib3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VBbmltYXRpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5cblxuZXhwb3J0IGNvbnN0IEFib3V0ID0gKCkgPT4ge1xuXG5cbiAgICBjb25zdCBbQWJvdXRDb3VudGVyLHNldEFib3V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtjbGFzc2VzLHNldENsYXNzZXNdID0gdXNlU3RhdGUoW1xuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJmYS1zb2xpZCBmYS1jb2RlXCIsXG4gICAgICAgICAgbmFtZTogXCJXZWIgRGV2ZWxvcG1lbnRcIixcbiAgICAgICAgICBjb2xvcjogXCJwdXJwbGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJmYS1icmFuZHMgZmEtYXBwbGVcIixcbiAgICAgICAgICBuYW1lOiBcImlPUyBBcHBsaWNhdGlvbnNcIixcbiAgICAgICAgICBjb2xvcjogXCIjMmM5OGYwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtc29saWQgZmEtbW9iaWxlXCIsXG4gICAgICAgICAgbmFtZTogXCJXZWIgQXBwbGljYXRpb25zXCIsXG4gICAgICAgICAgY29sb3I6IFwicmVkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtc29saWQgZmEtZGF0YWJhc2VcIixcbiAgICAgICAgICBuYW1lOiBcIlNFTyBPcHRpbWl6YXRpb25cIixcbiAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIlxuICAgICAgICB9XG4gICAgXG4gICAgXG4gICAgICBdKVxuXG4gICAgICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KClcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHVzZUFuaW1hdGlvbigpXG4gICAgICBjb25zdCBbb2ZmZXJSZWYsIG9mZmVySW5WaWV3XSA9IHVzZUluVmlldygpXG4gICAgICBjb25zdCBvZmZlckFuaW1hdGlvbiA9IHVzZUFuaW1hdGlvbigpXG5cbiAgICAgIGNvbnN0IGFuaW1hdGlvbkVuZCA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHNldEFib3V0Q291bnRlcihjb3VudGVyID0+IGNvdW50ZXIgKyAxKVxuICAgICAgICBhbmltYXRpb24uc3RhcnQoe1xuICAgICAgICAgIHg6XCItOTB2d1wiXG4gICAgICB9KSBcbiAgICAgIH1cbiAgICBcbiAgICAgIHVzZUVmZmVjdCgoKT0+IHtcblxuICAgICAgICBpZiAoaW5WaWV3KSB7XG4gICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgICAgICAgeDowLFxuICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIGlmICghaW5WaWV3KSB7XG4gICAgICAgICAgaWYgKEFib3V0Q291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBhbmltYXRpb25FbmQoKVxuICAgICAgICB9XG4gICAgICB9LFtpblZpZXddKVxuXG4gICAgICB1c2VFZmZlY3QoKCk9PiB7XG5cbiAgICAgICAgaWYgKG9mZmVySW5WaWV3KSB7XG4gICAgICAgICBcbiAgICAgICAgICBvZmZlckFuaW1hdGlvbi5zdGFydCh7XG4gICAgICAgICAgICAgIHNjYWxlOjEsXG4gICAgICAgICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjcsXG4gICAgICAgICAgICAgICAgZGVsYXk6MC41LFxuICAgICAgICAgICAgICAgIHR5cGU6J2tleWYnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgaWYgKCFvZmZlckluVmlldykge1xuICAgICAgICAgIFxuICAgICAgICAgIG9mZmVyQW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgICAgIHNjYWxlOjAuMSxcbiAgICAgICAgICAgIG9wYWNpdHk6MFxuICAgICAgICAgIH0pIFxuICAgICAgICB9XG4gICAgICB9LFtvZmZlckluVmlld10pXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e3JlZn0+XG5cbiAgICA8bW90aW9uLmRpdiBhbmltYXRlPXthbmltYXRpb259PlxuICAgICAgICA8ZGl2IGlkPVwiYWJvdXRcIj5cbiAgICAgICAgPGg1PkFCT1VUIFVTPC9oNT5cbiAgICAgICAgPGgzPldITyBBTSBJPzwvaDM+IDxiciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICAgICBcbiAgICAgICAgPHA+XG4gICAgICAgICAgSGksIGJldCB5b3UgYWxyZWFkeSBrbm93IHRoaXMsIGJ1dCA8Yj5teSBuYW1lIGlzIE1vc2VzIENodWt3dWRpIE53aWdiZXJpPC9iPi4gSSBpZGVudGlmeSBhcyBhbiBlbnRyeSBsZXZlbCwganVuaW9yIGZyb250IGVuZCB3ZWIgZGV2ZWxvcGVyXG4gICAgICAgICAgICB3aXRoIGdvb2QgaW50ZXJlc3QgaW4gaU9TLiBMZXZlcmFnaW5nIHRoZSBsYXRlc3Qgd2ViIHRlY2hub2xvZ2llcywgSSBjcmVhdGUgc2luZ2xlIHBhZ2Ugd2ViIGFwcGxpY2F0aW9ucywgcHJvcGVybHkgcmVzcG9uc2l2ZSwgZnVuY3Rpb25hbCBhbmQgU0VPIG9wdGltaXplZCB3ZWJzaXRlcy4gSGV5LCBJIGFtIGZvciB0aGUgbW9zdCBwYXJ0IGEgZnJvbnQgZW5kIGRldmVsb3BlciBidXQsIEkgY2FuIGludGVncmF0ZSB3aXRoIGEgYmFja2VuZCBpZiBuZWVkZWQsIGNyZWF0aW5nIGEgZnVsbCBzdGFjayB3ZWJzaXRlIG9uIHJlcXVlc3Twn5iJLiBJIGNyZWF0ZSBmcm9udCBJT1MgYXBwbGljYXRpb25zIHdpdGggU3dpZnQgdG9vLlxuICAgICAgICAgICAgPGJyIC8+IDxiciAvPlxuICAgICAgICAgICAgQXQgdGhlIG1vbWVudCwgSSBhbSBhIDMwMEwgc3R1ZGVudCBvZiBDaGVtaWNhbCBFbmdpbmVlcmluZyBpbiB0aGUgVW5pdmVyc2l0eSBvZiBMYWdvcywgQWtva2EuIE15IGhvYmJpZXMgaW5jbHVkZSBjb2RpbmcoZHVoKSwgd2ViIGRldmVsb3BtZW50KG9idmlvdXNseSksIG1vYmlsZSBkZXZlbG9wbWVudChsb2zwn5iCKSBhbmQgRklGQS4gSSBhbSBhbHNvIHByZXR0eSBkZWNlbnQgaW4gZnJlbmNoIGxhbmd1YWdlKCBvbGEgYW1pZ28hKVxuICAgICAgICA8L3A+IDxiciAvPlxuXG4gICAgICAgIDxkaXYgcmVmPXtvZmZlclJlZn0+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGFuaW1hdGU9e29mZmVyQW5pbWF0aW9ufVxuICAgICAgICA+XG4gICAgICAgIDxkaXYgaWQ9XCJzZXJ2aWNlc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNsYXNzZXNDb250YWluZXJ9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xhc3Nlcy5tYXAoKHNraWxsLGtleSk9PiAoXG4gICAgICAgICAgICAgIDxDYXJkIHByb2dyZXNzPXtmYWxzZX0gYm9yZGVyPXtza2lsbC5jb2xvcn0gY2xhc3NuYW1lPXtza2lsbC5pY29ufSBrZXk9e2tleX0gbmFtZT17c2tpbGwubmFtZX0gLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBcblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlSW5WaWV3IiwidXNlRWZmZWN0IiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwiQWJvdXQiLCJBYm91dENvdW50ZXIiLCJzZXRBYm91dENvdW50ZXIiLCJpY29uIiwibmFtZSIsImNvbG9yIiwiY2xhc3NlcyIsInNldENsYXNzZXMiLCJyZWYiLCJpblZpZXciLCJhbmltYXRpb24iLCJvZmZlclJlZiIsIm9mZmVySW5WaWV3Iiwib2ZmZXJBbmltYXRpb24iLCJhbmltYXRpb25FbmQiLCJjb3VudGVyIiwic3RhcnQiLCJ4Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInNjYWxlIiwiZGVsYXkiLCJ0eXBlIiwiZGl2IiwiYW5pbWF0ZSIsImlkIiwiaDUiLCJoMyIsImJyIiwicCIsImIiLCJjbGFzc05hbWUiLCJjbGFzc2VzQ29udGFpbmVyIiwibWFwIiwic2tpbGwiLCJrZXkiLCJwcm9ncmVzcyIsImJvcmRlciIsImNsYXNzbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/about_me/About.jsx\n"));

/***/ })

});