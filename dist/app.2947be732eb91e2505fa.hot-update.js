self["webpackHotUpdatestart0"]("app",{

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _views_pages_soal1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/pages/soal1 */ "./src/scripts/views/pages/soal1.js");
/* harmony import */ var _views_pages_soal1__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_views_pages_soal1__WEBPACK_IMPORTED_MODULE_8__);









// eslint-disable-next-line no-unused-vars
const app = new _views_app__WEBPACK_IMPORTED_MODULE_6__["default"]();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});




// eslint-disable-next-line no-unused-vars
function scrollToSection2() {
  // eslint-disable-next-line no-undef
  $('html, body').animate(
    {
      // eslint-disable-next-line no-undef
      scrollTop: $('#section2').offset().top,
    },
    'slow',
  );
}


/***/ }),

/***/ "./src/scripts/routes/routes.js":
/*!**************************************!*\
  !*** ./src/scripts/routes/routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_pages_about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pages/about-page */ "./src/scripts/views/pages/about-page.js");
/* harmony import */ var _views_pages_consul_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/pages/consul-page */ "./src/scripts/views/pages/consul-page.js");
/* harmony import */ var _views_pages_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/pages/home-page */ "./src/scripts/views/pages/home-page.js");
/* harmony import */ var _views_pages_test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/pages/test-page */ "./src/scripts/views/pages/test-page.js");
/* harmony import */ var _views_pages_mulai_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/pages/mulai-page */ "./src/scripts/views/pages/mulai-page.js");
/* harmony import */ var _views_pages_soal1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/pages/soal1 */ "./src/scripts/views/pages/soal1.js");
/* harmony import */ var _views_pages_soal1__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_views_pages_soal1__WEBPACK_IMPORTED_MODULE_5__);







const routes = {
  '/': _views_pages_home_page__WEBPACK_IMPORTED_MODULE_2__["default"],
  '/test': _views_pages_test_page__WEBPACK_IMPORTED_MODULE_3__["default"],
  '/consul': _views_pages_consul_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/about': _views_pages_about_page__WEBPACK_IMPORTED_MODULE_0__["default"],
  '/mulai': _views_pages_mulai_page__WEBPACK_IMPORTED_MODULE_4__["default"],
  '/soal1': (_views_pages_soal1__WEBPACK_IMPORTED_MODULE_5___default()),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ "./src/scripts/views/pages/soal1.js":
/*!******************************************!*\
  !*** ./src/scripts/views/pages/soal1.js ***!
  \******************************************/
/***/ (() => {

    document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk mengambil data pertanyaan dari file JSON
    function fetchQuestionData(questionNumber) {
      return fetch('public/data/quis.json')
        .then(response => response.json())
        .then(data => {
          // Set pertanyaan pada elemen HTML
          document.getElementById('quizNumber').textContent = 'Pertanyaan ' + questionNumber + '/10';
          document.getElementById('quizQuestion').textContent = data[questionNumber - 1].soalquiz; // Check for the correct property name
        })
        .catch(error => console.error('Error fetching quiz data:', error));
    }

    // Load pertanyaan pertama
    fetchQuestionData(1);


  });






/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a68d4c059579a74377e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjI5NDdiZTczMmViOTFlMjUwNWZhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRDtBQUNNO0FBQ047QUFDQztBQUNDO0FBQ0E7QUFDZTtBQUNOO0FBQ3ZDO0FBQ0EsZ0JBQWdCLGtEQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakM4QztBQUNFO0FBQ0o7QUFDQTtBQUNFO0FBQ0w7QUFDekM7QUFDQTtBQUNBLE9BQU8sOERBQUk7QUFDWCxXQUFXLDhEQUFJO0FBQ2YsYUFBYSxnRUFBTTtBQUNuQixZQUFZLCtEQUFLO0FBQ2pCLFlBQVksK0RBQUs7QUFDakIsWUFBWSwyREFBSztBQUNqQjtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7OztBQ2hCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3JCQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL3JvdXRlcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvc29hbDEuanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcXVpcy5jc3MnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L25hdi1iYXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L2Zvb3QtYmFyJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXdzL2FwcCc7XHJcbmltcG9ydCBNdWxhaSBmcm9tICcuL3ZpZXdzL3BhZ2VzL211bGFpLXBhZ2UnO1xyXG5pbXBvcnQgU29hMSBmcm9tICcuL3ZpZXdzL3BhZ2VzL3NvYWwxJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gIGFwcC5yZW5kZXJQYWdlKCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgYXBwLnJlbmRlclBhZ2UoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuZnVuY3Rpb24gc2Nyb2xsVG9TZWN0aW9uMigpIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZShcclxuICAgIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICAgIHNjcm9sbFRvcDogJCgnI3NlY3Rpb24yJykub2Zmc2V0KCkudG9wLFxyXG4gICAgfSxcclxuICAgICdzbG93JyxcclxuICApO1xyXG59XHJcbiIsImltcG9ydCBBYm91dCBmcm9tICcuLi92aWV3cy9wYWdlcy9hYm91dC1wYWdlJztcclxuaW1wb3J0IENvbnN1bCBmcm9tICcuLi92aWV3cy9wYWdlcy9jb25zdWwtcGFnZSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3ZpZXdzL3BhZ2VzL2hvbWUtcGFnZSc7XHJcbmltcG9ydCBUZXN0IGZyb20gJy4uL3ZpZXdzL3BhZ2VzL3Rlc3QtcGFnZSc7XHJcbmltcG9ydCBNdWxhaSBmcm9tICcuLi92aWV3cy9wYWdlcy9tdWxhaS1wYWdlJztcclxuaW1wb3J0IFNvYWwxIGZyb20gJy4uL3ZpZXdzL3BhZ2VzL3NvYWwxJztcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuICAnLyc6IEhvbWUsXHJcbiAgJy90ZXN0JzogVGVzdCxcclxuICAnL2NvbnN1bCc6IENvbnN1bCxcclxuICAnL2Fib3V0JzogQWJvdXQsXHJcbiAgJy9tdWxhaSc6IE11bGFpLFxyXG4gICcvc29hbDEnOiBTb2FsMSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEZ1bmdzaSB1bnR1ayBtZW5nYW1iaWwgZGF0YSBwZXJ0YW55YWFuIGRhcmkgZmlsZSBKU09OXHJcbiAgICBmdW5jdGlvbiBmZXRjaFF1ZXN0aW9uRGF0YShxdWVzdGlvbk51bWJlcikge1xyXG4gICAgICByZXR1cm4gZmV0Y2goJ3B1YmxpYy9kYXRhL3F1aXMuanNvbicpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgLy8gU2V0IHBlcnRhbnlhYW4gcGFkYSBlbGVtZW4gSFRNTFxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpOdW1iZXInKS50ZXh0Q29udGVudCA9ICdQZXJ0YW55YWFuICcgKyBxdWVzdGlvbk51bWJlciArICcvMTAnO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpRdWVzdGlvbicpLnRleHRDb250ZW50ID0gZGF0YVtxdWVzdGlvbk51bWJlciAtIDFdLnNvYWxxdWl6OyAvLyBDaGVjayBmb3IgdGhlIGNvcnJlY3QgcHJvcGVydHkgbmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHF1aXogZGF0YTonLCBlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgcGVydGFueWFhbiBwZXJ0YW1hXHJcbiAgICBmZXRjaFF1ZXN0aW9uRGF0YSgxKTtcclxuXHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTY4ZDRjMDU5NTc5YTc0Mzc3ZTRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=