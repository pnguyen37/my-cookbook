"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/recipes",{

/***/ "./src/pages/recipes.tsx":
/*!*******************************!*\
  !*** ./src/pages/recipes.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ recipes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_RecipeCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RecipeCard */ \"./src/components/RecipeCard.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction recipes() {\n    _s();\n    const [recipes, setRecipes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [likedMode, setLikedMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function fetchData() {\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8080/recipes/\").then(function(response) {\n            setRecipes(response.data);\n        }).catch(function(error) {\n            console.log(error);\n            setError(\"Error loading recipes.\");\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const handleSubmit = ()=>{\n        async function searchData() {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8080/recipes/\".concat(query)).then(function(response) {\n                setRecipes(response.data);\n            }).catch(function(error) {\n                console.log(error);\n                setError(\"Error loading recipes.\");\n            });\n            setQuery(\"\");\n        }\n        searchData();\n    };\n    const showLiked = ()=>{\n        setLikedMode(!likedMode);\n        fetchData();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            marginTop: 10,\n            maxW: \"container.lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n                    gap: 3,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                            size: \"md\",\n                            children: \"Look up recipes to your favorite dishes by searching below.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                    value: query,\n                                    onChange: (e)=>setQuery(e.target.value),\n                                    w: \"500px\",\n                                    border: \"2px solid lightgrey\",\n                                    placeholder: \"Ex: tacos\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: handleSubmit,\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.StarIcon, {\n                                    onClick: sh\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                            size: \"sm\",\n                            children: \"To rate a recipe, click on the current rating.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(auto-fill, minmax(200px, 1fr))\",\n                    gap: 4,\n                    marginTop: \"40px\",\n                    children: recipes.map((recipe, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RecipeCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            recipeID: recipe._id,\n                            image: recipe.image,\n                            meal: recipe.meal,\n                            instructions: recipe.instructions,\n                            rating: recipe.rating\n                        }, void 0, false, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(recipes, \"D3pCdrQmYPfxQFRfsjEcc+UFCKs=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVjaXBlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVMEI7QUFDa0I7QUFDQTtBQUdNO0FBQ3hCO0FBRVgsU0FBU1k7O0lBQ3RCLE1BQU0sQ0FBQ0EsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTNDLGVBQWVZO1FBQ2IsTUFBTVQsaURBQ0EsQ0FBWSxrQ0FDZlcsSUFBSSxDQUFDLFNBQVVDLFFBQVE7WUFDdEJWLFdBQVdVLFNBQVNDLElBQUk7UUFDMUIsR0FDQ0MsS0FBSyxDQUFDLFNBQVVYLEtBQUs7WUFDcEJZLFFBQVFDLEdBQUcsQ0FBQ2I7WUFDWkMsU0FBUztRQUNYO0lBQ0o7SUFHQU4sZ0RBQVNBLENBQUM7UUFDUlc7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNUSxlQUFlO1FBQ25CLGVBQWVDO1lBQ2IsTUFBTWxCLGlEQUNBLENBQVcsaUNBQXVDLE9BQU5LLFFBQy9DTSxJQUFJLENBQUMsU0FBVUMsUUFBUTtnQkFDdEJWLFdBQVdVLFNBQVNDLElBQUk7WUFDMUIsR0FDQ0MsS0FBSyxDQUFDLFNBQVVYLEtBQUs7Z0JBQ3BCWSxRQUFRQyxHQUFHLENBQUNiO2dCQUNaQyxTQUFTO1lBQ1g7WUFDRkUsU0FBUztRQUNYO1FBQ0FZO0lBQ0Y7SUFFQSxNQUFNQyxZQUFZO1FBQ2hCWCxhQUFhLENBQUNEO1FBQ2RFO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1c7a0JBQ0MsNEVBQUM3Qix1REFBU0E7WUFBQzhCLFdBQVc7WUFBSUMsTUFBSzs7OEJBQzdCLDhEQUFDNUIsb0RBQU1BO29CQUFDNkIsS0FBSzs7c0NBQ1gsOERBQUNsQyxxREFBT0E7NEJBQUNtQyxNQUFLO3NDQUFLOzs7Ozs7c0NBR25CLDhEQUFDaEMsb0RBQU1BOzs4Q0FDTCw4REFBQ0MsbURBQUtBO29DQUNKZ0MsT0FBT3BCO29DQUNQcUIsVUFBVSxDQUFDQyxJQUFNckIsU0FBU3FCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDeENJLEdBQUU7b0NBQ0ZDLFFBQVE7b0NBQ1JDLGFBQVk7Ozs7Ozs4Q0FFZCw4REFBQ3pDLG9EQUFNQTtvQ0FBQzBDLFNBQVNmOzhDQUFjOzs7Ozs7OENBQy9CLDhEQUFDckIsc0RBQVFBO29DQUFDb0MsU0FBU0M7Ozs7Ozs7Ozs7OztzQ0FFckIsOERBQUM1QyxxREFBT0E7NEJBQUNtQyxNQUFLO3NDQUFLOzs7Ozs7Ozs7Ozs7OEJBSXJCLDhEQUFDN0IsaURBQUdBO29CQUNGdUMsU0FBUTtvQkFDUkMscUJBQW9CO29CQUNwQlosS0FBSztvQkFDTEYsV0FBVTs4QkFFVHBCLFFBQVFtQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3BCLDhEQUFDdkMsOERBQVVBOzRCQUNUd0MsVUFBVUYsT0FBT0csR0FBRzs0QkFDcEJDLE9BQU9KLE9BQU9JLEtBQUs7NEJBQ25CQyxNQUFNTCxPQUFPSyxJQUFJOzRCQUNqQkMsY0FBY04sT0FBT00sWUFBWTs0QkFDakNDLFFBQVFQLE9BQU9PLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkM7R0FyRndCM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMudHN4PzVkMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2VudGVyLFxuICBIZWFkaW5nLFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgSFN0YWNrLFxuICBJbnB1dCxcbiAgVlN0YWNrLFxuICBCb3gsXG4gIGZpbHRlcixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGxvYWRSZWNpcGVzIH0gZnJvbSBcIi4vYXBpL2xvYWRSZWNpcGVzXCI7XG5pbXBvcnQgeyBSZWNpcGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9yZXNwb25zZXNcIjtcbmltcG9ydCBSZWNpcGVDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1JlY2lwZUNhcmRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjaXBlcygpIHtcbiAgY29uc3QgW3JlY2lwZXMsIHNldFJlY2lwZXNdID0gdXNlU3RhdGU8UmVjaXBlW10+KFtdKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtsaWtlZE1vZGUsIHNldExpa2VkTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgIGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0PFJlY2lwZVtdPihgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlY2lwZXMvYClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBzZXRSZWNpcGVzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBzZXRFcnJvcihcIkVycm9yIGxvYWRpbmcgcmVjaXBlcy5cIik7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBzZWFyY2hEYXRhKCkge1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldDxSZWNpcGVbXT4oYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWNpcGVzLyR7cXVlcnl9YClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgc2V0UmVjaXBlcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICBzZXRFcnJvcihcIkVycm9yIGxvYWRpbmcgcmVjaXBlcy5cIik7XG4gICAgICAgIH0pO1xuICAgICAgc2V0UXVlcnkoXCJcIik7XG4gICAgfVxuICAgIHNlYXJjaERhdGEoKTtcbiAgfTtcblxuICBjb25zdCBzaG93TGlrZWQgPSAoKSA9PiB7XG4gICAgc2V0TGlrZWRNb2RlKCFsaWtlZE1vZGUpXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvbnRhaW5lciBtYXJnaW5Ub3A9ezEwfSBtYXhXPVwiY29udGFpbmVyLmxnXCI+XG4gICAgICAgIDxWU3RhY2sgZ2FwPXszfT5cbiAgICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIj5cbiAgICAgICAgICAgIExvb2sgdXAgcmVjaXBlcyB0byB5b3VyIGZhdm9yaXRlIGRpc2hlcyBieSBzZWFyY2hpbmcgYmVsb3cuXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdz1cIjUwMHB4XCJcbiAgICAgICAgICAgICAgYm9yZGVyPXtcIjJweCBzb2xpZCBsaWdodGdyZXlcIn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeDogdGFjb3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDxTdGFySWNvbiBvbkNsaWNrPXtzaH0gLz5cbiAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICA8SGVhZGluZyBzaXplPVwic21cIj5cbiAgICAgICAgICAgIFRvIHJhdGUgYSByZWNpcGUsIGNsaWNrIG9uIHRoZSBjdXJyZW50IHJhdGluZy5cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgZGlzcGxheT1cImdyaWRcIlxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpXCJcbiAgICAgICAgICBnYXA9ezR9XG4gICAgICAgICAgbWFyZ2luVG9wPVwiNDBweFwiXG4gICAgICAgID5cbiAgICAgICAgICB7cmVjaXBlcy5tYXAoKHJlY2lwZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxSZWNpcGVDYXJkXG4gICAgICAgICAgICAgIHJlY2lwZUlEPXtyZWNpcGUuX2lkfVxuICAgICAgICAgICAgICBpbWFnZT17cmVjaXBlLmltYWdlfVxuICAgICAgICAgICAgICBtZWFsPXtyZWNpcGUubWVhbH1cbiAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zPXtyZWNpcGUuaW5zdHJ1Y3Rpb25zfVxuICAgICAgICAgICAgICByYXRpbmc9e3JlY2lwZS5yYXRpbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWRpbmciLCJCdXR0b24iLCJDb250YWluZXIiLCJIU3RhY2siLCJJbnB1dCIsIlZTdGFjayIsIkJveCIsIlN0YXJJY29uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWNpcGVDYXJkIiwiYXhpb3MiLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsImVycm9yIiwic2V0RXJyb3IiLCJxdWVyeSIsInNldFF1ZXJ5IiwibGlrZWRNb2RlIiwic2V0TGlrZWRNb2RlIiwiZmV0Y2hEYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInNlYXJjaERhdGEiLCJzaG93TGlrZWQiLCJkaXYiLCJtYXJnaW5Ub3AiLCJtYXhXIiwiZ2FwIiwic2l6ZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidyIsImJvcmRlciIsInBsYWNlaG9sZGVyIiwib25DbGljayIsInNoIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXAiLCJyZWNpcGUiLCJpbmRleCIsInJlY2lwZUlEIiwiX2lkIiwiaW1hZ2UiLCJtZWFsIiwiaW5zdHJ1Y3Rpb25zIiwicmF0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/recipes.tsx\n"));

/***/ })

});