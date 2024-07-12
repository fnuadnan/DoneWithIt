import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  title: string;
  subTitle: string;
  image: object;
  onPress: () => void;
}

const ListItem = ({ title, subTitle, image, onPress }: Props) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={image}
          style={{ height: 70, width: 70, borderRadius: 35, marginRight: 10 }}
        />
        <View>
          <AppText cssProp={styles.title}>{title}</AppText>
          <AppText cssProp={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.gray,
  },
});
