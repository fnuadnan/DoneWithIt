import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MyListingsScreen from "../screens/MyListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";

const Stack = createStackNavigator();
const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountDetails" component={AccountScreen} />

      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />

      <Stack.Screen name='MyListings' component={MyListingsScreen} />
      <Stack.Screen name="ListingEdit" component={ListingEditScreen} /> 
      
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
