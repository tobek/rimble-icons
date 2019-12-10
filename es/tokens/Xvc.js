var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgXvc = function SvgXvc(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? "currentcolor" : "#B50126",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.588 8.057H6L7.248 6h3.1v8.038L16.285 6H19.5l-8.357 12H7.588V8.057z",
      fill: "white"
    })
  );
};

SvgXvc.displayName = "SvgXvc";
SvgXvc.defaultProps = {
  size: 24
};
export default SvgXvc;