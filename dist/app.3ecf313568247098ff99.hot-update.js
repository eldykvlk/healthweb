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
/* harmony import */ var _views_pages_soal1__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_views_pages_soal1__WEBPACK_IMPORTED_MODULE_8__);









// eslint-disable-next-line no-unused-vars
const app = new _views_app__WEBPACK_IMPORTED_MODULE_6__["default"]();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});


    function scrollToSection2() {
        $('html, body').animate(
          {
            scrollTop: $('#section2').offset().top,
          },
          'slow'
        );
      }

      function findLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;

              const mapsUrl = `https://www.google.com/maps/search/psikolog+terdekat/@${latitude},${longitude}`;

              window.open(mapsUrl, '_blank');
            },
            function (error) {
              Swal.fire({
                title: 'upss!',
                text: 'Gagal mendapatkan lokasi. Pastikan GPS Anda aktif!',
                icon: 'error',
              });
            }
          );
        } else {
          alert('Browser Anda tidak mendukung geolokasi.');
        }
      }




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ddc07a24ae88c7ab4b8c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjNlY2YzMTM1NjgyNDcwOThmZjk5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRDtBQUNNO0FBQ047QUFDQztBQUNDO0FBQ0E7QUFDZTtBQUNMO0FBQ3hDO0FBQ0EsZ0JBQWdCLGtEQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsU0FBUyxHQUFHLFVBQVU7QUFDN0c7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDdERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcXVpcy5jc3MnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L25hdi1iYXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L2Zvb3QtYmFyJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXdzL2FwcCc7XHJcbmltcG9ydCBNdWxhaSBmcm9tICcuL3ZpZXdzL3BhZ2VzL211bGFpLXBhZ2UnO1xyXG5pbXBvcnQgU29hbDEgZnJvbSAnLi92aWV3cy9wYWdlcy9zb2FsMSc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICBhcHAucmVuZGVyUGFnZSgpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGFwcC5yZW5kZXJQYWdlKCk7XHJcbn0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxUb1NlY3Rpb24yKCkge1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoJyNzZWN0aW9uMicpLm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnc2xvdydcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBmaW5kTG9jYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgbWFwc1VybCA9IGBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoL3BzaWtvbG9nK3RlcmRla2F0L0Ake2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gO1xyXG5cclxuICAgICAgICAgICAgICB3aW5kb3cub3BlbihtYXBzVXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3Vwc3MhJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdHYWdhbCBtZW5kYXBhdGthbiBsb2thc2kuIFBhc3Rpa2FuIEdQUyBBbmRhIGFrdGlmIScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydCgnQnJvd3NlciBBbmRhIHRpZGFrIG1lbmR1a3VuZyBnZW9sb2thc2kuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGRjMDdhMjRhZTg4YzdhYjRiOGNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=