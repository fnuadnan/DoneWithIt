import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
