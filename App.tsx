import { StyleSheet } from "react-native";
import ViewImageScreen from "./screens/ViewImageScreen";

export default function App() {
  return (
    <>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
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
