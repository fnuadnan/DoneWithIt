import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/Button";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import useFetch from "../services/hooks/useFetch";

const ListingsScreen = ({ navigation }: any) => {
  const { listings, error, loading, loadListings } = useFetch();

  return (
    <Screen cssProp={styles.container}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.images[0]} // Display the first image
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 20,
  },
});
