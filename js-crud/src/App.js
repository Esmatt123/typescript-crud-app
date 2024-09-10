"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _TodoList = _interopRequireDefault(require("./Components/TodoList"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_TodoList.default, null));
}
var _default = exports.default = App;