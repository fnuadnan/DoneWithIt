import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useNotification from "../hooks/useNotification";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

interface Props {
  navigationRef: any;
}
const Tab = createBottomTabNavigator();

const AppNavigator = ({ navigationRef }: Props) => {
  // Handle notification and navigate to the "Account" screen
  const handleNotification = () => navigationRef.current?.navigate("Account");

  // Setup notification listener with handler
  useNotification(handleNotification); // Provide custom handler

  return (
    <Tab.Navigator>
      {/* Feed Navigator */}
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* Listing Edit Screen */}
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }: any) => ({
          headerShown: false,
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      {/* Account Navigator */}
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Account"
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
