import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { WishCardList } from "./wishlistCard";
import { products } from "../contents/nitafutie";
import axios from "axios";
import { API } from "../api/api";

export const Property = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const handleSearch = (text) => {
    const filteredData = posts.filter((item) =>
      item.location.toLowerCase().includes(text.toLowerCase())
    );
    setPosts(filteredData);
  };
  const handleClearSearch = () => {
    setPosts(posts);
  };
  useEffect(() => {
    allProperty();
  }, []);

  const allProperty = async () => {
    try {
      const { data } = await axios.get(
        "http://192.168.0.152:8080/api/v1/auth/all-post"
      );

      if (data.success) {
        setPosts(data.posts);
        //console.log(data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={handleSearch}
        onClear={handleClearSearch}
      />
      <View style={{ backgroundColor: "white" }}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PropertyDetailsScreen", { item })
              }
            >
              <WishCardList item={item} />
            </TouchableOpacity>
          )}
          contentContainerStyle={{ padding: 0 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
