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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.module.css */ \"./components/cards/cards.module.css\");\n/* harmony import */ var _cards_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cards_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Card = function(param) {\n    var name = param.name, classname = param.classname, border = param.border, progress = param.progress, width = param.width;\n    _s();\n    var container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    useEffect(function() {\n        window.addEventListener(\"scroll\", function() {\n            if (progress) {\n                animateIn();\n            }\n        });\n    }, []);\n    var animateIn = function() {\n        var widths = container.current.children;\n        var height = window.innerHeight;\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = widths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var child = _step.value;\n                var width = child.children[2].children[0];\n                var revealTop = width.getBoundingClientRect().top;\n                var revealpoint = 120;\n                if (revealTop < height - revealpoint) {\n                    width.classList.add((_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().addWidth));\n                } else {\n                    width.classList.remove((_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().addWidth));\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: container,\n        style: {\n            borderLeft: \"3px solid \".concat(border)\n        },\n        className: (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: classname\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this),\n            progress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().progress),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: width\n                    },\n                    className: (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().bar)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 40,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Card, \"gP936EAkbq44zYYGRnj90r2fLhg=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXVDO0FBQ1Q7QUFFdkIsSUFBTUUsSUFBSSxHQUFHLGdCQUE0QztRQUExQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUNDLFNBQVMsU0FBVEEsU0FBUyxFQUFDQyxNQUFNLFNBQU5BLE1BQU0sRUFBQ0MsUUFBUSxTQUFSQSxRQUFRLEVBQUNDLEtBQUssU0FBTEEsS0FBSzs7SUFFeEQsSUFBTUMsU0FBUyxHQUFHUCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUU5QlEsU0FBUyxDQUFDLFdBQUs7UUFDYkMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsV0FBSztZQUNuQyxJQUFJTCxRQUFRLEVBQUU7Z0JBQ1pNLFNBQVMsRUFBRTtZQUNiLENBQUM7UUFDTCxDQUFDLENBQUM7SUFDSixDQUFDLEVBQUMsRUFBRSxDQUFDO0lBRUwsSUFBTUEsU0FBUyxHQUFHLFdBQUs7UUFDckIsSUFBSUMsTUFBTSxHQUFHTCxTQUFTLENBQUNNLE9BQU8sQ0FBQ0MsUUFBUTtRQUN2QyxJQUFJQyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sV0FBVztZQUMxQix5QkFBVyxTQUFYLGlCQUFXLFVBQVgsY0FBVzs7WUFBaEIsUUFBSyxTQUFXLEdBQUlKLE1BQU0scUJBQXJCLEtBQVcsSUFBWCx5QkFBVyxJQUFYLEtBQVcsR0FBWCxTQUFXLGdCQUFYLHlCQUFXLFFBQVk7Z0JBQXZCLElBQU1LLEtBQUssR0FBWCxLQUFXO2dCQUVaLElBQUlYLEtBQUssR0FBR1csS0FBSyxDQUFDSCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLElBQUlJLFNBQVMsR0FBR1osS0FBSyxDQUFDYSxxQkFBcUIsRUFBRSxDQUFDQyxHQUFHO2dCQUNqRCxJQUFJQyxXQUFXLEdBQUcsR0FBRztnQkFFckIsSUFBSUgsU0FBUyxHQUFHSCxNQUFNLEdBQUdNLFdBQVcsRUFBRTtvQkFDcENmLEtBQUssQ0FBQ2dCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDeEIsbUVBQWUsQ0FBQztnQkFDdEMsT0FBTztvQkFDTE8sS0FBSyxDQUFDZ0IsU0FBUyxDQUFDRyxNQUFNLENBQUMxQixtRUFBZSxDQUFDO2dCQUN6QyxDQUFDO1lBQ0wsQ0FBQzs7WUFYSSxpQkFBVztZQUFYLGNBQVc7OztxQkFBWCx5QkFBVyxJQUFYLFNBQVc7b0JBQVgsU0FBVzs7O29CQUFYLGlCQUFXOzBCQUFYLGNBQVc7Ozs7SUFZbEIsQ0FBQztJQUVDLHFCQUVBLDhEQUFDMkIsS0FBRztRQUFDQyxHQUFHLEVBQUVwQixTQUFTO1FBQUVxQixLQUFLLEVBQUU7WUFBQ0MsVUFBVSxFQUFDLFlBQVcsQ0FBUyxPQUFQekIsTUFBTSxDQUFFO1NBQUM7UUFBRTBCLFNBQVMsRUFBRS9CLCtEQUFXOzswQkFDbEYsOERBQUNpQyxNQUFJOzBCQUFDLDRFQUFDQyxHQUFDO29CQUFDSCxTQUFTLEVBQUUzQixTQUFTOzs7Ozt5QkFBTTs7Ozs7cUJBQU87MEJBQzFDLDhEQUFDNkIsTUFBSTswQkFBRTlCLElBQUk7Ozs7O3FCQUFRO1lBRWpCRyxRQUFRLGtCQUNSLDhEQUFDcUIsS0FBRztnQkFBQ0ksU0FBUyxFQUFFL0IsbUVBQWU7MEJBQzdCLDRFQUFDMkIsS0FBRztvQkFBQ0UsS0FBSyxFQUFFO3dCQUFDdEIsS0FBSyxFQUFDQSxLQUFLO3FCQUFDO29CQUFFd0IsU0FBUyxFQUFFL0IsOERBQVU7Ozs7O3lCQUFROzs7OztxQkFDcEQ7Ozs7OzthQUVOLENBQ1A7QUFDSCxDQUFDO0dBMUNZRSxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9DYXJkLmpzeD9jNTgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYXJkcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDYXJkID0gKHtuYW1lLGNsYXNzbmFtZSxib3JkZXIscHJvZ3Jlc3Msd2lkdGh9KSA9PiB7XG5cbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKT0+IHtcbiAgICAgICAgaWYgKHByb2dyZXNzKSB7XG4gICAgICAgICAgYW5pbWF0ZUluKClcbiAgICAgICAgfSBcbiAgICB9KVxuICB9LFtdKVxuXG4gIGNvbnN0IGFuaW1hdGVJbiA9ICgpPT4ge1xuICAgIGxldCB3aWR0aHMgPSBjb250YWluZXIuY3VycmVudC5jaGlsZHJlblxuICAgIGxldCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHdpZHRocykge1xuXG4gICAgICAgIGxldCB3aWR0aCA9IGNoaWxkLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdXG4gICAgICAgIGxldCByZXZlYWxUb3AgPSB3aWR0aC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGxldCByZXZlYWxwb2ludCA9IDEyMFxuICAgICAgXG4gICAgICAgIGlmIChyZXZlYWxUb3AgPCBoZWlnaHQgLSByZXZlYWxwb2ludCkge1xuICAgICAgICAgIHdpZHRoLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmFkZFdpZHRoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpZHRoLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmFkZFdpZHRoKVxuICAgICAgICB9XG4gICAgfVxuICB9XG4gXG4gICAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2IHJlZj17Y29udGFpbmVyfSBzdHlsZT17e2JvcmRlckxlZnQ6YDNweCBzb2xpZCAke2JvcmRlcn1gfX0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lfT48L2k+PC9zcGFuPlxuICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9ncmVzcyAmJiBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDp3aWR0aH19IGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJlZiIsIkNhcmQiLCJuYW1lIiwiY2xhc3NuYW1lIiwiYm9yZGVyIiwicHJvZ3Jlc3MiLCJ3aWR0aCIsImNvbnRhaW5lciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbmltYXRlSW4iLCJ3aWR0aHMiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNoaWxkIiwicmV2ZWFsVG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicmV2ZWFscG9pbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRXaWR0aCIsInJlbW92ZSIsImRpdiIsInJlZiIsInN0eWxlIiwiYm9yZGVyTGVmdCIsImNsYXNzTmFtZSIsImNhcmQiLCJzcGFuIiwiaSIsImJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/Card.jsx\n"));

/***/ })

});