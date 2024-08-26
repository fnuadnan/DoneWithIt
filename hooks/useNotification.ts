import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

const useNotification = (onNotification: any) => {
  async function getPushNotificationToken() {
    try {
      if (!Device.isDevice) {
        console.log("Must use a physical device for push notifications.");
        return;
      }

      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Failed to get push token for notifications.");
        return;
      }

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log("Expo Push Token:", token); // Send this token to your backend
    } catch (error) {
      console.log("Error fetching push notification token:", error);
    }
  }

  useEffect(() => {
    // Fetch push notification token
    getPushNotificationToken();

    // Setup notification listener
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("Notification response received:", response);
      if (onNotification) onNotification(); // Invoke custom handler
    });
  }, [onNotification]); // Dependencies ensure that effect runs only when these props change
};

export default useNotification;
