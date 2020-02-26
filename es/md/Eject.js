function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgEject = function SvgEject(props) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), React.createElement("path", {
    fill: "none",
    d: "M0 24V0h24v24H0z"
  }), React.createElement("path", {
    d: "M5 17h14v2H5zm7-12L5.33 15h13.34z"
  }));
};

SvgEject.displayName = "SvgEject";
SvgEject.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgEject;