import { StyleSheet, View } from "react-native";
import Card from "./components/Card";

import jacket from "./assets/jacket.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Card title="Red jacket for sale" subTitle="$100" image={jacket} />
      <Card title="Red jacket for sale" subTitle="$100" image={jacket} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
