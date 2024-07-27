import * as Location from "expo-location";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number} | null>(null);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude });
	  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location; // returns the location object
};

export default useLocation;
