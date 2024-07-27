import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "./components/Screen";
import Test from "./Test";

export default function App() {
  const [imageUris, setImageUris] = useState<string[]>([
    "https://picsum.photos/200/300",
  ]);

  const handleAdd = (uri: string) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      {/* <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      /> */}

      <Test />
    </Screen>
  );
}

const styles = StyleSheet.create({});
