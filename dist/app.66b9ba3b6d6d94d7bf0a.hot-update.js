self["webpackHotUpdatestart0"]("app",{

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
/* harmony import */ var _templates_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../templates/script */ "./src/templates/script.js");
/* harmony import */ var _templates_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_templates_script__WEBPACK_IMPORTED_MODULE_6__);








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

/***/ "./src/templates/script.js":
/*!*********************************!*\
  !*** ./src/templates/script.js ***!
  \*********************************/
/***/ (() => {

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
/******/ 	__webpack_require__.h = () => ("21f148cd0372722a46e7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjY2YjliYTNiNmQ2ZDk0ZDdiZjBhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNFO0FBQ0o7QUFDQTtBQUNFO0FBQ0w7QUFDRztBQUM1QztBQUNBO0FBQ0EsT0FBTyw4REFBSTtBQUNYLFdBQVcsOERBQUk7QUFDZixhQUFhLGdFQUFNO0FBQ25CLFlBQVksK0RBQUs7QUFDakIsWUFBWSwrREFBSztBQUNqQixZQUFZLDJEQUFLO0FBQ2pCO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7O0FDakJ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEMsaUZBQWlGLFNBQVMsR0FBRyxVQUFVO0FBQ3ZHO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ2pDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL3JvdXRlcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3RlbXBsYXRlcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSAnLi4vdmlld3MvcGFnZXMvYWJvdXQtcGFnZSc7XHJcbmltcG9ydCBDb25zdWwgZnJvbSAnLi4vdmlld3MvcGFnZXMvY29uc3VsLXBhZ2UnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi92aWV3cy9wYWdlcy9ob21lLXBhZ2UnO1xyXG5pbXBvcnQgVGVzdCBmcm9tICcuLi92aWV3cy9wYWdlcy90ZXN0LXBhZ2UnO1xyXG5pbXBvcnQgTXVsYWkgZnJvbSAnLi4vdmlld3MvcGFnZXMvbXVsYWktcGFnZSc7XHJcbmltcG9ydCBTb2FsMSBmcm9tICcuLi92aWV3cy9wYWdlcy9zb2FsMSc7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3NjcmlwdCc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSB7XHJcbiAgJy8nOiBIb21lLFxyXG4gICcvdGVzdCc6IFRlc3QsXHJcbiAgJy9jb25zdWwnOiBDb25zdWwsXHJcbiAgJy9hYm91dCc6IEFib3V0LFxyXG4gICcvbXVsYWknOiBNdWxhaSxcclxuICAnL3NvYWwxJzogU29hbDEsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcbiIsIi8vIEZ1bmN0aW9uIHRvIHNjcm9sbCB0byBTZWN0aW9uIDJcclxuZnVuY3Rpb24gc2Nyb2xsVG9TZWN0aW9uMigpIHtcclxuICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICBzY3JvbGxUb3A6ICQoJyNzZWN0aW9uMicpLm9mZnNldCgpLnRvcFxyXG4gIH0sICdzbG93Jyk7XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGZpbmQgdXNlcidzIGxvY2F0aW9uIGFuZCBvcGVuIEdvb2dsZSBNYXBzXHJcbmZ1bmN0aW9uIGZpbmRMb2NhdGlvbigpIHtcclxuICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICBmdW5jdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gcG9zaXRpb24uY29vcmRzO1xyXG4gICAgICAgIGNvbnN0IG1hcHNVcmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC9wc2lrb2xvZyt0ZXJkZWthdC9AJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcclxuICAgICAgICB3aW5kb3cub3BlbihtYXBzVXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiAndXBzcyEnLFxyXG4gICAgICAgICAgdGV4dDogJ0dhZ2FsIG1lbmRhcGF0a2FuIGxva2FzaS4gUGFzdGlrYW4gR1BTIEFuZGEgYWt0aWYhJyxcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFsZXJ0KCdCcm93c2VyIEFuZGEgdGlkYWsgbWVuZHVrdW5nIGdlb2xva2FzaS4nKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV2ZW50IGxpc3RlbmVyIHRvIGNhbGwgc2Nyb2xsVG9TZWN0aW9uMiBmdW5jdGlvbiB3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWRcclxuJCgnI3Njcm9sbEJ1dHRvbicpLm9uKCdjbGljaycsIHNjcm9sbFRvU2VjdGlvbjIpO1xyXG5cclxuLy8gQXNzdW1pbmcgeW91IGhhdmUgYSBidXR0b24gd2l0aCB0aGUgaWQgXCJsb2NhdGlvbkJ1dHRvblwiIHRvIHRyaWdnZXIgZmluZExvY2F0aW9uXHJcbiQoJyNsb2NhdGlvbkJ1dHRvbicpLm9uKCdjbGljaycsIGZpbmRMb2NhdGlvbik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIxZjE0OGNkMDM3MjcyMmE0NmU3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9