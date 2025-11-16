import React from "react";
import {
  Line,
  DashPathEffect,
  Group,
  LinearGradient,
} from "@shopify/react-native-skia";

const trendLineY = [
  { x: 20, y: 240 },
  { x: 20, y: 20 },
];
const trendLineX = [
  { x: 20, y: 240 },
  { x: 320, y: 240 },
];
const trendLineXDashed = [
  { x: 20, y: 150 },
  { x: 320, y: 150 },
];

const TrendLine: React.FC = () => {
  return (
    <Group>
      <Line
        p1={{ x: trendLineY[0].x, y: trendLineY[0].y }}
        p2={{ x: trendLineY[1].x, y: trendLineY[1].y }}
        color="white"
        strokeWidth={4}
        strokeCap="round"
        strokeJoin="round"
      ></Line>
      <Line
        p1={{ x: trendLineX[0].x, y: trendLineX[0].y }}
        p2={{ x: trendLineX[1].x, y: trendLineX[1].y }}
        color="white"
        strokeWidth={4}
        strokeCap="round"
        strokeJoin="round"
      >
        <LinearGradient
          start={{ x: trendLineX[0].x, y: trendLineX[0].y }}
          end={{ x: trendLineX[1].x + 50, y: trendLineX[1].y }}
          colors={["white", "black"]}
          positions={[0.3, 1]}
        />
      </Line>
      <Line
        p1={{ x: trendLineXDashed[0].x, y: trendLineXDashed[0].y }}
        p2={{ x: trendLineXDashed[1].x, y: trendLineXDashed[1].y }}
        color="white"
        strokeWidth={2}
        strokeCap="round"
        strokeJoin="round"
      >
        <DashPathEffect intervals={[11, 11]} phase={0} />
      </Line>
    </Group>
  );
};

export default TrendLine;
