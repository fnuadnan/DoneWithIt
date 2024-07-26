import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";

interface ImageInputProps {
  imageUri?: string | null;
  onChangeImage: (uri: string) => void;
}

const ImageInput = ({ imageUri, onChangeImage }: ImageInputProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => console.log("Tapped on image input.")}
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
