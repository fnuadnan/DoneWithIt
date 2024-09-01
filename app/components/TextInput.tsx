import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { DimensionValue, StyleSheet, TextInput, View } from "react-native";
import defaultStyle from "../config/styles";
import { IconName, textProps } from "../entities";

interface Props {
  icon?: IconName;
  textProps?: textProps; // textProps is an object with key-value pairs
  width?: DimensionValue;
}

const AppTextInput = ({ icon, textProps, width = "100%" }: Props) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} color={defaultStyle.colors.medium} style={styles.icon}/>
      )}
      <TextInput placeholderTextColor={defaultStyle.colors.medium} style={defaultStyle.text} {...textProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

// This component is just like the TextInput from react native but with some additional features.
// It takes two props:
//      icon: IconName
//      textProps: object
// The icon prop is the name of the icon that will be displayed on the left side of the input field.
// The textProps prop is an object that can be used to pass additional props to the TextInput component.
