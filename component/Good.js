import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Good = ({
  id,
  name,
  inPrice,
  quantity,
  brand,
  model,
  setgoodprop,
  index,
  backgroundColor,
  onPress,
}) => {
  return (
    <View style={styles.goodContainer}>
      <View
        style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={styles.goodstyle}>第{index + 1}項</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "left" }}>
        <Text style={styles.goodstyle}>商品: {name}</Text>
        <Text style={styles.goodstyle}>買入價: {inPrice}</Text>
        <Text style={styles.goodstyle}>數量: {quantity}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "left" }}>
        <Text style={styles.goodstyle}>品牌: {brand}</Text>
        <Text style={styles.goodstyle}>型號: {model}</Text>
      </View>
      <View style={{ flex: 0.3, justifyContent: "center" }}>
        <Text
          style={[styles.goodstyle, { color: "red" }]}
          onPress={() =>
            setgoodprop((prevItems) =>
              prevItems.filter((item) => item.id != id)
            )
          }
        >
          取消
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goodstyle: {
    fontSize: 15,
    color: "blue",
  },
  goodContainer: {
    flexDirection: "row",
    backgroundColor: "azure",
    borderWidth: 1,
    borderColor: "darkblue",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default Good;
