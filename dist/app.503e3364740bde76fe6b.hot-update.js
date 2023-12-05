"use strict";
self["webpackHotUpdatestart0"]("app",{

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/responsive.css */ "./src/styles/responsive.css");
/* harmony import */ var _styles_quis_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/quis.css */ "./src/styles/quis.css");
/* harmony import */ var _component_nav_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/nav-bar */ "./src/scripts/component/nav-bar.js");
/* harmony import */ var _component_nav_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_component_nav_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_foot_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/foot-bar */ "./src/scripts/component/foot-bar.js");
/* harmony import */ var _component_foot_bar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_component_foot_bar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/app */ "./src/scripts/views/app.js");
/* harmony import */ var _views_pages_mulai_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/pages/mulai-page */ "./src/scripts/views/pages/mulai-page.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/pages/soal1'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());









// eslint-disable-next-line no-unused-vars
var app = new _views_app__WEBPACK_IMPORTED_MODULE_6__["default"]();
window.addEventListener('hashchange', function () {
  app.renderPage();
});
window.addEventListener('load', function () {
  app.renderPage();
});

/***/ }),

/***/ "./src/scripts/routes/routes.js":
/*!**************************************!*\
  !*** ./src/scripts/routes/routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_pages_about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pages/about-page */ "./src/scripts/views/pages/about-page.js");
/* harmony import */ var _views_pages_consul_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/pages/consul-page */ "./src/scripts/views/pages/consul-page.js");
/* harmony import */ var _views_pages_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/pages/home-page */ "./src/scripts/views/pages/home-page.js");
/* harmony import */ var _views_pages_test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/pages/test-page */ "./src/scripts/views/pages/test-page.js");
/* harmony import */ var _views_pages_mulai_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/pages/mulai-page */ "./src/scripts/views/pages/mulai-page.js");
/* harmony import */ var _views_pages_back__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/pages/back */ "./src/scripts/views/pages/back.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/pages/soal1'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/pages/soal2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/pages/soal3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/pages/soal4'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/pages/soal5'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());











