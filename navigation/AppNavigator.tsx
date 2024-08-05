import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{ headerShown: false }}
      name="Feed"
      component={FeedNavigator}
    />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
    <Tab.Screen
      options={{ headerShown: false }}
      name="Account"
      component={AccountNavigator}
    />
  </Tab.Navigator>
);

export default AppNavigator;
