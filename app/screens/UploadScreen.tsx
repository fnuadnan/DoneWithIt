import LottieView from "lottie-react-native";
import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import useProgress from "../hooks/useProgress";
import useStore from "../store";

interface UploadScreeProps {
  visible: boolean;
}

const UploadScreen = ({ visible }: UploadScreeProps) => {
  // useStore hook to get the progress state and the setProgress and resetProgress functions
  const { progress, setProgress, resetProgress } = useStore((state) => ({
    progress: state.progress,
    setProgress: state.setProgress,
    resetProgress: state.resetProgress,
  }));

  // useProgress hook to update the progress of the upload screen
  useProgress(visible, setProgress, resetProgress);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      statusBarTranslucent
      transparent
    >
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            source={require("../assets/animations/done.json")}
            autoPlay
            loop={false}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});

// this component shows a progress bar while the data is being uploaded to the server.
// if the progress is less than 1, it shows a progress bar with the color primary.
// if the progress is equal to 1, it shows a done animation.
// the progress is updated using the useProgress hook.
