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

var SvgCmt = function SvgCmt(props) {
  return _react2.default.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? "currentcolor" : "#C1A05C",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.207 19.5c-1.74-.005-3.296-.538-4.687-1.56-.37-.271-.38-.428-.066-.766l.029-.03c.385-.417.382-.414.839-.086a6.423 6.423 0 003.617 1.235c1.385.047 2.657-.283 3.806-1.025 1.38-.89 2.32-2.129 2.714-3.71.494-1.986.127-3.825-1.175-5.441-.912-1.133-2.097-1.863-3.529-2.209a6.592 6.592 0 00-3.767.192 6.198 6.198 0 00-1.803.982c-.269.21-.37.206-.6-.05a4.282 4.282 0 01-.308-.377c-.141-.2-.122-.318.069-.47a7.729 7.729 0 013.086-1.48 7.594 7.594 0 013.108-.083c1.402.254 2.648.83 3.718 1.763.792.691 1.433 1.5 1.878 2.445.614 1.302.864 2.665.68 4.104a7.34 7.34 0 01-1.493 3.6c-.83 1.081-1.893 1.87-3.163 2.389a7.613 7.613 0 01-2.953.577zm-.477-4.787c-.05.076-.077.133-.119.177-.253.266-.563.426-.936.438-.259.007-.519-.014-.777-.008-.1-.001-.199.023-.287.072-1.195.75-2.482.859-3.838.571-.446-.095-.846-.266-1.187-.559-.256-.22-.437-.479-.459-.844-.037-.635.433-1.068.918-1.21.894-.262 1.746-.103 2.56.293.372.18.72.409 1.076.622.204.12.264.116.366-.092.461-.942.164-1.981-.963-2.365-.988-.338-1.955-.304-2.907.135-.14.065-.292.188-.456.056-.17-.139-.057-.303-.013-.448.313-1.053.63-2.104.952-3.154.07-.23.254-.349.522-.335.396.022.789.082 1.184.09.592.016 1.187.02 1.779-.008.44-.023.826-.216 1.166-.497.041-.034.124-.073.152-.055.04.027.063.1.067.155.028.455-.167.805-.529 1.078a2.44 2.44 0 01-1.449.485c-.552.012-1.105.02-1.657.022-.125.002-.19.047-.22.164-.05.195-.102.39-.158.585-.043.145.012.202.158.196.348-.012.696-.036 1.043-.034a3.184 3.184 0 012.162.83c.58.516.815 1.182.85 1.926.028.596-.086 1.167-.414 1.68-.089.141-.049.202.102.242.4.105.77.033 1.124-.164.03-.016.058-.035.088-.05.01-.004.026.001.1.006zm-3.426.17l-.012-.073c-.05-.031-.097-.07-.152-.094-.398-.176-.79-.37-1.198-.52-.416-.152-.849-.26-1.302-.155-.204.048-.408.1-.467.334-.066.259.092.42.277.561a.815.815 0 00.198.103c.7.27 1.411.277 2.125.066.183-.054.355-.148.531-.223z",
      fill: "white"
    })
  );
};

SvgCmt.displayName = "SvgCmt";
SvgCmt.defaultProps = {
  size: 24
};
exports.default = SvgCmt;