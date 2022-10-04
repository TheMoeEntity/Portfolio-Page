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

/***/ "./components/skills/Skills.jsx":
/*!**************************************!*\
  !*** ./components/skills/Skills.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Skills\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Skills_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Skills.module.css */ \"./components/skills/Skills.module.css\");\n/* harmony import */ var _Skills_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Skills_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cards_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/Card */ \"./components/cards/Card.jsx\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Skills = function() {\n    _s();\n    var skills = [\n        {\n            icon: \"fa-brands fa-html5\",\n            name: \"HTML5\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"90%\"\n        },\n        {\n            icon: \"fa-brands fa-square-js\",\n            name: \"JavaScript\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"95%\"\n        },\n        {\n            icon: \"fa-brands fa-react\",\n            name: \"React\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"75%\"\n        },\n        {\n            icon: \"fa-brands fa-css3\",\n            name: \"CSS3\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"90%\"\n        },\n        {\n            icon: \"fa-brands fa-node-js\",\n            name: \"Node js\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"50%\"\n        },\n        {\n            icon: \"fa-brands fa-swift\",\n            name: \"Swift\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"65%\"\n        },\n        {\n            icon: \"fa-brands fa-bootstrap\",\n            name: \"Bootstrap\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"80%\"\n        },\n        {\n            icon: \"fa-brands fa-github\",\n            name: \"git/github\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"50%\"\n        }, \n    ];\n    var moreSkills = [\n        {\n            name: \"Nextjs\",\n            width: \"90%\"\n        },\n        {\n            name: \"MongoDB\",\n            width: \"70%\"\n        },\n        {\n            name: \"Svelte\",\n            width: \"80%\"\n        },\n        {\n            name: \"SvelteKit\",\n            width: \"60%\"\n        },\n        {\n            name: \"Firebase\",\n            width: \"65%\"\n        },\n        {\n            name: \"Express\",\n            width: \"60%\"\n        }\n    ];\n    var ref = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), ref1 = ref.ref, inView = ref.inView;\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), AboutCounter = ref2[0], setAboutCounter = ref2[1];\n    var animationEnd = function() {\n        setAboutCounter(function(counter) {\n            return counter + 1;\n        });\n        animation.start({\n            x: \"-90vw\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (inView) {\n            animation.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 1,\n                    delay: 0.4\n                }\n            });\n        }\n        if (!inView) {\n            if (AboutCounter >= 1) {\n                return;\n            }\n            animationEnd();\n        }\n    }, [\n        inView\n    ]);\n    var container = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.addEventListener(\"scroll\", function() {\n        // console.log(container.current.children[0])\n        });\n    }, []);\n    var animateIn = function() {\n        var widths = container.current.children;\n        forof;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    animate: animation,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"MY SKILL SET\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                            lineNumber: 144,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"WHAT ARE MY SKILLS?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                            lineNumber: 145,\n                            columnNumber: 9\n                        }, _this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                            lineNumber: 145,\n                            columnNumber: 38\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                    lineNumber: 143,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Every soldier needs weapons in his arsenal right? At the moment I am well versed in the big three: JavaScript, HTML, CSS. The MERN (MongoDB, ExpressJs, React, NodeJs). NextJs, Svelte, SvelteKit, Firebase and Swift. I am currently learning React Native because I love iOS (\",\n                    \"who doesn't ?\",\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                lineNumber: 148,\n                columnNumber: 9\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                lineNumber: 151,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_6___default().classesContainer),\n                children: [\n                    skills.map(function(skill, key) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards_Card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            width: skill.width,\n                            progress: true,\n                            border: skill.color,\n                            classname: skill.icon,\n                            name: skill.name\n                        }, key, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                            lineNumber: 156,\n                            columnNumber: 17\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                        lineNumber: 159,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                        lineNumber: 160,\n                        columnNumber: 10\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                        lineNumber: 161,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                lineNumber: 152,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: container,\n                className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_6___default().moreSkills),\n                children: moreSkills.map(function(item, key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                                lineNumber: 168,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_6___default().more),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        width: item.width\n                                    },\n                                    className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_6___default().width)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                                    lineNumber: 170,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                                lineNumber: 169,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, key, true, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                        lineNumber: 167,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                lineNumber: 163,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, _this);\n};\n_s(Skills, \"0k72psS+D8yCWsnV3blfg9ukDf4=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation\n    ];\n});\n_c = Skills;\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7YUFDSixDQUNQO0FBQ0gsQ0FBQztHQTVLWXRDLE1BQU07O1FBaUZLTCxrRUFBUztRQUNiRyx1REFBWTs7O0FBbEZuQkUsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NraWxscy9Ta2lsbHMuanN4P2MyMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ta2lsbHMubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZHMvQ2FyZFwiXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VBbmltYXRpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgY29uc3QgU2tpbGxzID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgc2tpbGxzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJmYS1icmFuZHMgZmEtaHRtbDVcIixcbiAgICAgICAgICBuYW1lOiBcIkhUTUw1XCIsXG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXG4gICAgICAgICAgd2lkdGg6IFwiOTAlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtYnJhbmRzIGZhLXNxdWFyZS1qc1wiLFxuICAgICAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxuICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxuICAgICAgICAgIHdpZHRoOiBcIjk1JVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLWJyYW5kcyBmYS1yZWFjdFwiLFxuICAgICAgICAgIG5hbWU6IFwiUmVhY3RcIixcbiAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcbiAgICAgICAgICB3aWR0aDpcIjc1JVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLWJyYW5kcyBmYS1jc3MzXCIsXG4gICAgICAgICAgbmFtZTogXCJDU1MzXCIsXG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXG4gICAgICAgICAgd2lkdGg6IFwiOTAlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtYnJhbmRzIGZhLW5vZGUtanNcIixcbiAgICAgICAgICBuYW1lOiBcIk5vZGUganNcIixcbiAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcbiAgICAgICAgICB3aWR0aDpcIjUwJVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLWJyYW5kcyBmYS1zd2lmdFwiLFxuICAgICAgICAgIG5hbWU6IFwiU3dpZnRcIixcbiAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcbiAgICAgICAgICB3aWR0aDpcIjY1JVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLWJyYW5kcyBmYS1ib290c3RyYXBcIixcbiAgICAgICAgICBuYW1lOiBcIkJvb3RzdHJhcFwiLFxuICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxuICAgICAgICAgIHdpZHRoOlwiODAlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtYnJhbmRzIGZhLWdpdGh1YlwiLFxuICAgICAgICAgIG5hbWU6IFwiZ2l0L2dpdGh1YlwiLFxuICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxuICAgICAgICAgIHdpZHRoOlwiNTAlXCJcbiAgICAgICAgfSxcbiAgXVxuXG4gIGNvbnN0IG1vcmVTa2lsbHMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJOZXh0anNcIixcbiAgICAgIHdpZHRoOiBcIjkwJVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIk1vbmdvREJcIixcbiAgICAgIHdpZHRoOiBcIjcwJVwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3ZlbHRlXCIsXG4gICAgICB3aWR0aDogXCI4MCVcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTdmVsdGVLaXRcIixcbiAgICAgIHdpZHRoOiBcIjYwJVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkZpcmViYXNlXCIsXG4gICAgICB3aWR0aDogXCI2NSVcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJFeHByZXNzXCIsXG4gICAgICB3aWR0aDogXCI2MCVcIlxuICAgIH1cbiAgXVxuXG4gIGNvbnN0IHtyZWYsIGluVmlld30gPSB1c2VJblZpZXcoKVxuICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24oKVxuICBjb25zdCBbQWJvdXRDb3VudGVyLHNldEFib3V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBhbmltYXRpb25FbmQgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgIHNldEFib3V0Q291bnRlcihjb3VudGVyID0+IGNvdW50ZXIgKyAxKVxuICAgIGFuaW1hdGlvbi5zdGFydCh7XG4gICAgICB4OlwiLTkwdndcIlxuICB9KSBcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKT0+IHtcblxuICAgIGlmIChpblZpZXcpIHtcbiAgICAgIGFuaW1hdGlvbi5zdGFydCh7XG4gICAgICAgICAgeDowLFxuICAgICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgIGRlbGF5OjAuNFxuICAgICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IFxuICAgIFxuICAgIGlmICghaW5WaWV3KSB7XG4gICAgICBpZiAoQWJvdXRDb3VudGVyID49IDEpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGFuaW1hdGlvbkVuZCgpXG4gICAgfVxuICB9LFtpblZpZXddKVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCk9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRhaW5lci5jdXJyZW50LmNoaWxkcmVuWzBdKVxuICAgIH0pXG4gIH0sW10pXG5cbiAgY29uc3QgYW5pbWF0ZUluID0gKCk9PiB7XG4gICAgbGV0IHdpZHRocyA9IGNvbnRhaW5lci5jdXJyZW50LmNoaWxkcmVuXG5cbiAgICBmb3JvZlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuXG4gICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgIDxtb3Rpb24uZGl2IGFuaW1hdGU9e2FuaW1hdGlvbn0+XG4gICAgICAgIDxoNT5NWSBTS0lMTCBTRVQ8L2g1PlxuICAgICAgICA8aDM+V0hBVCBBUkUgTVkgU0tJTExTPzwvaDM+IDxiciAvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgIDxwPlxuICAgICAgICBFdmVyeSBzb2xkaWVyIG5lZWRzIHdlYXBvbnMgaW4gaGlzIGFyc2VuYWwgcmlnaHQ/IEF0IHRoZSBtb21lbnQgSSBhbSB3ZWxsIHZlcnNlZCBpbiB0aGUgYmlnIHRocmVlOiBKYXZhU2NyaXB0LCBIVE1MLCBDU1MuIFRoZSBNRVJOIChNb25nb0RCLCBFeHByZXNzSnMsIFJlYWN0LCBOb2RlSnMpLiBOZXh0SnMsIFN2ZWx0ZSwgU3ZlbHRlS2l0LCBGaXJlYmFzZSBhbmQgU3dpZnQuIFxuICAgICAgICBJIGFtIGN1cnJlbnRseSBsZWFybmluZyBSZWFjdCBOYXRpdmUgYmVjYXVzZSBJIGxvdmUgaU9TICh7YHdobyBkb2Vzbid0ID9gfSlcbiAgICAgICAgPC9wPiA8YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGFzc2VzQ29udGFpbmVyfT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgc2tpbGxzLm1hcCgoc2tpbGwsa2V5KT0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZCB3aWR0aD17c2tpbGwud2lkdGh9IHByb2dyZXNzPXt0cnVlfSBib3JkZXI9e3NraWxsLmNvbG9yfSBjbGFzc25hbWU9e3NraWxsLmljb259IGtleT17a2V5fSBuYW1lPXtza2lsbC5uYW1lfSAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cblx0XHQgICAgICBcdDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgcmVmPXtjb250YWluZXJ9IGNsYXNzTmFtZT17c3R5bGVzLm1vcmVTa2lsbHN9PlxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgbW9yZVNraWxscy5tYXAoKGl0ZW0sa2V5KT0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIDxoND57aXRlbS5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9yZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGl0ZW0ud2lkdGhcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e3N0eWxlcy53aWR0aH0+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJDYXJkIiwidXNlSW5WaWV3IiwidXNlRWZmZWN0IiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwidXNlUmVmIiwiU2tpbGxzIiwic2tpbGxzIiwiaWNvbiIsIm5hbWUiLCJjb2xvciIsIndpZHRoIiwibW9yZVNraWxscyIsInJlZiIsImluVmlldyIsImFuaW1hdGlvbiIsIkFib3V0Q291bnRlciIsInNldEFib3V0Q291bnRlciIsImFuaW1hdGlvbkVuZCIsImNvdW50ZXIiLCJzdGFydCIsIngiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJjb250YWluZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYW5pbWF0ZUluIiwid2lkdGhzIiwiY3VycmVudCIsImNoaWxkcmVuIiwiZm9yb2YiLCJkaXYiLCJhbmltYXRlIiwiaDUiLCJoMyIsImJyIiwicCIsImNsYXNzTmFtZSIsImNsYXNzZXNDb250YWluZXIiLCJtYXAiLCJza2lsbCIsImtleSIsInByb2dyZXNzIiwiYm9yZGVyIiwiY2xhc3NuYW1lIiwiaSIsImFyaWEtaGlkZGVuIiwiaXRlbSIsImg0IiwibW9yZSIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/skills/Skills.jsx\n"));

/***/ })

});