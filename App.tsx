import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

import logger from "./app/Utility/logger";

logger.start();

const App = () => {
  // Create a reference to the navigation container to navigate without navigation prop
  const navigationRef = createNavigationContainerRef();

  return (
    <>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {/* <AuthNavigator /> */}
        <PaperProvider>
          <AppNavigator navigationRef={navigationRef} />
        </PaperProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
