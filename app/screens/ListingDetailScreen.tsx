import React from "react";
import { Image, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import AppText from "../components/Text";
import colors from "../config/colors";
import { demoImage } from "../data";

const ListingDetailScreen = ({ route }: any) => {
  const { title, price, images } = route.params;

  return (
    <View>
      <Image source={{ uri: images[0] }} style={{ height: 300, width: "100%" }}/>
      <View style={styles.detailsContainer}>
        <AppText cssProp={styles.title}>{title}</AppText>
        <AppText cssProp={styles.price}>${price}</AppText>
        <View style={styles.userContainer}>
          <ListItem title="Fnu Adnan" subTitle="5 Listings" image={{uri: demoImage}}/>
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
  userContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
});
