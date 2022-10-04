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

/***/ "./components/cards/Card.jsx":
/*!***********************************!*\
  !*** ./components/cards/Card.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.module.css */ \"./components/cards/cards.module.css\");\n/* harmony import */ var _cards_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cards_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Card = function(param) {\n    var name = param.name, classname = param.classname, border = param.border, progress = param.progress, width = param.width;\n    _s();\n    var container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    useEffect(function() {\n        window.addEventListener(\"scroll\", function() {\n            if (progress) {}\n            animateIn();\n        });\n    }, []);\n    var animateIn = function() {\n        var widths = container.current.children;\n        var height = window.innerHeight;\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = widths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var child = _step.value;\n                var width = child.children[1].children[0];\n                var revealTop = width.getBoundingClientRect().top;\n                var revealpoint = 120;\n                if (revealTop < height - revealpoint) {\n                    width.classList.add((_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().addWidth));\n                } else {\n                    width.classList.remove((_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().addWidth));\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            borderLeft: \"3px solid \".concat(border)\n        },\n        className: (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: classname\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this),\n            progress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().progress),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: width\n                    },\n                    className: (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().bar)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 40,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Card, \"gP936EAkbq44zYYGRnj90r2fLhg=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXVDO0FBQ1Q7QUFDdkIsSUFBTUUsSUFBSSxHQUFHLGdCQUE0QztRQUExQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUNDLFNBQVMsU0FBVEEsU0FBUyxFQUFDQyxNQUFNLFNBQU5BLE1BQU0sRUFBQ0MsUUFBUSxTQUFSQSxRQUFRLEVBQUNDLEtBQUssU0FBTEEsS0FBSzs7SUFFeEQsSUFBTUMsU0FBUyxHQUFHUCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUU5QlEsU0FBUyxDQUFDLFdBQUs7UUFDYkMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsV0FBSztZQUNuQyxJQUFJTCxRQUFRLEVBQUUsQ0FFZCxDQUFDO1lBQ0RNLFNBQVMsRUFBRTtRQUNmLENBQUMsQ0FBQztJQUNKLENBQUMsRUFBQyxFQUFFLENBQUM7SUFFTCxJQUFNQSxTQUFTLEdBQUcsV0FBSztRQUNyQixJQUFJQyxNQUFNLEdBQUdMLFNBQVMsQ0FBQ00sT0FBTyxDQUFDQyxRQUFRO1FBQ3ZDLElBQUlDLE1BQU0sR0FBR04sTUFBTSxDQUFDTyxXQUFXO1lBQzFCLHlCQUFXLFNBQVgsaUJBQVcsVUFBWCxjQUFXOztZQUFoQixRQUFLLFNBQVcsR0FBSUosTUFBTSxxQkFBckIsS0FBVyxJQUFYLHlCQUFXLElBQVgsS0FBVyxHQUFYLFNBQVcsZ0JBQVgseUJBQVcsUUFBWTtnQkFBdkIsSUFBTUssS0FBSyxHQUFYLEtBQVc7Z0JBRVosSUFBSVgsS0FBSyxHQUFHVyxLQUFLLENBQUNILFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDekMsSUFBSUksU0FBUyxHQUFHWixLQUFLLENBQUNhLHFCQUFxQixFQUFFLENBQUNDLEdBQUc7Z0JBQ2pELElBQUlDLFdBQVcsR0FBRyxHQUFHO2dCQUVyQixJQUFJSCxTQUFTLEdBQUdILE1BQU0sR0FBR00sV0FBVyxFQUFFO29CQUNwQ2YsS0FBSyxDQUFDZ0IsU0FBUyxDQUFDQyxHQUFHLENBQUN4QixtRUFBZSxDQUFDO2dCQUN0QyxPQUFPO29CQUNMTyxLQUFLLENBQUNnQixTQUFTLENBQUNHLE1BQU0sQ0FBQzFCLG1FQUFlLENBQUM7Z0JBQ3pDLENBQUM7WUFDTCxDQUFDOztZQVhJLGlCQUFXO1lBQVgsY0FBVzs7O3FCQUFYLHlCQUFXLElBQVgsU0FBVztvQkFBWCxTQUFXOzs7b0JBQVgsaUJBQVc7MEJBQVgsY0FBVzs7OztJQVlsQixDQUFDO0lBRUMscUJBRUEsOERBQUMyQixLQUFHO1FBQUNDLEtBQUssRUFBRTtZQUFDQyxVQUFVLEVBQUMsWUFBVyxDQUFTLE9BQVB4QixNQUFNLENBQUU7U0FBQztRQUFFeUIsU0FBUyxFQUFFOUIsK0RBQVc7OzBCQUNsRSw4REFBQ2dDLE1BQUk7MEJBQUMsNEVBQUNDLEdBQUM7b0JBQUNILFNBQVMsRUFBRTFCLFNBQVM7Ozs7O3lCQUFNOzs7OztxQkFBTzswQkFDMUMsOERBQUM0QixNQUFJOzBCQUFFN0IsSUFBSTs7Ozs7cUJBQVE7WUFFakJHLFFBQVEsa0JBQ1IsOERBQUNxQixLQUFHO2dCQUFDRyxTQUFTLEVBQUU5QixtRUFBZTswQkFDN0IsNEVBQUMyQixLQUFHO29CQUFDQyxLQUFLLEVBQUU7d0JBQUNyQixLQUFLLEVBQUNBLEtBQUs7cUJBQUM7b0JBQUV1QixTQUFTLEVBQUU5Qiw4REFBVTs7Ozs7eUJBQVE7Ozs7O3FCQUNwRDs7Ozs7O2FBRU4sQ0FDUDtBQUNILENBQUM7R0EzQ1lFLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL0NhcmQuanN4P2M1ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NhcmRzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmV4cG9ydCBjb25zdCBDYXJkID0gKHtuYW1lLGNsYXNzbmFtZSxib3JkZXIscHJvZ3Jlc3Msd2lkdGh9KSA9PiB7XG5cbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKT0+IHtcbiAgICAgICAgaWYgKHByb2dyZXNzKSB7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgYW5pbWF0ZUluKClcbiAgICB9KVxuICB9LFtdKVxuXG4gIGNvbnN0IGFuaW1hdGVJbiA9ICgpPT4ge1xuICAgIGxldCB3aWR0aHMgPSBjb250YWluZXIuY3VycmVudC5jaGlsZHJlblxuICAgIGxldCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHdpZHRocykge1xuXG4gICAgICAgIGxldCB3aWR0aCA9IGNoaWxkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdXG4gICAgICAgIGxldCByZXZlYWxUb3AgPSB3aWR0aC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGxldCByZXZlYWxwb2ludCA9IDEyMFxuICAgICAgXG4gICAgICAgIGlmIChyZXZlYWxUb3AgPCBoZWlnaHQgLSByZXZlYWxwb2ludCkge1xuICAgICAgICAgIHdpZHRoLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmFkZFdpZHRoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpZHRoLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmFkZFdpZHRoKVxuICAgICAgICB9XG4gICAgfVxuICB9XG4gXG4gICAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyTGVmdDpgM3B4IHNvbGlkICR7Ym9yZGVyfWB9fSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPXtjbGFzc25hbWV9PjwvaT48L3NwYW4+XG4gICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cbiAgICAgICAge1xuICAgICAgICAgIHByb2dyZXNzICYmIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOndpZHRofX0gY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUmVmIiwiQ2FyZCIsIm5hbWUiLCJjbGFzc25hbWUiLCJib3JkZXIiLCJwcm9ncmVzcyIsIndpZHRoIiwiY29udGFpbmVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuaW1hdGVJbiIsIndpZHRocyIsImN1cnJlbnQiLCJjaGlsZHJlbiIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY2hpbGQiLCJyZXZlYWxUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJyZXZlYWxwb2ludCIsImNsYXNzTGlzdCIsImFkZCIsImFkZFdpZHRoIiwicmVtb3ZlIiwiZGl2Iiwic3R5bGUiLCJib3JkZXJMZWZ0IiwiY2xhc3NOYW1lIiwiY2FyZCIsInNwYW4iLCJpIiwiYmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/Card.jsx\n"));

/***/ })

});