"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = (0, _styledComponents2.default)("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgOmni = function SvgOmni(props) {
  return _react2.default.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? "currentcolor" : "#1C347A",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M7.549 5.166a8.198 8.198 0 00-2.393 2.397V5.166H7.55zm11.253 2.332a8.197 8.197 0 00-2.35-2.332h2.35v2.332zm-2.316 11.313a8.2 8.2 0 002.316-2.31v2.31h-2.316zm-11.33-2.374a8.197 8.197 0 002.358 2.374H5.156v-2.374zM19.5 12c0 4.136-3.364 7.5-7.5 7.5S4.5 16.136 4.5 12 7.864 4.5 12 4.5s7.5 3.364 7.5 7.5zM12 17.469A5.476 5.476 0 0017.469 12 5.476 5.476 0 0012 6.531 5.476 5.476 0 006.531 12 5.476 5.476 0 0012 17.469z",
      fill: "white"
    })
  );
};

SvgOmni.displayName = "SvgOmni";
SvgOmni.defaultProps = {
  size: 24
};
exports.default = SvgOmni;