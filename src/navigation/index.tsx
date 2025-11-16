import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ChartScreen from "../screens/ChartScreen";

export type RootStackParamList = {
  Home: undefined;
  Chart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Start Screen" }}
        />
        <Stack.Screen
          name="Chart"
          component={ChartScreen}
          options={{ title: "Chart Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
