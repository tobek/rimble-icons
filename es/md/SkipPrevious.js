var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgSkipPrevious = function SvgSkipPrevious(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }, props),
    React.createElement("path", { d: "M6 6h2v12H6zm3.5 6l8.5 6V6z" })
  );
};

SvgSkipPrevious.displayName = "SvgSkipPrevious";
SvgSkipPrevious.defaultProps = {
  size: 24
};
export default SvgSkipPrevious;