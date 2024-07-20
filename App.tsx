import { StyleSheet } from "react-native";
import Screen from "./components/Screen";
import ListingEditScreen from "./screens/ListingEditScreen";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({});
