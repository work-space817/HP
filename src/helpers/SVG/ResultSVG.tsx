import React from "react";
import { View } from "react-native";
import Svg, { G, Path, Rect, SvgProps } from "react-native-svg";

interface IResultSVG extends SvgProps {
  id: "Success" | "Failed";
}

const ResultSVG = ({ id, width = 24, height = 24, ...props }: IResultSVG) => {
  switch (id) {
    case "Success":
      return (
        <Svg {...props} width={width} height={height} viewBox={"0 0 1024 1024"}>
          <Path
            fill="green"
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
          />
        </Svg>
      );
    case "Failed":
      return (
        <Svg {...props} width={width} height={height} viewBox={"0 0 14 14"}>
          <G fillRule={"evenodd"}>
            <Path fill={"red"} d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />

            <Path
              d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z"
              fill="#FFF"
              // style={"fill: var(--svg-status-bg, #fff);"}
            />

            <Path
              fill={"red"}
              d="M7 5.969L5.599 4.568a.29.29 0 0 0-.413.004l-.614.614a.294.294 0 0 0-.004.413L5.968 7l-1.4 1.401a.29.29 0 0 0 .004.413l.614.614c.113.114.3.117.413.004L7 8.032l1.401 1.4a.29.29 0 0 0 .413-.004l.614-.614a.294.294 0 0 0 .004-.413L8.032 7l1.4-1.401a.29.29 0 0 0-.004-.413l-.614-.614a.294.294 0 0 0-.413-.004L7 5.968z"
            />
          </G>
        </Svg>
      );
    default:
      return null;
  }
};

export default ResultSVG;
