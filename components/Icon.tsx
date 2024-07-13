import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import colors from "../config/colors";
import { IconName } from "../entities";

interface Props {
  name: IconName;
  size: number;
  backgroundColor: string;
  iconColor: string;
}

const Icon = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}: Props) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
};

export default Icon;
