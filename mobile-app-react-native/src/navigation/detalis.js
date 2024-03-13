import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { WishCardList } from "./wishlistCard";
import Swiper from "react-native-swiper";
export const PropertyDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView>
      
      <WishCardList item={item} />
      <Text style={{ paddingLeft: 10, fontWeight: 600, fontSize: 17 }}>
        {item.description}
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
