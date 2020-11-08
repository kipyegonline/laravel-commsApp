webpackHotUpdate_N_E("pages/posts",{

/***/ "./src/pages/posts.tsx":
/*!*****************************!*\
  !*** ./src/pages/posts.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"./node_modules/@material-ui/lab/esm/Alert/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _redux_posts_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/posts/actions */ \"./src/redux/posts/actions.jsx\");\n/* harmony import */ var _redux_usersReducer_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/usersReducer/actions */ \"./src/redux/usersReducer/actions.jsx\");\n/* harmony import */ var _redux_Issues_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/Issues/actions */ \"./src/redux/Issues/actions.jsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.jsx\");\n/* harmony import */ var _components_posts_postTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/posts/postTable */ \"./src/components/posts/postTable.jsx\");\n\n\nvar _jsxFileName = \"/home/dev/d3/next/nextvince/src/pages/posts.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n// /* eslint-disable*/\n\n\n\n\n\n\n\n\n\n\n\n//import { getLocal, handleLocalStorage } from \"../components/helpers\";\nfunction Posts() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"\"),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      errormsg = _React$useState2[0],\n      setError = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      loading = _React$useState4[0],\n      setLoading = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"\"),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState5, 2),\n      issue = _React$useState6[0],\n      setIssue = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"\"),\n      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState7, 2),\n      user = _React$useState8[0],\n      setUser = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState9, 2),\n      current = _React$useState10[0],\n      setCurrent = _React$useState10[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var fetchTimer; // mock auth\n\n  var _uuid$userdept = {\n    uuid: 20,\n    userdept: 5\n  },\n      uuid = _uuid$userdept.uuid,\n      userdept = _uuid$userdept.userdept; // pull data from redux store\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return {\n      posts: state.posts.posts,\n      issues: state.issues.deptIssues,\n      users: state.users.userdepts\n    };\n  }),\n      posts = _useSelector.posts,\n      issues = _useSelector.issues,\n      users = _useSelector.users; // fetch  posts for currently logged in user\n\n\n  var fetchPosts = function fetchPosts(id) {\n    setLoading(true);\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"/posts/\".concat(id)).then(function (res) {\n      if (!res.data.length || !Array.isArray(res.data)) throw new Error(\"No data found\");\n      dispatch(_redux_posts_actions__WEBPACK_IMPORTED_MODULE_6__[\"addPosts\"](res.data));\n    })[\"catch\"](function (error) {\n      setError(\"Something went wrong...\".concat(error.message));\n    })[\"finally\"](function () {\n      setLoading(false);\n    });\n  }; // for other event-based network requests\n\n\n  var fetchData = function fetchData(url, callback) {\n    setLoading(true);\n    clearTimeout(fetchTImer);\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url).then(function (res) {\n      if (!(res === null || res === void 0 ? void 0 : res.data.length) || !Array.isArray(res.data)) throw new Error(\"No data found\");\n      var data = res.data;\n      dispatch(callback(data));\n    })[\"catch\"](function (error) {\n      setError(\"Error: \" + error.message);\n      fetchTimer = setTimeout(function () {\n        errormsg.length && fetchPosts(uuid);\n        setError(\"\"); // get everything if no search results were found\n\n        console.log(\"callbaak\", errormsg.length);\n      }, 5000);\n    })[\"finally\"](function () {\n      setLoading(false);\n    });\n  }; // fetch dept users affiliated with logged in user\n\n\n  var fetchDeptUsers = function fetchDeptUsers(dept) {\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"/posts/deptusers/\".concat(dept, \"/\").concat(uuid)).then(function (res) {\n      if (!Array.isArray(res.data)) throw new Error(\"No data found\");\n      var data = res.data;\n      dispatch(_redux_usersReducer_actions__WEBPACK_IMPORTED_MODULE_7__[\"addUserdept\"](data));\n    })[\"catch\"](function (error) {\n      return console.error(\"fetch posts:\", error);\n    })[\"finally\"](function () {\n      return console.log(\"finally\");\n    });\n  }; // fetch issues belonging to currently logged in user\n\n\n  var fetchdeptIssues = function fetchdeptIssues(dept) {\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"/posts/issues/\".concat(dept, \"/\").concat(uuid)).then(function (res) {\n      if (!Array.isArray(res.data)) throw new Error(\"No data found\");\n      dispatch(_redux_Issues_actions__WEBPACK_IMPORTED_MODULE_8__[\"AddDeptissues\"](res.data));\n    })[\"catch\"](function (error) {\n      return console.error(\"fetch posts:\", error);\n    });\n  };\n  /** Component did something like mount or side effect, couldnt care less */\n\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    // return if the data is already there\n    if (!posts.length || !issues.length || !users.length) Promise.all([fetchPosts(uuid), fetchDeptUsers(userdept), fetchdeptIssues(userdept)]);\n    /* \n    //remove on prod\n    dispatch(postactions.addPosts(JSON.parse(localStorage.getItem(\"posts\"))));*/\n  }, []);\n  /* Events */\n  //pagination\n\n  var handleChange = function handleChange(e, p) {\n    return setCurrent(p + 1);\n  }; // when one of the buttons is clicked\n\n\n  var handleButtonGroup = function handleButtonGroup(id) {\n    var url = \"/posts/btngroup/\".concat(id, \"/\").concat(uuid);\n    fetchData(url, _redux_posts_actions__WEBPACK_IMPORTED_MODULE_6__[\"addPosts\"]);\n  }; // when an issue is selected\n\n\n  var handleSelectedIssues = function handleSelectedIssues(id) {\n    setIssue(id);\n    var url = \"/posts/fetchdeptIssues/\".concat(id, \"/\").concat(uuid);\n    fetchData(url, _redux_posts_actions__WEBPACK_IMPORTED_MODULE_6__[\"addPosts\"]);\n  }; //search box\n\n\n  var handleSearch = function handleSearch(value) {\n    var url = \"/posts/search/\".concat(value, \"/\").concat(uuid);\n    fetchData(url, _redux_posts_actions__WEBPACK_IMPORTED_MODULE_6__[\"addPosts\"]);\n  };\n\n  var handledate = function handledate(value) {\n    var url = \"/posts/fetchdates/\".concat(value, \"/\").concat(uuid);\n    fetchData(url, _redux_posts_actions__WEBPACK_IMPORTED_MODULE_6__[\"addPosts\"]);\n  }; // when the date is selected\n  //when a user is clicked\n\n\n  var handleSelectedUsers = function handleSelectedUsers(id) {\n    setUser(id);\n    var url = \"/posts/fetchdeptusers/\".concat(id, \"/\").concat(uuid);\n    fetchData(url, _redux_posts_actions__WEBPACK_IMPORTED_MODULE_6__[\"addPosts\"]);\n  }; // set blue ticks when someone views an issue\n\n\n  var handleBlueTicks = function handleBlueTicks(id) {\n    // dispatch to redux\n    dispatch(_redux_posts_actions__WEBPACK_IMPORTED_MODULE_6__[\"setTicks\"](id)); // send to server\n\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"/posts/setticks/\".concat(id, \"/\").concat(uuid)).then(function (res) {\n      return console.log(res.data);\n    })[\"catch\"](function (error) {\n      return console.log(\"ticks\", error);\n    });\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n    container: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 7\n    }\n  }, __jsx(_components_posts_postTable__WEBPACK_IMPORTED_MODULE_10__[\"ToolBar\"], {\n    sendGroup: handleButtonGroup,\n    issues: issues,\n    issue: issue,\n    setIssue: handleSelectedIssues,\n    users: users,\n    user: user,\n    getUser: handleSelectedUsers,\n    handleSearch: handleSearch,\n    getDate: handledate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Divider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 9\n    }\n  }), posts.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_posts_postTable__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    posts: posts,\n    setTicks: handleBlueTicks,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 13\n    }\n  })) : loading ? __jsx(\"div\", {\n    className: \"text-center mx-auto my-4 p-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"CircularProgress\"], {\n    size: \"3rem\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 13\n    }\n  })) : __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    severity: \"error\",\n    className: \"text-center my-1 mx-auto w-50 p-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 11\n    }\n  }, \" \", errormsg)));\n}\n\n_s(Posts, \"Dp1TUo18z66wS0i81qxboScXTmI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\n\nvar _c;\n\n$RefreshReg$(_c, \"Posts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3RzLnRzeD8zYzlmIl0sIm5hbWVzIjpbIlBvc3RzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImVycm9ybXNnIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzc3VlIiwic2V0SXNzdWUiLCJ1c2VyIiwic2V0VXNlciIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImZldGNoVGltZXIiLCJ1dWlkIiwidXNlcmRlcHQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdHMiLCJpc3N1ZXMiLCJkZXB0SXNzdWVzIiwidXNlcnMiLCJ1c2VyZGVwdHMiLCJmZXRjaFBvc3RzIiwiaWQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwibGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJwb3N0YWN0aW9ucyIsImVycm9yIiwibWVzc2FnZSIsImZldGNoRGF0YSIsInVybCIsImNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiZmV0Y2hUSW1lciIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hEZXB0VXNlcnMiLCJkZXB0IiwidXNlcmFjdGlvbnMiLCJmZXRjaGRlcHRJc3N1ZXMiLCJpc3N1ZWFjdGlvbnMiLCJ1c2VFZmZlY3QiLCJQcm9taXNlIiwiYWxsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInAiLCJoYW5kbGVCdXR0b25Hcm91cCIsImhhbmRsZVNlbGVjdGVkSXNzdWVzIiwiaGFuZGxlU2VhcmNoIiwidmFsdWUiLCJoYW5kbGVkYXRlIiwiaGFuZGxlU2VsZWN0ZWRVc2VycyIsImhhbmRsZUJsdWVUaWNrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtB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QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBa0IsUUFBSSxFQUFDLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURTLEdBS1QsTUFBQyw4REFBRDtBQUFPLFlBQVEsRUFBQyxPQUFoQjtBQUF3QixhQUFTLEVBQUMsbUNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxHQURILEVBRUdGLFFBRkgsQ0F2QkosQ0FERixDQURGO0FBaUNEOztHQXJMUUgsSztVQU1VYyx1RCxFQUtnQkksdUQ7OztLQVgxQmxCLEs7QUFzTE1BLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Bvc3RzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8qIGVzbGludC1kaXNhYmxlKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQWxlcnQgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgR3JpZCwgRGl2aWRlciwgQ2lyY3VsYXJQcm9ncmVzcywgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgKiBhcyBwb3N0YWN0aW9ucyBmcm9tIFwiLi4vcmVkdXgvcG9zdHMvYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgdXNlcmFjdGlvbnMgZnJvbSBcIi4uL3JlZHV4L3VzZXJzUmVkdWNlci9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBpc3N1ZWFjdGlvbnMgZnJvbSBcIi4uL3JlZHV4L0lzc3Vlcy9hY3Rpb25zXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBvc3RzVGFibGUsIHsgVG9vbEJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RzL3Bvc3RUYWJsZVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvUGFnaW5hdGlvblwiO1xuLy9pbXBvcnQgeyBnZXRMb2NhbCwgaGFuZGxlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBQb3N0cygpIHtcbiAgY29uc3QgW2Vycm9ybXNnLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNzdWUsIHNldElzc3VlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgbGV0IGZldGNoVGltZXI7XG4gIC8vIG1vY2sgYXV0aFxuICBjb25zdCB7IHV1aWQsIHVzZXJkZXB0IH0gPSB7IHV1aWQ6IDIwLCB1c2VyZGVwdDogNSB9O1xuICAvLyBwdWxsIGRhdGEgZnJvbSByZWR1eCBzdG9yZVxuICBjb25zdCB7IHBvc3RzLCBpc3N1ZXMsIHVzZXJzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gKHtcbiAgICBwb3N0czogc3RhdGUucG9zdHMucG9zdHMsXG4gICAgaXNzdWVzOiBzdGF0ZS5pc3N1ZXMuZGVwdElzc3VlcyxcbiAgICB1c2Vyczogc3RhdGUudXNlcnMudXNlcmRlcHRzLFxuICB9KSk7XG5cbiAgLy8gZmV0Y2ggIHBvc3RzIGZvciBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcblxuICBjb25zdCBmZXRjaFBvc3RzID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGAvcG9zdHMvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAoIXJlcy5kYXRhLmxlbmd0aCB8fCAhQXJyYXkuaXNBcnJheShyZXMuZGF0YSkpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZGF0YSBmb3VuZFwiKTtcbiAgICAgICAgZGlzcGF0Y2gocG9zdGFjdGlvbnMuYWRkUG9zdHMocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHNldEVycm9yKGBTb21ldGhpbmcgd2VudCB3cm9uZy4uLiR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH07XG4gIC8vIGZvciBvdGhlciBldmVudC1iYXNlZCBuZXR3b3JrIHJlcXVlc3RzXG4gIGNvbnN0IGZldGNoRGF0YSA9ICh1cmw6IHN0cmluZywgY2FsbGJhY2s6IDxUPihkYXRhOiBUKSA9PiB2b2lkKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjbGVhclRpbWVvdXQoZmV0Y2hUSW1lcik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAoIXJlcz8uZGF0YS5sZW5ndGggfHwgIUFycmF5LmlzQXJyYXkocmVzLmRhdGEpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGRhdGEgZm91bmRcIik7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICAgICAgICBkaXNwYXRjaChjYWxsYmFjayhkYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzZXRFcnJvcihcIkVycm9yOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuXG4gICAgICAgIGZldGNoVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBlcnJvcm1zZy5sZW5ndGggJiYgZmV0Y2hQb3N0cyh1dWlkKTtcbiAgICAgICAgICBzZXRFcnJvcihcIlwiKTtcbiAgICAgICAgICAvLyBnZXQgZXZlcnl0aGluZyBpZiBubyBzZWFyY2ggcmVzdWx0cyB3ZXJlIGZvdW5kXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsYmFha1wiLCBlcnJvcm1zZy5sZW5ndGgpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy8gZmV0Y2ggZGVwdCB1c2VycyBhZmZpbGlhdGVkIHdpdGggbG9nZ2VkIGluIHVzZXJcbiAgY29uc3QgZmV0Y2hEZXB0VXNlcnMgPSAoZGVwdDogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYC9wb3N0cy9kZXB0dXNlcnMvJHtkZXB0fS8ke3V1aWR9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlcy5kYXRhKSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gZGF0YSBmb3VuZFwiKTtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICAgIGRpc3BhdGNoKHVzZXJhY3Rpb25zLmFkZFVzZXJkZXB0KGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiZmV0Y2ggcG9zdHM6XCIsIGVycm9yKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IGNvbnNvbGUubG9nKFwiZmluYWxseVwiKSk7XG4gIH07XG5cbiAgLy8gZmV0Y2ggaXNzdWVzIGJlbG9uZ2luZyB0byBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcbiAgY29uc3QgZmV0Y2hkZXB0SXNzdWVzID0gKGRlcHQ6IG51bWJlcikgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGAvcG9zdHMvaXNzdWVzLyR7ZGVwdH0vJHt1dWlkfWApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXMuZGF0YSkpIHRocm93IG5ldyBFcnJvcihcIk5vIGRhdGEgZm91bmRcIik7XG4gICAgICAgIGRpc3BhdGNoKGlzc3VlYWN0aW9ucy5BZGREZXB0aXNzdWVzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcImZldGNoIHBvc3RzOlwiLCBlcnJvcikpO1xuICB9O1xuICAvKiogQ29tcG9uZW50IGRpZCBzb21ldGhpbmcgbGlrZSBtb3VudCBvciBzaWRlIGVmZmVjdCwgY291bGRudCBjYXJlIGxlc3MgKi9cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyByZXR1cm4gaWYgdGhlIGRhdGEgaXMgYWxyZWFkeSB0aGVyZVxuXG4gICAgaWYgKCFwb3N0cy5sZW5ndGggfHwgIWlzc3Vlcy5sZW5ndGggfHwgIXVzZXJzLmxlbmd0aClcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2hQb3N0cyh1dWlkKSxcbiAgICAgICAgZmV0Y2hEZXB0VXNlcnModXNlcmRlcHQpLFxuICAgICAgICBmZXRjaGRlcHRJc3N1ZXModXNlcmRlcHQpLFxuICAgICAgXSk7XG5cbiAgICAvKiBcbiAgICAvL3JlbW92ZSBvbiBwcm9kXG4gICAgZGlzcGF0Y2gocG9zdGFjdGlvbnMuYWRkUG9zdHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvc3RzXCIpKSkpOyovXG4gIH0sIFtdKTtcblxuICAvKiBFdmVudHMgKi9cbiAgLy9wYWdpbmF0aW9uXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChcbiAgICBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MRWxlbWVudCB8IHVua25vd24+LFxuICAgIHA6IG51bWJlclxuICApID0+IHNldEN1cnJlbnQocCArIDEpO1xuICAvLyB3aGVuIG9uZSBvZiB0aGUgYnV0dG9ucyBpcyBjbGlja2VkXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkdyb3VwID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgL3Bvc3RzL2J0bmdyb3VwLyR7aWR9LyR7dXVpZH1gO1xuICAgIGZldGNoRGF0YSh1cmwsIHBvc3RhY3Rpb25zLmFkZFBvc3RzKTtcbiAgfTtcbiAgLy8gd2hlbiBhbiBpc3N1ZSBpcyBzZWxlY3RlZFxuICBjb25zdCBoYW5kbGVTZWxlY3RlZElzc3VlcyA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0SXNzdWUoaWQpO1xuXG4gICAgY29uc3QgdXJsID0gYC9wb3N0cy9mZXRjaGRlcHRJc3N1ZXMvJHtpZH0vJHt1dWlkfWA7XG4gICAgZmV0Y2hEYXRhKHVybCwgcG9zdGFjdGlvbnMuYWRkUG9zdHMpO1xuICB9O1xuICAvL3NlYXJjaCBib3hcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgL3Bvc3RzL3NlYXJjaC8ke3ZhbHVlfS8ke3V1aWR9YDtcbiAgICBmZXRjaERhdGEodXJsLCBwb3N0YWN0aW9ucy5hZGRQb3N0cyk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZWRhdGUgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVybCA9IGAvcG9zdHMvZmV0Y2hkYXRlcy8ke3ZhbHVlfS8ke3V1aWR9YDtcbiAgICBmZXRjaERhdGEodXJsLCBwb3N0YWN0aW9ucy5hZGRQb3N0cyk7XG4gIH07XG4gIC8vIHdoZW4gdGhlIGRhdGUgaXMgc2VsZWN0ZWRcbiAgLy93aGVuIGEgdXNlciBpcyBjbGlja2VkXG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ZWRVc2VycyA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0VXNlcihpZCk7XG5cbiAgICBjb25zdCB1cmwgPSBgL3Bvc3RzL2ZldGNoZGVwdHVzZXJzLyR7aWR9LyR7dXVpZH1gO1xuICAgIGZldGNoRGF0YSh1cmwsIHBvc3RhY3Rpb25zLmFkZFBvc3RzKTtcbiAgfTtcbiAgLy8gc2V0IGJsdWUgdGlja3Mgd2hlbiBzb21lb25lIHZpZXdzIGFuIGlzc3VlXG4gIGNvbnN0IGhhbmRsZUJsdWVUaWNrcyA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgLy8gZGlzcGF0Y2ggdG8gcmVkdXhcbiAgICBkaXNwYXRjaChwb3N0YWN0aW9ucy5zZXRUaWNrcyhpZCkpO1xuICAgIC8vIHNlbmQgdG8gc2VydmVyXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYC9wb3N0cy9zZXR0aWNrcy8ke2lkfS8ke3V1aWR9YClcbiAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcy5kYXRhKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKFwidGlja3NcIiwgZXJyb3IpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgIDxUb29sQmFyXG4gICAgICAgICAgc2VuZEdyb3VwPXtoYW5kbGVCdXR0b25Hcm91cH1cbiAgICAgICAgICBpc3N1ZXM9e2lzc3Vlc31cbiAgICAgICAgICBpc3N1ZT17aXNzdWV9XG4gICAgICAgICAgc2V0SXNzdWU9e2hhbmRsZVNlbGVjdGVkSXNzdWVzfVxuICAgICAgICAgIHVzZXJzPXt1c2Vyc31cbiAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgIGdldFVzZXI9e2hhbmRsZVNlbGVjdGVkVXNlcnN9XG4gICAgICAgICAgaGFuZGxlU2VhcmNoPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgICAgZ2V0RGF0ZT17aGFuZGxlZGF0ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICB7cG9zdHMubGVuZ3RoID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8UG9zdHNUYWJsZSBwb3N0cz17cG9zdHN9IHNldFRpY2tzPXtoYW5kbGVCbHVlVGlja3N9IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBsb2FkaW5nID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXgtYXV0byBteS00IHAtNFwiPlxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT1cIjNyZW1cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktMSBteC1hdXRvIHctNTAgcC0xXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICB7ZXJyb3Jtc2d9XG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts.tsx\n");

/***/ })

})