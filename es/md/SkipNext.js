var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgSkipNext = function SvgSkipNext(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }, props),
    React.createElement("path", { d: "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" })
  );
};

SvgSkipNext.displayName = "SvgSkipNext";
SvgSkipNext.defaultProps = {
  size: 24
};
export default SvgSkipNext;