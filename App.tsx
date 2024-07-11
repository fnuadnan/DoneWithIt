import { StyleSheet, View } from "react-native";
import AppButton from "./components/AppButton";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <AppButton title="Login" onPress={() => console.log("Tapped")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
