webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Nav.jsx":
/*!********************************!*\
  !*** ./src/components/Nav.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_SupervisedUserCircleSharp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/SupervisedUserCircleSharp */ "./node_modules/@material-ui/icons/SupervisedUserCircleSharp.js");
/* harmony import */ var _material_ui_icons_SupervisedUserCircleSharp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SupervisedUserCircleSharp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_PostAdd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/PostAdd */ "./node_modules/@material-ui/icons/PostAdd.js");
/* harmony import */ var _material_ui_icons_PostAdd__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PostAdd__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/List */ "./node_modules/@material-ui/icons/List.js");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_BusinessCenter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/BusinessCenter */ "./node_modules/@material-ui/icons/BusinessCenter.js");
/* harmony import */ var _material_ui_icons_BusinessCenter__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BusinessCenter__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _lib_api_users__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/api/users */ "./src/lib/api/users.jsx");
var _jsxFileName = "/home/dev/d3/next/nextvince/src/components/Nav.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




















var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  nav: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: ".5rem",
    margin: 0,
    "@media (max-width:480px)": {
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      transition: "all .25s linear"
    }
  },
  navlink: {
    cursor: "pointer",
    display: "block"
  },
  active: {
    borderBottom: "2px solid red"
  },
  menuButton: {
    width: "100%",
    outline: "none",
    display: "none",
    "@media (max-width:480px)": {
      display: "block"
    }
  }
});

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteError = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

var NavBar = function NavBar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var classes = useStyles();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      pathname = _useRouter.pathname;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isMobile = _useState2[0],
      setMobile = _useState2[1];

  var toggle = function toggle() {
    setIsOpen(!isOpen);
  };

  var handleLogout = function handleLogout() {
    Object(_lib_api_users__WEBPACK_IMPORTED_MODULE_17__["removeAuth"])();
    location.reload();
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AppBar"], {
    color: "transparent",
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    edge: "end",
    color: "inherit",
    "aria-label": "open drawer",
    size: "medium",
    onClick: toggle,
    className: classes.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, isOpen ? __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }) : __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }))), __jsx("div", {
    className: classes.nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    color: "secondary",
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Mailtracker"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    className: pathname === "/" ? classes.active : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: pathname === "/posts" ? classes.active : "",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })), "Posts")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    className: pathname === "/users" ? classes.active : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_material_ui_icons_SupervisedUserCircleSharp__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })), "Users")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    className: pathname === "/add-departments" ? classes.active : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/add-departments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_material_ui_icons_BusinessCenter__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })), "Departments"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    className: pathname === "/issues" ? classes.active : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/issues",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  })), "Issues")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "secondary",
    variant: "contained",
    size: "small",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/add-post");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Add post")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    color: "secondary",
    size: "small",
    onClick: handleLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  })), "log out")));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);
reactstrap__WEBPACK_IMPORTED_MODULE_15__["Navbar"].propTypes = {
  light: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  role: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  expand: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),
  tag: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]) // pass in custom element to use

};
reactstrap__WEBPACK_IMPORTED_MODULE_15__["NavbarBrand"].propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]) // pass in custom element to use

};

var MobileMenu = function MobileMenu() {
  return __jsx("div", {
    className: classes.navbarMobileTop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    edge: "end",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer",
    size: "medium",
    onClick: handleMenuIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, isOpen ? __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }) : __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }))), isOpen ? __jsx("div", {
    className: classes.nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: pathname === "/" ? classes.active : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["NavLink"], {
    className: classes.navlink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: pathname === "/posts" ? classes.active : "",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["NavLink"], {
    className: classes.navlink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  })), "Posts"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: pathname === "/users" ? classes.active : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["NavLink"], {
    className: classes.navlink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx(_material_ui_icons_SupervisedUserCircleSharp__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  })), "Users"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: pathname === "/add-departments" ? classes.active : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/add-departments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["NavLink"], {
    className: classes.navlink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, __jsx(_material_ui_icons_BusinessCenter__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  })), "Departments"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: pathname === "/issues" ? classes.active : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/issues",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["NavLink"], {
    className: classes.navlink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  })), "Issues"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "secondary",
    variant: "contained",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/add-post");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "Add post")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/issues",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["NavLink"], {
    className: classes.navlink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    color: "secondary",
    onClick: handleLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  })), "log out")))) : null);
};

/***/ })

})
//# sourceMappingURL=index.js.87d8f4c9af4a67c57d3f.hot-update.js.map