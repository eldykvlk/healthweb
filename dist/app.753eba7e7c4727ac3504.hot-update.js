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
      var scriptElement = document.createElement('script-js');

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
/******/ 	__webpack_require__.h = () => ("b9b2bd614c24503cc4cf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjc1M2ViYTdlN2M0NzI3YWMzNTA0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLFVBQVUsMEJBQUFDLFlBQUE7RUFBQUMsU0FBQSxDQUFBRixVQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosVUFBQTtFQUNkLFNBQUFBLFdBQUEsRUFBYztJQUFBSyxlQUFBLE9BQUFMLFVBQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFHLElBQUE7RUFFZDtFQUFDQyxZQUFBLENBQUFQLFVBQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsa0JBQUEsRUFBb0I7TUFDbEI7TUFDQSxJQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7TUFFekQ7TUFDQUYsYUFBYSxDQUFDRyxTQUFTLHNnQ0FpQ3RCOztNQUVEO01BQ0EsSUFBSSxDQUFDQyxXQUFXLENBQUNKLGFBQWEsQ0FBQztJQUNqQztFQUFDO0VBQUEsT0FBQVgsVUFBQTtBQUFBLGdCQUFBZ0IsZ0JBQUEsQ0EvQ3NCQyxXQUFXO0FBa0RwQ0MsY0FBYyxDQUFDQyxNQUFNLENBQUMsV0FBVyxFQUFFbkIsVUFBVSxDQUFDOzs7Ozs7OztVQ2xEOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydDAvLi9zcmMvc2NyaXB0cy9jb21wb25lbnQvc2NyaXB0LXF1aXouanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTY3JpcHRRdWl6IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgLy8gQ3JlYXRlIGEgc2NyaXB0IGVsZW1lbnRcclxuICAgIGNvbnN0IHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQtanMnKTtcclxuXHJcbiAgICAvLyBTZXQgdGhlIGNvbnRlbnQgb2YgdGhlIHNjcmlwdCBlbGVtZW50XHJcbiAgICBzY3JpcHRFbGVtZW50LmlubmVySFRNTCA9IGA8c2NyaXB0PlxyXG4gICAgICBmdW5jdGlvbiBzY3JvbGxUb1NlY3Rpb24yKCkge1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoJyNzZWN0aW9uMicpLm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnc2xvdydcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBmaW5kTG9jYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgbWFwc1VybCA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoL3BzaWtvbG9nK3RlcmRla2F0L0AnICsgbGF0aXR1ZGUgKyAnLCcgKyBsb25naXR1ZGU7XHJcblxyXG4gICAgICAgICAgICAgIHdpbmRvdy5vcGVuKG1hcHNVcmwsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAndXBzcyEnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0dhZ2FsIG1lbmRhcGF0a2FuIGxva2FzaS4gUGFzdGlrYW4gR1BTIEFuZGEgYWt0aWYhJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KCdCcm93c2VyIEFuZGEgdGlkYWsgbWVuZHVrdW5nIGdlb2xva2FzaS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH08L3NjcmlwdD5cclxuICAgIGA7XHJcblxyXG4gICAgLy8gQXBwZW5kIHRoZSBzY3JpcHQgZWxlbWVudCB0byB0aGUgY3VzdG9tIGVsZW1lbnRcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NjcmlwdC1qcycsIFNjcmlwdFF1aXopO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiOWIyYmQ2MTRjMjQ1MDNjYzRjZlwiKSJdLCJuYW1lcyI6WyJTY3JpcHRRdWl6IiwiX0hUTUxFbGVtZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJzY3JpcHRFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiSFRNTEVsZW1lbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSJdLCJzb3VyY2VSb290IjoiIn0=