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

var SvgLightbulbOutline = function SvgLightbulbOutline(props) {
  return _react2.default.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }, props),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { id: "lightbulbOutline_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "lightbulbOutline_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#lightbulbOutline_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement("path", {
      d: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z",
      clipPath: "url(#lightbulbOutline_svg__b)"
    })
  );
};

SvgLightbulbOutline.displayName = "SvgLightbulbOutline";
SvgLightbulbOutline.defaultProps = {
  size: 24
};
exports.default = SvgLightbulbOutline;