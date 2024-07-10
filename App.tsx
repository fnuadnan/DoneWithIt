import { StyleSheet } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <>
      <WelcomeScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
