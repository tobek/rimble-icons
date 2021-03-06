function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgNetworkCell = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("path", {
    fillOpacity: 0.3,
    d: "M2 22h20V2z"
  }), React.createElement("path", {
    d: "M17 7L2 22h15z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
});
SvgNetworkCell.displayName = "SvgNetworkCell";
SvgNetworkCell.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgNetworkCell;