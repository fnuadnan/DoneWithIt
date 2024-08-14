import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Text } from "react-native";
import Screen from "./components/Screen";

const App = () => {
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");

      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      console.log(items);

      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen>
      <Text onPress={storeData}>Hello World</Text>
    </Screen>
  );
};

export default App;
