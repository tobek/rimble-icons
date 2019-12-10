import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);

const SvgNmc = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color ? "currentcolor" : "#186C9D"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M14.446 17.625v-.002c.116.003.232-.01.344-.037.657-.154 1.213-.727 1.345-1.347l2.615-9.822-2.079-.01-1.714 6.425-4.636-6.447-.002.003.002-.008-.766-.005a1.425 1.425 0 00-.344.037c-.656.155-1.212.729-1.345 1.348L5.25 17.584l2.08.009 1.713-6.426 4.636 6.448h.002l.765.01zM9.5 9.455l.362-1.358 4.636 6.45-.362 1.357-4.635-6.45H9.5z"
      fill="white"
    />
  </Svg>
);

SvgNmc.displayName = "SvgNmc";
SvgNmc.defaultProps = {
  size: 24
};
export default SvgNmc;