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

      // Set the content of the script element
      scriptElement.innerHTML = "<script>\n      function scrollToSection2() {\n        $('html, body').animate(\n          {\n            scrollTop: $('#section2').offset().top,\n          },\n          'slow'\n        );\n      }\n\n      function findLocation() {\n        if (navigator.geolocation) {\n          navigator.geolocation.getCurrentPosition(\n            function (position) {\n              const latitude = position.coords.latitude;\n              const longitude = position.coords.longitude;\n\n              const mapsUrl = 'https://www.google.com/maps/search/psikolog+terdekat/@' + latitude + ',' + longitude;\n\n              window.open(mapsUrl, '_blank');\n            },\n            function (error) {\n              Swal.fire({\n                title: 'upss!',\n                text: 'Gagal mendapatkan lokasi. Pastikan GPS Anda aktif!',\n                icon: 'error',\n              });\n            }\n          );\n        } else {\n          alert('Browser Anda tidak mendukung geolokasi.');\n        }\n      }</script>\n    ";

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
/******/ 	__webpack_require__.h = () => ("753eba7e7c4727ac3504")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjU0OTM2MGM2NDE4YjY4NWRkYzkzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLFVBQVUsMEJBQUFDLFlBQUE7RUFBQUMsU0FBQSxDQUFBRixVQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosVUFBQTtFQUNkLFNBQUFBLFdBQUEsRUFBYztJQUFBSyxlQUFBLE9BQUFMLFVBQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFHLElBQUE7RUFFZDtFQUFDQyxZQUFBLENBQUFQLFVBQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsa0JBQUEsRUFBb0I7TUFDbEI7O01BRUE7TUFDQUMsYUFBYSxDQUFDQyxTQUFTLHNnQ0FpQ3RCOztNQUVEO01BQ0EsSUFBSSxDQUFDQyxXQUFXLENBQUNGLGFBQWEsQ0FBQztJQUNqQztFQUFDO0VBQUEsT0FBQVgsVUFBQTtBQUFBLGdCQUFBYyxnQkFBQSxDQTlDc0JDLFdBQVc7QUFpRHBDQyxjQUFjLENBQUNDLE1BQU0sQ0FBQyxXQUFXLEVBQUVqQixVQUFVLENBQUM7Ozs7Ozs7O1VDakQ5QyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0MC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudC9zY3JpcHQtcXVpei5qcyIsIndlYnBhY2s6Ly9zdGFydDAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNjcmlwdFF1aXogZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAvLyBDcmVhdGUgYSBzY3JpcHQgZWxlbWVudFxyXG5cclxuICAgIC8vIFNldCB0aGUgY29udGVudCBvZiB0aGUgc2NyaXB0IGVsZW1lbnRcclxuICAgIHNjcmlwdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxzY3JpcHQ+XHJcbiAgICAgIGZ1bmN0aW9uIHNjcm9sbFRvU2VjdGlvbjIoKSB7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJCgnI3NlY3Rpb24yJykub2Zmc2V0KCkudG9wLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICdzbG93J1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGZpbmRMb2NhdGlvbigpIHtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICBjb25zdCBsYXRpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBtYXBzVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvcHNpa29sb2crdGVyZGVrYXQvQCcgKyBsYXRpdHVkZSArICcsJyArIGxvbmdpdHVkZTtcclxuXHJcbiAgICAgICAgICAgICAgd2luZG93Lm9wZW4obWFwc1VybCwgJ19ibGFuaycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd1cHNzIScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnR2FnYWwgbWVuZGFwYXRrYW4gbG9rYXNpLiBQYXN0aWthbiBHUFMgQW5kYSBha3RpZiEnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoJ0Jyb3dzZXIgQW5kYSB0aWRhayBtZW5kdWt1bmcgZ2VvbG9rYXNpLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTwvc2NyaXB0PlxyXG4gICAgYDtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIHNjcmlwdCBlbGVtZW50IHRvIHRoZSBjdXN0b20gZWxlbWVudFxyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2NyaXB0LWpzJywgU2NyaXB0UXVpeik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc1M2ViYTdlN2M0NzI3YWMzNTA0XCIpIl0sIm5hbWVzIjpbIlNjcmlwdFF1aXoiLCJfSFRNTEVsZW1lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0ZWRDYWxsYmFjayIsInNjcmlwdEVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIl93cmFwTmF0aXZlU3VwZXIiLCJIVE1MRWxlbWVudCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==