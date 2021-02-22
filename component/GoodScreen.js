import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, FlatList, Text, Modal } from "react-native";
import Good from "./Good";
import Heading from "./heading";
import InputGood from "./InputGood";

const GoodScreen = (props) => {
  const goodjson = require("../component/sample.json");
  const [good, setgood] = useState(goodjson.good);
  // const good = useRef(goodjson.good);
  const [visible, setVisible] = useState(false);

  const funcgood = (good, index, separators) => {
    //const [selectedId, setSelectedId] = useState(null);
    return (
      <Good
        id={good.id}
        index={index}
        name={good.name}
        inPrice={good.inPrice}
        quantity={good.quantity}
        brand={good.brand}
        model={good.model}
        setgoodprop={setgood}
        sep={separators}
      />
    );
  };

  const addGood = (newGood) => {
    setgood((currGood) => [...currGood, newGood]);
    setVisible(false);
  };

  useEffect(() => {
    props.exportGood(good);
  });

  const test = () => {
    props.onSwitch;
  };

  return (
    <View style={styles.goodListScreen}>
      <Heading title="小商家" />
      <View style={styles.switchButtonContainer}>
        <Heading title="商品清單" />
        <Button title="客戶" onPress={props.goCustomer} color="crimson" />
        <Button title="訂單" onPress={props.goOrder} color="crimson" />
      </View>
      <Button
        title="+增加商品"
        onPress={() => setVisible(true)}
        color="crimson"
      />
      <Modal presentationStyle="overFullScreen" visible={visible}>
        <View style={styles.inputContainer}>
          <InputGood addButton={addGood} back={() => setVisible(false)} />
        </View>
      </Modal>
      <View style={styles.listContainer}>
        <FlatList
          data={good}
          renderItem={({ item, index }) => funcgood(item, index)}
          keyExtractor={(item) => item.id}
          //extraData={selectedId}
        />
      </View>
    </View>
  );
};

{
  /* <FlatList
    data={good}
    renderItem={({ item, index }) => funcgood(item, index)}
    keyExtractor={(item) => item.id}
    //extraData={selectedId}
  /> */
}
const styles = StyleSheet.create({
  goodListScreen: {
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
  listContainer: {
    flex: 1,
    backgroundColor: "darkslateblue",
    borderColor: "cornflowerblue",
    borderRadius: 15,
    borderWidth: 2,
    marginHorizontal: 15,
  },
  inputContainer: {
    marginTop: 100,
  },
});

export default GoodScreen;
