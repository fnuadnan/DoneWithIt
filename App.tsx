import { StyleSheet } from "react-native";
import jacket from "./assets/jacket.jpg";
import ListingDetailScreen from "./screens/ListingDetailScreen";

export default function App() {
  return (
    <ListingDetailScreen
      title="Red jacket for sale"
      price="$100"
      image={jacket}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
