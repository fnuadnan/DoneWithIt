import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  title: string;
  subTitle?: string;
  image?: object;
  imageComponent?: JSX.Element;
  onPress?: () => void;
  renderRightActions?: () => JSX.Element;
}

const ListItem = ({
  title,
  subTitle,
  image,
  imageComponent,
  onPress,
  renderRightActions,
}: Props) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {/*Dynamically render the image or icon*/}
            {image ? (
              <Image
                source={image}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                }}
              />
            ) : (
              imageComponent
            )}
            {/*Dynamically render the image or icon*/}
            <View style={{ marginLeft: 10, justifyContent: "center" }}>
              <AppText cssProp={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText cssProp={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.gray,
  },
});
