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

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, path = param.path, children = param.children;\n    _s();\n    var active = path === href;\n    var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, _this);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nvar Navbar = function(props) {\n    _s1();\n    var path = props.path;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, _objectSpread({\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px\"\n        },\n        zIndex: 1\n    }, props, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        nmd: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/projects\",\n                            path: path,\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/history\",\n                            path: path,\n                            children: \"History\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/photography\",\n                            path: path,\n                            children: \"Photography\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        ml: 2,\n                        display: {\n                            base: \"inline-block\",\n                            md: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuButton, {\n                                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton,\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HamburgerIcon, {}, void 0, false, void 0, void 0),\n                                variant: \"outline\",\n                                \"aria-label\": \"Options\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                                lineNumber: 86,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                            lineNumber: 85,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                        lineNumber: 84,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                    lineNumber: 83,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, _this)\n    }), void 0, false, {\n        fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLGFBRTFDOzs7OztpQ0FBVzs7Ozs7O3lCQUNQOzhCQUVSLDhEQUFDZCxpREFBRztvQkFBQzhDLElBQUksRUFBRSxDQUFDO29CQUFFYixLQUFLLEVBQUMsT0FBTzs4QkFDdkIsNEVBQUNqQyxpREFBRzt3QkFBQytDLEVBQUUsRUFBRSxDQUFDO3dCQUFFakIsT0FBTyxFQUFFOzRCQUFFUyxJQUFJLEVBQUUsY0FBYzs0QkFBRUMsRUFBRSxFQUFFLE1BQU07eUJBQUU7a0NBQ3JELDRFQUFDbkMsa0RBQUk7c0NBQ0QsNEVBQUNHLHdEQUFVO2dDQUFDaUIsRUFBRSxFQUFFaEIsd0RBQVU7Z0NBQUV1QyxJQUFJLGdCQUFFLDhEQUFDQyxhQUFhLG9DQUFHO2dDQUFFQyxPQUFPLEVBQUMsU0FBUztnQ0FBQ0MsWUFBVSxFQUFDLFNBQVM7Ozs7O3FDQUFHOzs7OztpQ0FDM0Y7Ozs7OzZCQUNMOzs7Ozt5QkFDSjs7Ozs7O2lCQUNFOzs7OzthQUNWLENBQ1Q7Q0FDSjtJQTFESzdCLE1BQU07O1FBUUlaLCtEQUFpQjs7O0FBUjNCWSxNQUFBQSxNQUFNO0FBNERaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gICAgQ29udGFpbmVyLFxuICAgIEJveCxcbiAgICBMaW5rLFxuICAgIFN0YWNrLFxuICAgIEhlYWRpbmcsXG4gICAgRmxleCxcbiAgICBNZW51LFxuICAgIE1lbnVJdGVtLFxuICAgIE1lbnVMaXN0LFxuICAgIE1lbnVCdXR0b24sXG4gICAgSWNvbkJ1dHRvbixcbiAgICB1c2VDb2xvck1vZGVWYWx1ZVxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgSHVtYnVyZ2VySWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5cbmNvbnN0IExpbmtJdGVtID0gKHsgaHJlZiwgcGF0aCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWZcbiAgICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnICwgJ3doaXRlQWxwaGEuOTAwJylcbiAgICByZXR1cm4gKFxuICAgICAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgYmc9e2FjdGl2ZSA/ICdnbGFzc1RlYWwnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICApXG59XG5cbmNvbnN0IE5hdmJhciA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgICAgIGFzPVwibmF2XCJcbiAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnI2ZmZmZmZjQwJywgJyMyMDIwMjM4MCcpfVxuICAgICAgICAgICAgc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjonYmx1cigxMHB4J319XG4gICAgICAgICAgICB6SW5kZXg9ezF9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxDb250YWluZXIgXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICAgIG1heFc9XCJjb250YWluZXIubWRcIlxuICAgICAgICAgICAgICAgIHdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbXI9ezV9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17J3RpZ2h0ZXInfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBtZDogJ3JvdycgfX1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnZmxleCcgfX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3sgYmFzZTogJ2Z1bGwnLCBtZDogJ2F1dG8nIH19XG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICAgICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbm1kOiAwIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9wcm9qZWN0c1wiIHBhdGg9e3BhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9oaXN0b3J5XCIgcGF0aD17cGF0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5XG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0l0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvcGhvdG9ncmFwaHlcIiBwYXRoPXtwYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob3RvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0l0ZW0+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgIDxCb3ggZmxleD17MX0gYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1sPXsyfSBkaXNwbGF5PXt7IGJhc2U6ICdpbmxpbmUtYmxvY2snLCBtZDogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b24gYXM9e0ljb25CdXR0b259IGljb249ezxIYW1idXJnZXJJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZVwiIGFyaWEtbGFiZWw9XCJPcHRpb25zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiTG9nbyIsIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiQm94IiwiTGluayIsIlN0YWNrIiwiSGVhZGluZyIsIkZsZXgiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIk1lbnVCdXR0b24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJIdW1idXJnZXJJY29uIiwiTGlua0l0ZW0iLCJocmVmIiwicGF0aCIsImNoaWxkcmVuIiwiYWN0aXZlIiwiaW5hY3RpdmVDb2xvciIsInAiLCJiZyIsInVuZGVmaW5lZCIsImNvbG9yIiwiTmF2YmFyIiwicHJvcHMiLCJwb3NpdGlvbiIsImFzIiwidyIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJ6SW5kZXgiLCJkaXNwbGF5IiwibWF4VyIsIndyYXAiLCJhbGlnbiIsImp1c3RpZnkiLCJtciIsInNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiZGlyZWN0aW9uIiwiYmFzZSIsIm1kIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtdCIsIm5tZCIsImZsZXgiLCJtbCIsImljb24iLCJIYW1idXJnZXJJY29uIiwidmFyaWFudCIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});