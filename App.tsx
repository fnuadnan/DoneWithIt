import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import React from "react";
import OfflineNotice from "./components/OfflineNotice";
import AppNavigator from "./navigation/AppNavigator";
import navigationTheme from "./navigation/navigationTheme";

import logger from "./Utility/logger";

logger.start();

const App = () => {
  // Create a reference to the navigation container to navigate without navigation prop
  const navigationRef = createNavigationContainerRef();

  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigator /> */}
        <AppNavigator navigationRef={navigationRef} />
      </NavigationContainer>
    </>
  );
};

export default App;
