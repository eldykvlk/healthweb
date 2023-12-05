"use strict";
self["webpackHotUpdatestart0"]("app",{

/***/ "./src/scripts/views/pages/soal1.js":
/*!******************************************!*\
  !*** ./src/scripts/views/pages/soal1.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   nextPage1: () => (/* binding */ nextPage1)
/* harmony export */ });
 const nextPage1 = () => {
        var questionNumber = 1;
        var selectedOption = document.querySelector('input[name=q' + questionNumber + ']:checked');
        if (selectedOption) {
          var score1 = parseInt(selectedOption.value);
          localStorage.setItem('soal1', score1);

          if (questionNumber < 10) {
            window.location.href = 'soal' + (questionNumber + 1);
          } else {
            // Jika ini adalah halaman terakhir (soal 10), pindah ke halaman hasil
            window.location.href = 'hasil.html';
          }
        } else {
          alert('Pilih salah satu opsi sebelum melanjutkan.');
        }
      };   




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



    </script>
  </div>
</body>
</html>

    `;
  },

  async afterRender() {

    // Ambil elemen button dan tambahkan event listener
    const btnNext = document.getElementById('btnNext1');
    btnNext.addEventListener('click', nextPage1);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Soal1);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("152591e3ef36e41cfb75")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjgzZmI0ZTFmM2Q2YjU4ZTE3ZTQ5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7O1VDaEdwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL3NvYWwxLmpzIiwid2VicGFjazovL3N0YXJ0MC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiIGV4cG9ydCBjb25zdCBuZXh0UGFnZTEgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uTnVtYmVyID0gMTtcclxuICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXEnICsgcXVlc3Rpb25OdW1iZXIgKyAnXTpjaGVja2VkJyk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XHJcbiAgICAgICAgICB2YXIgc2NvcmUxID0gcGFyc2VJbnQoc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvYWwxJywgc2NvcmUxKTtcclxuXHJcbiAgICAgICAgICBpZiAocXVlc3Rpb25OdW1iZXIgPCAxMCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdzb2FsJyArIChxdWVzdGlvbk51bWJlciArIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSmlrYSBpbmkgYWRhbGFoIGhhbGFtYW4gdGVyYWtoaXIgKHNvYWwgMTApLCBwaW5kYWgga2UgaGFsYW1hbiBoYXNpbFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdoYXNpbC5odG1sJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoJ1BpbGloIHNhbGFoIHNhdHUgb3BzaSBzZWJlbHVtIG1lbGFuanV0a2FuLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTsgICBcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFNvYWwxID0ge1xyXG5cclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG48IURPQ1RZUEUgaHRtbD5cclxuPGh0bWwgbGFuZz1cImVuXCI+XHJcbjxoZWFkPlxyXG4gIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxyXG4gIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XHJcbiAgPHRpdGxlPlRlcyBUaW5na2F0IEtlc2VoYXRhbiBNZW50YWw8L3RpdGxlPlxyXG4gIDxsaW5rIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+XHJcblxyXG4gIDxzdHlsZT5cclxuICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICAgIH1cclxuICA8L3N0eWxlPlxyXG48L2hlYWQ+XHJcbjxib2R5IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiAxMDB2aDtcIj5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBwLTRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcyBtYi00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBzdHlsZT1cIndpZHRoOjIwOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzXCIgIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9XCIwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gRWxlbWVudCB1bnR1ayBtZW5hbXBpbGthbiBub21vciBkYW4gcGVydGFueWFhbiAtLT5cclxuICAgIDxoNSBpZD1cInF1aXpOdW1iZXJcIiBjbGFzcz1cIm1iLTRcIj48L2g1PlxyXG4gICAgPGg0IGlkPVwicXVpelF1ZXN0aW9uXCIgY2xhc3M9XCJtYi00XCI+PC9oND5cclxuICAgIDxmb3JtIGlkPVwicXVpekZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1jb250YWluZXJcIj5JeWEsIGxlYmloIGRhcmkgYmlhc2FueWFcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicTFcIiB2YWx1ZT1cIjRcIiBpZD1cInExX29wdGlvbjRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPlNhbWEgc2FqYSBzZXBlcnRpIGJpYXNhbnlhXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInExXCIgdmFsdWU9XCIzXCIgaWQ9XCJxMV9vcHRpb24zXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8tY29udGFpbmVyXCI+S3VyYW5nIGRhcmkgYmlhc2FueWFcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicTFcIiB2YWx1ZT1cIjJcIiBpZD1cInExX29wdGlvbjJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWNvbnRhaW5lclwiPlNhbmdhdCBiZXJrdXJhbmcgZGFyaSBiaWFzYW55YVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxMVwiIHZhbHVlPVwiMVwiIGlkPVwicTFfb3B0aW9uMVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJidG5OZXh0MVwiPk5leHQ8L2J1dHRvbj5cclxuXHJcbiAgICA8c2NyaXB0PlxyXG5cclxuXHJcblxyXG4gICAgPC9zY3JpcHQ+XHJcbiAgPC9kaXY+XHJcbjwvYm9keT5cclxuPC9odG1sPlxyXG5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcblxyXG4gICAgLy8gQW1iaWwgZWxlbWVuIGJ1dHRvbiBkYW4gdGFtYmFoa2FuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICBjb25zdCBidG5OZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bk5leHQxJyk7XHJcbiAgICBidG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFBhZ2UxKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29hbDE7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTUyNTkxZTNlZjM2ZTQxY2ZiNzVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=