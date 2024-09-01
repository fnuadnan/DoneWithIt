import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";
import useMediaLibraryPermissions from "../hooks/useMediaLibaryPermissions";

interface ImageInputProps {
  imageUri?: string | null;
  onChangeImage: (uri: string) => void;
}

const ImageInput = ({ imageUri, onChangeImage }: ImageInputProps) => {
  // Check if the user has permission to access the media library
  const hasPermission = useMediaLibraryPermissions();

  // Select image from the library
  const selectImage = async () => {
    if (!hasPermission) {
      alert("You need to enable permission to access the library.");
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.5 });
      if (!result.canceled)  onChangeImage(result.assets[0].uri); // pick the first image
    } catch (error) {
      console.error("Error picking an image: ", error);
    }
  };

  // handle image selection
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage("") },
        { text: "No" },
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={ () => handlePress() } >
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
