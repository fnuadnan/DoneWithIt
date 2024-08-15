import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import OfflineNotice from "./components/OfflineNotice";
import AppNavigator from "./navigation/AppNavigator";
import navigationTheme from "./navigation/navigationTheme";

const App = () => {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
