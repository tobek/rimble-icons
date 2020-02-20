"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Svg = (0, _styledComponents2["default"])("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgCoqui = function SvgCoqui(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.365 11.036c-.59.028-1.183.063-1.773.042-.53-.02-1.057-.108-1.585-.17a.307.307 0 01-.148-.068c-.873-.716-1.732-1.45-2.485-2.297-.274-.31-.497-.645-.621-1.051-.167-.548-.87-.76-1.39-.442-.546.333-.64 1.108-.18 1.552.08.08.182.14.292.17.398.097.705.334.995.602.52.481.987 1.013 1.44 1.557.13.155.064.336-.135.358-.307.036-.617.068-.927.081-.583.024-1.168.047-1.752.041a6.424 6.424 0 01-.977-.108 1.27 1.27 0 01-.43-.17c-.434-.26-.884-.082-1.135.175a.995.995 0 00-.15 1.19c.208.358.62.566.988.488.107-.022.212-.07.306-.124.248-.141.516-.207.794-.225.445-.027.894-.052 1.34-.042.568.014 1.135.064 1.703.1.078.005.155.008.232.02.213.035.274.205.133.373-.169.2-.332.408-.516.596-.385.394-.776.783-1.173 1.165-.18.172-.404.293-.648.349-.492.118-.735.592-.665 1.072a.993.993 0 00.977.837c.447 0 .79-.239.91-.666.122-.44.404-.771.698-1.094.725-.796 1.54-1.496 2.372-2.175a.353.353 0 01.169-.075c.42-.055.841-.123 1.264-.15.476-.03.953-.037 1.43-.02.497.021.992.086 1.502.133-.009.173-.011.32-.025.465-.091.945-.332 1.85-.777 2.691-1.098 2.074-2.791 3.372-5.082 3.879a7.148 7.148 0 01-1.563.154c-.559-.001-1.117.004-1.676-.002-1.549-.017-2.966-.457-4.226-1.36-1.518-1.088-2.498-2.548-2.92-4.37a6.664 6.664 0 01-.167-1.239 32.88 32.88 0 01-.021-2.367 7.373 7.373 0 015.439-6.902 7.2 7.2 0 011.873-.254c.648-.002 1.295-.012 1.942.003 1.55.036 2.957.509 4.202 1.434 1.489 1.106 2.436 2.574 2.835 4.387.097.435.13.883.196 1.348-.323.041-.602.096-.885.11z",
    fill: "white"
  }));
};

SvgCoqui.displayName = "SvgCoqui";
SvgCoqui.defaultProps = {
  size: 24,
  color: "#71C800"
};
exports["default"] = SvgCoqui;