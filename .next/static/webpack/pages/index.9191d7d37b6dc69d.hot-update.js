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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.module.css */ \"./components/cards/cards.module.css\");\n/* harmony import */ var _cards_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cards_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Card = function(param) {\n    var name = param.name, classname = param.classname, border = param.border, progress = param.progress, width = param.width;\n    _s();\n    var container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", function() {\n            if (progress) {\n                animateIn();\n            }\n        });\n    }, []);\n    var animateIn = function() {\n        var height = window.innerHeight;\n        //for (const child of widths) {\n        var width = container.current.children[2].children[0];\n        var revealTop = width.getBoundingClientRect().top;\n        var revealpoint = 120;\n        if (revealTop < height - revealpoint) {\n            width.classList.add((_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().addWidth));\n        } else {\n            width.classList.remove((_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().addWidth));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: container,\n        style: {\n            borderLeft: \"3px solid \".concat(border)\n        },\n        className: (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: classname\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this),\n            progress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().progress),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: width\n                    },\n                    className: (_cards_module_css__WEBPACK_IMPORTED_MODULE_2___default().bar)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/github/Portfolio Page/components/cards/Card.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Card, \"gP936EAkbq44zYYGRnj90r2fLhg=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXVDO0FBQ0U7QUFFbEMsSUFBTUcsSUFBSSxHQUFHLGdCQUE0QztRQUExQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUNDLFNBQVMsU0FBVEEsU0FBUyxFQUFDQyxNQUFNLFNBQU5BLE1BQU0sRUFBQ0MsUUFBUSxTQUFSQSxRQUFRLEVBQUNDLEtBQUssU0FBTEEsS0FBSzs7SUFFeEQsSUFBTUMsU0FBUyxHQUFHUiw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUU5QkMsZ0RBQVMsQ0FBQyxXQUFLO1FBQ2JRLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFdBQUs7WUFDbkMsSUFBSUosUUFBUSxFQUFFO2dCQUNaSyxTQUFTLEVBQUU7WUFDYixDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxFQUFDLEVBQUUsQ0FBQztJQUVMLElBQU1BLFNBQVMsR0FBRyxXQUFLO1FBQ3JCLElBQUlDLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxXQUFXO1FBQy9CLCtCQUErQjtRQUUzQixJQUFJTixLQUFLLEdBQUdDLFNBQVMsQ0FBQ00sT0FBTyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSUMsU0FBUyxHQUFHVCxLQUFLLENBQUNVLHFCQUFxQixFQUFFLENBQUNDLEdBQUc7UUFDakQsSUFBSUMsV0FBVyxHQUFHLEdBQUc7UUFFckIsSUFBSUgsU0FBUyxHQUFHSixNQUFNLEdBQUdPLFdBQVcsRUFBRTtZQUNwQ1osS0FBSyxDQUFDYSxTQUFTLENBQUNDLEdBQUcsQ0FBQ3RCLG1FQUFlLENBQUM7UUFDdEMsT0FBTztZQUNMUSxLQUFLLENBQUNhLFNBQVMsQ0FBQ0csTUFBTSxDQUFDeEIsbUVBQWUsQ0FBQztRQUN6QyxDQUFDO0lBRVAsQ0FBQztJQUVDLHFCQUVBLDhEQUFDeUIsS0FBRztRQUFDQyxHQUFHLEVBQUVqQixTQUFTO1FBQUVrQixLQUFLLEVBQUU7WUFBQ0MsVUFBVSxFQUFDLFlBQVcsQ0FBUyxPQUFQdEIsTUFBTSxDQUFFO1NBQUM7UUFBRXVCLFNBQVMsRUFBRTdCLCtEQUFXOzswQkFDbEYsOERBQUMrQixNQUFJOzBCQUFDLDRFQUFDQyxHQUFDO29CQUFDSCxTQUFTLEVBQUV4QixTQUFTOzs7Ozt5QkFBTTs7Ozs7cUJBQU87MEJBQzFDLDhEQUFDMEIsTUFBSTswQkFBRTNCLElBQUk7Ozs7O3FCQUFRO1lBRWpCRyxRQUFRLGtCQUNSLDhEQUFDa0IsS0FBRztnQkFBQ0ksU0FBUyxFQUFFN0IsbUVBQWU7MEJBQzdCLDRFQUFDeUIsS0FBRztvQkFBQ0UsS0FBSyxFQUFFO3dCQUFDbkIsS0FBSyxFQUFDQSxLQUFLO3FCQUFDO29CQUFFcUIsU0FBUyxFQUFFN0IsOERBQVU7Ozs7O3lCQUFROzs7OztxQkFDcEQ7Ozs7OzthQUVOLENBQ1A7QUFDSCxDQUFDO0dBekNZRyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9DYXJkLmpzeD9jNTgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYXJkcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IENhcmQgPSAoe25hbWUsY2xhc3NuYW1lLGJvcmRlcixwcm9ncmVzcyx3aWR0aH0pID0+IHtcblxuICBjb25zdCBjb250YWluZXIgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpPT4ge1xuICAgICAgICBpZiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICBhbmltYXRlSW4oKVxuICAgICAgICB9IFxuICAgIH0pXG4gIH0sW10pXG5cbiAgY29uc3QgYW5pbWF0ZUluID0gKCk9PiB7XG4gICAgbGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIC8vZm9yIChjb25zdCBjaGlsZCBvZiB3aWR0aHMpIHtcblxuICAgICAgICBsZXQgd2lkdGggPSBjb250YWluZXIuY3VycmVudC5jaGlsZHJlblsyXS5jaGlsZHJlblswXVxuICAgICAgICBsZXQgcmV2ZWFsVG9wID0gd2lkdGguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBsZXQgcmV2ZWFscG9pbnQgPSAxMjBcbiAgICAgIFxuICAgICAgICBpZiAocmV2ZWFsVG9wIDwgaGVpZ2h0IC0gcmV2ZWFscG9pbnQpIHtcbiAgICAgICAgICB3aWR0aC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5hZGRXaWR0aClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aWR0aC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5hZGRXaWR0aClcbiAgICAgICAgfVxuXG4gIH1cbiBcbiAgICByZXR1cm4gKFxuICAgIFxuICAgIDxkaXYgcmVmPXtjb250YWluZXJ9IHN0eWxlPXt7Ym9yZGVyTGVmdDpgM3B4IHNvbGlkICR7Ym9yZGVyfWB9fSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPXtjbGFzc25hbWV9PjwvaT48L3NwYW4+XG4gICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cbiAgICAgICAge1xuICAgICAgICAgIHByb2dyZXNzICYmIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOndpZHRofX0gY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiQ2FyZCIsIm5hbWUiLCJjbGFzc25hbWUiLCJib3JkZXIiLCJwcm9ncmVzcyIsIndpZHRoIiwiY29udGFpbmVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuaW1hdGVJbiIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3VycmVudCIsImNoaWxkcmVuIiwicmV2ZWFsVG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicmV2ZWFscG9pbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRXaWR0aCIsInJlbW92ZSIsImRpdiIsInJlZiIsInN0eWxlIiwiYm9yZGVyTGVmdCIsImNsYXNzTmFtZSIsImNhcmQiLCJzcGFuIiwiaSIsImJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/Card.jsx\n"));

/***/ })

});