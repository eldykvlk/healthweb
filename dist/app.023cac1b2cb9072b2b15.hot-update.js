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
  app.renderPage();
});
window.addEventListener('load', function () {
  app.renderPage();
});
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6dddb355ddced602755e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjAyM2NhYzFiMmNiOTA3MmIyYjE1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNEO0FBQ007QUFDTjtBQUNDO0FBQ0M7QUFDQTtBQUNlO0FBQ0w7QUFDeEM7QUFDQSxJQUFNRyxHQUFHLEdBQUcsSUFBSUgsa0RBQUcsQ0FBQyxDQUFDO0FBRXJCSSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFNO0VBQzFDRixHQUFHLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGRixNQUFNLENBQUNDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFNO0VBQ3BDRixHQUFHLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUdJQyxRQUFRLENBQUNGLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDeEQ7RUFDQSxTQUFTRyxpQkFBaUJBLENBQUNDLGNBQWMsRUFBRTtJQUN6QyxPQUFPQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FDbENDLElBQUksQ0FBQyxVQUFBQyxRQUFRO01BQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDakNGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7TUFDWjtNQUNBUCxRQUFRLENBQUNRLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsV0FBVyxHQUFHLGFBQWEsR0FBR1AsY0FBYyxHQUFHLEtBQUs7TUFDMUZGLFFBQVEsQ0FBQ1EsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxXQUFXLEdBQUdGLElBQUksQ0FBQ0wsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDUSxRQUFRO0lBQ3pGLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQUMsS0FBSztNQUFBLE9BQUlDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDJCQUEyQixFQUFFQSxLQUFLLENBQUM7SUFBQSxFQUFDO0VBQ3RFOztFQUVBO0VBQ0FWLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUM7Ozs7Ozs7O1VDcENSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcXVpcy5jc3MnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L25hdi1iYXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L2Zvb3QtYmFyJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXdzL2FwcCc7XHJcbmltcG9ydCBNdWxhaSBmcm9tICcuL3ZpZXdzL3BhZ2VzL211bGFpLXBhZ2UnO1xyXG5pbXBvcnQgU29hbDEgZnJvbSAnLi92aWV3cy9wYWdlcy9zb2FsMSc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICBhcHAucmVuZGVyUGFnZSgpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGFwcC5yZW5kZXJQYWdlKCk7XHJcbn0pO1xyXG5cclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBGdW5nc2kgdW50dWsgbWVuZ2FtYmlsIGRhdGEgcGVydGFueWFhbiBkYXJpIGZpbGUgSlNPTlxyXG4gICAgICAgIGZ1bmN0aW9uIGZldGNoUXVlc3Rpb25EYXRhKHF1ZXN0aW9uTnVtYmVyKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmV0Y2goJ3B1YmxpYy9kYXRhL3F1aXMuanNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gU2V0IHBlcnRhbnlhYW4gcGFkYSBlbGVtZW4gSFRNTFxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6TnVtYmVyJykudGV4dENvbnRlbnQgPSAnUGVydGFueWFhbiAnICsgcXVlc3Rpb25OdW1iZXIgKyAnLzEwJztcclxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpelF1ZXN0aW9uJykudGV4dENvbnRlbnQgPSBkYXRhW3F1ZXN0aW9uTnVtYmVyIC0gMV0uc29hbHF1aXo7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdWl6IGRhdGE6JywgZXJyb3IpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExvYWQgcGVydGFueWFhbiBwZXJ0YW1hXHJcbiAgICAgICAgZmV0Y2hRdWVzdGlvbkRhdGEoMSk7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZkZGRiMzU1ZGRjZWQ2MDI3NTVlXCIpIl0sIm5hbWVzIjpbIkFwcCIsIk11bGFpIiwiU29hbDEiLCJhcHAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyUGFnZSIsImRvY3VtZW50IiwiZmV0Y2hRdWVzdGlvbkRhdGEiLCJxdWVzdGlvbk51bWJlciIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50Iiwic29hbHF1aXoiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9