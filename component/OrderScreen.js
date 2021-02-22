import React, { useState, useRef } from "react";
import { View, StyleSheet, Button, FlatList, Text, Modal } from "react-native";
import Heading from "./heading";
import InputOrder from "./InputOrder";

const OrderScreen = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.orderScreen}>
      <Heading title="小商家" />
      <View style={styles.switchButtonContainer}>
        <Heading title="訂單清單" />
        <Button
          title="客戶(Master)"
          onPress={props.goCustomer}
          color="crimson"
        />
        <Button title="商品" onPress={props.goGood} color="crimson" />
      </View>
      <Button
        title="+增加訂單(master)"
        onPress={() => setVisible(true)}
        color="crimson"
      />
      <Modal presentationStyle="overFullScreen" visible={visible}>
        <View style={styles.inputContainer}>
          <InputOrder
            back={() => setVisible(false)}
            goodList={props.goodList}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  orderScreen: {
    flex: 1,
    backgroundColor: "mintcream",
    paddingTop: 15,
  },
  switchButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "cornflowerblue",
    borderWidth: 1,
    padding: 3,
    marginTop: 5,
    marginHorizontal: 15,
    alignItems: "flex-end",
    borderRadius: 10,
  },
  inputContainer: {
    marginTop: 100,
  },
});

export default OrderScreen;
