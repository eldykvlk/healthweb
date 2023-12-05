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
      <div class="card p-4" id="cardmulai">
        <img id="gambarmulai" src="images/mulai.jpg">
        <h5 class="mb-4" id="labelmulai">Selamat datang! Klik tombol "Mulai" untuk memulai tes.</h5>
        <button class="btn btn-primary" id="btnmulai">Mulai</button>
      </div>
    `;
  },

  async afterRender() {
    // Ambil elemen button dan tambahkan event listener
    const btnMulai = document.getElementById('btnmulai');
    btnMulai.addEventListener('click', startQuiz);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Soal1);





/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e733c78011d3fed384a3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmM0MGRkYzdhMWYyYjdhN2NkODJmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkcsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQztBQUNyQjtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3hDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL3NvYWwxLmpzIiwid2VicGFjazovL3N0YXJ0MC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEZ1bmdzaSB1bnR1ayBtZW5nYW1iaWwgZGF0YSBwZXJ0YW55YWFuIGRhcmkgZmlsZSBKU09OXHJcbiAgICBmdW5jdGlvbiBmZXRjaFF1ZXN0aW9uRGF0YShxdWVzdGlvbk51bWJlcikge1xyXG4gICAgICByZXR1cm4gZmV0Y2goJ3B1YmxpYy9kYXRhL3F1aXMuanNvbicpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgLy8gU2V0IHBlcnRhbnlhYW4gcGFkYSBlbGVtZW4gSFRNTFxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpOdW1iZXInKS50ZXh0Q29udGVudCA9ICdQZXJ0YW55YWFuICcgKyBxdWVzdGlvbk51bWJlciArICcvMTAnO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpRdWVzdGlvbicpLnRleHRDb250ZW50ID0gZGF0YVtxdWVzdGlvbk51bWJlciAtIDFdLnNvYWxxdWl6OyAvLyBDaGVjayBmb3IgdGhlIGNvcnJlY3QgcHJvcGVydHkgbmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHF1aXogZGF0YTonLCBlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgcGVydGFueWFhbiBwZXJ0YW1hXHJcbiAgICBmZXRjaFF1ZXN0aW9uRGF0YSgxKTtcclxuXHJcblxyXG4gIH0pO1xyXG5cclxuY29uc3QgU29hbDEgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcC00XCIgaWQ9XCJjYXJkbXVsYWlcIj5cclxuICAgICAgICA8aW1nIGlkPVwiZ2FtYmFybXVsYWlcIiBzcmM9XCJpbWFnZXMvbXVsYWkuanBnXCI+XHJcbiAgICAgICAgPGg1IGNsYXNzPVwibWItNFwiIGlkPVwibGFiZWxtdWxhaVwiPlNlbGFtYXQgZGF0YW5nISBLbGlrIHRvbWJvbCBcIk11bGFpXCIgdW50dWsgbWVtdWxhaSB0ZXMuPC9oNT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJidG5tdWxhaVwiPk11bGFpPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuICAgIC8vIEFtYmlsIGVsZW1lbiBidXR0b24gZGFuIHRhbWJhaGthbiBldmVudCBsaXN0ZW5lclxyXG4gICAgY29uc3QgYnRuTXVsYWkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRubXVsYWknKTtcclxuICAgIGJ0bk11bGFpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRRdWl6KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29hbDE7XHJcblxyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU3MzNjNzgwMTFkM2ZlZDM4NGEzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9