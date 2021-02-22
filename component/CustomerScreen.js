import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList, Text, Modal } from "react-native";
import Customer from "./Customer";
import Heading from "./heading";
import InputCustomer from "./InputCustomer";

const CustomerScreen = (props) => {
  const customerjson = require("../component/customerList.json");
  const [customer, setCustomer] = useState(customerjson.customerList);
  const [visible, setVisible] = useState(false);

  const funcCustomer = (customer, index, separators) => {
    //const [selectedId, setSelectedId] = useState(null);
    return (
      <Customer
        id={customer.id}
        index={index}
        name={customer.name}
        address={customer.address}
        deposit={customer.deposit}
        setCustomerprop={setCustomer}
        sep={separators}
      />
    );
  };

  const addCustomer = (newCustomer) => {
    setCustomer((currCustomer) => [...currCustomer, newCustomer]);
    setVisible(false);
  };

  return (
    <View style={styles.customerListScreen}>
      <Heading title="小商家" />
      <View style={styles.switchButtonContainer}>
        <Heading title="客戶名單" />
        <Button title="商品" onPress={props.goGood} color="crimson" />
        <Button title="訂單" onPress={props.goOrder} color="crimson" />
      </View>
      <Button
        title="+增加客戶"
        onPress={() => setVisible(true)}
        color="crimson"
      />
      <Modal presentationStyle="overFullScreen" visible={visible}>
        <View style={styles.inputContainer}>
          <InputCustomer
            addButton={addCustomer}
            back={() => setVisible(false)}
          />
        </View>
      </Modal>
      <View style={styles.listContainer}>
        <FlatList
          data={customer}
          renderItem={({ item, index }) => funcCustomer(item, index)}
          keyExtractor={(item) => item.id}
          //extraData={selectedId}
        />
      </View>
    </View>
  );
};

{
  /* <FlatList
    data={customer}
    renderItem={({ item, index }) => funcgood(item, index)}
    keyExtractor={(item) => item.id}
    //extraData={selectedId}
  /> */
}
const styles = StyleSheet.create({
  customerListScreen: {
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

export default CustomerScreen;
