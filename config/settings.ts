import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://localhost:3000/api",
  },
  stagging: {
    apiUrl: "http://localhost:3000/api",
  },
  prod: {
    apiUrl: "http://localhost:3000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.releaseChannel === "staging") return settings.stagging;
  return settings.prod;
};

export default getCurrentSettings;

// this file is used to store the settings for the app.
// It is used to determine the api url based on the environment (dev, staging, prod).
