import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, DimensionValue, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import defaultStyle from "../config/styles";
import { Category, IconName } from "../entities";
import PickerItem from "./PickerItem";
import Screen from "./Screen";
import AppText from "./Text";

interface Props {
  icon?: IconName;
  placeholder: string;
  items: Category[];
  onSelectItem: (item: Category) => void;
  selectedItem?: Category;
  width?: DimensionValue;
  PickerItemComponent: any;
  numberOfColumns?: number;
}

const AppPicker = ({ icon, placeholder, items, onSelectItem, selectedItem, width = "100%", PickerItemComponent = PickerItem, numberOfColumns = 1 }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyle.colors.medium} style={styles.icon} />}
          {selectedItem ? (
            <AppText cssProp={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText cssProp={styles.placeHolder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyle.colors.medium}/>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            numColumns={numberOfColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeHolder: {
    color: defaultStyle.colors.medium,
    flex: 1,
  },
});

// This is the AppPicker component.
// It's a dropdown picker component that takes
//      icon: IconName
//      placeholder: string
//      items: Category[]
//      onSelectItem: function
//      selectedItem: Category
//      width: DimensionValue
//      PickerItemComponent: any
//  The icon prop is the icon that will be displayed on the left side of the picker.
//  The placeholder prop is the text that will be displayed when no item is selected.
//  The items prop is an array of objects with label and value properties.
//  The onSelectItem prop is a function that will be called when an item is selected.
//  The selectedItem prop is the currently selected item.
//  The width prop is the width of the picker.
//  The PickerItemComponent prop is the component that will be used to render the items in the list.

//  The component uses a Modal to display the list of items when the user clicks on the picker.
//  It uses a FlatList to render the list of items.
//  It uses the PickerItem component to render each item in the list.
