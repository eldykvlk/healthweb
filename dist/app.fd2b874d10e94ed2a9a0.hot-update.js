self["webpackHotUpdatestart0"]("app",{

/***/ "./src/scripts/component/script-quiz.js":
/*!**********************************************!*\
  !*** ./src/scripts/component/script-quiz.js ***!
  \**********************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ScriptQuiz = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ScriptQuiz, _HTMLElement);
  var _super = _createSuper(ScriptQuiz);
  function ScriptQuiz() {
    _classCallCheck(this, ScriptQuiz);
    return _super.call(this);
  }
  _createClass(ScriptQuiz, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      // Create a script element
      var scriptElement = document.createElement('script');

      // Set the content of the script element
      scriptElement.innerHTML = "\n      function scrollToSection2() {\n        $('html, body').animate(\n          {\n            scrollTop: $('#section2').offset().top,\n          },\n          'slow'\n        );\n      }\n\n      function findLocation() {\n        if (navigator.geolocation) {\n          navigator.geolocation.getCurrentPosition(\n            function (position) {\n              const latitude = position.coords.latitude;\n              const longitude = position.coords.longitude;\n\n              const mapsUrl = 'https://www.google.com/maps/search/psikolog+terdekat/@' + latitude + ',' + longitude;\n\n              window.open(mapsUrl, '_blank');\n            },\n            function (error) {\n              Swal.fire({\n                title: 'upss!',\n                text: 'Gagal mendapatkan lokasi. Pastikan GPS Anda aktif!',\n                icon: 'error',\n              });\n            }\n          );\n        } else {\n          alert('Browser Anda tidak mendukung geolokasi.');\n        }\n      }\n    ";

      // Append the script element to the custom element
      this.appendChild(scriptElement);
    }
  }]);
  return ScriptQuiz;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('script', ScriptQuiz);

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _component_script_quiz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/script-quiz */ "./src/scripts/component/script-quiz.js");
/* harmony import */ var _component_script_quiz__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_component_script_quiz__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/app */ "./src/scripts/views/app.js");
/* harmony import */ var _views_pages_mulai_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/pages/mulai-page */ "./src/scripts/views/pages/mulai-page.js");
/* harmony import */ var _views_pages_soal1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/pages/soal1 */ "./src/scripts/views/pages/soal1.js");
/* harmony import */ var _views_pages_soal1__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_views_pages_soal1__WEBPACK_IMPORTED_MODULE_9__);










// eslint-disable-next-line no-unused-vars
var app = new _views_app__WEBPACK_IMPORTED_MODULE_7__["default"]();
window.addEventListener('hashchange', function () {
  app.renderPage();
});
window.addEventListener('load', function () {
  app.renderPage();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3f235fd947a8ca5e8fcd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmZkMmI4NzRkMTBlOTRlZDJhOWEwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLFVBQVUsMEJBQUFDLFlBQUE7RUFBQUMsU0FBQSxDQUFBRixVQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosVUFBQTtFQUNkLFNBQUFBLFdBQUEsRUFBYztJQUFBSyxlQUFBLE9BQUFMLFVBQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFHLElBQUE7RUFFZDtFQUFDQyxZQUFBLENBQUFQLFVBQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsa0JBQUEsRUFBb0I7TUFDbEI7TUFDQSxJQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7TUFFdEQ7TUFDQUYsYUFBYSxDQUFDRyxTQUFTLHEvQkFpQ3RCOztNQUVEO01BQ0EsSUFBSSxDQUFDQyxXQUFXLENBQUNKLGFBQWEsQ0FBQztJQUNqQztFQUFDO0VBQUEsT0FBQVgsVUFBQTtBQUFBLGdCQUFBZ0IsZ0JBQUEsQ0EvQ3NCQyxXQUFXO0FBa0RwQ0MsY0FBYyxDQUFDQyxNQUFNLENBQUMsUUFBUSxFQUFFbkIsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRGQ7QUFDRDtBQUNNO0FBQ047QUFDQztBQUNDO0FBQ0c7QUFDSDtBQUNlO0FBQ0w7QUFDeEM7QUFDQSxJQUFNdUIsR0FBRyxHQUFHLElBQUlILGtEQUFHLENBQUMsQ0FBQztBQUVyQkksTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBTTtFQUMxQ0YsR0FBRyxDQUFDRyxVQUFVLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRkYsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBTTtFQUNwQ0YsR0FBRyxDQUFDRyxVQUFVLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUM7Ozs7Ozs7O1VDbkJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50L3NjcmlwdC1xdWl6LmpzIiwid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3N0YXJ0MC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2NyaXB0UXVpeiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIC8vIENyZWF0ZSBhIHNjcmlwdCBlbGVtZW50XHJcbiAgICBjb25zdCBzY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBjb250ZW50IG9mIHRoZSBzY3JpcHQgZWxlbWVudFxyXG4gICAgc2NyaXB0RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIGZ1bmN0aW9uIHNjcm9sbFRvU2VjdGlvbjIoKSB7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJCgnI3NlY3Rpb24yJykub2Zmc2V0KCkudG9wLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICdzbG93J1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGZpbmRMb2NhdGlvbigpIHtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICBjb25zdCBsYXRpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBtYXBzVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvcHNpa29sb2crdGVyZGVrYXQvQCcgKyBsYXRpdHVkZSArICcsJyArIGxvbmdpdHVkZTtcclxuXHJcbiAgICAgICAgICAgICAgd2luZG93Lm9wZW4obWFwc1VybCwgJ19ibGFuaycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd1cHNzIScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnR2FnYWwgbWVuZGFwYXRrYW4gbG9rYXNpLiBQYXN0aWthbiBHUFMgQW5kYSBha3RpZiEnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoJ0Jyb3dzZXIgQW5kYSB0aWRhayBtZW5kdWt1bmcgZ2VvbG9rYXNpLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIHNjcmlwdCBlbGVtZW50IHRvIHRoZSBjdXN0b20gZWxlbWVudFxyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2NyaXB0JywgU2NyaXB0UXVpeik7XHJcbiIsImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcmVzcG9uc2l2ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9xdWlzLmNzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnQvbmF2LWJhcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnQvZm9vdC1iYXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L3NjcmlwdC1xdWl6JztcclxuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXdzL2FwcCc7XHJcbmltcG9ydCBNdWxhaSBmcm9tICcuL3ZpZXdzL3BhZ2VzL211bGFpLXBhZ2UnO1xyXG5pbXBvcnQgU29hbDEgZnJvbSAnLi92aWV3cy9wYWdlcy9zb2FsMSc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICBhcHAucmVuZGVyUGFnZSgpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGFwcC5yZW5kZXJQYWdlKCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNmMjM1ZmQ5NDdhOGNhNWU4ZmNkXCIpIl0sIm5hbWVzIjpbIlNjcmlwdFF1aXoiLCJfSFRNTEVsZW1lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0ZWRDYWxsYmFjayIsInNjcmlwdEVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIl93cmFwTmF0aXZlU3VwZXIiLCJIVE1MRWxlbWVudCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiQXBwIiwiTXVsYWkiLCJTb2FsMSIsImFwcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==