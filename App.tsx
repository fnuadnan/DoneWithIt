import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text } from "react-native";
import Screen from "./components/Screen";

const Tweets = ({ navigation }: any) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() =>
          navigation.navigate("TweetDetails", { id: 1, title: "Default Title" })
        }
      />
    </Screen>
  );
};

const TweetDetails = ({ route }: any) => {
  return (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({ route }: any) => ({
          // headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          // headerShown: false,
          title: route.params.title || "Default Title",
        })}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

// title (options)
// custumizations heder both gloablly in the navigator and locally in each screen
