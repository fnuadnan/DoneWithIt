import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface PickerItemProps {
  label: string;
  onPress: () => void;
}

const PickerItem = ({ label, onPress }: PickerItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

// This is a reusable component for the picker item.
//      label: string
//      onPress: () => void
// The label prop is the text that will be displayed.
// The onPress prop is the function that will be called when the item is pressed.
