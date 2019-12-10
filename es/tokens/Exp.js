var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgExp = function SvgExp(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? "currentcolor" : "#FFAA5C",
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
      d: "M19.5 11.038c-.003.029-.008.057-.008.087a1092 1092 0 00-.009 2.746l-.003 1.88c0 .06-.005.12-.009.196-.032-.015-.056-.025-.079-.038l-3.49-1.946c-.063-.035-.068-.065-.038-.127.595-1.221.597-2.445.011-3.669-.027-.059-.022-.088.038-.12l3.492-1.96c.029-.017.063-.025.095-.037v2.988zM12.225 3.75c.059.035.116.073.176.107l6.787 3.813c.026.014.05.03.085.051-.032.02-.053.035-.076.048l-3.463 1.934c-.091.05-.09.05-.15-.035-.768-1.077-1.822-1.692-3.16-1.848a.975.975 0 00-.12-.007c-.07 0-.097-.027-.097-.101 0-.76-.005-1.52-.008-2.28l-.002-1.575c0-.036.009-.071.013-.107h.015zm-.465 16.5c-.025-.019-.049-.04-.075-.055l-6.838-3.843-.107-.064c.03-.02.05-.035.072-.048 1.147-.641 2.295-1.282 3.442-1.925.07-.039.102-.024.145.036.717.994 1.696 1.582 2.925 1.782.126.02.254.03.38.036.072.003.101.023.101.098 0 .672.002 1.345.005 2.017l.003 1.91c0 .018-.005.037-.008.056h-.045zM4.5 15.338c.004-.023.011-.046.012-.07l.003-.947.005-2.12.01-3.344.004-.721c0-.021.003-.042.005-.076l.08.038C5.76 8.736 6.9 9.373 8.043 10.01c.066.037.075.066.042.136-.6 1.23-.597 2.463 0 3.695.05.099.05.098-.047.153-1.146.645-2.292 1.288-3.438 1.931-.03.017-.068.018-.101.026v-.612zm10.105-.698c.122-.43.162-.863.135-1.302a3.283 3.283 0 00-.446-1.52c-.322-.541-.789-.933-1.357-1.218-.15-.076-.167-.038-.077-.225.201-.422.555-.685.99-.853.302-.11.62-.173.943-.184a.177.177 0 01.12.054c.54.563.891 1.281 1.003 2.054.288 1.955-.986 3.79-2.965 4.276-2.195.54-4.422-.811-4.878-2.958-.426-2.009.861-3.952 2.781-4.465 1.442-.385 2.722-.078 3.841.877l.127.108-.015.024c-.11-.013-.22-.03-.33-.04-.685-.065-1.359-.02-2.012.204a3.349 3.349 0 00-1.881 1.564c-.06.107-.064.107-.18.068a.984.984 0 01-.39-.253 2.061 2.061 0 01-.471-.78c-.088-.254-.152-.517-.227-.775-.006-.02-.01-.042-.029-.063-.01.06-.022.118-.031.178-.01.06-.017.12-.023.18-.071.67-.033 1.33.199 1.97.288.798.83 1.373 1.622 1.722.104.046.104.047.048.141-.293.498-.753.749-1.32.834-.264.04-.528.024-.798.005l.074.03c1.297.446 2.722.246 3.796-.89.27-.289.505-.607.703-.95.051-.088.055-.09.137-.03.352.257.561.608.705 1.002.135.362.188.739.2 1.122l.006.092v.001zm4.7 1.659l-7.096 3.937c-.004-.041-.01-.067-.01-.092l-.001-3.892c0-.058.017-.079.08-.084 1.38-.114 2.474-.719 3.277-1.817.07-.097.069-.098.172-.04l3.483 1.931.096.057zm-7.5-12.522c.002.042.004.067.004.093l.001 3.84c0 .06-.009.09-.082.095-1.409.102-2.522.712-3.338 1.832-.065.089-.064.09-.158.037l-3.39-1.882c-.04-.023-.077-.05-.115-.075.038-.027.074-.058.116-.081l6.833-3.792.127-.067h.001z",
      fill: "white"
    })
  );
};

SvgExp.displayName = "SvgExp";
SvgExp.defaultProps = {
  size: 24
};
export default SvgExp;