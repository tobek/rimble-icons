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

const SvgMona = props => (
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
      d="M17.648 10.06l-1.07-4.81-2.097 3.31a10.572 10.572 0 00-4.963 0L7.426 5.25l-1.072 4.81c-1.151.921-1.854 2.125-1.854 3.447 0 2.895 3.357 5.242 7.498 5.242 4.14 0 7.498-2.348 7.498-5.242-.001-1.322-.698-2.525-1.85-3.447h.002zm-9.816 2.202h-.5l1.22-1.407h.888l-1.608 1.407zM11.96 15.7l-2.075-3.653.512-.293.463.814h2.266l.483-.818.507.302L11.96 15.7zm4.21-3.438l-1.61-1.407h.894l1.218 1.407h-.503zm-4.2 2.262l-.776-1.365h1.581l-.806 1.365z"
      fill="white"
    />
  </Svg>
);

SvgMona.displayName = "SvgMona";
SvgMona.defaultProps = {
  size: 24,
  color: "#DEC799"
};
export default SvgMona;
