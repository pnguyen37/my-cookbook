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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ recipes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_RecipeCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RecipeCard */ \"./src/components/RecipeCard.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction recipes() {\n    _s();\n    const [recipes, setRecipes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function fetchData() {\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8080/recipes/\").then(function(response) {\n            setRecipes(response.data);\n        }).catch(function(error) {\n            console.log(error);\n            setError(\"Error loading recipes.\");\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const handleSubmit = ()=>{\n        async function searchData() {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8080/recipes/\".concat(query)).then(function(response) {\n                setRecipes(response.data);\n            }).catch(function(error) {\n                console.log(error);\n                setError(\"Error loading recipes.\");\n            });\n            setQuery(\"\");\n        }\n        rfilteData();\n    };\n    const showLiked = ()=>{\n        // async function fetchData() {\n        //   await axios\n        //     .get<Recipe[]>(`http://localhost:8080/recipes/`)\n        //     .then(function (response) {\n        //       setRecipes(response.data);\n        //     })\n        //     .catch(function (error) {\n        //       console.log(error);\n        //       setError(\"Error loading recipes.\");\n        //     });\n        // }\n        fetchData();\n        const filteredData = recipes.filter((recipe)=>recipe.liked === true);\n        setRecipes(filteredData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            marginTop: 10,\n            maxW: \"container.lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n                    gap: 3,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                            size: \"md\",\n                            children: \"Look up recipes to your favorite dishes by searching below.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                    value: query,\n                                    onChange: (e)=>setQuery(e.target.value),\n                                    w: \"500px\",\n                                    border: \"2px solid lightgrey\",\n                                    placeholder: \"Ex: tacos\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: handleSubmit,\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.StarIcon, {\n                                    onClick: showLiked\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                            size: \"sm\",\n                            children: \"To rate a recipe, click on the current rating.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(auto-fill, minmax(200px, 1fr))\",\n                    gap: 4,\n                    marginTop: \"40px\",\n                    children: recipes.map((recipe, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RecipeCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            recipeID: recipe._id,\n                            image: recipe.image,\n                            meal: recipe.meal,\n                            instructions: recipe.instructions,\n                            rating: recipe.rating\n                        }, void 0, false, {\n                            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paulinenguyen/Desktop/fsab_bootcamp/my-cookbook/frontend/src/pages/recipes.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(recipes, \"lVHgv4by4neqkmXTlPqVdepKA2I=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVjaXBlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVMEI7QUFDa0I7QUFDQTtBQUdNO0FBQ3hCO0FBRVgsU0FBU1k7O0lBQ3RCLE1BQU0sQ0FBQ0EsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQVM7SUFFM0MsZUFBZVU7UUFDYixNQUFNUCxpREFDQSxDQUFZLGtDQUNmUyxJQUFJLENBQUMsU0FBVUMsUUFBUTtZQUN0QlIsV0FBV1EsU0FBU0MsSUFBSTtRQUMxQixHQUNDQyxLQUFLLENBQUMsU0FBVVQsS0FBSztZQUNwQlUsUUFBUUMsR0FBRyxDQUFDWDtZQUNaQyxTQUFTO1FBQ1g7SUFDSjtJQUdBTixnREFBU0EsQ0FBQztRQUNSUztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1RLGVBQWU7UUFDbkIsZUFBZUM7WUFDYixNQUFNaEIsaURBQ0EsQ0FBVyxpQ0FBdUMsT0FBTkssUUFDL0NJLElBQUksQ0FBQyxTQUFVQyxRQUFRO2dCQUN0QlIsV0FBV1EsU0FBU0MsSUFBSTtZQUMxQixHQUNDQyxLQUFLLENBQUMsU0FBVVQsS0FBSztnQkFDcEJVLFFBQVFDLEdBQUcsQ0FBQ1g7Z0JBQ1pDLFNBQVM7WUFDWDtZQUNGRSxTQUFTO1FBQ1g7UUFDQVc7SUFDRjtJQUVBLE1BQU1DLFlBQVk7UUFDaEIsK0JBQStCO1FBQy9CLGdCQUFnQjtRQUNoQix1REFBdUQ7UUFDdkQsa0NBQWtDO1FBQ2xDLG1DQUFtQztRQUNuQyxTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLDRCQUE0QjtRQUM1Qiw0Q0FBNEM7UUFDNUMsVUFBVTtRQUNWLElBQUk7UUFDSlg7UUFDQSxNQUFNWSxlQUFlbEIsUUFBUW1CLE1BQU0sQ0FDakMsQ0FBQ0MsU0FBV0EsT0FBT0MsS0FBSyxLQUFLO1FBRS9CcEIsV0FBV2lCO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ0k7a0JBQ0MsNEVBQUNoQyx1REFBU0E7WUFBQ2lDLFdBQVc7WUFBSUMsTUFBSzs7OEJBQzdCLDhEQUFDL0Isb0RBQU1BO29CQUFDZ0MsS0FBSzs7c0NBQ1gsOERBQUNyQyxxREFBT0E7NEJBQUNzQyxNQUFLO3NDQUFLOzs7Ozs7c0NBR25CLDhEQUFDbkMsb0RBQU1BOzs4Q0FDTCw4REFBQ0MsbURBQUtBO29DQUNKbUMsT0FBT3ZCO29DQUNQd0IsVUFBVSxDQUFDQyxJQUFNeEIsU0FBU3dCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDeENJLEdBQUU7b0NBQ0ZDLFFBQVE7b0NBQ1JDLGFBQVk7Ozs7Ozs4Q0FFZCw4REFBQzVDLG9EQUFNQTtvQ0FBQzZDLFNBQVNwQjs4Q0FBYzs7Ozs7OzhDQUMvQiw4REFBQ25CLHNEQUFRQTtvQ0FBQ3VDLFNBQVNqQjs7Ozs7Ozs7Ozs7O3NDQUVyQiw4REFBQzdCLHFEQUFPQTs0QkFBQ3NDLE1BQUs7c0NBQUs7Ozs7Ozs7Ozs7Ozs4QkFJckIsOERBQUNoQyxpREFBR0E7b0JBQ0Z5QyxTQUFRO29CQUNSQyxxQkFBb0I7b0JBQ3BCWCxLQUFLO29CQUNMRixXQUFVOzhCQUVUdkIsUUFBUXFDLEdBQUcsQ0FBQyxDQUFDakIsUUFBUWtCLHNCQUNwQiw4REFBQ3hDLDhEQUFVQTs0QkFDVHlDLFVBQVVuQixPQUFPb0IsR0FBRzs0QkFDcEJDLE9BQU9yQixPQUFPcUIsS0FBSzs0QkFDbkJDLE1BQU10QixPQUFPc0IsSUFBSTs0QkFDakJDLGNBQWN2QixPQUFPdUIsWUFBWTs0QkFDakNDLFFBQVF4QixPQUFPd0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uQztHQWxHd0I1QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVjaXBlcy50c3g/NWQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDZW50ZXIsXG4gIEhlYWRpbmcsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBIU3RhY2ssXG4gIElucHV0LFxuICBWU3RhY2ssXG4gIEJveCxcbiAgZmlsdGVyLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbG9hZFJlY2lwZXMgfSBmcm9tIFwiLi9hcGkvbG9hZFJlY2lwZXNcIjtcbmltcG9ydCB7IFJlY2lwZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3Jlc3BvbnNlc1wiO1xuaW1wb3J0IFJlY2lwZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVjaXBlQ2FyZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWNpcGVzKCkge1xuICBjb25zdCBbcmVjaXBlcywgc2V0UmVjaXBlc10gPSB1c2VTdGF0ZTxSZWNpcGVbXT4oW10pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQ8UmVjaXBlW10+KGBodHRwOi8vbG9jYWxob3N0OjgwODAvcmVjaXBlcy9gKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHNldFJlY2lwZXMocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHNldEVycm9yKFwiRXJyb3IgbG9hZGluZyByZWNpcGVzLlwiKTtcbiAgICAgIH0pO1xuICB9XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaERhdGEoKSB7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0PFJlY2lwZVtdPihgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlY2lwZXMvJHtxdWVyeX1gKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBzZXRSZWNpcGVzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHNldEVycm9yKFwiRXJyb3IgbG9hZGluZyByZWNpcGVzLlwiKTtcbiAgICAgICAgfSk7XG4gICAgICBzZXRRdWVyeShcIlwiKTtcbiAgICB9XG4gICAgcmZpbHRlRGF0YSgpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dMaWtlZCA9ICgpID0+IHtcbiAgICAvLyBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgLy8gICBhd2FpdCBheGlvc1xuICAgIC8vICAgICAuZ2V0PFJlY2lwZVtdPihgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlY2lwZXMvYClcbiAgICAvLyAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLy8gICAgICAgc2V0UmVjaXBlcyhyZXNwb25zZS5kYXRhKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICBzZXRFcnJvcihcIkVycm9yIGxvYWRpbmcgcmVjaXBlcy5cIik7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSByZWNpcGVzLmZpbHRlcihcbiAgICAgIChyZWNpcGUpID0+IHJlY2lwZS5saWtlZCA9PT0gdHJ1ZVxuICAgICk7XG4gICAgc2V0UmVjaXBlcyhmaWx0ZXJlZERhdGEpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvbnRhaW5lciBtYXJnaW5Ub3A9ezEwfSBtYXhXPVwiY29udGFpbmVyLmxnXCI+XG4gICAgICAgIDxWU3RhY2sgZ2FwPXszfT5cbiAgICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIj5cbiAgICAgICAgICAgIExvb2sgdXAgcmVjaXBlcyB0byB5b3VyIGZhdm9yaXRlIGRpc2hlcyBieSBzZWFyY2hpbmcgYmVsb3cuXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdz1cIjUwMHB4XCJcbiAgICAgICAgICAgICAgYm9yZGVyPXtcIjJweCBzb2xpZCBsaWdodGdyZXlcIn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeDogdGFjb3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDxTdGFySWNvbiBvbkNsaWNrPXtzaG93TGlrZWR9IC8+XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICBUbyByYXRlIGEgcmVjaXBlLCBjbGljayBvbiB0aGUgY3VycmVudCByYXRpbmcuXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGRpc3BsYXk9XCJncmlkXCJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKVwiXG4gICAgICAgICAgZ2FwPXs0fVxuICAgICAgICAgIG1hcmdpblRvcD1cIjQwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAge3JlY2lwZXMubWFwKChyZWNpcGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UmVjaXBlQ2FyZFxuICAgICAgICAgICAgICByZWNpcGVJRD17cmVjaXBlLl9pZH1cbiAgICAgICAgICAgICAgaW1hZ2U9e3JlY2lwZS5pbWFnZX1cbiAgICAgICAgICAgICAgbWVhbD17cmVjaXBlLm1lYWx9XG4gICAgICAgICAgICAgIGluc3RydWN0aW9ucz17cmVjaXBlLmluc3RydWN0aW9uc31cbiAgICAgICAgICAgICAgcmF0aW5nPXtyZWNpcGUucmF0aW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiSFN0YWNrIiwiSW5wdXQiLCJWU3RhY2siLCJCb3giLCJTdGFySWNvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVjaXBlQ2FyZCIsImF4aW9zIiwicmVjaXBlcyIsInNldFJlY2lwZXMiLCJlcnJvciIsInNldEVycm9yIiwicXVlcnkiLCJzZXRRdWVyeSIsImZldGNoRGF0YSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJzZWFyY2hEYXRhIiwicmZpbHRlRGF0YSIsInNob3dMaWtlZCIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsInJlY2lwZSIsImxpa2VkIiwiZGl2IiwibWFyZ2luVG9wIiwibWF4VyIsImdhcCIsInNpemUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInciLCJib3JkZXIiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcCIsImluZGV4IiwicmVjaXBlSUQiLCJfaWQiLCJpbWFnZSIsIm1lYWwiLCJpbnN0cnVjdGlvbnMiLCJyYXRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/recipes.tsx\n"));

/***/ })

});