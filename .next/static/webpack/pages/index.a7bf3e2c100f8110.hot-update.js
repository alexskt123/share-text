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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var use_typing_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-typing-effect */ \"./node_modules/use-typing-effect/dist/index.es.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var loadingText = (0,use_typing_effect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\n        'Type Here...'\n    ]);\n    //template\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            height: '100vh'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            component: \"form\",\n            noValidate: true,\n            autoComplete: \"off\",\n            sx: {\n                width: 1,\n                height: '100vh'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                id: \"outlined-multiline-static\",\n                sx: {\n                    marginTop: '10px',\n                    width: 1,\n                    height: '100vh'\n                },\n                label: loadingText,\n                multiline: true,\n                rows: 4,\n                defaultValue: \"Default Value\",\n                size: \"small\"\n            }, void 0, false, {\n                fileName: \"D:\\\\github\\\\share-text\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\github\\\\share-text\\\\pages\\\\index.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\github\\\\share-text\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"D+Lsl0xvEOaSpPpJQ4TDYF/GATY=\", false, function() {\n    return [\n        use_typing_effect__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2dDO0FBQ0c7QUFDWTtBQUNBO0FBQ0E7O0FBR2hDLFFBQVEsQ0FBQ0ssSUFBSSxHQUFHLENBQUM7O0lBQzlCLEdBQUssQ0FBQ0MsV0FBVyxHQUFHSCw2REFBZSxDQUFDLENBQUM7UUFBQSxDQUFjO0lBQUEsQ0FBQztJQUVwRCxFQUFVO0lBQ1YsTUFBTSw2RUFDSEMsK0RBQVM7UUFBQ0csRUFBRSxFQUFFLENBQUM7WUFBQ0MsTUFBTSxFQUFFLENBQU87UUFBQyxDQUFDOzhGQUMvQlAseURBQUc7WUFDRlEsU0FBUyxFQUFDLENBQU07WUFDaEJDLFVBQVU7WUFDVkMsWUFBWSxFQUFDLENBQUs7WUFDbEJKLEVBQUUsRUFBRSxDQUFDO2dCQUFDSyxLQUFLLEVBQUUsQ0FBQztnQkFBRUosTUFBTSxFQUFFLENBQU87WUFBQyxDQUFDO2tHQUVoQ04sK0RBQVM7Z0JBQ1JXLEVBQUUsRUFBQyxDQUEyQjtnQkFDOUJOLEVBQUUsRUFBRSxDQUFDO29CQUFDTyxTQUFTLEVBQUUsQ0FBTTtvQkFBRUYsS0FBSyxFQUFFLENBQUM7b0JBQUVKLE1BQU0sRUFBRSxDQUFPO2dCQUFDLENBQUM7Z0JBQ3BETyxLQUFLLEVBQUVULFdBQVc7Z0JBQ2xCVSxTQUFTO2dCQUNUQyxJQUFJLEVBQUUsQ0FBQztnQkFDUEMsWUFBWSxFQUFDLENBQWU7Z0JBQzVCQyxJQUFJLEVBQUMsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQU10QixDQUFDO0dBekJ1QmQsSUFBSTs7UUFDTkYseURBQWU7OztLQURiRSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuaW1wb3J0IHVzZVR5cGluZ0VmZmVjdCBmcm9tICd1c2UtdHlwaW5nLWVmZmVjdCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgbG9hZGluZ1RleHQgPSB1c2VUeXBpbmdFZmZlY3QoWydUeXBlIEhlcmUuLi4nXSk7XHJcblxyXG4gIC8vdGVtcGxhdGVcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBzeD17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBjb21wb25lbnQ9XCJmb3JtXCJcclxuICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICBzeD17eyB3aWR0aDogMSwgaGVpZ2h0OiAnMTAwdmgnIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLW11bHRpbGluZS1zdGF0aWNcIlxyXG4gICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiAnMTBweCcsIHdpZHRoOiAxLCBoZWlnaHQ6ICcxMDB2aCcgfX1cclxuICAgICAgICAgIGxhYmVsPXtsb2FkaW5nVGV4dH1cclxuICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkRlZmF1bHQgVmFsdWVcIlxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsIkJveCIsIlRleHRGaWVsZCIsInVzZVR5cGluZ0VmZmVjdCIsIkNvbnRhaW5lciIsIkhvbWUiLCJsb2FkaW5nVGV4dCIsInN4IiwiaGVpZ2h0IiwiY29tcG9uZW50Iiwibm9WYWxpZGF0ZSIsImF1dG9Db21wbGV0ZSIsIndpZHRoIiwiaWQiLCJtYXJnaW5Ub3AiLCJsYWJlbCIsIm11bHRpbGluZSIsInJvd3MiLCJkZWZhdWx0VmFsdWUiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});