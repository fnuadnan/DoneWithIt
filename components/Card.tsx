import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import colors from "../config/colors";
import Text from "./Text";

interface Props {
  title: string;
  subTitle: string;
  image: string;
  onPress?: () => void;
}

const Card = ({ title, subTitle, image, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: image }} style={{ height: 200, width: "100%" }} />
        <View style={styles.detailsContainer}>
          <Text numberOfLines={1} cssProp={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={2} cssProp={styles.subTitle}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    color: colors.black,
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

// This is the Card component that will be used to display the product details in the app.
// The component takes three props:
//      title,
//      subTitle
//      image.
//      onPress
//  The title and subTitle props are used to display the product title and price, respectively.
//  The image prop is used to display the product image
//  The onPress prop is used to navigate to the product details screen when the card is pressed.