var routes = {
  '/': _views_pages_home_page__WEBPACK_IMPORTED_MODULE_2__["default"],
  '/test': _views_pages_test_page__WEBPACK_IMPORTED_MODULE_3__["default"],
  '/consul': _views_pages_consul_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/about': _views_pages_about_page__WEBPACK_IMPORTED_MODULE_0__["default"],
  '/mulai': _views_pages_mulai_page__WEBPACK_IMPORTED_MODULE_4__["default"],
  '/back': _views_pages_back__WEBPACK_IMPORTED_MODULE_5__["default"],
  '/soal1': Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/pages/soal1'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  '/soal2': Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/pages/soal2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  '/soal3': Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/pages/soal3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  '/soal4': Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/pages/soal4'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  '/soal5': Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/pages/soal5'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3175dd21114bc94ea807")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjUwM2UzMzY0NzQwYmRlNzZmZTZiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNEO0FBQ007QUFDTjtBQUNDO0FBQ0M7QUFDQTtBQUNlO0FBQ0w7QUFDeEM7QUFDQSxJQUFNRyxHQUFHLEdBQUcsSUFBSUgsa0RBQUcsQ0FBQyxDQUFDO0FBRXJCSSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFNO0VBQzFDRixHQUFHLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGRixNQUFNLENBQUNDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFNO0VBQ3BDRixHQUFHLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0FBRWxCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CNEM7QUFDRTtBQUNKO0FBQ0E7QUFDRTtBQUNQO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUd6QyxJQUFNVSxNQUFNLEdBQUc7RUFDYixHQUFHLEVBQUVQLDhEQUFJO0VBQ1QsT0FBTyxFQUFFQyw4REFBSTtFQUNiLFNBQVMsRUFBRUYsZ0VBQU07RUFDakIsUUFBUSxFQUFFRCwrREFBSztFQUNmLFFBQVEsRUFBRU4sK0RBQUs7RUFDZixPQUFPLEVBQUVVLHlEQUFJO0VBQ2IsUUFBUSxFQUFFVCxtSkFBSztFQUNmLFFBQVEsRUFBRVUsbUpBQUs7RUFDZixRQUFRLEVBQUVDLG1KQUFLO0VBQ2YsUUFBUSxFQUFFQyxtSkFBSztFQUNmLFFBQVEsRUFBRUMsbUpBQUtBO0FBQ2pCLENBQUM7QUFFRCxpRUFBZUMsTUFBTTs7Ozs7Ozs7VUMzQnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3NjcmlwdHMvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9zdGFydDAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcmVzcG9uc2l2ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9xdWlzLmNzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnQvbmF2LWJhcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnQvZm9vdC1iYXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vdmlld3MvYXBwJztcclxuaW1wb3J0IE11bGFpIGZyb20gJy4vdmlld3MvcGFnZXMvbXVsYWktcGFnZSc7XHJcbmltcG9ydCBTb2FsMSBmcm9tICcuL3ZpZXdzL3BhZ2VzL3NvYWwxJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gIGFwcC5yZW5kZXJQYWdlKCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgYXBwLnJlbmRlclBhZ2UoKTtcclxuICBcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgQWJvdXQgZnJvbSAnLi4vdmlld3MvcGFnZXMvYWJvdXQtcGFnZSc7XHJcbmltcG9ydCBDb25zdWwgZnJvbSAnLi4vdmlld3MvcGFnZXMvY29uc3VsLXBhZ2UnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi92aWV3cy9wYWdlcy9ob21lLXBhZ2UnO1xyXG5pbXBvcnQgVGVzdCBmcm9tICcuLi92aWV3cy9wYWdlcy90ZXN0LXBhZ2UnO1xyXG5pbXBvcnQgTXVsYWkgZnJvbSAnLi4vdmlld3MvcGFnZXMvbXVsYWktcGFnZSc7XHJcbmltcG9ydCBCYWNrIGZyb20gJy4uL3ZpZXdzL3BhZ2VzL2JhY2snO1xyXG5pbXBvcnQgU29hbDEgZnJvbSAnLi4vdmlld3MvcGFnZXMvc29hbDEnO1xyXG5pbXBvcnQgU29hbDIgZnJvbSAnLi4vdmlld3MvcGFnZXMvc29hbDInO1xyXG5pbXBvcnQgU29hbDMgZnJvbSAnLi4vdmlld3MvcGFnZXMvc29hbDMnO1xyXG5pbXBvcnQgU29hbDQgZnJvbSAnLi4vdmlld3MvcGFnZXMvc29hbDQnO1xyXG5pbXBvcnQgU29hbDUgZnJvbSAnLi4vdmlld3MvcGFnZXMvc29hbDUnO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuICAnLyc6IEhvbWUsXHJcbiAgJy90ZXN0JzogVGVzdCxcclxuICAnL2NvbnN1bCc6IENvbnN1bCxcclxuICAnL2Fib3V0JzogQWJvdXQsXHJcbiAgJy9tdWxhaSc6IE11bGFpLFxyXG4gICcvYmFjayc6IEJhY2ssXHJcbiAgJy9zb2FsMSc6IFNvYWwxLFxyXG4gICcvc29hbDInOiBTb2FsMixcclxuICAnL3NvYWwzJzogU29hbDMsXHJcbiAgJy9zb2FsNCc6IFNvYWw0LCBcclxuICAnL3NvYWw1JzogU29hbDUsIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMTc1ZGQyMTExNGJjOTRlYTgwN1wiKSJdLCJuYW1lcyI6WyJBcHAiLCJNdWxhaSIsIlNvYWwxIiwiYXBwIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlclBhZ2UiLCJBYm91dCIsIkNvbnN1bCIsIkhvbWUiLCJUZXN0IiwiQmFjayIsIlNvYWwyIiwiU29hbDMiLCJTb2FsNCIsIlNvYWw1Iiwicm91dGVzIl0sInNvdXJjZVJvb3QiOiIifQ==