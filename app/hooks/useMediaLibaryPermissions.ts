import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

const useMediaLibraryPermissions = () => {
  const [hasPermission, setHasPermission] = useState(false);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasPermission(granted);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return hasPermission;
};

export default useMediaLibraryPermissions;