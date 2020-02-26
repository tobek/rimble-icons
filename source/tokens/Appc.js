import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);

const SvgAppc = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={"currentcolor"}
    height={props.size}
    width={props.size}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M10.245 13.04l1.79-5.334 1.822 5.333h-3.612zm7.584 3.372l-1.48-3.981h.884a.637.637 0 00.637-.627.59.59 0 00-.178-.421.616.616 0 00-.43-.175h-1.38l-.22-.62h1.57a.63.63 0 00.635-.605.613.613 0 00-.186-.442.643.643 0 00-.451-.183h-2.04l-1.105-2.976a2.681 2.681 0 00-.793-1.095 1.874 1.874 0 00-1.247-.411 1.928 1.928 0 00-1.253.41 2.707 2.707 0 00-.795 1.096L8.839 9.385H6.811a.608.608 0 00-.612.598c0 .343.284.621.635.621h1.54l-.237.603h-1.38a.608.608 0 00-.614.6c0 .34.28.616.627.617h.886l-1.504 3.988a2.042 2.042 0 00-.152.705c.015.34.167.66.42.893a1.53 1.53 0 001.005.362 1.35 1.35 0 001.38-.979l.582-1.702h5.358l.583 1.743a1.36 1.36 0 001.38.93c.232.005.461-.053.663-.165a2.23 2.23 0 00.46-.449 1.2 1.2 0 00.169-.633 4.083 4.083 0 00-.171-.695v-.01z"
      fill="#FEFEFE"
    />
  </Svg>
);

SvgAppc.displayName = "SvgAppc";
SvgAppc.defaultProps = {
  size: 24,
  color: "#FD875E"
};
export default SvgAppc;
