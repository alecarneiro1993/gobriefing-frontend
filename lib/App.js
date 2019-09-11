"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHooks = require("@apollo/react-hooks");

var _apolloBoost = _interopRequireDefault(require("apollo-boost"));

var _LoadingSpinner = _interopRequireDefault(require("custom_modules/elements/LoadingSpinner"));

var _AppRouter = _interopRequireDefault(require("./components/AppRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var client = new _apolloBoost.default({
  uri: "http://localhost:4000/"
});

function App() {
  return _react.default.createElement(_reactHooks.ApolloProvider, {
    client: client
  }, _react.default.createElement(_react.Suspense, {
    fallback: _react.default.createElement(_LoadingSpinner.default, null)
  }, _react.default.createElement(_AppRouter.default, null)));
}

var _default = App;
exports.default = _default;