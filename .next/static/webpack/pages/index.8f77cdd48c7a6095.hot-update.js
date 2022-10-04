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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Skills\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Skills_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Skills.module.css */ \"./components/skills/Skills.module.css\");\n/* harmony import */ var _Skills_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Skills_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cards_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/Card */ \"./components/cards/Card.jsx\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Skills = function() {\n    _s();\n    var skills = [\n        {\n            icon: \"fa-brands fa-html5\",\n            name: \"HTML5\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"90%\"\n        },\n        {\n            icon: \"fa-brands fa-square-js\",\n            name: \"JavaScript\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"95%\"\n        },\n        {\n            icon: \"fa-brands fa-react\",\n            name: \"React\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"75%\"\n        },\n        {\n            icon: \"fa-brands fa-css3\",\n            name: \"CSS3\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"90%\"\n        },\n        {\n            icon: \"fa-brands fa-node-js\",\n            name: \"Node js\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"50%\"\n        },\n        {\n            icon: \"fa-brands fa-swift\",\n            name: \"Swift\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"65%\"\n        },\n        {\n            icon: \"fa-brands fa-bootstrap\",\n            name: \"Bootstrap\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"80%\"\n        },\n        {\n            icon: \"fa-brands fa-github\",\n            name: \"git/github\",\n            color: \"rgba(0, 0, 0, 0.6)\",\n            width: \"50%\"\n        }, \n    ];\n    var moreSkills = [\n        {\n            name: \"Nextjs\",\n            width: \"90%\"\n        },\n        {\n            name: \"MongoDB\",\n            width: \"70%\"\n        },\n        {\n            name: \"Svelte\",\n            width: \"80%\"\n        },\n        {\n            name: \"SvelteKit\",\n            width: \"60%\"\n        },\n        {\n            name: \"Firebase\",\n            width: \"65%\"\n        },\n        {\n            name: \"Express\",\n            width: \"60%\"\n        }\n    ];\n    var ref = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), ref1 = ref.ref, inView = ref.inView;\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), AboutCounter = ref2[0], setAboutCounter = ref2[1];\n    var animationEnd = function() {\n        setAboutCounter(function(counter) {\n            return counter + 1;\n        });\n        animation.start({\n            x: \"-90vw\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (inView) {\n            animation.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 1,\n                    delay: 0.4\n                }\n            });\n        }\n        if (!inView) {\n            if (AboutCounter >= 1) {\n                return;\n            }\n            animationEnd();\n        }\n    }, [\n        inView\n    ]);\n    var container = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.addEventListener(\"scroll\", function() {\n            console.log(container.current.children[0]);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    animate: animation,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"MY SKILL SET\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                            lineNumber: 138,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"WHAT ARE MY SKILLS?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                            lineNumber: 139,\n                            columnNumber: 9\n                        }, _this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                            lineNumber: 139,\n                            columnNumber: 38\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                    lineNumber: 137,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Every soldier needs weapons in his arsenal right? At the moment I am well versed in the big three: JavaScript, HTML, CSS. The MERN (MongoDB, ExpressJs, React, NodeJs). NextJs, Svelte, SvelteKit, Firebase and Swift. I am currently learning React Native because I love iOS (\",\n                    \"who doesn't ?\",\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                lineNumber: 142,\n                columnNumber: 9\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                lineNumber: 145,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_6___default().classesContainer),\n                children: [\n                    skills.map(function(skill, key) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards_Card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            width: skill.width,\n                            progress: true,\n                            border: skill.color,\n                            classname: skill.icon,\n                            name: skill.name\n                        }, key, false, {\n                            fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                            lineNumber: 150,\n                            columnNumber: 17\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                        lineNumber: 153,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                        lineNumber: 154,\n                        columnNumber: 10\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                        lineNumber: 155,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                lineNumber: 146,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: container,\n                className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_6___default().moreSkills),\n                children: moreSkills.map(function(item, key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                                lineNumber: 162,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_6___default().more),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        width: item.width\n                                    },\n                                    className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_6___default().width)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                                    lineNumber: 164,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                                lineNumber: 163,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, key, true, {\n                        fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                        lineNumber: 161,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n                lineNumber: 157,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/skills/Skills.jsx\",\n        lineNumber: 134,\n        columnNumber: 5\n    }, _this);\n};\n_s(Skills, \"0k72psS+D8yCWsnV3blfg9ukDf4=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation\n    ];\n});\n_c = Skills;\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztRQWlGS0wsa0VBQVM7UUFDYkcsdURBQVk7OztBQWxGbkJFLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9za2lsbHMvU2tpbGxzLmpzeD9jMjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2tpbGxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmRzL0NhcmRcIlxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGNvbnN0IFNraWxscyA9ICgpID0+IHtcblxuICAgIGNvbnN0IHNraWxscyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiZmEtYnJhbmRzIGZhLWh0bWw1XCIsXG4gICAgICAgICAgbmFtZTogXCJIVE1MNVwiLFxuICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxuICAgICAgICAgIHdpZHRoOiBcIjkwJVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLWJyYW5kcyBmYS1zcXVhcmUtanNcIixcbiAgICAgICAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcbiAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcbiAgICAgICAgICB3aWR0aDogXCI5NSVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJmYS1icmFuZHMgZmEtcmVhY3RcIixcbiAgICAgICAgICBuYW1lOiBcIlJlYWN0XCIsXG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXG4gICAgICAgICAgd2lkdGg6XCI3NSVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJmYS1icmFuZHMgZmEtY3NzM1wiLFxuICAgICAgICAgIG5hbWU6IFwiQ1NTM1wiLFxuICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxuICAgICAgICAgIHdpZHRoOiBcIjkwJVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLWJyYW5kcyBmYS1ub2RlLWpzXCIsXG4gICAgICAgICAgbmFtZTogXCJOb2RlIGpzXCIsXG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXG4gICAgICAgICAgd2lkdGg6XCI1MCVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJmYS1icmFuZHMgZmEtc3dpZnRcIixcbiAgICAgICAgICBuYW1lOiBcIlN3aWZ0XCIsXG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXG4gICAgICAgICAgd2lkdGg6XCI2NSVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJmYS1icmFuZHMgZmEtYm9vdHN0cmFwXCIsXG4gICAgICAgICAgbmFtZTogXCJCb290c3RyYXBcIixcbiAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcbiAgICAgICAgICB3aWR0aDpcIjgwJVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImZhLWJyYW5kcyBmYS1naXRodWJcIixcbiAgICAgICAgICBuYW1lOiBcImdpdC9naXRodWJcIixcbiAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcbiAgICAgICAgICB3aWR0aDpcIjUwJVwiXG4gICAgICAgIH0sXG4gIF1cblxuICBjb25zdCBtb3JlU2tpbGxzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTmV4dGpzXCIsXG4gICAgICB3aWR0aDogXCI5MCVcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJNb25nb0RCXCIsXG4gICAgICB3aWR0aDogXCI3MCVcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBuYW1lOiBcIlN2ZWx0ZVwiLFxuICAgICAgd2lkdGg6IFwiODAlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3ZlbHRlS2l0XCIsXG4gICAgICB3aWR0aDogXCI2MCVcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJGaXJlYmFzZVwiLFxuICAgICAgd2lkdGg6IFwiNjUlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRXhwcmVzc1wiLFxuICAgICAgd2lkdGg6IFwiNjAlXCJcbiAgICB9XG4gIF1cblxuICBjb25zdCB7cmVmLCBpblZpZXd9ID0gdXNlSW5WaWV3KClcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKClcbiAgY29uc3QgW0Fib3V0Q291bnRlcixzZXRBYm91dENvdW50ZXJdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgYW5pbWF0aW9uRW5kID0gKCkgPT4ge1xuICAgICAgICBcbiAgICBzZXRBYm91dENvdW50ZXIoY291bnRlciA9PiBjb3VudGVyICsgMSlcbiAgICBhbmltYXRpb24uc3RhcnQoe1xuICAgICAgeDpcIi05MHZ3XCJcbiAgfSkgXG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PiB7XG5cbiAgICBpZiAoaW5WaWV3KSB7XG4gICAgICBhbmltYXRpb24uc3RhcnQoe1xuICAgICAgICAgIHg6MCxcbiAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICBkZWxheTowLjRcbiAgICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBcbiAgICBcbiAgICBpZiAoIWluVmlldykge1xuICAgICAgaWYgKEFib3V0Q291bnRlciA+PSAxKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBhbmltYXRpb25FbmQoKVxuICAgIH1cbiAgfSxbaW5WaWV3XSlcblxuICBjb25zdCBjb250YWluZXIgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjb250YWluZXIuY3VycmVudC5jaGlsZHJlblswXSlcbiAgICB9KVxuICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cblxuICAgICAgPGRpdiByZWY9e3JlZn0+XG4gICAgICA8bW90aW9uLmRpdiBhbmltYXRlPXthbmltYXRpb259PlxuICAgICAgICA8aDU+TVkgU0tJTEwgU0VUPC9oNT5cbiAgICAgICAgPGgzPldIQVQgQVJFIE1ZIFNLSUxMUz88L2gzPiA8YnIgLz5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgRXZlcnkgc29sZGllciBuZWVkcyB3ZWFwb25zIGluIGhpcyBhcnNlbmFsIHJpZ2h0PyBBdCB0aGUgbW9tZW50IEkgYW0gd2VsbCB2ZXJzZWQgaW4gdGhlIGJpZyB0aHJlZTogSmF2YVNjcmlwdCwgSFRNTCwgQ1NTLiBUaGUgTUVSTiAoTW9uZ29EQiwgRXhwcmVzc0pzLCBSZWFjdCwgTm9kZUpzKS4gTmV4dEpzLCBTdmVsdGUsIFN2ZWx0ZUtpdCwgRmlyZWJhc2UgYW5kIFN3aWZ0LiBcbiAgICAgICAgSSBhbSBjdXJyZW50bHkgbGVhcm5pbmcgUmVhY3QgTmF0aXZlIGJlY2F1c2UgSSBsb3ZlIGlPUyAoe2B3aG8gZG9lc24ndCA/YH0pXG4gICAgICAgIDwvcD4gPGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xhc3Nlc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHNraWxscy5tYXAoKHNraWxsLGtleSk9PiAoXG4gICAgICAgICAgICAgICAgPENhcmQgd2lkdGg9e3NraWxsLndpZHRofSBwcm9ncmVzcz17dHJ1ZX0gYm9yZGVyPXtza2lsbC5jb2xvcn0gY2xhc3NuYW1lPXtza2lsbC5pY29ufSBrZXk9e2tleX0gbmFtZT17c2tpbGwubmFtZX0gLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG5cdFx0ICAgICAgXHQ8aSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj17Y29udGFpbmVyfSBjbGFzc05hbWU9e3N0eWxlcy5tb3JlU2tpbGxzfT5cblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1vcmVTa2lsbHMubWFwKChpdGVtLGtleSk9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxuICAgICAgICAgICAgICA8aDQ+e2l0ZW0ubmFtZX08L2g0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vcmV9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBpdGVtLndpZHRoXG4gICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXtzdHlsZXMud2lkdGh9PjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwiQ2FyZCIsInVzZUluVmlldyIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsInVzZVJlZiIsIlNraWxscyIsInNraWxscyIsImljb24iLCJuYW1lIiwiY29sb3IiLCJ3aWR0aCIsIm1vcmVTa2lsbHMiLCJyZWYiLCJpblZpZXciLCJhbmltYXRpb24iLCJBYm91dENvdW50ZXIiLCJzZXRBYm91dENvdW50ZXIiLCJhbmltYXRpb25FbmQiLCJjb3VudGVyIiwic3RhcnQiLCJ4Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiY29udGFpbmVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJkaXYiLCJhbmltYXRlIiwiaDUiLCJoMyIsImJyIiwicCIsImNsYXNzTmFtZSIsImNsYXNzZXNDb250YWluZXIiLCJtYXAiLCJza2lsbCIsImtleSIsInByb2dyZXNzIiwiYm9yZGVyIiwiY2xhc3NuYW1lIiwiaSIsImFyaWEtaGlkZGVuIiwiaXRlbSIsImg0IiwibW9yZSIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/skills/Skills.jsx\n"));

/***/ })

});