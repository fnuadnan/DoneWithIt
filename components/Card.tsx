import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

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
        <AppText cssProp={styles.title}>{title}</AppText>
        <AppText cssProp={styles.subTitle}>{subTitle}</AppText>
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
