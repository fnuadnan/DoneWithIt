import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./Text";

interface Props {
  title: string;
  subTitle: string;
  image: object;
}

const Card = ({ title, subTitle, image }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={{ height: 200, width: "100%" }} />
      <View style={styles.detailsContainer}>
        <AppText numberOfLines={1} cssProp={styles.title}>
          {title}
        </AppText>
        <AppText numberOfLines={2} cssProp={styles.subTitle}>
          {subTitle}
        </AppText>
      </View>
    </View>
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
//  The title and subTitle props are used to display the product title and price, respectively.
//  The image prop is used to display the product image
