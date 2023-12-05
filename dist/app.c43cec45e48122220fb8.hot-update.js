"use strict";
self["webpackHotUpdatestart0"]("app",{

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
  <div class="card p-4">
    <div class="progress mb-4">
      <div class="progress-bar" style="width:20; background-color: #2196f3"  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <!-- Element untuk menampilkan nomor dan pertanyaan -->
    <h5 id="quizNumber" class="mb-4"></h5>
    <h4 id="quizQuestion" class="mb-4"></h4>
    <form id="quizForm">
      <div class="form-group">
        <label class="radio-container">Iya, lebih dari biasanya
          <input type="radio" name="q1" value="4" id="q1_option4">
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Sama saja seperti biasanya
          <input type="radio" name="q1" value="3" id="q1_option3">
          <span class="checkmark"></span>
      </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Kurang dari biasanya
          <input type="radio" name="q1" value="2" id="q1_option2">
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Sangat berkurang dari biasanya
          <input type="radio" name="q1" value="1" id="q1_option1">
          <span class="checkmark"></span>
        </label>
      </div>
    </form>
    <button class="btn btn-primary" onclick="nextPage()">Next</button>
 `;
  },

  async afterRender() {

  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Soal1);





/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ac775c2034ef7eb16178")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmM0M2NlYzQ1ZTQ4MTIyMjIwZmI4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkcsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsS0FBSyxFQUFDO0FBQ3JCO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDbkVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvc29hbDEuanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRnVuZ3NpIHVudHVrIG1lbmdhbWJpbCBkYXRhIHBlcnRhbnlhYW4gZGFyaSBmaWxlIEpTT05cclxuICAgIGZ1bmN0aW9uIGZldGNoUXVlc3Rpb25EYXRhKHF1ZXN0aW9uTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBmZXRjaCgncHVibGljL2RhdGEvcXVpcy5qc29uJylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAvLyBTZXQgcGVydGFueWFhbiBwYWRhIGVsZW1lbiBIVE1MXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpek51bWJlcicpLnRleHRDb250ZW50ID0gJ1BlcnRhbnlhYW4gJyArIHF1ZXN0aW9uTnVtYmVyICsgJy8xMCc7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpelF1ZXN0aW9uJykudGV4dENvbnRlbnQgPSBkYXRhW3F1ZXN0aW9uTnVtYmVyIC0gMV0uc29hbHF1aXo7IC8vIENoZWNrIGZvciB0aGUgY29ycmVjdCBwcm9wZXJ0eSBuYW1lXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcXVpeiBkYXRhOicsIGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCBwZXJ0YW55YWFuIHBlcnRhbWFcclxuICAgIGZldGNoUXVlc3Rpb25EYXRhKDEpO1xyXG5cclxuXHJcbiAgfSk7XHJcblxyXG5jb25zdCBTb2FsMSA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIHAtNFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIG1iLTRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIHN0eWxlPVwid2lkdGg6MjA7IGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjNcIiAgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz1cIjBcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBFbGVtZW50IHVudHVrIG1lbmFtcGlsa2FuIG5vbW9yIGRhbiBwZXJ0YW55YWFuIC0tPlxyXG4gICAgPGg1IGlkPVwicXVpek51bWJlclwiIGNsYXNzPVwibWItNFwiPjwvaDU+XHJcbiAgICA8aDQgaWQ9XCJxdWl6UXVlc3Rpb25cIiBjbGFzcz1cIm1iLTRcIj48L2g0PlxyXG4gICAgPGZvcm0gaWQ9XCJxdWl6Rm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPkl5YSwgbGViaWggZGFyaSBiaWFzYW55YVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxMVwiIHZhbHVlPVwiNFwiIGlkPVwicTFfb3B0aW9uNFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+U2FtYSBzYWphIHNlcGVydGkgYmlhc2FueWFcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicTFcIiB2YWx1ZT1cIjNcIiBpZD1cInExX29wdGlvbjNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5LdXJhbmcgZGFyaSBiaWFzYW55YVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxMVwiIHZhbHVlPVwiMlwiIGlkPVwicTFfb3B0aW9uMlwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+U2FuZ2F0IGJlcmt1cmFuZyBkYXJpIGJpYXNhbnlhXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInExXCIgdmFsdWU9XCIxXCIgaWQ9XCJxMV9vcHRpb24xXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBvbmNsaWNrPVwibmV4dFBhZ2UoKVwiPk5leHQ8L2J1dHRvbj5cclxuIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcblxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2FsMTtcclxuXHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWM3NzVjMjAzNGVmN2ViMTYxNzhcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=