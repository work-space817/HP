import React from "react";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

interface INavbarSVG extends SvgProps {
  id: "Home" | "List";
}

const NavbarSVG = ({ id, width = 24, height = 24, ...props }: INavbarSVG) => {
  switch (id) {
    case "Home":
      return (
        <Svg {...props} width={width} height={height} viewBox={"0 0 32 32"}>
          <Path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z" />
        </Svg>
      );
    case "List":
      return (
        <Svg {...props} width={width} height={height} viewBox={"0 0 24 24"}>
          <Path
            d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01"
            stroke={"#000000"}
            strokeWidth={2}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
          />
        </Svg>
      );
    default:
      return null;
  }
};

export default NavbarSVG;
