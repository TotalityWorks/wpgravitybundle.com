"use strict";
exports.id = "component---src-pages-404-tsx";
exports.ids = ["component---src-pages-404-tsx"];
exports.modules = {

/***/ "./src/components/Layout/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Footer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menus_FooterMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menus/FooterMenu */ "./src/components/Layout/Menus/FooterMenu.tsx");


const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    style: {
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Menus_FooterMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Layout/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Header.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menus_HeaderMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menus/HeaderMenu */ "./src/components/Layout/Menus/HeaderMenu.tsx");


const Header = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
  style: {
    margin: `0 auto`,
    padding: `var(--space-4) var(--size-gutter)`
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Menus_HeaderMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Seo */ "./src/components/Seo.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Layout/Header.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/components/Layout/Footer.tsx");




const Layout = ({
  children,
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Seo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Layout/Menus/FooterMenu.tsx":
/*!****************************************************!*\
  !*** ./src/components/Layout/Menus/FooterMenu.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FooterMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useMenu */ "./src/hooks/useMenu.ts");



function FooterMenu() {
  const menuItems = (0,_hooks_useMenu__WEBPACK_IMPORTED_MODULE_2__["default"])({
    slug: "footer-menu"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, menuItems && menuItems.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: item.connectedNode.node.uri,
      style: {
        marginRight: "15px"
      }
    }, item.label);
  }));
}

/***/ }),

/***/ "./src/components/Layout/Menus/HeaderMenu.tsx":
/*!****************************************************!*\
  !*** ./src/components/Layout/Menus/HeaderMenu.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useMenu */ "./src/hooks/useMenu.ts");



function HeaderMenu() {
  const menuItems = (0,_hooks_useMenu__WEBPACK_IMPORTED_MODULE_2__["default"])({
    slug: "header-menu"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, menuItems && menuItems.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: item.connectedNode.node.uri,
      style: {
        marginRight: "15px"
      }
    }, item.label);
  }));
}

/***/ }),

/***/ "./src/components/Seo.tsx":
/*!********************************!*\
  !*** ./src/components/Seo.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2546054500_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2546054500.json */ "./public/page-data/sq/d/2546054500.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");



function Seo(props) {
  var _allWp$nodes$, _allWp$nodes$$general, _allWp$nodes$2, _allWp$nodes$2$genera;
  const {
    description,
    lang,
    meta,
    title
  } = props;
  const {
    allWp
  } = _public_page_data_sq_d_2546054500_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || (allWp === null || allWp === void 0 ? void 0 : (_allWp$nodes$ = allWp.nodes[0]) === null || _allWp$nodes$ === void 0 ? void 0 : (_allWp$nodes$$general = _allWp$nodes$.generalSettings) === null || _allWp$nodes$$general === void 0 ? void 0 : _allWp$nodes$$general.description);
  const defaultTitle = allWp === null || allWp === void 0 ? void 0 : (_allWp$nodes$2 = allWp.nodes[0]) === null || _allWp$nodes$2 === void 0 ? void 0 : (_allWp$nodes$2$genera = _allWp$nodes$2.generalSettings) === null || _allWp$nodes$2$genera === void 0 ? void 0 : _allWp$nodes$2$genera.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    htmlAttributes: {
      lang
    },
    title: title,
    titleTemplate: `%s | ${defaultTitle}`,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    },
    // {
    //   name: `twitter:creator`,
    //   content: site.siteMetadata?.author || ``,
    // },
    {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
}
Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/hooks/useMenu.ts":
/*!******************************!*\
  !*** ./src/hooks/useMenu.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_860666034_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/860666034.json */ "./public/page-data/sq/d/860666034.json");

const useMenu = ({
  location,
  slug
}) => {
  const {
    allWpMenu: {
      nodes
    }
  } = _public_page_data_sq_d_860666034_json__WEBPACK_IMPORTED_MODULE_0__.data;
  if (location) {
    var _menu$menuItems;
    const menu = nodes && nodes.find(node => node.locations.includes(location));
    return menu === null || menu === void 0 ? void 0 : (_menu$menuItems = menu.menuItems) === null || _menu$menuItems === void 0 ? void 0 : _menu$menuItems.nodes;
  }
  if (slug) {
    var _menu$menuItems2;
    const menu = nodes.find(node => node.slug === slug);
    return menu === null || menu === void 0 ? void 0 : (_menu$menuItems2 = menu.menuItems) === null || _menu$menuItems2 === void 0 ? void 0 : _menu$menuItems2.nodes;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMenu);

/***/ }),

/***/ "./src/pages/404.tsx?export=default":
/*!******************************************!*\
  !*** ./src/pages/404.tsx?export=default ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ "./src/components/Layout/Layout.tsx");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Seo */ "./src/components/Seo.tsx");



const NotFoundPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "404: Not found"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "404: Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You just hit a route that doesn't exist... the sadness."));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ }),

/***/ "./public/page-data/sq/d/2546054500.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2546054500.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"allWp":{"nodes":[{"generalSettings":{"title":"WPGravityBundle","description":"Forms Don&#039;t Have To Be A Hassle"}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/860666034.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/860666034.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"allWpMenu":{"nodes":[]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-tsx.js.map