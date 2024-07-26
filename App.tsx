import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet } from "react-native";
import ImageInput from "./components/ImageInput";
import Screen from "./components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState<string | null>(null); // Image URI state

  // Request permission to access the library
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  // Select image from the library
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
      3;
    } catch (error) {
      console.error("Error picking an image: ", error);
    }
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}

      <ImageInput
        onChangeImage={(uri: string) => setImageUri(uri)}
        imageUri={imageUri}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
