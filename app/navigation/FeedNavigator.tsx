import { createStackNavigator } from "@react-navigation/stack";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();
const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ presentation: "modal", headerShown: false }}
    >
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
