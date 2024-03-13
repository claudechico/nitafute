import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { FavoriteContext } from "../../services/savedContext";

export const Favorite = ({ saved }) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoriteContext);
  const isFavorite = favorites.find((r) => r.placeId === saved.placeId);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => (!isFavorite ? addFavorite(saved) : removeFavorite(saved))}
    >
      <View style={styles.item}>
        <Text>{item.title}</Text>
        {/* Add more details or customize as needed */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No favorites yet</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    marginTop: 20,
    marginLeft: 20,
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
