var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgTrendingFlat = function SvgTrendingFlat(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }, props),
    React.createElement("path", { d: "M22 12l-4-4v3H3v2h15v3z" }),
    React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
};

SvgTrendingFlat.displayName = "SvgTrendingFlat";
SvgTrendingFlat.defaultProps = {
  size: 24
};
export default SvgTrendingFlat;