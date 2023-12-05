"use strict";
self["webpackHotUpdatestart0"]("app",{

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
/* harmony import */ var _views_pages_soal1__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_views_pages_soal1__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _templates_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../templates/script */ "./src/templates/script.js");








const routes = {
  '/': _views_pages_home_page__WEBPACK_IMPORTED_MODULE_2__["default"],
  '/test': _views_pages_test_page__WEBPACK_IMPORTED_MODULE_3__["default"],
  '/consul': _views_pages_consul_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/about': _views_pages_about_page__WEBPACK_IMPORTED_MODULE_0__["default"],
  '/mulai': _views_pages_mulai_page__WEBPACK_IMPORTED_MODULE_4__["default"],
  '/soal1': (_views_pages_soal1__WEBPACK_IMPORTED_MODULE_5___default()),
  '/script': _templates_script__WEBPACK_IMPORTED_MODULE_6__["default"],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ "./src/templates/script.js":
/*!*********************************!*\
  !*** ./src/templates/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Script);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a3edf776920e73b04fce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNmNTZkNTI0NjEzNjU5M2U4NGRkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0U7QUFDSjtBQUNBO0FBQ0U7QUFDTDtBQUNHO0FBQzVDO0FBQ0E7QUFDQSxPQUFPLDhEQUFJO0FBQ1gsV0FBVyw4REFBSTtBQUNmLGFBQWEsZ0VBQU07QUFDbkIsWUFBWSwrREFBSztBQUNqQixZQUFZLCtEQUFLO0FBQ2pCLFlBQVksMkRBQUs7QUFDakIsYUFBYSx5REFBTTtBQUNuQjtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QyxpRkFBaUYsU0FBUyxHQUFHLFVBQVU7QUFDdkc7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7VUNuQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3NjcmlwdHMvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9zdGFydDAvLi9zcmMvdGVtcGxhdGVzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9zdGFydDAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICcuLi92aWV3cy9wYWdlcy9hYm91dC1wYWdlJztcclxuaW1wb3J0IENvbnN1bCBmcm9tICcuLi92aWV3cy9wYWdlcy9jb25zdWwtcGFnZSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3ZpZXdzL3BhZ2VzL2hvbWUtcGFnZSc7XHJcbmltcG9ydCBUZXN0IGZyb20gJy4uL3ZpZXdzL3BhZ2VzL3Rlc3QtcGFnZSc7XHJcbmltcG9ydCBNdWxhaSBmcm9tICcuLi92aWV3cy9wYWdlcy9tdWxhaS1wYWdlJztcclxuaW1wb3J0IFNvYWwxIGZyb20gJy4uL3ZpZXdzL3BhZ2VzL3NvYWwxJztcclxuaW1wb3J0IFNjcmlwdCBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvc2NyaXB0JztcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuICAnLyc6IEhvbWUsXHJcbiAgJy90ZXN0JzogVGVzdCxcclxuICAnL2NvbnN1bCc6IENvbnN1bCxcclxuICAnL2Fib3V0JzogQWJvdXQsXHJcbiAgJy9tdWxhaSc6IE11bGFpLFxyXG4gICcvc29hbDEnOiBTb2FsMSxcclxuICAnL3NjcmlwdCc6IFNjcmlwdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiLy8gRnVuY3Rpb24gdG8gc2Nyb2xsIHRvIFNlY3Rpb24gMlxyXG5mdW5jdGlvbiBzY3JvbGxUb1NlY3Rpb24yKCkge1xyXG4gICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgIHNjcm9sbFRvcDogJCgnI3NlY3Rpb24yJykub2Zmc2V0KCkudG9wXHJcbiAgfSwgJ3Nsb3cnKTtcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gZmluZCB1c2VyJ3MgbG9jYXRpb24gYW5kIG9wZW4gR29vZ2xlIE1hcHNcclxuZnVuY3Rpb24gZmluZExvY2F0aW9uKCkge1xyXG4gIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXHJcbiAgICAgIGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBwb3NpdGlvbi5jb29yZHM7XHJcbiAgICAgICAgY29uc3QgbWFwc1VybCA9IGBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoL3BzaWtvbG9nK3RlcmRla2F0L0Ake2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKG1hcHNVcmwsICdfYmxhbmsnKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6ICd1cHNzIScsXHJcbiAgICAgICAgICB0ZXh0OiAnR2FnYWwgbWVuZGFwYXRrYW4gbG9rYXNpLiBQYXN0aWthbiBHUFMgQW5kYSBha3RpZiEnLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWxlcnQoJ0Jyb3dzZXIgQW5kYSB0aWRhayBtZW5kdWt1bmcgZ2VvbG9rYXNpLicpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gY2FsbCBzY3JvbGxUb1NlY3Rpb24yIGZ1bmN0aW9uIHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZFxyXG4kKCcjc2Nyb2xsQnV0dG9uJykub24oJ2NsaWNrJywgc2Nyb2xsVG9TZWN0aW9uMik7XHJcblxyXG4vLyBBc3N1bWluZyB5b3UgaGF2ZSBhIGJ1dHRvbiB3aXRoIHRoZSBpZCBcImxvY2F0aW9uQnV0dG9uXCIgdG8gdHJpZ2dlciBmaW5kTG9jYXRpb25cclxuJCgnI2xvY2F0aW9uQnV0dG9uJykub24oJ2NsaWNrJywgZmluZExvY2F0aW9uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcmlwdDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTNlZGY3NzY5MjBlNzNiMDRmY2VcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=