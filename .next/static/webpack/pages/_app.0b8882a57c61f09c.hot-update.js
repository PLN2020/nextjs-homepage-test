"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ThemeToggleButton = function() {\n    _s();\n    var toggleColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)().toggleColorMode;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        exitBeforeEnter: true,\n        initial: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            style: {\n                display: \"inline-block\"\n            },\n            initial: {\n                y: -20,\n                opacity: 0\n            },\n            animate: {\n                y: 0,\n                opacity: 1\n            },\n            exit: {\n                y: 20,\n                opacity: 0\n            },\n            transition: {\n                duration: 0.2\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                \"aria-label\": \"Toggle theme\",\n                colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"purple\", \"orange\"),\n                icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}, void 0, false, void 0, void 0), /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, void 0, void 0)),\n                onClick: toggleColorMode\n            }, void 0, false, {\n                fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/theme-toggle-button.js\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, _this)\n        }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"light\", \"dark\"), false, {\n            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/theme-toggle-button.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/theme-toggle-button.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, _this);\n};\n_s(ThemeToggleButton, \"nOxe+ebHCqC5bMQGsSWeuYX/oOQ=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue\n    ];\n});\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQXVEO0FBQ3VCO0FBQzFCOztBQUVwRCxJQUFNTyxpQkFBaUIsR0FBRyxXQUFNOztJQUM1QixJQUFNLGVBQWlCLEdBQUtKLDhEQUFZLEVBQUUsQ0FBbENLLGVBQWU7SUFFdkIscUJBQ0ksOERBQUNQLDBEQUFlO1FBQUNRLGVBQWU7UUFBQ0MsT0FBTyxFQUFFLEtBQUs7a0JBQzNDLDRFQUFDVixxREFBVTtZQUNQWSxLQUFLLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRSxjQUFjO2FBQUU7WUFFbENILE9BQU8sRUFBRTtnQkFBRUksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBRUMsT0FBTyxFQUFFLENBQUM7YUFBRTtZQUMvQkMsT0FBTyxFQUFFO2dCQUFFRixDQUFDLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLENBQUM7YUFBRTtZQUM3QkUsSUFBSSxFQUFFO2dCQUFFSCxDQUFDLEVBQUUsRUFBRTtnQkFBRUMsT0FBTyxFQUFFLENBQUM7YUFBRTtZQUMzQkcsVUFBVSxFQUFFO2dCQUFFQyxRQUFRLEVBQUUsR0FBRzthQUFFO3NCQUU3Qiw0RUFBQ2pCLHdEQUFVO2dCQUNQa0IsWUFBVSxFQUFDLGNBQWM7Z0JBQ3pCQyxXQUFXLEVBQUVqQixtRUFBaUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNsRGtCLElBQUksRUFBRWxCLG1FQUFpQixlQUFDLDhEQUFDRSxzREFBUSxvQ0FBRyxnQkFBRSw4REFBQ0QscURBQU8sb0NBQUcsQ0FBQztnQkFDbERrQixPQUFPLEVBQUVmLGVBQWU7Ozs7O3FCQUNkO1dBWFRKLG1FQUFpQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7Ozs7aUJBWTlCOzs7OzthQUNDLENBQ3JCO0NBQ0o7R0F0QktHLGlCQUFpQjs7UUFDU0osMERBQVk7UUFNdkJDLCtEQUFpQjtRQVFMQSwrREFBaUI7UUFDeEJBLCtEQUFpQjs7O0FBaEJyQ0csS0FBQUEsaUJBQWlCO0FBd0J2QiwrREFBZUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlLWJ1dHRvbi5qcz9jY2E5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IEljb25CdXR0b24sIHVzZUNvbG9yTW9kZSwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgU3VuSWNvbiwgTW9vbkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5jb25zdCBUaGVtZVRvZ2dsZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19XG4gICAgICAgICAgICAgICAga2V5PXt1c2VDb2xvck1vZGVWYWx1ZSgnbGlnaHQnLCAnZGFyaycpfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogLTIwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgZXhpdD17eyB5OiAyMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIHRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9e3VzZUNvbG9yTW9kZVZhbHVlKCdwdXJwbGUnLCAnb3JhbmdlJyl9XG4gICAgICAgICAgICAgICAgICAgIGljb249e3VzZUNvbG9yTW9kZVZhbHVlKDxNb29uSWNvbiAvPiwgPFN1bkljb24gLz4pfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgICAgICAgICAgICAgPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZUJ1dHRvbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTdW5JY29uIiwiTW9vbkljb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsInRvZ2dsZUNvbG9yTW9kZSIsImV4aXRCZWZvcmVFbnRlciIsImluaXRpYWwiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYXJpYS1sYWJlbCIsImNvbG9yU2NoZW1lIiwiaWNvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/theme-toggle-button.js\n");

/***/ })

});