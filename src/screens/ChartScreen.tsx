import React, { useState } from "react";
import {
  View,
  StyleSheet,
  LayoutChangeEvent,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { Canvas } from "@shopify/react-native-skia";
import TrendLine from "../components/TrendLine";
import AnimatedLineCoordinates from "../components/AnimatedLineCoordinates";
import AnimatedDotsCoordinates from "../components/AnimatedDotsCoordinates";
import { LinearGradient } from "expo-linear-gradient";
import { Octicons } from "@react-native-vector-icons/octicons";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "./HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import GreenLines from "../components/GreenLines";

const ChartScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [canvasWidth, setCanvasWidth] = useState(
    Dimensions.get("window").width - 40
  );

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setCanvasWidth(width);
  };

  const firstLineCoordinates = [
    { x: 40, y: 150 },
    { x: 100, y: 130 },
    { x: 150, y: 100 },
    { x: 220, y: 80 },
    { x: 310, y: 70 },
  ];

  const firstLineDots = [
    { x: 55, y: 150 },
    { x: 270, y: 73 },
  ];

  const secondLineCoordinates = [
    { x: 40, y: 150 },
    { x: 100, y: 150 },
    { x: 150, y: 153 },
    { x: 220, y: 162 },
    { x: 290, y: 189 },
    { x: 295, y: 198 },
  ];

  const secondLineDots = [{ x: 55, y: 150 }];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <LinearGradient
        colors={["#000", "#333"]}
        style={styles.container}
        start={{ x: 0.5, y: 0.1 }}
        end={{ x: 0.5, y: 0.85 }}
      >
        <View style={styles.container}>
          <View style={styles.studyFactTextContainer}>
            <Octicons
              name="verified"
              size={18}
              color="white"
              style={{ marginRight: 6, marginTop: 2, fontWeight: "900" }}
            />
            <Text style={styles.defaultText}>{"STUDY FACT"}</Text>
          </View>
          <View>
            <Text style={styles.defaultText}>
              {" "}
              {
                "Kegel exercises strengthen PF muscles,\nwhich significantly increases"
              }
            </Text>
          </View>
          <View>
            <Text style={styles.greenText}>{"ejaculation control."}</Text>
          </View>
          <View style={styles.chartContainer} onLayout={onLayout}>
            <LinearGradient
              style={styles.sexDurationsContainer}
              colors={["#000", "#333"]}
              start={{ x: 0.5, y: 0.1 }}
              end={{ x: 0.5, y: 0.85 }}
            >
              <Octicons
                name="clock"
                size={18}
                color="white"
                style={{ marginRight: 6, marginTop: 2, fontWeight: "900" }}
              />
              <Text style={styles.defaultText}>{"Sex duration"}</Text>
            </LinearGradient>
            <View style={styles.nowContainer}>
              <Octicons
                name="triangle-down"
                size={37}
                color="#3F4550"
                style={styles.dialogueArrow}
              />
              <Text style={styles.nowText}>{"Now"}</Text>
            </View>
            <LinearGradient
              colors={["#000", "#00ff004f"]}
              style={styles.gradient}
              start={{ x: 0.5, y: 0.45 }}
              end={{ x: 1, y: 0 }}
              locations={[0.3, 1]}
            >
              <Canvas style={styles.canvas}>
                <GreenLines />
                <AnimatedLineCoordinates
                  coordinates={firstLineCoordinates}
                  colors={["#000", "#00FF00", "#00FF00", "transparent"]}
                  strokeWidth={9}
                  duration={1200}
                  colorPositions={[0, 0.3, 0.9, 1]}
                />
                <AnimatedLineCoordinates
                  coordinates={secondLineCoordinates}
                  colors={["#00FF00", "#ff0000ff", "#ff0000ff", "transparent"]}
                  strokeWidth={9}
                  duration={1200}
                  colorPositions={[0, 0.6, 0.9, 1]}
                />
                <AnimatedDotsCoordinates
                  coordinates={firstLineDots}
                  dotColor="#00ff00df"
                  dotRadius={13}
                  hasOpacity={true}
                />
                <AnimatedDotsCoordinates
                  coordinates={secondLineDots}
                  dotColor="#3F4550"
                  dotRadius={12}
                />
                <TrendLine />
              </Canvas>
              <Octicons
                name="arrow-up"
                size={37}
                color="white"
                style={styles.chartArrow}
              />
            </LinearGradient>
          </View>
          <View style={styles.legendaContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={styles.greenSquare} />
              <Text style={styles.defaultText}>{"With Kegels"}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.redSquare} />
              <Text style={styles.defaultText}>{"No Kegels"}</Text>
            </View>
          </View>
          <View style={styles.sourceContainer}>
            <View style={styles.sourceIconContainer}>
              <Octicons name="diamond" size={16} color="white" />
            </View>
            <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <Text style={{ ...styles.sourceText, color: "#999" }}>
                {"Source:"}
              </Text>
              <Text style={{ ...styles.sourceText, color: "#fff" }}>
                {"Sapienza University"}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.bottomTextContainer}
            onPress={navigation.goBack}
          >
            <Text style={styles.defaultText}>I got it</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 10,
  },
  chartContainer: {
    marginTop: 40,
    width: "100%",
    height: 260,
    backgroundColor: "#555",
    borderRadius: 12,
    overflow: "hidden",
  },
  canvas: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    zIndex: 2,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  sexDurationsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#13171B",
    borderRadius: 12,
    padding: 12,
    position: "absolute",
    left: 50,
    top: 16,
    zIndex: 3,
  },
  nowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: 12,
    padding: 8,
    backgroundColor: "#3F4550",
    position: "absolute",
    left: 29,
    bottom: 130,
    zIndex: 4,
  },
  studyFactTextContainer: {
    flexDirection: "row",
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: "auto",
  },
  textContainerGray: {
    backgroundColor: "gray",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textContainerBlack: {
    backgroundColor: "#222",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  defaultText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  nowText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  greenText: {
    color: "#00bb00ff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  grayText: {
    color: "gray",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  sourceText: {
    fontSize: 14,
    fontWeight: "500",
  },
  legendaContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#000",
    borderRadius: 8,
    paddingVertical: 8,
    borderColor: "#555",
    borderWidth: 0.2,
    shadowColor: "#555",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.32,
  },
  greenSquare: {
    backgroundColor: "#00FF00",
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 4,
  },
  redSquare: {
    backgroundColor: "red",
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 4,
  },
  sourceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
    backgroundColor: "#333",
    borderRadius: 12,
    padding: 16,
  },
  chartArrow: {
    position: "absolute",
    left: 1,
    top: 0,
  },
  dialogueArrow: {
    position: "absolute",
    left: 8,
    top: 18,
  },
  sourceIconContainer: {
    backgroundColor: "#000",
    alignItems: "center",
    marginRight: 10,
    padding: 8,
    borderRadius: 4,
  },
  bottomTextContainer: {
    backgroundColor: "red",
    paddingVertical: 16,
    marginHorizontal: -20,
    marginTop: -20,
    borderRadius: 12,
  },
  bottomContainer: {
    padding: 40,
    margin: -10,
    borderRadius: 12,
    backgroundColor: "#000",
  },
});

export default ChartScreen;
