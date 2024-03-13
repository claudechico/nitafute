import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const MyCardlistProduct = React.memo(
  ({ item, onaddToCategory, onAddWishlis }) => {
    const navigation = useNavigation();

    const formatNumber = (number) => {
      // Logic to format the number (e.g., add commas)
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.Card}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PropertyDetailsScreen", { item });
            }}
          >
            <Image
              source={{
                uri: `http://192.168.0.152:8080/api/v1/auth/get-photo/${item._id}`,
              }}
              style={styles.image}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Location:{item.location}</Text>
          <View style={styles.price}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
             Price:{"Tsh" + " " + formatNumber(item.price)}
            </Text>
            <Text></Text>
          </View>
        </View>
      </View>
    );
  }
);
const styles = StyleSheet.create({
  Card: {
    width: 200,
    height: 200,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  image: {
    height: 120,
    width: "100%",
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    alignItems: "center",
  },
  add: {
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 0,
    backgroundColor: "#008000",
  },
  wishlist: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 15,
    position: "absolute",
    top: 10,
    right: 10,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
