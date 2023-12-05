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
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ccbfe36d13980e3232c2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjZkZGRiMzU1ZGRjZWQ2MDI3NTVlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNEO0FBQ007QUFDTjtBQUNDO0FBQ0M7QUFDQTtBQUNlO0FBQ0w7QUFDeEM7QUFDQSxJQUFNRyxHQUFHLEdBQUcsSUFBSUgsa0RBQUcsQ0FBQyxDQUFDO0FBRXJCSSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFNO0VBQzFDRixHQUFHLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGRixNQUFNLENBQUNDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFNO0VBQ3BDRixHQUFHLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0VBQ1ZDLFFBQVEsQ0FBQ0YsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtJQUMxRDtJQUNBLFNBQVNHLGlCQUFpQkEsQ0FBQ0MsY0FBYyxFQUFFO01BQ3pDLE9BQU9DLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUNsQ0MsSUFBSSxDQUFDLFVBQUFDLFFBQVE7UUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDO01BQUEsRUFBQyxDQUNqQ0YsSUFBSSxDQUFDLFVBQUFHLElBQUksRUFBSTtRQUNaO1FBQ0FQLFFBQVEsQ0FBQ1EsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxXQUFXLEdBQUcsYUFBYSxHQUFHUCxjQUFjLEdBQUcsS0FBSztRQUMxRkYsUUFBUSxDQUFDUSxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUNDLFdBQVcsR0FBR0YsSUFBSSxDQUFDTCxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUNRLFFBQVE7TUFDekYsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBQyxLQUFLO1FBQUEsT0FBSUMsT0FBTyxDQUFDRCxLQUFLLENBQUMsMkJBQTJCLEVBQUVBLEtBQUssQ0FBQztNQUFBLEVBQUM7SUFDdEU7O0lBRUE7SUFDQVYsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUVSLENBQUMsQ0FBQzs7Ozs7Ozs7VUNuQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydDAvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFydDAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcmVzcG9uc2l2ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9xdWlzLmNzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnQvbmF2LWJhcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnQvZm9vdC1iYXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vdmlld3MvYXBwJztcclxuaW1wb3J0IE11bGFpIGZyb20gJy4vdmlld3MvcGFnZXMvbXVsYWktcGFnZSc7XHJcbmltcG9ydCBTb2FsMSBmcm9tICcuL3ZpZXdzL3BhZ2VzL3NvYWwxJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gIGFwcC5yZW5kZXJQYWdlKCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgYXBwLnJlbmRlclBhZ2UoKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRnVuZ3NpIHVudHVrIG1lbmdhbWJpbCBkYXRhIHBlcnRhbnlhYW4gZGFyaSBmaWxlIEpTT05cclxuICAgICAgICBmdW5jdGlvbiBmZXRjaFF1ZXN0aW9uRGF0YShxdWVzdGlvbk51bWJlcikge1xyXG4gICAgICAgICAgcmV0dXJuIGZldGNoKCdwdWJsaWMvZGF0YS9xdWlzLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIFNldCBwZXJ0YW55YWFuIHBhZGEgZWxlbWVuIEhUTUxcclxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpek51bWJlcicpLnRleHRDb250ZW50ID0gJ1BlcnRhbnlhYW4gJyArIHF1ZXN0aW9uTnVtYmVyICsgJy8xMCc7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpRdWVzdGlvbicpLnRleHRDb250ZW50ID0gZGF0YVtxdWVzdGlvbk51bWJlciAtIDFdLnNvYWxxdWl6O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcXVpeiBkYXRhOicsIGVycm9yKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMb2FkIHBlcnRhbnlhYW4gcGVydGFtYVxyXG4gICAgICAgIGZldGNoUXVlc3Rpb25EYXRhKDEpO1xyXG4gICAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2NiZmUzNmQxMzk4MGUzMjMyYzJcIikiXSwibmFtZXMiOlsiQXBwIiwiTXVsYWkiLCJTb2FsMSIsImFwcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJQYWdlIiwiZG9jdW1lbnQiLCJmZXRjaFF1ZXN0aW9uRGF0YSIsInF1ZXN0aW9uTnVtYmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJzb2FscXVpeiIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=