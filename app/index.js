import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BussnessNameGenrator = () => {
  return (
    <View>
      <Text style={styles.BussnessNameGenrator}>BussnessNameGenrator</Text>
    </View>
  );
};

export default BussnessNameGenrator;

const styles = StyleSheet.create({
  BussnessNameGenrator: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Righteous-Regular",
  },
});
