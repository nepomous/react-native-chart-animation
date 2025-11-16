import React, { useEffect } from "react";
import {
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { Circle, Group } from "@shopify/react-native-skia";

interface Coordinate {
  x: number;
  y: number;
}

interface AnimatedDotProps {
  x: number;
  y: number;
  index: number;
  dotColor: string;
  dotRadius: number;
  hasOpacity?: boolean;
}

const AnimatedDot: React.FC<AnimatedDotProps> = ({
  x,
  y,
  index,
  dotColor,
  dotRadius,
  hasOpacity = false,
}) => {
  const radius = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    radius.value = withDelay(
      index * 120,
      withTiming(dotRadius, { duration: 350 })
    );
    opacity.value = withDelay(index * 120, withTiming(1, { duration: 350 }));
  }, [radius, opacity, index, dotRadius]);

  const animatedRadius = useDerivedValue(() => radius.value, [radius]);
  const animatedOpacity = useDerivedValue(() => opacity.value, [opacity]);

  return (
    <Group>
      <Circle
        cx={x}
        cy={y}
        r={animatedRadius as any}
        color={dotColor}
        opacity={hasOpacity ? 0.6 : (animatedOpacity as any)}
      />
      <Circle
        cx={x}
        cy={y}
        r={6}
        color={"white"}
        opacity={animatedOpacity as any}
      />
    </Group>
  );
};

interface AnimatedDotsCoordinatesProps {
  coordinates: Coordinate[];
  dotColor?: string;
  dotRadius?: number;
  hasOpacity?: boolean;
}

const AnimatedDotsCoordinates: React.FC<AnimatedDotsCoordinatesProps> = ({
  coordinates,
  dotColor = "#007AFF",
  dotRadius = 10,
  hasOpacity = false,
}) => {
  return (
    <>
      {coordinates.map((coordinate, index) => (
        <AnimatedDot
          key={index}
          x={coordinate.x}
          y={coordinate.y}
          index={index}
          dotColor={dotColor}
          dotRadius={dotRadius}
          hasOpacity={hasOpacity}
        />
      ))}
    </>
  );
};

export default AnimatedDotsCoordinates;
