import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();
const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
