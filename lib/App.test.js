"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("App - the main component", function () {
  it("renders without crashing", function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_App.default, null));
    expect(component).toMatchSnapshot();
  });
});