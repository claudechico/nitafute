import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const Profile = ({ navigation }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    const storedName = await AsyncStorage.getItem("NAME");
    if (storedName) {
      setName(storedName);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.settings}>
        <Text style={{ fontWeight: "600", fontSize: 18, marginLeft: 15 }}>
          Profile
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 28,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/settings.png")}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../assets/prf.png")}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
          marginTop: 40,
        }}
      />

      <Text style={{ alignSelf: "center", marginTop: 20, fontSize: 18 }}>
        {name}
      </Text>

      <TouchableOpacity
        style={styles.button}
        // onPress={() => {
        //   navigation.navigate("MyAddress");
        // }}
      >
        <Text style={styles.Text}>My PropertyList</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.Text}>My Order List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Text style={styles.Text}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Contact");
        }}
      >
        <Text style={styles.Text}>Contact Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("TermsConditions");
        }}
      >
        <Text style={styles.Text}>Terms And Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.Text}>sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontWeight: "600",
    textAlign: "center", // Use textAlign instead of alignContent, alignItems, and alignSelf
  },
  settings: {
    width: "100%",
    height: 70,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "#8e8e8e",
    justifyContent: "center",
  },
});