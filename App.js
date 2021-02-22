import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import GoodScreen from "./component/GoodScreen";
import CustomerScreen from "./component/CustomerScreen";
import OrderScreen from "./component/OrderScreen";

const App = (props) => {
  const [goodFlex, setgoodFlex] = useState(0);
  const [customerFlex, setcustomerFlex] = useState(0);
  const [orderFlex, setOrderFlex] = useState(1);

  let goodList = "hello";

  const saveGood = (importGood) => {
    goodList = importGood;
    console.log(goodList);
  };

  const goGoodScreen = () => {
    setgoodFlex(1);
    setcustomerFlex(0);
    setOrderFlex(0);
  };

  const goCustomerScreen = () => {
    setgoodFlex(0);
    setcustomerFlex(1);
    setOrderFlex(0);
  };

  const goOrderScreen = () => {
    setgoodFlex(0);
    setcustomerFlex(0);
    setOrderFlex(1);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.GoodScreenContainer, { flex: goodFlex }]}>
        <GoodScreen
          goCustomer={goCustomerScreen}
          goOrder={goOrderScreen}
          exportGood={saveGood}
        />
      </View>
      <View style={[styles.CustomerScreenContainer, { flex: customerFlex }]}>
        <CustomerScreen goGood={goGoodScreen} goOrder={goOrderScreen} />
      </View>
      <View style={[styles.OrderScreenContainer, { flex: orderFlex }]}>
        <OrderScreen
          goCustomer={goCustomerScreen}
          goGood={goGoodScreen}
          goodList={goodList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
  },
  GoodScreenContainer: {
    flex: 1,
  },
  CustomerScreenContainer: {
    flex: 1,
  },
  OrderScreenContainer: {
    flex: 1,
  },
});

export default App;
