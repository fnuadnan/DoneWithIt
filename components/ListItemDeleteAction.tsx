import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/colors";

interface Props {
  handleDelete: () => void;
}

const ListItemDeleteAction = ({ handleDelete }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={handleDelete} style={styles.container}>
      <View>
        <MaterialCommunityIcons name="trash-can" size={35} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

// This is the ListItemDeleteAction component that will be rendered when the user swipes to delete a message.
