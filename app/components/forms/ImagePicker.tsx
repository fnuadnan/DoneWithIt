import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { demoImage } from "../../data";

interface Props {
  image: string;
  styleProp?: object;
}

const ImagePicker = ({ image, styleProp }: Props) => {
  return (
    <View>
      <Image
        source={ image === "" ? { uri: demoImage  } : { uri: image } }
        style={styleProp}
      />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
