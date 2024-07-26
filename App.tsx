import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Screen from "./components/Screen";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}

const styles = StyleSheet.create({});
