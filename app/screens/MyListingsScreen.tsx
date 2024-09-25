import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/Button";
import Card from "../components/Card";
import Screen from "../components/Screen";
import { Menu, IconButton } from "react-native-paper";
import colors from "../config/colors";
import useGetListings from "../services/hooks/useGetListings";

const MyListingsScreen = ({ navigation }: any) => {
  const { listings, error, loading, loadListings } = useGetListings();

  const [visibleMenu, setVisibleMenu] = useState<string | null>(null);
  // Toggle Menu visibility
  const openMenu = (id: string) => setVisibleMenu(id);
  const closeMenu = () => setVisibleMenu(null);

  // Navigate to ListingEditScreen when "Edit" is clicked
  const handleEdit = (item: any) => {
    closeMenu();
    navigation.navigate("ListingEdit", item); // Navigate to ListingEditScreen, passing the item data
  };

  // Delete the listing when "Delete" is clicked
  const handleDelete = (item: any) => {
    console.log("Deleting:", item.title);
    closeMenu(); // Close menu after performing the action
  };

  return (
    <Screen cssProp={styles.container}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      {/* <ActivityIndicator visible={loading} /> */}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            {/* Render Card Component */}
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.images[0]} // Display the first image
              // onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
            
            {/* Menu Button inside Card */}
            <View style={styles.menuContainer}>
              <Menu
                visible={visibleMenu === item.id}
                onDismiss={closeMenu}
                anchor={ <IconButton style={styles.menuButton} icon="dots-vertical" size={20} onPress={() => openMenu(item.id)} /> }
              >
                <Menu.Item onPress={() => handleEdit(item)} title="Edit" />
                <Menu.Item onPress={() => handleDelete(item)} title="Delete" />
              </Menu>
            </View>
          </View>
        )}
        numColumns={2}
      />
    </Screen>
  );
};

export default MyListingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 13,
  },
  cardContainer: {
    flex: 1,
    margin: 13, // Adjust the margin as needed for spacing between cards
    maxWidth: "50%", // Ensure that two cards fit in one row
    height: 280,
    position: "relative", // Ensure the button is positioned inside the card
  },
  menuContainer: {
    position: "absolute",
    top: 1, // Adjust to place at top-right
    right: 1,
    zIndex:1, // Ensure the button is above the card content
  },
  menuButton: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background to make the button visible
    borderRadius: 20, // To make the button round
  },
});
