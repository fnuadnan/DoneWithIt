import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";

interface ImageInputProps {
  imageUri?: string | null;
  onChangeImage: (uri: string) => void;
}

const ImageInput = ({ imageUri, onChangeImage }: ImageInputProps) => {
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
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
      3;
    } catch (error) {
      console.error("Error picking an image: ", error);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!imageUri) {
          selectImage();
        } else {
          Alert.alert("Delete", "Are you sure you want to delete this image?", [
            { text: "Yes", onPress: () => onChangeImage("") },
            { text: "No" },
          ]);
        }
      }}
    >
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    height: 100,
    overflow: "hidden",
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
});

// This component allows the user to select an image from the library.
//    if an image is already selected show the image
//    else show a camera icon.
// When the user taps on the camera icon, the image picker is launched.
//    if an image is already selected, show an alert dialog to confirm deletion.
