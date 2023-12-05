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
customElements.define('script-js', ScriptQuiz);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("89846a493f26d5e38e6d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjNmMjM1ZmQ5NDdhOGNhNWU4ZmNkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLFVBQVUsMEJBQUFDLFlBQUE7RUFBQUMsU0FBQSxDQUFBRixVQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosVUFBQTtFQUNkLFNBQUFBLFdBQUEsRUFBYztJQUFBSyxlQUFBLE9BQUFMLFVBQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFHLElBQUE7RUFFZDtFQUFDQyxZQUFBLENBQUFQLFVBQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsa0JBQUEsRUFBb0I7TUFDbEI7TUFDQSxJQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7TUFFdEQ7TUFDQUYsYUFBYSxDQUFDRyxTQUFTLHEvQkFpQ3RCOztNQUVEO01BQ0EsSUFBSSxDQUFDQyxXQUFXLENBQUNKLGFBQWEsQ0FBQztJQUNqQztFQUFDO0VBQUEsT0FBQVgsVUFBQTtBQUFBLGdCQUFBZ0IsZ0JBQUEsQ0EvQ3NCQyxXQUFXO0FBa0RwQ0MsY0FBYyxDQUFDQyxNQUFNLENBQUMsV0FBVyxFQUFFbkIsVUFBVSxDQUFDOzs7Ozs7OztVQ2xEOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydDAvLi9zcmMvc2NyaXB0cy9jb21wb25lbnQvc2NyaXB0LXF1aXouanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTY3JpcHRRdWl6IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgLy8gQ3JlYXRlIGEgc2NyaXB0IGVsZW1lbnRcclxuICAgIGNvbnN0IHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcbiAgICAvLyBTZXQgdGhlIGNvbnRlbnQgb2YgdGhlIHNjcmlwdCBlbGVtZW50XHJcbiAgICBzY3JpcHRFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgZnVuY3Rpb24gc2Nyb2xsVG9TZWN0aW9uMigpIHtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZShcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCcjc2VjdGlvbjInKS5vZmZzZXQoKS50b3AsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJ3Nsb3cnXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gZmluZExvY2F0aW9uKCkge1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxhdGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IG1hcHNVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC9wc2lrb2xvZyt0ZXJkZWthdC9AJyArIGxhdGl0dWRlICsgJywnICsgbG9uZ2l0dWRlO1xyXG5cclxuICAgICAgICAgICAgICB3aW5kb3cub3BlbihtYXBzVXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3Vwc3MhJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdHYWdhbCBtZW5kYXBhdGthbiBsb2thc2kuIFBhc3Rpa2FuIEdQUyBBbmRhIGFrdGlmIScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydCgnQnJvd3NlciBBbmRhIHRpZGFrIG1lbmR1a3VuZyBnZW9sb2thc2kuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgc2NyaXB0IGVsZW1lbnQgdG8gdGhlIGN1c3RvbSBlbGVtZW50XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHNjcmlwdEVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzY3JpcHQtanMnLCBTY3JpcHRRdWl6KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODk4NDZhNDkzZjI2ZDVlMzhlNmRcIikiXSwibmFtZXMiOlsiU2NyaXB0UXVpeiIsIl9IVE1MRWxlbWVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3RlZENhbGxiYWNrIiwic2NyaXB0RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiX3dyYXBOYXRpdmVTdXBlciIsIkhUTUxFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiXSwic291cmNlUm9vdCI6IiJ9