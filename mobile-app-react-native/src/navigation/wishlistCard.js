import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios, { Axios } from "axios";
const iconMapping = {
  location: require("../../assets/location.png"),
  dollar: require("../../assets/dollar.png"),
  telephone: require("../../assets/telephone.png"),
};


export const WishCardList = ({ item }) => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState([]);


  const makePhoneCall = () => {
    const phoneNumber = item.phone;
    const url = `tel:${phoneNumber}`;

    Linking.openURL(url)
      .then(() => {
        console.log("Phone call initiated successfully");
      })
      .catch((err) => {
        console.error("Error opening phone dialer", err);
      });
  };
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
 
  return (
    <Card elevation={8} style={styles.card}>
  <Card.Cover source={{ uri: `http://192.168.0.152:8080/api/v1/auth/get-photo/${item._id}` }} />
  <View style={styles.rowContainer}>
    <InfoItem label="Location" value={item.location} icon="location" />
    <InfoItem label="Price" value={`Tsh ${formatNumber(item.price)}`} icon="dollar" />
  </View>
  <TouchableOpacity style={styles.makeCallButton} onPress={makePhoneCall}>
    <Text style={styles.makeCallButtonText}>Make Phone Call</Text>
  </TouchableOpacity>
</Card>

  );
};


const InfoItem = ({ label, value, icon }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}:</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "white",
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  infoLabel: {
    fontWeight: "600",
    paddingEnd: 5,
  },
  infoValue: {
    fontWeight: "600",
    paddingEnd: 5,
  },
  makeCallButton: {
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "green",
  },
  makeCallButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
