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

    // Add event listener to the "Next" button
    document.getElementById('btnNext1').addEventListener('click', function () {
      nextPage1();
    });
  });




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
/******/ 	__webpack_require__.h = () => ("efcc7ed2fad3346964a2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjI1YjkwOGE4ZDg2ZjUxMzRhNzk3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkcsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7O1VDL0hwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL3NvYWwxLmpzIiwid2VicGFjazovL3N0YXJ0MC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEZ1bmdzaSB1bnR1ayBtZW5nYW1iaWwgZGF0YSBwZXJ0YW55YWFuIGRhcmkgZmlsZSBKU09OXHJcbiAgICBmdW5jdGlvbiBmZXRjaFF1ZXN0aW9uRGF0YShxdWVzdGlvbk51bWJlcikge1xyXG4gICAgICByZXR1cm4gZmV0Y2goJ3B1YmxpYy9kYXRhL3F1aXMuanNvbicpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgLy8gU2V0IHBlcnRhbnlhYW4gcGFkYSBlbGVtZW4gSFRNTFxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpOdW1iZXInKS50ZXh0Q29udGVudCA9ICdQZXJ0YW55YWFuICcgKyBxdWVzdGlvbk51bWJlciArICcvMTAnO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpRdWVzdGlvbicpLnRleHRDb250ZW50ID0gZGF0YVtxdWVzdGlvbk51bWJlciAtIDFdLnNvYWxxdWl6OyAvLyBDaGVjayBmb3IgdGhlIGNvcnJlY3QgcHJvcGVydHkgbmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHF1aXogZGF0YTonLCBlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgcGVydGFueWFhbiBwZXJ0YW1hXHJcbiAgICBmZXRjaFF1ZXN0aW9uRGF0YSgxKTtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIFwiTmV4dFwiIGJ1dHRvblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bk5leHQxJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG5leHRQYWdlMSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBTb2FsMSA9IHtcclxuXHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuPCFET0NUWVBFIGh0bWw+XHJcbjxodG1sIGxhbmc9XCJlblwiPlxyXG48aGVhZD5cclxuICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cclxuICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxyXG4gIDx0aXRsZT5UZXMgVGluZ2thdCBLZXNlaGF0YW4gTWVudGFsPC90aXRsZT5cclxuICA8bGluayBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPlxyXG5cclxuICA8c3R5bGU+XHJcbiAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgICB9XHJcbiAgPC9zdHlsZT5cclxuPC9oZWFkPlxyXG48Ym9keSBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlPVwibWluLWhlaWdodDogMTAwdmg7XCI+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgcC00XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MgbWItNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgc3R5bGU9XCJ3aWR0aDoyMDsgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmM1wiICByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwiMFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIEVsZW1lbnQgdW50dWsgbWVuYW1waWxrYW4gbm9tb3IgZGFuIHBlcnRhbnlhYW4gLS0+XHJcbiAgICA8aDUgaWQ9XCJxdWl6TnVtYmVyXCIgY2xhc3M9XCJtYi00XCI+PC9oNT5cclxuICAgIDxoNCBpZD1cInF1aXpRdWVzdGlvblwiIGNsYXNzPVwibWItNFwiPjwvaDQ+XHJcbiAgICA8Zm9ybSBpZD1cInF1aXpGb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+SXlhLCBsZWJpaCBkYXJpIGJpYXNhbnlhXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInExXCIgdmFsdWU9XCI0XCIgaWQ9XCJxMV9vcHRpb240XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5TYW1hIHNhamEgc2VwZXJ0aSBiaWFzYW55YVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxMVwiIHZhbHVlPVwiM1wiIGlkPVwicTFfb3B0aW9uM1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPkt1cmFuZyBkYXJpIGJpYXNhbnlhXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInExXCIgdmFsdWU9XCIyXCIgaWQ9XCJxMV9vcHRpb24yXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5TYW5nYXQgYmVya3VyYW5nIGRhcmkgYmlhc2FueWFcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicTFcIiB2YWx1ZT1cIjFcIiBpZD1cInExX29wdGlvbjFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cImJ0bk5leHQxXCI+TmV4dDwvYnV0dG9uPlxyXG5cclxuPHNjcmlwdD5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBTZXQgY2hlY2tib3ggc3RhdGUgYmFzZWQgb24gbG9jYWwgc3RvcmFnZVxyXG4gICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvYWwxJyk7XHJcbiAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ExX29wdGlvbicgKyBzZWxlY3RlZE9wdGlvbikuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbiAgY29uc3QgbmV4dFBhZ2UxID0gKCkgPT4ge1xyXG4gICAgdmFyIHF1ZXN0aW9uTnVtYmVyID0gMTtcclxuICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9cScgKyBxdWVzdGlvbk51bWJlciArICddOmNoZWNrZWQnKTtcclxuICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xyXG4gICAgICB2YXIgc2NvcmUxID0gcGFyc2VJbnQoc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29hbDEnLCBzY29yZTEpO1xyXG5cclxuICAgICAgaWYgKHF1ZXN0aW9uTnVtYmVyIDwgMTApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3NvYWwnICsgKHF1ZXN0aW9uTnVtYmVyICsgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSmlrYSBpbmkgYWRhbGFoIGhhbGFtYW4gdGVyYWtoaXIgKHNvYWwgMTApLCBwaW5kYWgga2UgaGFsYW1hbiBoYXNpbFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2hhc2lsLmh0bWwnO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnUGlsaWggc2FsYWggc2F0dSBvcHNpIHNlYmVsdW0gbWVsYW5qdXRrYW4uJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuXHJcbiAgPC9kaXY+XHJcbjwvYm9keT5cclxuPC9odG1sPlxyXG5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcblxyXG4gIH0sXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29hbDE7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWZjYzdlZDJmYWQzMzQ2OTY0YTJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=