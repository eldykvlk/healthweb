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



<button class="btn btn-primary" id="btnNext1">Next</button>

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
        window.location.href = 'soal' + (questionNumber + 1) + '.html';
      } else {
        // Jika ini adalah halaman terakhir (soal 10), pindah ke halaman hasil
        window.location.href = 'hasil.html';
      }
    } else {
      alert('Pilih salah satu opsi sebelum melanjutkan.');
    }
  };

  // Add event listener to the "Next" button
  document.getElementById('btnNext1').addEventListener('click', function () {
    nextPage();
  });
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
/******/ 	__webpack_require__.h = () => ("d71c7b76a57bc7b6f9f8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNjY2YyNTBiN2NiM2JhYjIxNzRkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkcsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLOzs7Ozs7OztVQ3BJcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydDAvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9zb2FsMS5qcyIsIndlYnBhY2s6Ly9zdGFydDAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBGdW5nc2kgdW50dWsgbWVuZ2FtYmlsIGRhdGEgcGVydGFueWFhbiBkYXJpIGZpbGUgSlNPTlxyXG4gICAgZnVuY3Rpb24gZmV0Y2hRdWVzdGlvbkRhdGEocXVlc3Rpb25OdW1iZXIpIHtcclxuICAgICAgcmV0dXJuIGZldGNoKCdwdWJsaWMvZGF0YS9xdWlzLmpzb24nKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIC8vIFNldCBwZXJ0YW55YWFuIHBhZGEgZWxlbWVuIEhUTUxcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6TnVtYmVyJykudGV4dENvbnRlbnQgPSAnUGVydGFueWFhbiAnICsgcXVlc3Rpb25OdW1iZXIgKyAnLzEwJztcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6UXVlc3Rpb24nKS50ZXh0Q29udGVudCA9IGRhdGFbcXVlc3Rpb25OdW1iZXIgLSAxXS5zb2FscXVpejsgLy8gQ2hlY2sgZm9yIHRoZSBjb3JyZWN0IHByb3BlcnR5IG5hbWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdWl6IGRhdGE6JywgZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkIHBlcnRhbnlhYW4gcGVydGFtYVxyXG4gICAgZmV0Y2hRdWVzdGlvbkRhdGEoMSk7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBcIk5leHRcIiBidXR0b25cclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBTb2FsMSA9IHtcclxuXHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuPCFET0NUWVBFIGh0bWw+XHJcbjxodG1sIGxhbmc9XCJlblwiPlxyXG48aGVhZD5cclxuICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cclxuICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxyXG4gIDx0aXRsZT5UZXMgVGluZ2thdCBLZXNlaGF0YW4gTWVudGFsPC90aXRsZT5cclxuICA8bGluayBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPlxyXG5cclxuICA8c3R5bGU+XHJcbiAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgICB9XHJcbiAgPC9zdHlsZT5cclxuPC9oZWFkPlxyXG48Ym9keSBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlPVwibWluLWhlaWdodDogMTAwdmg7XCI+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgcC00XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MgbWItNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgc3R5bGU9XCJ3aWR0aDoyMDsgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmM1wiICByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwiMFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIEVsZW1lbnQgdW50dWsgbWVuYW1waWxrYW4gbm9tb3IgZGFuIHBlcnRhbnlhYW4gLS0+XHJcbiAgICA8aDUgaWQ9XCJxdWl6TnVtYmVyXCIgY2xhc3M9XCJtYi00XCI+PC9oNT5cclxuICAgIDxoNCBpZD1cInF1aXpRdWVzdGlvblwiIGNsYXNzPVwibWItNFwiPjwvaDQ+XHJcbiAgICA8Zm9ybSBpZD1cInF1aXpGb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+SXlhLCBsZWJpaCBkYXJpIGJpYXNhbnlhXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInExXCIgdmFsdWU9XCI0XCIgaWQ9XCJxMV9vcHRpb240XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5TYW1hIHNhamEgc2VwZXJ0aSBiaWFzYW55YVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxMVwiIHZhbHVlPVwiM1wiIGlkPVwicTFfb3B0aW9uM1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPkt1cmFuZyBkYXJpIGJpYXNhbnlhXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInExXCIgdmFsdWU9XCIyXCIgaWQ9XCJxMV9vcHRpb24yXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5TYW5nYXQgYmVya3VyYW5nIGRhcmkgYmlhc2FueWFcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicTFcIiB2YWx1ZT1cIjFcIiBpZD1cInExX29wdGlvbjFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG5cclxuXHJcblxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJidG5OZXh0MVwiPk5leHQ8L2J1dHRvbj5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU2V0IGNoZWNrYm94IHN0YXRlIGJhc2VkIG9uIGxvY2FsIHN0b3JhZ2VcclxuICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2FsMScpO1xyXG4gICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxMV9vcHRpb24nICsgc2VsZWN0ZWRPcHRpb24pLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0UGFnZSgpIHtcclxuICAgIHZhciBxdWVzdGlvbk51bWJlciA9IDE7XHJcbiAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXEnICsgcXVlc3Rpb25OdW1iZXIgKyAnXTpjaGVja2VkJyk7XHJcbiAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcclxuICAgICAgdmFyIHNjb3JlMSA9IHBhcnNlSW50KHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvYWwxJywgc2NvcmUxKTtcclxuXHJcbiAgICAgIGlmIChxdWVzdGlvbk51bWJlciA8IDEwKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnc29hbCcgKyAocXVlc3Rpb25OdW1iZXIgKyAxKSArICcuaHRtbCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSmlrYSBpbmkgYWRhbGFoIGhhbGFtYW4gdGVyYWtoaXIgKHNvYWwgMTApLCBwaW5kYWgga2UgaGFsYW1hbiBoYXNpbFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2hhc2lsLmh0bWwnO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnUGlsaWggc2FsYWggc2F0dSBvcHNpIHNlYmVsdW0gbWVsYW5qdXRrYW4uJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBcIk5leHRcIiBidXR0b25cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuTmV4dDEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5leHRQYWdlKCk7XHJcbiAgfSk7XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIDwvZGl2PlxyXG48L2JvZHk+XHJcbjwvaHRtbD5cclxuXHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG5cclxuICB9LFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvYWwxOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ3MWM3Yjc2YTU3YmM3YjZmOWY4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9