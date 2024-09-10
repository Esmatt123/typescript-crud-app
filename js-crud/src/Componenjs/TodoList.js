"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _TodoItem = _interopRequireDefault(require("./TodoItem"));
var _TodoListModule = _interopRequireDefault(require("../styles/TodoList.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var TodoList = function TodoList() {
  var _useState = (0, _react.useState)(new Map()),
    _useState2 = _slicedToArray(_useState, 2),
    tasks = _useState2[0],
    setTasks = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    text = _useState4[0],
    setText = _useState4[1];
  var addTask = (0, _react.useCallback)(function (text) {
    var newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks(function (prevTasks) {
      var updatedTasks = new Map(prevTasks);
      updatedTasks.set(newTask.id, newTask);
      return updatedTasks;
    });
    setText('');
  }, []);
  var deleteTask = (0, _react.useCallback)(function (id) {
    setTasks(function (prevTasks) {
      var updatedTasks = new Map(prevTasks);
      updatedTasks.delete(id);
      return updatedTasks;
    });
  }, []);
  var toggleCompleted = (0, _react.useCallback)(function (id) {
    setTasks(function (prevTasks) {
      var updatedTasks = new Map(prevTasks);
      var task = updatedTasks.get(id);
      if (task) {
        updatedTasks.set(id, _objectSpread(_objectSpread({}, task), {}, {
          completed: !task.completed
        }));
      }
      return updatedTasks;
    });
  }, []);
  var updateTask = (0, _react.useCallback)(function (id, newText) {
    setTasks(function (prevTasks) {
      var updatedTasks = new Map(prevTasks);
      var task = updatedTasks.get(id);
      if (task) {
        updatedTasks.set(id, _objectSpread(_objectSpread({}, task), {}, {
          text: newText
        }));
      }
      return updatedTasks;
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", null, Array.from(tasks.values()).map(function (task) {
    return /*#__PURE__*/React.createElement(_TodoItem.default, {
      key: task.id,
      task: task,
      deleteTask: deleteTask,
      toggleCompleted: toggleCompleted,
      updateTask: updateTask
    });
  }), /*#__PURE__*/React.createElement("div", {
    className: _TodoListModule.default.container
  }, /*#__PURE__*/React.createElement("input", {
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return addTask(text);
    },
    disabled: text.trim() === ''
  }, "Add")));
};
var _default = exports.default = TodoList;