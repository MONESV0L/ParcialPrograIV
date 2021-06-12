"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _userstate = _interopRequireDefault(require("./routes/userstate.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('pkg', _package["default"]); //esto nos mostrara las diferentes tipos de solicitudes que se hagan al servidor

app.use((0, _morgan["default"])('dev')); //esto es para que pueda interpretar los archivos en formato json

app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});
app.use('/api/states', _userstate["default"]);
app.use('/api/auth', _userstate["default"]);
var _default = app;
exports["default"] = _default;