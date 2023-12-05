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


// Function to scroll to Section 2
function scrollToSection2() {
  $('html, body').animate({
    scrollTop: $('#section2').offset().top
  }, 'slow');
}

// Function to find user's location and open Google Maps
function findLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://www.google.com/maps/search/psikolog+terdekat/@${latitude},${longitude}`;
        window.open(mapsUrl, '_blank');
      },
      function(error) {
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

// Event listener to call scrollToSection2 function when a button is clicked
$('#scrollButton').on('click', scrollToSection2);

// Assuming you have a button with the id "locationButton" to trigger findLocation
$('#locationButton').on('click', findLocation);





/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e7ab2f714be9f2f3a9a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmY5M2NkMWQxNjhiM2MzMWY5MzExLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRDtBQUNNO0FBQ047QUFDQztBQUNDO0FBQ0E7QUFDZTtBQUNMO0FBQ3hDO0FBQ0EsZ0JBQWdCLGtEQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QyxpRkFBaUYsU0FBUyxHQUFHLFVBQVU7QUFDdkc7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDekRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcXVpcy5jc3MnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L25hdi1iYXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L2Zvb3QtYmFyJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXdzL2FwcCc7XHJcbmltcG9ydCBNdWxhaSBmcm9tICcuL3ZpZXdzL3BhZ2VzL211bGFpLXBhZ2UnO1xyXG5pbXBvcnQgU29hbDEgZnJvbSAnLi92aWV3cy9wYWdlcy9zb2FsMSc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICBhcHAucmVuZGVyUGFnZSgpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGFwcC5yZW5kZXJQYWdlKCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHNjcm9sbCB0byBTZWN0aW9uIDJcclxuZnVuY3Rpb24gc2Nyb2xsVG9TZWN0aW9uMigpIHtcclxuICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICBzY3JvbGxUb3A6ICQoJyNzZWN0aW9uMicpLm9mZnNldCgpLnRvcFxyXG4gIH0sICdzbG93Jyk7XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGZpbmQgdXNlcidzIGxvY2F0aW9uIGFuZCBvcGVuIEdvb2dsZSBNYXBzXHJcbmZ1bmN0aW9uIGZpbmRMb2NhdGlvbigpIHtcclxuICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICBmdW5jdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gcG9zaXRpb24uY29vcmRzO1xyXG4gICAgICAgIGNvbnN0IG1hcHNVcmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC9wc2lrb2xvZyt0ZXJkZWthdC9AJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcclxuICAgICAgICB3aW5kb3cub3BlbihtYXBzVXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiAndXBzcyEnLFxyXG4gICAgICAgICAgdGV4dDogJ0dhZ2FsIG1lbmRhcGF0a2FuIGxva2FzaS4gUGFzdGlrYW4gR1BTIEFuZGEgYWt0aWYhJyxcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFsZXJ0KCdCcm93c2VyIEFuZGEgdGlkYWsgbWVuZHVrdW5nIGdlb2xva2FzaS4nKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV2ZW50IGxpc3RlbmVyIHRvIGNhbGwgc2Nyb2xsVG9TZWN0aW9uMiBmdW5jdGlvbiB3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWRcclxuJCgnI3Njcm9sbEJ1dHRvbicpLm9uKCdjbGljaycsIHNjcm9sbFRvU2VjdGlvbjIpO1xyXG5cclxuLy8gQXNzdW1pbmcgeW91IGhhdmUgYSBidXR0b24gd2l0aCB0aGUgaWQgXCJsb2NhdGlvbkJ1dHRvblwiIHRvIHRyaWdnZXIgZmluZExvY2F0aW9uXHJcbiQoJyNsb2NhdGlvbkJ1dHRvbicpLm9uKCdjbGljaycsIGZpbmRMb2NhdGlvbik7XHJcblxyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU3YWIyZjcxNGJlOWYyZjNhOWE3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9