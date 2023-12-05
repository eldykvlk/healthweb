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
    // Fungsi untuk mengambil data pertanyaan dari file JSON
    async function fetchQuestionData(questionNumber) {
      try {
        const response = await fetch('public/data/quis.json');
        const data = await response.json();

        // Set pertanyaan pada elemen HTML
        document.getElementById('quizNumber').textContent = 'Pertanyaan ' + questionNumber + '/10';
        document.getElementById('quizQuestion').textContent = data[questionNumber - 1].soalquiz;
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    }

    // Fungsi untuk halaman pertama (onDOMContentLoaded)
    function onDOMContentLoaded() {
      // Set checkbox state based on local storage
      var selectedOption = localStorage.getItem('soal1');
      if (selectedOption) {
        document.getElementById('q1_option' + selectedOption).checked = true;
      }

      // Load pertanyaan pertama
      fetchQuestionData(1);

      // Tambahkan event listener untuk "Next" button
      document.getElementById('btnNext1').addEventListener('click', nextPage);
    }

    // Fungsi untuk halaman berikutnya
    function nextPage() {
      var questionNumber = 1;
      var selectedOption = document.querySelector('input[name=q' + questionNumber + ']:checked');
      if (selectedOption) {
        var score1 = parseInt(selectedOption.value);
        localStorage.setItem('soal1', score1);

        if (questionNumber < 10) {
          // Ganti dengan navigasi yang sesuai di proyek JavaScript Anda
          // window.location.href = 'soal' + (questionNumber + 1) + '.html';
        } else {
          // Ganti dengan navigasi yang sesuai di proyek JavaScript Anda
          // window.location.href = 'hasil.html';
        }
      } else {
        alert('Pilih salah satu opsi sebelum melanjutkan.');
      }
    }

    // Tambahkan event listener untuk "Next" button pada DOMContentLoaded
    document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

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
/******/ 	__webpack_require__.h = () => ("f3b052a8dfc1488999a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNiYWU2YmYzODFkZjdjMjZhYWIxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7OztVQ25IckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydDAvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9zb2FsMS5qcyIsIndlYnBhY2s6Ly9zdGFydDAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNvYWwxID0ge1xyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIC8vIEZ1bmdzaSB1bnR1ayBtZW5nYW1iaWwgZGF0YSBwZXJ0YW55YWFuIGRhcmkgZmlsZSBKU09OXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFF1ZXN0aW9uRGF0YShxdWVzdGlvbk51bWJlcikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ3B1YmxpYy9kYXRhL3F1aXMuanNvbicpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIC8vIFNldCBwZXJ0YW55YWFuIHBhZGEgZWxlbWVuIEhUTUxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpek51bWJlcicpLnRleHRDb250ZW50ID0gJ1BlcnRhbnlhYW4gJyArIHF1ZXN0aW9uTnVtYmVyICsgJy8xMCc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpRdWVzdGlvbicpLnRleHRDb250ZW50ID0gZGF0YVtxdWVzdGlvbk51bWJlciAtIDFdLnNvYWxxdWl6O1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHF1aXogZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5nc2kgdW50dWsgaGFsYW1hbiBwZXJ0YW1hIChvbkRPTUNvbnRlbnRMb2FkZWQpXHJcbiAgICBmdW5jdGlvbiBvbkRPTUNvbnRlbnRMb2FkZWQoKSB7XHJcbiAgICAgIC8vIFNldCBjaGVja2JveCBzdGF0ZSBiYXNlZCBvbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2FsMScpO1xyXG4gICAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncTFfb3B0aW9uJyArIHNlbGVjdGVkT3B0aW9uKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTG9hZCBwZXJ0YW55YWFuIHBlcnRhbWFcclxuICAgICAgZmV0Y2hRdWVzdGlvbkRhdGEoMSk7XHJcblxyXG4gICAgICAvLyBUYW1iYWhrYW4gZXZlbnQgbGlzdGVuZXIgdW50dWsgXCJOZXh0XCIgYnV0dG9uXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5OZXh0MScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmdzaSB1bnR1ayBoYWxhbWFuIGJlcmlrdXRueWFcclxuICAgIGZ1bmN0aW9uIG5leHRQYWdlKCkge1xyXG4gICAgICB2YXIgcXVlc3Rpb25OdW1iZXIgPSAxO1xyXG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXEnICsgcXVlc3Rpb25OdW1iZXIgKyAnXTpjaGVja2VkJyk7XHJcbiAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xyXG4gICAgICAgIHZhciBzY29yZTEgPSBwYXJzZUludChzZWxlY3RlZE9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvYWwxJywgc2NvcmUxKTtcclxuXHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uTnVtYmVyIDwgMTApIHtcclxuICAgICAgICAgIC8vIEdhbnRpIGRlbmdhbiBuYXZpZ2FzaSB5YW5nIHNlc3VhaSBkaSBwcm95ZWsgSmF2YVNjcmlwdCBBbmRhXHJcbiAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdzb2FsJyArIChxdWVzdGlvbk51bWJlciArIDEpICsgJy5odG1sJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gR2FudGkgZGVuZ2FuIG5hdmlnYXNpIHlhbmcgc2VzdWFpIGRpIHByb3llayBKYXZhU2NyaXB0IEFuZGFcclxuICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2hhc2lsLmh0bWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnUGlsaWggc2FsYWggc2F0dSBvcHNpIHNlYmVsdW0gbWVsYW5qdXRrYW4uJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUYW1iYWhrYW4gZXZlbnQgbGlzdGVuZXIgdW50dWsgXCJOZXh0XCIgYnV0dG9uIHBhZGEgRE9NQ29udGVudExvYWRlZFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgb25ET01Db250ZW50TG9hZGVkKTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8IURPQ1RZUEUgaHRtbD5cclxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XHJcbiAgICAgICAgICA8dGl0bGU+VGVzIFRpbmdrYXQgS2VzZWhhdGFuIE1lbnRhbDwvdGl0bGU+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPlxyXG4gICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvaGVhZD5cclxuICAgICAgICA8Ym9keSBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlPVwibWluLWhlaWdodDogMTAwdmg7XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBwLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIG1iLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgc3R5bGU9XCJ3aWR0aDoyMDsgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmM1wiICByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwiMFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSBFbGVtZW50IHVudHVrIG1lbmFtcGlsa2FuIG5vbW9yIGRhbiBwZXJ0YW55YWFuIC0tPlxyXG4gICAgICAgICAgICA8aDUgaWQ9XCJxdWl6TnVtYmVyXCIgY2xhc3M9XCJtYi00XCI+PC9oNT5cclxuICAgICAgICAgICAgPGg0IGlkPVwicXVpelF1ZXN0aW9uXCIgY2xhc3M9XCJtYi00XCI+PC9oND5cclxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJxdWl6Rm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5JeWEsIGxlYmloIGRhcmkgYmlhc2FueWFcclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxMVwiIHZhbHVlPVwiNFwiIGlkPVwicTFfb3B0aW9uNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPlNhbWEgc2FqYSBzZXBlcnRpIGJpYXNhbnlhXHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicTFcIiB2YWx1ZT1cIjNcIiBpZD1cInExX29wdGlvbjNcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+S3VyYW5nIGRhcmkgYmlhc2FueWFcclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxMVwiIHZhbHVlPVwiMlwiIGlkPVwicTFfb3B0aW9uMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPlNhbmdhdCBiZXJrdXJhbmcgZGFyaSBiaWFzYW55YVxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInExXCIgdmFsdWU9XCIxXCIgaWQ9XCJxMV9vcHRpb24xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJidG5OZXh0MVwiPk5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9odG1sPlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvYWwxO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmM2IwNTJhOGRmYzE0ODg5OTlhNFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==