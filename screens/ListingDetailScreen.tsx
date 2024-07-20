import React from "react";
import { Image, StyleSheet, View } from "react-native";
import mosh from "../assets/mosh.jpg";
import ListItem from "../components/ListItem";
import AppText from "../components/Text";
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
        <View style={{ marginVertical: 40 }}>
          <ListItem title="Fnu Adnan" subTitle="5 Listings" image={mosh} />
        </View>
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
