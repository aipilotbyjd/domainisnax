import React, { View, Text } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
// use fonts
import { useFonts } from "expo-font";
import "react-native-url-polyfill/auto";

const _layout = () => {
  // use fonts
  let [fontsLoaded] = useFonts({
    "Righteous-Regular": require("../assets/fonts/Righteous-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack />
      <StatusBar style="light" />
    </>
  );
};

export default _layout;
