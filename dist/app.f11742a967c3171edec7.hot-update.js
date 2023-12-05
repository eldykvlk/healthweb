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
  




const Soal1 = {

  async render() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tes Tingkat Kesehatan Mental</title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">

  <style>
    .progress-bar {
      width: 0;
      background-color: #2196F3;
    }
  </style>
</head>
<body class="d-flex align-items-center justify-content-center" style="min-height: 100vh;">
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


<button class="btn btn-primary" id="btnNext1">Next</button>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Set checkbox state based on local storage
    var selectedOption = localStorage.getItem('soal1');
    if (selectedOption) {
      document.getElementById('q1_option' + selectedOption).checked = true;
    }
  });

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

    // Add event listener to the "Next" button
    document.getElementById('btnNext1').addEventListener('click', function () {
      nextPage1();
    });
  });

  const nextPage1 = () => {
    var questionNumber = 1;
    var selectedOption = document.querySelector('input[name=q' + questionNumber + ']:checked');
    if (selectedOption) {
      var score1 = parseInt(selectedOption.value);
      localStorage.setItem('soal1', score1);

      if (questionNumber < 10) {
        window.location.href = '#/soal' + (questionNumber + 1);
      } else {
        // Jika ini adalah halaman terakhir (soal 10), pindah ke halaman hasil
        window.location.href = 'hasil.html';
      }
    } else {
      alert('Pilih salah satu opsi sebelum melanjutkan.');
    }
  };
</script>



  </div>
</body>
</html>

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
/******/ 	__webpack_require__.h = () => ("25b908a8d86f5134a797")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmYxMTc0MmE5NjdjMzE3MWVkZWM3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HO0FBQ25HLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7O1VDL0hwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL3NvYWwxLmpzIiwid2VicGFjazovL3N0YXJ0MC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiICBcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFNvYWwxID0ge1xyXG5cclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG48IURPQ1RZUEUgaHRtbD5cclxuPGh0bWwgbGFuZz1cImVuXCI+XHJcbjxoZWFkPlxyXG4gIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxyXG4gIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XHJcbiAgPHRpdGxlPlRlcyBUaW5na2F0IEtlc2VoYXRhbiBNZW50YWw8L3RpdGxlPlxyXG4gIDxsaW5rIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+XHJcblxyXG4gIDxzdHlsZT5cclxuICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICAgIH1cclxuICA8L3N0eWxlPlxyXG48L2hlYWQ+XHJcbjxib2R5IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiAxMDB2aDtcIj5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBwLTRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcyBtYi00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBzdHlsZT1cIndpZHRoOjIwOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzXCIgIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9XCIwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gRWxlbWVudCB1bnR1ayBtZW5hbXBpbGthbiBub21vciBkYW4gcGVydGFueWFhbiAtLT5cclxuICAgIDxoNSBpZD1cInF1aXpOdW1iZXJcIiBjbGFzcz1cIm1iLTRcIj48L2g1PlxyXG4gICAgPGg0IGlkPVwicXVpelF1ZXN0aW9uXCIgY2xhc3M9XCJtYi00XCI+PC9oND5cclxuICAgIDxmb3JtIGlkPVwicXVpekZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5JeWEsIGxlYmloIGRhcmkgYmlhc2FueWFcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicTFcIiB2YWx1ZT1cIjRcIiBpZD1cInExX29wdGlvbjRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPlNhbWEgc2FqYSBzZXBlcnRpIGJpYXNhbnlhXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInExXCIgdmFsdWU9XCIzXCIgaWQ9XCJxMV9vcHRpb24zXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+S3VyYW5nIGRhcmkgYmlhc2FueWFcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicTFcIiB2YWx1ZT1cIjJcIiBpZD1cInExX29wdGlvbjJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPlNhbmdhdCBiZXJrdXJhbmcgZGFyaSBiaWFzYW55YVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxMVwiIHZhbHVlPVwiMVwiIGlkPVwicTFfb3B0aW9uMVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGlkPVwiYnRuTmV4dDFcIj5OZXh0PC9idXR0b24+XHJcblxyXG48c2NyaXB0PlxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNldCBjaGVja2JveCBzdGF0ZSBiYXNlZCBvbiBsb2NhbCBzdG9yYWdlXHJcbiAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29hbDEnKTtcclxuICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncTFfb3B0aW9uJyArIHNlbGVjdGVkT3B0aW9uKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRnVuZ3NpIHVudHVrIG1lbmdhbWJpbCBkYXRhIHBlcnRhbnlhYW4gZGFyaSBmaWxlIEpTT05cclxuICAgIGZ1bmN0aW9uIGZldGNoUXVlc3Rpb25EYXRhKHF1ZXN0aW9uTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBmZXRjaCgncHVibGljL2RhdGEvcXVpcy5qc29uJylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAvLyBTZXQgcGVydGFueWFhbiBwYWRhIGVsZW1lbiBIVE1MXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpek51bWJlcicpLnRleHRDb250ZW50ID0gJ1BlcnRhbnlhYW4gJyArIHF1ZXN0aW9uTnVtYmVyICsgJy8xMCc7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpelF1ZXN0aW9uJykudGV4dENvbnRlbnQgPSBkYXRhW3F1ZXN0aW9uTnVtYmVyIC0gMV0uc29hbHF1aXo7IC8vIENoZWNrIGZvciB0aGUgY29ycmVjdCBwcm9wZXJ0eSBuYW1lXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcXVpeiBkYXRhOicsIGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCBwZXJ0YW55YWFuIHBlcnRhbWFcclxuICAgIGZldGNoUXVlc3Rpb25EYXRhKDEpO1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgXCJOZXh0XCIgYnV0dG9uXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuTmV4dDEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbmV4dFBhZ2UxKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbmV4dFBhZ2UxID0gKCkgPT4ge1xyXG4gICAgdmFyIHF1ZXN0aW9uTnVtYmVyID0gMTtcclxuICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9cScgKyBxdWVzdGlvbk51bWJlciArICddOmNoZWNrZWQnKTtcclxuICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xyXG4gICAgICB2YXIgc2NvcmUxID0gcGFyc2VJbnQoc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29hbDEnLCBzY29yZTEpO1xyXG5cclxuICAgICAgaWYgKHF1ZXN0aW9uTnVtYmVyIDwgMTApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3NvYWwnICsgKHF1ZXN0aW9uTnVtYmVyICsgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSmlrYSBpbmkgYWRhbGFoIGhhbGFtYW4gdGVyYWtoaXIgKHNvYWwgMTApLCBwaW5kYWgga2UgaGFsYW1hbiBoYXNpbFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2hhc2lsLmh0bWwnO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnUGlsaWggc2FsYWggc2F0dSBvcHNpIHNlYmVsdW0gbWVsYW5qdXRrYW4uJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuXHJcbiAgPC9kaXY+XHJcbjwvYm9keT5cclxuPC9odG1sPlxyXG5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcblxyXG4gIH0sXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29hbDE7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjViOTA4YThkODZmNTEzNGE3OTdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=