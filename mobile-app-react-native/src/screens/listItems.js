import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

export const CartItem = ({ item, onRemoveCategory }) => {
  return (
    <TouchableOpacity onPress={() => {/* Handle item press */}}>
      <Card elevation={8} style={styles.card}>
        <Card.Cover source={item.image } />

        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>Tsh {item.price}</Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => {
              onRemoveCategory(item);
            }}
          >
           
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
         <View>
         {/* <Text>{item.description}</Text> */}
         </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "white",
    marginBottom: 20,
  },
  itemDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemPrice: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemPhone: {
    fontWeight: "bold",
    fontSize: 16,
  },
  removeButton: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: 'red',
  },
  removeButtonText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },
});
