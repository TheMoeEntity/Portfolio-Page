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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.module.css */ \"./components/cards/cards.module.css\");\n/* harmony import */ var _cards_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cards_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Card = function(param) {\n    var name = param.name, classname = param.classname, border = param.border, progress = param.progress, width = param.width;\n    _s();\n    var container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", function() {\n            if (progress) {\n                animateIn();\n            }\n        });\n    }, []);\n    var animateIn = function() {\n        var height = window.innerHeight;\n        var width = container.current.children[2].children[0];\n        var revealTop = width.getBoundingClientRect().top;\n        var revealpoint = 120;\n        if (revealTop < height - revealpoint) {\n            width.classList.add((_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().addWidth));\n            container.classList.remove(styl);\n        } else {\n            width.classList.remove((_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().addWidth));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: container,\n        style: {\n            borderLeft: \"3px solid \".concat(border)\n        },\n        className: \"\".concat((_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().card), \" \").concat(progress ? (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().skills) : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: classname\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this),\n            progress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().progress),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: width\n                    },\n                    className: (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().bar)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Card, \"gP936EAkbq44zYYGRnj90r2fLhg=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXVDO0FBQ0U7QUFFbEMsSUFBTUcsSUFBSSxHQUFHLGdCQUE0QztRQUExQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUNDLFNBQVMsU0FBVEEsU0FBUyxFQUFDQyxNQUFNLFNBQU5BLE1BQU0sRUFBQ0MsUUFBUSxTQUFSQSxRQUFRLEVBQUNDLEtBQUssU0FBTEEsS0FBSzs7SUFFeEQsSUFBTUMsU0FBUyxHQUFHUiw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUU5QkMsZ0RBQVMsQ0FBQyxXQUFLO1FBQ2JRLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFdBQUs7WUFDbkMsSUFBSUosUUFBUSxFQUFFO2dCQUNaSyxTQUFTLEVBQUU7WUFDYixDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxFQUFDLEVBQUUsQ0FBQztJQUVMLElBQU1BLFNBQVMsR0FBRyxXQUFLO1FBRXJCLElBQUlDLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxXQUFXO1FBQy9CLElBQUlOLEtBQUssR0FBR0MsU0FBUyxDQUFDTSxPQUFPLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJQyxTQUFTLEdBQUdULEtBQUssQ0FBQ1UscUJBQXFCLEVBQUUsQ0FBQ0MsR0FBRztRQUNqRCxJQUFJQyxXQUFXLEdBQUcsR0FBRztRQUVyQixJQUFJSCxTQUFTLEdBQUdKLE1BQU0sR0FBR08sV0FBVyxFQUFFO1lBQ3BDWixLQUFLLENBQUNhLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDdEIsbUVBQWUsQ0FBQztZQUNwQ1MsU0FBUyxDQUFDWSxTQUFTLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1FBQ2xDLE9BQU87WUFDTGpCLEtBQUssQ0FBQ2EsU0FBUyxDQUFDRyxNQUFNLENBQUN4QixtRUFBZSxDQUFDO1FBQ3pDLENBQUM7SUFFSCxDQUFDO0lBRUMscUJBRUEsOERBQUMwQixLQUFHO1FBQUNDLEdBQUcsRUFBRWxCLFNBQVM7UUFBRW1CLEtBQUssRUFBRTtZQUFDQyxVQUFVLEVBQUMsWUFBVyxDQUFTLE9BQVB2QixNQUFNLENBQUU7U0FBQztRQUFFd0IsU0FBUyxFQUFFLEVBQUMsQ0FBaUJ2QixNQUE0QixDQUEzQ1AsK0RBQVcsRUFBQyxHQUFDLENBQStCLFFBQTdCTyxRQUFRLEdBQUdQLGlFQUFhLEdBQUUsRUFBRSxDQUFFOzswQkFDdkgsOERBQUNpQyxNQUFJOzBCQUFDLDRFQUFDQyxHQUFDO29CQUFDSixTQUFTLEVBQUV6QixTQUFTOzs7Ozt5QkFBTTs7Ozs7cUJBQU87MEJBQzFDLDhEQUFDNEIsTUFBSTswQkFBRTdCLElBQUk7Ozs7O3FCQUFRO1lBRWpCRyxRQUFRLGtCQUNSLDhEQUFDbUIsS0FBRztnQkFBQ0ksU0FBUyxFQUFFOUIsbUVBQWU7MEJBQzdCLDRFQUFDMEIsS0FBRztvQkFBQ0UsS0FBSyxFQUFFO3dCQUFDcEIsS0FBSyxFQUFDQSxLQUFLO3FCQUFDO29CQUFFc0IsU0FBUyxFQUFFOUIsOERBQVU7Ozs7O3lCQUFROzs7OztxQkFDcEQ7Ozs7OzthQUVOLENBQ1A7QUFDSCxDQUFDO0dBekNZRyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9DYXJkLmpzeD9jNTgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYXJkcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IENhcmQgPSAoe25hbWUsY2xhc3NuYW1lLGJvcmRlcixwcm9ncmVzcyx3aWR0aH0pID0+IHtcblxuICBjb25zdCBjb250YWluZXIgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpPT4ge1xuICAgICAgICBpZiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICBhbmltYXRlSW4oKVxuICAgICAgICB9IFxuICAgIH0pXG4gIH0sW10pXG5cbiAgY29uc3QgYW5pbWF0ZUluID0gKCk9PiB7XG4gICBcbiAgICBsZXQgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgbGV0IHdpZHRoID0gY29udGFpbmVyLmN1cnJlbnQuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF1cbiAgICBsZXQgcmV2ZWFsVG9wID0gd2lkdGguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGxldCByZXZlYWxwb2ludCA9IDEyMFxuICBcbiAgICBpZiAocmV2ZWFsVG9wIDwgaGVpZ2h0IC0gcmV2ZWFscG9pbnQpIHsgXG4gICAgICB3aWR0aC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5hZGRXaWR0aClcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHN0eWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmFkZFdpZHRoKVxuICAgIH1cblxuICB9XG4gXG4gICAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2IHJlZj17Y29udGFpbmVyfSBzdHlsZT17e2JvcmRlckxlZnQ6YDNweCBzb2xpZCAke2JvcmRlcn1gfX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH0gJHtwcm9ncmVzcyA/IHN0eWxlcy5za2lsbHM6IFwiXCJ9YH0+XG4gICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lfT48L2k+PC9zcGFuPlxuICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9ncmVzcyAmJiBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDp3aWR0aH19IGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkNhcmQiLCJuYW1lIiwiY2xhc3NuYW1lIiwiYm9yZGVyIiwicHJvZ3Jlc3MiLCJ3aWR0aCIsImNvbnRhaW5lciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbmltYXRlSW4iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN1cnJlbnQiLCJjaGlsZHJlbiIsInJldmVhbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInJldmVhbHBvaW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkV2lkdGgiLCJyZW1vdmUiLCJzdHlsIiwiZGl2IiwicmVmIiwic3R5bGUiLCJib3JkZXJMZWZ0IiwiY2xhc3NOYW1lIiwiY2FyZCIsInNraWxscyIsInNwYW4iLCJpIiwiYmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/Card.jsx\n"));

/***/ })

});