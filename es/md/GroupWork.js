var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgGroupWork = function SvgGroupWork(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }, props),
    React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5zM9.5 8a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm6.5 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" })
  );
};

SvgGroupWork.displayName = "SvgGroupWork";
SvgGroupWork.defaultProps = {
  size: 24
};
export default SvgGroupWork;