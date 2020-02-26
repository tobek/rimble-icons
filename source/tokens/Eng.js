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

const SvgEng = props => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.862 7.721c.085.045.281.152.262.383l-.012 7.813a.358.358 0 01-.212.354l-1.725 1.008-1.365.796-3.633 2.121a.263.263 0 01-.16.054.39.39 0 01-.205-.066l-2.507-1.446c-1.392-.803-2.832-1.634-4.25-2.45-.12-.058-.19-.192-.18-.345l.006-2.064c.005-1.857.008-3.743.009-5.567v-.008a.297.297 0 000-.037v-.024c-.002-.101-.007-.309.188-.403a899.46 899.46 0 012.395-1.423l1.303-.772 2.977-1.767.008-.004c.064-.037.13-.068.2-.094l.076-.03.072.043c.71.41 1.431.83 2.128 1.237l1.302.758 1.272.74 2 1.163h.001l.002.002.048.028zm-6.577 11.753l2.222-1.298 4.04-2.357.007-4.387.004-2.899-2.887 1.69v1.332c-.004.83-.002 1.662.004 2.493v.057l-.034.047a.429.429 0 01-.138.12l-.02.012-.933.543c-.338.196-.686.398-1.027.598l-1.233.716-.005 3.333zm-3.147-9.417c.63.363 1.262.725 1.893 1.086l.978.561 2.833-1.655-2.838-1.675-2.866 1.683zm-.292.488l.053 3.292 2.826 1.646.004-3.284-2.883-1.654zM5.456 8.6l-.015 7.256 6.28 3.622.003-3.338-1.23-.716-.771-.45-1.205-.701c-.116-.055-.19-.189-.181-.335l-.06-3.72L5.455 8.6zm12.82-.56l-1.102-.642-1.216-.709c-1.158-.672-2.531-1.47-3.948-2.3-1.435.849-2.87 1.698-4.302 2.548l-1.97 1.168L8.572 9.73l3.25-1.909a.336.336 0 01.375.008l3.207 1.89 2.872-1.678zm-5.986 7.445c.947-.552 1.895-1.103 2.844-1.653v-3.295l-2.842 1.661-.002 3.287zm3.845-.595a.296.296 0 01-.301-.075.35.35 0 01-.11-.33.337.337 0 01.328-.282c.092 0 .182.042.247.115v.001a.352.352 0 01.06.378.321.321 0 01-.224.194zm1.548 1.056a.338.338 0 01-.13-.29.35.35 0 01.167-.286.305.305 0 01.165-.049c.065 0 .128.02.183.058a.345.345 0 01.152.343.341.341 0 01-.337.3.305.305 0 01-.2-.075zm-9.892-1.74a.32.32 0 01.245.117.345.345 0 01.058.372.332.332 0 01-.312.206.341.341 0 01-.321-.417.344.344 0 01.33-.277zm8.967 1.183a.352.352 0 01-.12-.333.344.344 0 01.328-.292c.082 0 .162.033.225.091a.342.342 0 01.103.337.33.33 0 01-.211.249.324.324 0 01-.325-.053zm-9.679-.543c.1.083.147.214.121.335a.327.327 0 01-.19.251h-.001a.32.32 0 01-.309-.017.35.35 0 01-.163-.334.336.336 0 01.217-.293.298.298 0 01.116-.024c.075 0 .148.028.21.082zm4.883-10.22a.34.34 0 01.255.115c.08.085.11.202.08.315a.328.328 0 01-.274.253h-.004a.346.346 0 01-.411-.314.338.338 0 01.034-.169v-.001a.342.342 0 01.264-.195.316.316 0 01.056-.005zm-5.85 10.741a.335.335 0 01.175.293.34.34 0 01-.159.306.34.34 0 01-.183.056.299.299 0 01-.153-.041.344.344 0 01-.177-.306.35.35 0 01.174-.308.314.314 0 01.324 0zm6.03-8.463a.344.344 0 01.162.315.333.333 0 01-.204.284.366.366 0 01-.15.033.338.338 0 01-.212-.072.334.334 0 01-.134-.3.33.33 0 01.175-.272.337.337 0 01.17-.045c.068 0 .136.02.194.057zm-.427-.569a.331.331 0 01-.111-.28v-.002a.345.345 0 01.164-.264.327.327 0 01.183-.055c.06 0 .12.016.175.045a.337.337 0 01.178.307.337.337 0 01-.207.308.367.367 0 01-.15.033.331.331 0 01-.232-.092z"
      fill="white"
    />
  </Svg>
);

SvgEng.displayName = "SvgEng";
SvgEng.defaultProps = {
  size: 24,
  color: "#2F2F2F"
};
export default SvgEng;
