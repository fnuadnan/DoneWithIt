import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { menuItems } from "../data";

const MyAccountScreen = () => {
  return (
    <Screen cssProp={styles.container}>
      <View style={{ height: 100, marginVertical: 20 }}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="fnu.adnan12@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>

      <View style={{ marginVertical: 20 }}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              imageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  iconColor={colors.white}
                />
              }
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      </View>
      <ListItem
        title="Log Out"
        imageComponent={
          <Icon
            name="logout"
            backgroundColor="yellow"
            iconColor={colors.white}
            size={40}
          />
        }
      />
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});
