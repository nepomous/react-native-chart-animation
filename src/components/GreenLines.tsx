import React from "react";
import {
  Line,
  DashPathEffect,
  Group,
  LinearGradient,
} from "@shopify/react-native-skia";

const greenLine1 = [
  { x: 20, y: 110 },
  { x: 320, y: 110 },
];
const greenLine2 = [
  { x: 20, y: 150 },
  { x: 320, y: 150 },
]; // nao mexer nesse
const greenLine3 = [
  { x: 20, y: 190 },
  { x: 320, y: 190 },
];
const greenLine4 = [
  { x: 20, y: 70 },
  { x: 320, y: 70 },
];
const greenLine5 = [
  { x: 20, y: 30 },
  { x: 320, y: 30 },
];

const greenColor = "#627b7cff";

const GreenLines: React.FC = () => {
  return (
    <Group>
      <Line
        p1={{ x: greenLine1[0].x, y: greenLine1[0].y }}
        p2={{ x: greenLine1[1].x, y: greenLine1[1].y }}
        color={greenColor}
        strokeWidth={1}
        strokeCap="round"
        strokeJoin="round"
      >
        <LinearGradient
          start={{ x: greenLine1[0].x, y: greenLine1[0].y }}
          end={{ x: greenLine1[1].x + 50, y: greenLine1[1].y }}
          colors={["black", greenColor, "transparent"]}
          positions={[0, 0.3, 1]}
        />
      </Line>
      <Line
        p1={{ x: greenLine2[0].x, y: greenLine2[0].y }}
        p2={{ x: greenLine2[1].x, y: greenLine2[1].y }}
        color={greenColor}
        strokeWidth={1}
        strokeCap="round"
        strokeJoin="round"
      >
        <LinearGradient
          start={{ x: greenLine2[0].x, y: greenLine2[0].y }}
          end={{ x: greenLine2[1].x + 50, y: greenLine2[1].y }}
          colors={["black", greenColor, "transparent"]}
          positions={[0, 0.3, 1]}
        />
      </Line>
      <Line
        p1={{ x: greenLine3[0].x, y: greenLine3[0].y }}
        p2={{ x: greenLine3[1].x, y: greenLine3[1].y }}
        color={greenColor}
        strokeWidth={1}
        strokeCap="round"
        strokeJoin="round"
      >
        <LinearGradient
          start={{ x: greenLine3[0].x, y: greenLine3[0].y }}
          end={{ x: greenLine3[1].x + 50, y: greenLine3[1].y }}
          colors={["black", greenColor, "transparent"]}
          positions={[0, 0.3, 1]}
        />
      </Line>
      <Line
        p1={{ x: greenLine4[0].x, y: greenLine4[0].y }}
        p2={{ x: greenLine4[1].x, y: greenLine4[1].y }}
        color={greenColor}
        strokeWidth={1}
        strokeCap="round"
        strokeJoin="round"
      >
        <LinearGradient
          start={{ x: greenLine4[0].x, y: greenLine4[0].y }}
          end={{ x: greenLine4[1].x + 50, y: greenLine4[1].y }}
          colors={["black", greenColor, "transparent"]}
          positions={[0, 0.3, 1]}
        />
      </Line>
      <Line
        p1={{ x: greenLine5[0].x, y: greenLine5[0].y }}
        p2={{ x: greenLine5[1].x, y: greenLine5[1].y }}
        color={greenColor}
        strokeWidth={1}
        strokeCap="round"
        strokeJoin="round"
      >
        <LinearGradient
          start={{ x: greenLine5[0].x, y: greenLine5[0].y }}
          end={{ x: greenLine5[1].x + 50, y: greenLine5[1].y }}
          colors={["black", greenColor, "transparent"]}
          positions={[0, 0.3, 1]}
        />
      </Line>
    </Group>
  );
};

export default GreenLines;
