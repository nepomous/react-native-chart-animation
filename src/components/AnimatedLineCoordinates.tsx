import React, { useEffect, useMemo } from "react";
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Skia, Path, LinearGradient, vec } from "@shopify/react-native-skia";

interface Coordinate {
  x: number;
  y: number;
}

interface AnimatedLineCoordinatesProps {
  coordinates: Coordinate[];
  strokeWidth?: number;
  colors?: string[];
  duration?: number;
  colorPositions?: number[];
}

const AnimatedLineCoordinates: React.FC<AnimatedLineCoordinatesProps> = ({
  coordinates,
  strokeWidth = 3,
  colors = ["#007AFF"],
  duration = 1200,
  colorPositions,
}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, { duration });
  }, [progress, duration]);

  // Create path from coordinates
  const basePath = useMemo(() => {
    if (!coordinates || coordinates.length < 2) return null;

    const skiaPath = Skia.Path.Make();

    // Move to first coordinate
    skiaPath.moveTo(coordinates[0].x, coordinates[0].y);

    // Draw lines to subsequent coordinates
    for (let i = 1; i < coordinates.length; i++) {
      const current = coordinates[i];
      const prev = coordinates[i - 1];
      const next = coordinates[i + 1];

      if (next) {
        // Use cubic bezier for smooth curves if there are more points
        const prevPrev = coordinates[i - 2] || prev;
        const cp1x = prev.x + (current.x - prevPrev.x) * 0.2;
        const cp1y = prev.y + (current.y - prevPrev.y) * 0.2;
        const cp2x = current.x - (next.x - prev.x) * 0.2;
        const cp2y = current.y - (next.y - prev.y) * 0.2;

        skiaPath.cubicTo(cp1x, cp1y, cp2x, cp2y, current.x, current.y);
      } else {
        // For the last point, just draw a line
        skiaPath.lineTo(current.x, current.y);
      }
    }

    return skiaPath;
  }, [coordinates]);

  const animatedPath = useDerivedValue(() => {
    if (!basePath) return null;

    const currentProgress = progress.value;
    const trimmedPath = basePath.copy();
    trimmedPath.trim(0, currentProgress, false);
    return trimmedPath;
  }, [progress, basePath]);

  if (!basePath) return null;

  return (
    <Path
      path={animatedPath as any}
      style="stroke"
      strokeWidth={strokeWidth}
      strokeCap="round"
      strokeJoin="round"
    >
      <LinearGradient
        colors={colors}
        start={
          coordinates.length > 0
            ? vec(coordinates[0].x, coordinates[0].y)
            : vec(0, 0)
        }
        end={
          coordinates.length > 0
            ? vec(
                coordinates[coordinates.length - 1].x,
                coordinates[coordinates.length - 1].y
              )
            : vec(200, 0)
        }
        positions={colorPositions}
      />
    </Path>
  );
};

export default AnimatedLineCoordinates;
