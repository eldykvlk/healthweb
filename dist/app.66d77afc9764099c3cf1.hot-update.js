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
            window.location.href = '#/soal' + (questionNumber + 1);
          } else {
            // Jika ini adalah halaman terakhir (soal 10), pindah ke halaman hasil
            window.location.href = 'hasil.html';
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
/******/ 	__webpack_require__.h = () => ("9b1286108b114883eb21")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjY2ZDc3YWZjOTc2NDA5OWMzY2YxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7O1VDakhyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL3NvYWwxLmpzIiwid2VicGFjazovL3N0YXJ0MC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU29hbDEgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgLy8gRnVuZ3NpIHVudHVrIG1lbmdhbWJpbCBkYXRhIHBlcnRhbnlhYW4gZGFyaSBmaWxlIEpTT05cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUXVlc3Rpb25EYXRhKHF1ZXN0aW9uTnVtYmVyKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgncHVibGljL2RhdGEvcXVpcy5qc29uJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHBlcnRhbnlhYW4gcGFkYSBlbGVtZW4gSFRNTFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6TnVtYmVyJykudGV4dENvbnRlbnQgPSAnUGVydGFueWFhbiAnICsgcXVlc3Rpb25OdW1iZXIgKyAnLzEwJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpelF1ZXN0aW9uJykudGV4dENvbnRlbnQgPSBkYXRhW3F1ZXN0aW9uTnVtYmVyIC0gMV0uc29hbHF1aXo7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcXVpeiBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmdzaSB1bnR1ayBoYWxhbWFuIHBlcnRhbWEgKG9uRE9NQ29udGVudExvYWRlZClcclxuICAgIGZ1bmN0aW9uIG9uRE9NQ29udGVudExvYWRlZCgpIHtcclxuICAgICAgLy8gU2V0IGNoZWNrYm94IHN0YXRlIGJhc2VkIG9uIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvYWwxJyk7XHJcbiAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxMV9vcHRpb24nICsgc2VsZWN0ZWRPcHRpb24pLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBMb2FkIHBlcnRhbnlhYW4gcGVydGFtYVxyXG4gICAgICBmZXRjaFF1ZXN0aW9uRGF0YSgxKTtcclxuXHJcbiAgICAgIC8vIFRhbWJhaGthbiBldmVudCBsaXN0ZW5lciB1bnR1ayBcIk5leHRcIiBidXR0b25cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bk5leHQxJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0UGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuZ3NpIHVudHVrIGhhbGFtYW4gYmVyaWt1dG55YVxyXG4gICAgZnVuY3Rpb24gbmV4dFBhZ2UoKSB7XHJcbiAgICAgIHZhciBxdWVzdGlvbk51bWJlciA9IDE7XHJcbiAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9cScgKyBxdWVzdGlvbk51bWJlciArICddOmNoZWNrZWQnKTtcclxuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XHJcbiAgICAgICAgdmFyIHNjb3JlMSA9IHBhcnNlSW50KHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29hbDEnLCBzY29yZTEpO1xyXG5cclxuICAgICAgICAgIGlmIChxdWVzdGlvbk51bWJlciA8IDEwKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvc29hbCcgKyAocXVlc3Rpb25OdW1iZXIgKyAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEppa2EgaW5pIGFkYWxhaCBoYWxhbWFuIHRlcmFraGlyIChzb2FsIDEwKSwgcGluZGFoIGtlIGhhbGFtYW4gaGFzaWxcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaGFzaWwuaHRtbCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KCdQaWxpaCBzYWxhaCBzYXR1IG9wc2kgc2ViZWx1bSBtZWxhbmp1dGthbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC8vIFRhbWJhaGthbiBldmVudCBsaXN0ZW5lciB1bnR1ayBcIk5leHRcIiBidXR0b24gcGFkYSBET01Db250ZW50TG9hZGVkXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBvbkRPTUNvbnRlbnRMb2FkZWQpO1xyXG5cclxuICAgIHJldHVybiBgXHJcbiAgICAgIDwhRE9DVFlQRSBodG1sPlxyXG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgICA8aGVhZD5cclxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj5cclxuICAgICAgICAgIDx0aXRsZT5UZXMgVGluZ2thdCBLZXNlaGF0YW4gTWVudGFsPC90aXRsZT5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+XHJcbiAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgIDxib2R5IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiAxMDB2aDtcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHAtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MgbWItNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBzdHlsZT1cIndpZHRoOjIwOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzXCIgIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9XCIwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIEVsZW1lbnQgdW50dWsgbWVuYW1waWxrYW4gbm9tb3IgZGFuIHBlcnRhbnlhYW4gLS0+XHJcbiAgICAgICAgICAgIDxoNSBpZD1cInF1aXpOdW1iZXJcIiBjbGFzcz1cIm1iLTRcIj48L2g1PlxyXG4gICAgICAgICAgICA8aDQgaWQ9XCJxdWl6UXVlc3Rpb25cIiBjbGFzcz1cIm1iLTRcIj48L2g0PlxyXG4gICAgICAgICAgICA8Zm9ybSBpZD1cInF1aXpGb3JtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPkl5YSwgbGViaWggZGFyaSBiaWFzYW55YVxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInExXCIgdmFsdWU9XCI0XCIgaWQ9XCJxMV9vcHRpb240XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+U2FtYSBzYWphIHNlcGVydGkgYmlhc2FueWFcclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxMVwiIHZhbHVlPVwiM1wiIGlkPVwicTFfb3B0aW9uM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5LdXJhbmcgZGFyaSBiaWFzYW55YVxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInExXCIgdmFsdWU9XCIyXCIgaWQ9XCJxMV9vcHRpb24yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+U2FuZ2F0IGJlcmt1cmFuZyBkYXJpIGJpYXNhbnlhXHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicTFcIiB2YWx1ZT1cIjFcIiBpZD1cInExX29wdGlvbjFcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cImJ0bk5leHQxXCI+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICA8L2h0bWw+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG5cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29hbDE7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjliMTI4NjEwOGIxMTQ4ODNlYjIxXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9