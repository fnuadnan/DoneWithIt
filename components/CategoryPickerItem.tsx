import React from "react";
import { StyleSheet, View } from "react-native";
import { IconName } from "../entities";
import AppText from "./AppText";
import Icon from "./Icon";

interface Props {
  onPress: () => void;
  item: { label: string; icon: IconName; backgroundColor: string };
}

const CategoryPickerItem = ({ item, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText cssProp={styles.label}>{item.label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
    // justifyContent: "center",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
