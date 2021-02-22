import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import GoodScreen from "./GoodScreen";

const InputOrder = (props) => {
  const [inputName, setInputName] = useState();
  const [inputAddress, setInputAddress] = useState();
  const [inputDeposit, setInputDeposit] = useState();

  const resetInput = () => {
    setInputName();
    setInputAddress();
    setInputDeposit();
  };

  const newGood = () => {
    props.addButton({
      id: Math.random(),
      name: inputName,
      address: inputAddress,
      deposit: inputDeposit,
    });
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtinput}
          placeholder="客戶"
          onChangeText={(textValue) => setInputName(textValue)}
          value={inputName}
        />
        <TextInput
          style={styles.txtinput}
          placeholder="地址"
          onChangeText={(textValue) => setInputAddress(textValue)}
          value={inputAddress}
        />
        <TextInput
          style={styles.txtinput}
          placeholder="充值"
          onChangeText={(textValue) => setInputDeposit(textValue)}
          value={inputDeposit}
        />
        <Button title="加" onPress={newGood} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button title="重設" onPress={resetInput} color="limegreen" />
        <Button title="返回" onPress={props.back} color="crimson" />
      </View>
      <Button title="PRess me" onPress={() => console.log(props.goodList)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "space-around",
    marginHorizontal: 15,
    alignItems: "center",
    borderColor: "cornflowerblue",
    marginTop: 5,
  },
  txtinput: {
    marginVertical: 5,
    marginHorizontal: 5,
    width: "80%",
    height: 50,
    color: "cornflowerblue",
    borderWidth: 2,
    borderColor: "cornflowerblue",
    borderRadius: 5,
  },
});

export default InputOrder;
