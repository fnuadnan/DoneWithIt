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
    alignItems: "center",
    justifyContent: "center",
  },
});
