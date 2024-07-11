import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

interface Props {
  title: string;
  price: string;
  image: object;
}

const ListingDetailScreen = ({ title, price, image }: Props) => {
  return (
    <View>
      <Image source={image} style={{ height: 300, width: "100%" }} />
      <View style={styles.detailsContainer}>
        <AppText cssProp={styles.title}>{title}</AppText>
        <AppText cssProp={styles.price}>{price}</AppText>
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
