import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import AppText from "../components/Text";

interface UploadScreeProps {
  progress: number;
  visible: boolean;
}

const UploadScreen = ({ progress = 0, visible }: UploadScreeProps) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      statusBarTranslucent
      transparent
    >
      <View style={styles.container}>
        <AppText>
          {progress === 1
            ? "Successfully uploaded"
            : `Uploading ${Math.round(progress * 100)}%`}
        </AppText>
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
