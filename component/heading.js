import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Heading = ({ title }) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingtxt}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
  },
  headingtxt: {
    fontSize: 20,
    color: "cornflowerblue",
  },
});

export default Heading;
