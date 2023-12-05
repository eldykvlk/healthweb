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
/* harmony import */ var _views_pages_soal1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/pages/soal1 */ "./src/scripts/views/pages/soal1.js");









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







const routes = {
  '/': _views_pages_home_page__WEBPACK_IMPORTED_MODULE_2__["default"],
  '/test': _views_pages_test_page__WEBPACK_IMPORTED_MODULE_3__["default"],
  '/consul': _views_pages_consul_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/about': _views_pages_about_page__WEBPACK_IMPORTED_MODULE_0__["default"],
  '/mulai': _views_pages_mulai_page__WEBPACK_IMPORTED_MODULE_4__["default"],
  '/soal1': _views_pages_soal1__WEBPACK_IMPORTED_MODULE_5__["default"],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ "./src/scripts/views/pages/soal1.js":
/*!******************************************!*\
  !*** ./src/scripts/views/pages/soal1.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

const Soal1 = {
  async render() {
    return `
      <div class="card p-4" id="cardmulai">
        <img id="gambarmulai" src="images/mulai.jpg">
        <h5 class="mb-4" id="labelmulai">Selamat datang! Klik tombol "Mulai" untuk memulai tes.</h5>
        <button class="btn btn-primary" id="btnmulai">Mulai</button>
      </div>
    `;
  },

  async afterRender() {
    // Ambil elemen button dan tambahkan event listener
    const btnMulai = document.getElementById('btnmulai');
    btnMulai.addEventListener('click', startQuiz);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mulai);





/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c40ddc7a1f2b7a7cd82f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmE2OGQ0YzA1OTU3OWE3NDM3N2U0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNEO0FBQ007QUFDTjtBQUNDO0FBQ0M7QUFDQTtBQUNlO0FBQ047QUFDdkM7QUFDQSxnQkFBZ0Isa0RBQUc7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakM4QztBQUNFO0FBQ0o7QUFDQTtBQUNFO0FBQ0w7QUFDekM7QUFDQTtBQUNBLE9BQU8sOERBQUk7QUFDWCxXQUFXLDhEQUFJO0FBQ2YsYUFBYSxnRUFBTTtBQUNuQixZQUFZLCtEQUFLO0FBQ2pCLFlBQVksK0RBQUs7QUFDakIsWUFBWSwwREFBSztBQUNqQjtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkcsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQztBQUNyQjtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3hDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL3JvdXRlcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvc29hbDEuanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcXVpcy5jc3MnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L25hdi1iYXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L2Zvb3QtYmFyJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXdzL2FwcCc7XHJcbmltcG9ydCBNdWxhaSBmcm9tICcuL3ZpZXdzL3BhZ2VzL211bGFpLXBhZ2UnO1xyXG5pbXBvcnQgU29hMSBmcm9tICcuL3ZpZXdzL3BhZ2VzL3NvYWwxJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gIGFwcC5yZW5kZXJQYWdlKCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgYXBwLnJlbmRlclBhZ2UoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuZnVuY3Rpb24gc2Nyb2xsVG9TZWN0aW9uMigpIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZShcclxuICAgIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICAgIHNjcm9sbFRvcDogJCgnI3NlY3Rpb24yJykub2Zmc2V0KCkudG9wLFxyXG4gICAgfSxcclxuICAgICdzbG93JyxcclxuICApO1xyXG59XHJcbiIsImltcG9ydCBBYm91dCBmcm9tICcuLi92aWV3cy9wYWdlcy9hYm91dC1wYWdlJztcclxuaW1wb3J0IENvbnN1bCBmcm9tICcuLi92aWV3cy9wYWdlcy9jb25zdWwtcGFnZSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3ZpZXdzL3BhZ2VzL2hvbWUtcGFnZSc7XHJcbmltcG9ydCBUZXN0IGZyb20gJy4uL3ZpZXdzL3BhZ2VzL3Rlc3QtcGFnZSc7XHJcbmltcG9ydCBNdWxhaSBmcm9tICcuLi92aWV3cy9wYWdlcy9tdWxhaS1wYWdlJztcclxuaW1wb3J0IFNvYWwxIGZyb20gJy4uL3ZpZXdzL3BhZ2VzL3NvYWwxJztcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuICAnLyc6IEhvbWUsXHJcbiAgJy90ZXN0JzogVGVzdCxcclxuICAnL2NvbnN1bCc6IENvbnN1bCxcclxuICAnL2Fib3V0JzogQWJvdXQsXHJcbiAgJy9tdWxhaSc6IE11bGFpLFxyXG4gICcvc29hbDEnOiBTb2FsMSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEZ1bmdzaSB1bnR1ayBtZW5nYW1iaWwgZGF0YSBwZXJ0YW55YWFuIGRhcmkgZmlsZSBKU09OXHJcbiAgICBmdW5jdGlvbiBmZXRjaFF1ZXN0aW9uRGF0YShxdWVzdGlvbk51bWJlcikge1xyXG4gICAgICByZXR1cm4gZmV0Y2goJ3B1YmxpYy9kYXRhL3F1aXMuanNvbicpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgLy8gU2V0IHBlcnRhbnlhYW4gcGFkYSBlbGVtZW4gSFRNTFxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpOdW1iZXInKS50ZXh0Q29udGVudCA9ICdQZXJ0YW55YWFuICcgKyBxdWVzdGlvbk51bWJlciArICcvMTAnO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpRdWVzdGlvbicpLnRleHRDb250ZW50ID0gZGF0YVtxdWVzdGlvbk51bWJlciAtIDFdLnNvYWxxdWl6OyAvLyBDaGVjayBmb3IgdGhlIGNvcnJlY3QgcHJvcGVydHkgbmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHF1aXogZGF0YTonLCBlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgcGVydGFueWFhbiBwZXJ0YW1hXHJcbiAgICBmZXRjaFF1ZXN0aW9uRGF0YSgxKTtcclxuXHJcblxyXG4gIH0pO1xyXG5cclxuY29uc3QgU29hbDEgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcC00XCIgaWQ9XCJjYXJkbXVsYWlcIj5cclxuICAgICAgICA8aW1nIGlkPVwiZ2FtYmFybXVsYWlcIiBzcmM9XCJpbWFnZXMvbXVsYWkuanBnXCI+XHJcbiAgICAgICAgPGg1IGNsYXNzPVwibWItNFwiIGlkPVwibGFiZWxtdWxhaVwiPlNlbGFtYXQgZGF0YW5nISBLbGlrIHRvbWJvbCBcIk11bGFpXCIgdW50dWsgbWVtdWxhaSB0ZXMuPC9oNT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJidG5tdWxhaVwiPk11bGFpPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuICAgIC8vIEFtYmlsIGVsZW1lbiBidXR0b24gZGFuIHRhbWJhaGthbiBldmVudCBsaXN0ZW5lclxyXG4gICAgY29uc3QgYnRuTXVsYWkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRubXVsYWknKTtcclxuICAgIGJ0bk11bGFpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRRdWl6KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVsYWk7XHJcblxyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM0MGRkYzdhMWYyYjdhN2NkODJmXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9