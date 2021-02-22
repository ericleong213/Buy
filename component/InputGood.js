import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const InputGood = (props) => {
  const [inputName, setInputName] = useState();
  const [inputInPrice, setInputInPrice] = useState();
  const [inputQty, setInputQty] = useState();
  const [inputBrand, setInputBrand] = useState();
  const [inputModel, setInputModel] = useState();

  const resetInput = () => {
    setInputName();
    setInputInPrice();
    setInputQty();
    setInputBrand();
    setInputModel();
  };

  const newGood = () => {
    props.addButton({
      id: Math.random(),
      name: inputName,
      inPrice: inputInPrice,
      quantity: inputQty,
      brand: inputBrand,
      model: inputModel,
    });
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtinput}
          placeholder="商品名"
          onChangeText={(textValue) => setInputName(textValue)}
          value={inputName}
        />
        <TextInput
          style={styles.txtinput}
          placeholder="買入價"
          onChangeText={(textValue) => setInputInPrice(textValue)}
          value={inputInPrice}
        />
        <TextInput
          style={styles.txtinput}
          placeholder="數量"
          onChangeText={(textValue) => setInputQty(textValue)}
          value={inputQty}
        />
        <TextInput
          style={styles.txtinput}
          placeholder="品牌"
          onChangeText={(textValue) => setInputBrand(textValue)}
          value={inputBrand}
        />
        <TextInput
          style={styles.txtinput}
          placeholder="型號"
          onChangeText={(textValue) => setInputModel(textValue)}
          value={inputModel}
        />
        <Button title="加" onPress={newGood} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button title="重設" onPress={resetInput} color="limegreen" />
        <Button title="返回" onPress={props.back} color="crimson" />
      </View>
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

export default InputGood;
