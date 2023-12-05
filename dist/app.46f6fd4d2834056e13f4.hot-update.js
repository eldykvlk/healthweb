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



<button class="btn btn-primary"onclick="nextPage()">Next</button>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Set checkbox state based on local storage
    var selectedOption = localStorage.getItem('soal1');
    if (selectedOption) {
      document.getElementById('q1_option' + selectedOption).checked = true;
    }
  });

  function nextPage() {
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
/******/ 	__webpack_require__.h = () => ("caa111f51ce085c3e2e6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjQ2ZjZmZDRkMjgzNDA1NmUxM2Y0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkcsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7Ozs7VUNqSXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvc29hbDEuanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRnVuZ3NpIHVudHVrIG1lbmdhbWJpbCBkYXRhIHBlcnRhbnlhYW4gZGFyaSBmaWxlIEpTT05cclxuICAgIGZ1bmN0aW9uIGZldGNoUXVlc3Rpb25EYXRhKHF1ZXN0aW9uTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBmZXRjaCgncHVibGljL2RhdGEvcXVpcy5qc29uJylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAvLyBTZXQgcGVydGFueWFhbiBwYWRhIGVsZW1lbiBIVE1MXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpek51bWJlcicpLnRleHRDb250ZW50ID0gJ1BlcnRhbnlhYW4gJyArIHF1ZXN0aW9uTnVtYmVyICsgJy8xMCc7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpelF1ZXN0aW9uJykudGV4dENvbnRlbnQgPSBkYXRhW3F1ZXN0aW9uTnVtYmVyIC0gMV0uc29hbHF1aXo7IC8vIENoZWNrIGZvciB0aGUgY29ycmVjdCBwcm9wZXJ0eSBuYW1lXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcXVpeiBkYXRhOicsIGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCBwZXJ0YW55YWFuIHBlcnRhbWFcclxuICAgIGZldGNoUXVlc3Rpb25EYXRhKDEpO1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgXCJOZXh0XCIgYnV0dG9uXHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgU29hbDEgPSB7XHJcblxyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbjwhRE9DVFlQRSBodG1sPlxyXG48aHRtbCBsYW5nPVwiZW5cIj5cclxuPGhlYWQ+XHJcbiAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XHJcbiAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj5cclxuICA8dGl0bGU+VGVzIFRpbmdrYXQgS2VzZWhhdGFuIE1lbnRhbDwvdGl0bGU+XHJcbiAgPGxpbmsgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj5cclxuXHJcbiAgPHN0eWxlPlxyXG4gICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gICAgfVxyXG4gIDwvc3R5bGU+XHJcbjwvaGVhZD5cclxuPGJvZHkgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDEwMHZoO1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIHAtNFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIG1iLTRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIHN0eWxlPVwid2lkdGg6MjA7IGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjNcIiAgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz1cIjBcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBFbGVtZW50IHVudHVrIG1lbmFtcGlsa2FuIG5vbW9yIGRhbiBwZXJ0YW55YWFuIC0tPlxyXG4gICAgPGg1IGlkPVwicXVpek51bWJlclwiIGNsYXNzPVwibWItNFwiPjwvaDU+XHJcbiAgICA8aDQgaWQ9XCJxdWl6UXVlc3Rpb25cIiBjbGFzcz1cIm1iLTRcIj48L2g0PlxyXG4gICAgPGZvcm0gaWQ9XCJxdWl6Rm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPkl5YSwgbGViaWggZGFyaSBiaWFzYW55YVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxMVwiIHZhbHVlPVwiNFwiIGlkPVwicTFfb3B0aW9uNFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+U2FtYSBzYWphIHNlcGVydGkgYmlhc2FueWFcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicTFcIiB2YWx1ZT1cIjNcIiBpZD1cInExX29wdGlvbjNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5LdXJhbmcgZGFyaSBiaWFzYW55YVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxMVwiIHZhbHVlPVwiMlwiIGlkPVwicTFfb3B0aW9uMlwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+U2FuZ2F0IGJlcmt1cmFuZyBkYXJpIGJpYXNhbnlhXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInExXCIgdmFsdWU9XCIxXCIgaWQ9XCJxMV9vcHRpb24xXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuXHJcblxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwib25jbGljaz1cIm5leHRQYWdlKClcIj5OZXh0PC9idXR0b24+XHJcblxyXG48c2NyaXB0PlxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNldCBjaGVja2JveCBzdGF0ZSBiYXNlZCBvbiBsb2NhbCBzdG9yYWdlXHJcbiAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29hbDEnKTtcclxuICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncTFfb3B0aW9uJyArIHNlbGVjdGVkT3B0aW9uKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dFBhZ2UoKSB7XHJcbiAgICB2YXIgcXVlc3Rpb25OdW1iZXIgPSAxO1xyXG4gICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1xJyArIHF1ZXN0aW9uTnVtYmVyICsgJ106Y2hlY2tlZCcpO1xyXG4gICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XHJcbiAgICAgIHZhciBzY29yZTEgPSBwYXJzZUludChzZWxlY3RlZE9wdGlvbi52YWx1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb2FsMScsIHNjb3JlMSk7XHJcblxyXG4gICAgICBpZiAocXVlc3Rpb25OdW1iZXIgPCAxMCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvc29hbCcgKyAocXVlc3Rpb25OdW1iZXIgKyAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBKaWthIGluaSBhZGFsYWggaGFsYW1hbiB0ZXJha2hpciAoc29hbCAxMCksIHBpbmRhaCBrZSBoYWxhbWFuIGhhc2lsXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaGFzaWwuaHRtbCc7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdQaWxpaCBzYWxhaCBzYXR1IG9wc2kgc2ViZWx1bSBtZWxhbmp1dGthbi4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIDwvZGl2PlxyXG48L2JvZHk+XHJcbjwvaHRtbD5cclxuXHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG5cclxuICB9LFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvYWwxOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNhYTExMWY1MWNlMDg1YzNlMmU2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9