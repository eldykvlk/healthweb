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
var app = new _views_app__WEBPACK_IMPORTED_MODULE_6__["default"]();
window.addEventListener('hashchange', function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk mengambil data pertanyaan dari file JSON
    function fetchQuestionData(questionNumber) {
      return fetch('public/data/quis.json').then(function (response) {
        return response.json();
      }).then(function (data) {
        // Set pertanyaan pada elemen HTML
        document.getElementById('quizNumber').textContent = 'Pertanyaan ' + questionNumber + '/10';
        document.getElementById('quizQuestion').textContent = data[questionNumber - 1].soalquiz;
      })["catch"](function (error) {
        return console.error('Error fetching quiz data:', error);
      });
    }

    // Load pertanyaan pertama
    fetchQuestionData(1);
  });
  app.renderPage();
});
window.addEventListener('load', function () {
  app.renderPage();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18cb23448a7c8c4f9478")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjI1NDc3MWZjMWEzZGI1MjVjZmFmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNEO0FBQ007QUFDTjtBQUNDO0FBQ0M7QUFDQTtBQUNlO0FBQ0w7QUFDeEM7QUFDQSxJQUFNRyxHQUFHLEdBQUcsSUFBSUgsa0RBQUcsQ0FBQyxDQUFDO0FBRXJCSSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFNO0VBQ3BDQyxRQUFRLENBQUNELGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7SUFDMUQ7SUFDQSxTQUFTRSxpQkFBaUJBLENBQUNDLGNBQWMsRUFBRTtNQUN6QyxPQUFPQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FDbENDLElBQUksQ0FBQyxVQUFBQyxRQUFRO1FBQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztNQUFBLEVBQUMsQ0FDakNGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7UUFDWjtRQUNBUCxRQUFRLENBQUNRLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsV0FBVyxHQUFHLGFBQWEsR0FBR1AsY0FBYyxHQUFHLEtBQUs7UUFDMUZGLFFBQVEsQ0FBQ1EsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxXQUFXLEdBQUdGLElBQUksQ0FBQ0wsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDUSxRQUFRO01BQ3pGLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQUMsS0FBSztRQUFBLE9BQUlDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDJCQUEyQixFQUFFQSxLQUFLLENBQUM7TUFBQSxFQUFDO0lBQ3RFOztJQUVBO0lBQ0FWLGlCQUFpQixDQUFDLENBQUMsQ0FBQztFQUN0QixDQUFDLENBQUM7RUFFTkosR0FBRyxDQUFDZ0IsVUFBVSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUZmLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQU07RUFDcENGLEdBQUcsQ0FBQ2dCLFVBQVUsQ0FBQyxDQUFDO0FBRWxCLENBQUMsQ0FBQzs7Ozs7Ozs7VUNwQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydDAvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFydDAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcmVzcG9uc2l2ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9xdWlzLmNzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnQvbmF2LWJhcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnQvZm9vdC1iYXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vdmlld3MvYXBwJztcclxuaW1wb3J0IE11bGFpIGZyb20gJy4vdmlld3MvcGFnZXMvbXVsYWktcGFnZSc7XHJcbmltcG9ydCBTb2FsMSBmcm9tICcuL3ZpZXdzL3BhZ2VzL3NvYWwxJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBGdW5nc2kgdW50dWsgbWVuZ2FtYmlsIGRhdGEgcGVydGFueWFhbiBkYXJpIGZpbGUgSlNPTlxyXG4gICAgICAgIGZ1bmN0aW9uIGZldGNoUXVlc3Rpb25EYXRhKHF1ZXN0aW9uTnVtYmVyKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmV0Y2goJ3B1YmxpYy9kYXRhL3F1aXMuanNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gU2V0IHBlcnRhbnlhYW4gcGFkYSBlbGVtZW4gSFRNTFxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6TnVtYmVyJykudGV4dENvbnRlbnQgPSAnUGVydGFueWFhbiAnICsgcXVlc3Rpb25OdW1iZXIgKyAnLzEwJztcclxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpelF1ZXN0aW9uJykudGV4dENvbnRlbnQgPSBkYXRhW3F1ZXN0aW9uTnVtYmVyIC0gMV0uc29hbHF1aXo7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdWl6IGRhdGE6JywgZXJyb3IpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExvYWQgcGVydGFueWFhbiBwZXJ0YW1hXHJcbiAgICAgICAgZmV0Y2hRdWVzdGlvbkRhdGEoMSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICBhcHAucmVuZGVyUGFnZSgpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGFwcC5yZW5kZXJQYWdlKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE4Y2IyMzQ0OGE3YzhjNGY5NDc4XCIpIl0sIm5hbWVzIjpbIkFwcCIsIk11bGFpIiwiU29hbDEiLCJhcHAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJmZXRjaFF1ZXN0aW9uRGF0YSIsInF1ZXN0aW9uTnVtYmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJzb2FscXVpeiIsImVycm9yIiwiY29uc29sZSIsInJlbmRlclBhZ2UiXSwic291cmNlUm9vdCI6IiJ9