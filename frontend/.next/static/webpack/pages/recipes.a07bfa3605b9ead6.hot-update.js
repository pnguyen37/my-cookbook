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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ recipes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_RecipeCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RecipeCard */ \"./src/components/RecipeCard.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction recipes() {\n    _s();\n    const [recipes, setRecipes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8080/recipes/\").then(function(response) {\n                setRecipes(response.data);\n            }).catch(function(error) {\n                console.log(error);\n                setError(\"Error loading recipes.\");\n            });\n        }\n        fetchData();\n    }, []);\n    const handleSubmit = ()=>{\n        async function fetchData() {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8080/recipes/\".concat(query)).then(function(response) {\n                setRecipes(response.data);\n            }).catch(function(error) {\n                console.log(error);\n                setError(\"Error loading recipes.\");\n            });\n            setQuery(\"\");\n        }\n        fetchData();\n    };\n    const showLiked = ()=>{\n        async function fetchData() {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8080/recipes/\").then(function(response) {\n                setRecipes(response.data);\n            }).catch(function(error) {\n                console.log(error);\n                setError(\"Error loading recipes.\");\n            });\n        }\n        fetchData();\n        const filteredData = recipes.filter((recipe)=>recipe.liked === true);\n        set;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            marginTop: 10,\n            maxW: \"container.lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n                    gap: 3,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                            size: \"md\",\n                            children: \"Look up recipes to your favorite dishes by searching below.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                    value: query,\n                                    onChange: (e)=>setQuery(e.target.value),\n                                    w: \"500px\",\n                                    border: \"2px solid lightgrey\",\n                                    placeholder: \"Ex: tacos\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: handleSubmit,\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.StarIcon, {\n                                    onClick: showLiked\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                            size: \"sm\",\n                            children: \"To rate a recipe, click on the current rating.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(auto-fill, minmax(200px, 1fr))\",\n                    gap: 4,\n                    marginTop: \"40px\",\n                    children: recipes.map((recipe, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RecipeCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            recipeID: recipe._id,\n                            image: recipe.image,\n                            meal: recipe.meal,\n                            instructions: recipe.instructions,\n                            rating: recipe.rating\n                        }, void 0, false, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(recipes, \"lVHgv4by4neqkmXTlPqVdepKA2I=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVjaXBlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVMEI7QUFDa0I7QUFDQTtBQUdNO0FBQ3hCO0FBRVgsU0FBU1k7O0lBQ3RCLE1BQU0sQ0FBQ0EsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQVM7SUFFM0NDLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZVM7WUFDYixNQUFNUCxpREFDQSxDQUFZLGtDQUNmUyxJQUFJLENBQUMsU0FBVUMsUUFBUTtnQkFDdEJSLFdBQVdRLFNBQVNDLElBQUk7WUFDMUIsR0FDQ0MsS0FBSyxDQUFDLFNBQVVULEtBQUs7Z0JBQ3BCVSxRQUFRQyxHQUFHLENBQUNYO2dCQUNaQyxTQUFTO1lBQ1g7UUFDSjtRQUNBRztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1RLGVBQWU7UUFDbkIsZUFBZVI7WUFDYixNQUFNUCxpREFDQSxDQUFXLGlDQUF1QyxPQUFOSyxRQUMvQ0ksSUFBSSxDQUFDLFNBQVVDLFFBQVE7Z0JBQ3RCUixXQUFXUSxTQUFTQyxJQUFJO1lBQzFCLEdBQ0NDLEtBQUssQ0FBQyxTQUFVVCxLQUFLO2dCQUNwQlUsUUFBUUMsR0FBRyxDQUFDWDtnQkFDWkMsU0FBUztZQUNYO1lBQ0ZFLFNBQVM7UUFDWDtRQUNBQztJQUNGO0lBRUEsTUFBTVMsWUFBWTtRQUNoQixlQUFlVDtZQUNiLE1BQU1QLGlEQUNBLENBQVksa0NBQ2ZTLElBQUksQ0FBQyxTQUFVQyxRQUFRO2dCQUN0QlIsV0FBV1EsU0FBU0MsSUFBSTtZQUMxQixHQUNDQyxLQUFLLENBQUMsU0FBVVQsS0FBSztnQkFDcEJVLFFBQVFDLEdBQUcsQ0FBQ1g7Z0JBQ1pDLFNBQVM7WUFDWDtRQUNKO1FBQ0FHO1FBQ0EsTUFBTVUsZUFBZWhCLFFBQVFpQixNQUFNLENBQ2pDLENBQUNDLFNBQVdBLE9BQU9DLEtBQUssS0FBSztRQUUvQkM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQy9CLHVEQUFTQTtZQUFDZ0MsV0FBVztZQUFJQyxNQUFLOzs4QkFDN0IsOERBQUM5QixvREFBTUE7b0JBQUMrQixLQUFLOztzQ0FDWCw4REFBQ3BDLHFEQUFPQTs0QkFBQ3FDLE1BQUs7c0NBQUs7Ozs7OztzQ0FHbkIsOERBQUNsQyxvREFBTUE7OzhDQUNMLDhEQUFDQyxtREFBS0E7b0NBQ0prQyxPQUFPdEI7b0NBQ1B1QixVQUFVLENBQUNDLElBQU12QixTQUFTdUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUN4Q0ksR0FBRTtvQ0FDRkMsUUFBUTtvQ0FDUkMsYUFBWTs7Ozs7OzhDQUVkLDhEQUFDM0Msb0RBQU1BO29DQUFDNEMsU0FBU25COzhDQUFjOzs7Ozs7OENBQy9CLDhEQUFDbkIsc0RBQVFBO29DQUFDc0MsU0FBU2xCOzs7Ozs7Ozs7Ozs7c0NBRXJCLDhEQUFDM0IscURBQU9BOzRCQUFDcUMsTUFBSztzQ0FBSzs7Ozs7Ozs7Ozs7OzhCQUlyQiw4REFBQy9CLGlEQUFHQTtvQkFDRndDLFNBQVE7b0JBQ1JDLHFCQUFvQjtvQkFDcEJYLEtBQUs7b0JBQ0xGLFdBQVU7OEJBRVR0QixRQUFRb0MsR0FBRyxDQUFDLENBQUNsQixRQUFRbUIsc0JBQ3BCLDhEQUFDdkMsOERBQVVBOzRCQUNUd0MsVUFBVXBCLE9BQU9xQixHQUFHOzRCQUNwQkMsT0FBT3RCLE9BQU9zQixLQUFLOzRCQUNuQkMsTUFBTXZCLE9BQU91QixJQUFJOzRCQUNqQkMsY0FBY3hCLE9BQU93QixZQUFZOzRCQUNqQ0MsUUFBUXpCLE9BQU95QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25DO0dBaEd3QjNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZWNpcGVzLnRzeD81ZDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENlbnRlcixcbiAgSGVhZGluZyxcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIEhTdGFjayxcbiAgSW5wdXQsXG4gIFZTdGFjayxcbiAgQm94LFxuICBmaWx0ZXIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBsb2FkUmVjaXBlcyB9IGZyb20gXCIuL2FwaS9sb2FkUmVjaXBlc1wiO1xuaW1wb3J0IHsgUmVjaXBlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcmVzcG9uc2VzXCI7XG5pbXBvcnQgUmVjaXBlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWNpcGVDYXJkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY2lwZXMoKSB7XG4gIGNvbnN0IFtyZWNpcGVzLCBzZXRSZWNpcGVzXSA9IHVzZVN0YXRlPFJlY2lwZVtdPihbXSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldDxSZWNpcGVbXT4oYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWNpcGVzL2ApXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHNldFJlY2lwZXMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgc2V0RXJyb3IoXCJFcnJvciBsb2FkaW5nIHJlY2lwZXMuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldDxSZWNpcGVbXT4oYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWNpcGVzLyR7cXVlcnl9YClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgc2V0UmVjaXBlcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICBzZXRFcnJvcihcIkVycm9yIGxvYWRpbmcgcmVjaXBlcy5cIik7XG4gICAgICAgIH0pO1xuICAgICAgc2V0UXVlcnkoXCJcIik7XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dMaWtlZCA9ICgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0PFJlY2lwZVtdPihgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlY2lwZXMvYClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgc2V0UmVjaXBlcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICBzZXRFcnJvcihcIkVycm9yIGxvYWRpbmcgcmVjaXBlcy5cIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSByZWNpcGVzLmZpbHRlcihcbiAgICAgIChyZWNpcGUpID0+IHJlY2lwZS5saWtlZCA9PT0gdHJ1ZVxuICAgICk7XG4gICAgc2V0XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvbnRhaW5lciBtYXJnaW5Ub3A9ezEwfSBtYXhXPVwiY29udGFpbmVyLmxnXCI+XG4gICAgICAgIDxWU3RhY2sgZ2FwPXszfT5cbiAgICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIj5cbiAgICAgICAgICAgIExvb2sgdXAgcmVjaXBlcyB0byB5b3VyIGZhdm9yaXRlIGRpc2hlcyBieSBzZWFyY2hpbmcgYmVsb3cuXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdz1cIjUwMHB4XCJcbiAgICAgICAgICAgICAgYm9yZGVyPXtcIjJweCBzb2xpZCBsaWdodGdyZXlcIn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeDogdGFjb3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDxTdGFySWNvbiBvbkNsaWNrPXtzaG93TGlrZWR9IC8+XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICBUbyByYXRlIGEgcmVjaXBlLCBjbGljayBvbiB0aGUgY3VycmVudCByYXRpbmcuXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGRpc3BsYXk9XCJncmlkXCJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKVwiXG4gICAgICAgICAgZ2FwPXs0fVxuICAgICAgICAgIG1hcmdpblRvcD1cIjQwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAge3JlY2lwZXMubWFwKChyZWNpcGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UmVjaXBlQ2FyZFxuICAgICAgICAgICAgICByZWNpcGVJRD17cmVjaXBlLl9pZH1cbiAgICAgICAgICAgICAgaW1hZ2U9e3JlY2lwZS5pbWFnZX1cbiAgICAgICAgICAgICAgbWVhbD17cmVjaXBlLm1lYWx9XG4gICAgICAgICAgICAgIGluc3RydWN0aW9ucz17cmVjaXBlLmluc3RydWN0aW9uc31cbiAgICAgICAgICAgICAgcmF0aW5nPXtyZWNpcGUucmF0aW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiSFN0YWNrIiwiSW5wdXQiLCJWU3RhY2siLCJCb3giLCJTdGFySWNvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVjaXBlQ2FyZCIsImF4aW9zIiwicmVjaXBlcyIsInNldFJlY2lwZXMiLCJlcnJvciIsInNldEVycm9yIiwicXVlcnkiLCJzZXRRdWVyeSIsImZldGNoRGF0YSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJzaG93TGlrZWQiLCJmaWx0ZXJlZERhdGEiLCJmaWx0ZXIiLCJyZWNpcGUiLCJsaWtlZCIsInNldCIsImRpdiIsIm1hcmdpblRvcCIsIm1heFciLCJnYXAiLCJzaXplIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ3IiwiYm9yZGVyIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXAiLCJpbmRleCIsInJlY2lwZUlEIiwiX2lkIiwiaW1hZ2UiLCJtZWFsIiwiaW5zdHJ1Y3Rpb25zIiwicmF0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/recipes.tsx\n"));

/***/ })

});