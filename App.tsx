import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import OfflineNotice from "./components/OfflineNotice";
import AppNavigator from "./navigation/AppNavigator";
import navigationTheme from "./navigation/navigationTheme";
import logger from "./Utility/logger";

logger.start();

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
