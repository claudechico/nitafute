import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { CustomerInput } from "../components/customerInput";
import { CustomButton } from "../components/ButtonComponents";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);

  const login = () => {
    if (email == "") {
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == "") {
        setBadPassword(true);
      } else {
        setBadPassword(false);
        retrieveData();
      }
    }
  };

  const retrieveData = async () => {
    try {
      const nEmail = await AsyncStorage.getItem("EMAIL");
      const nPassword = await AsyncStorage.getItem("PASSWORD");

      if (email === nEmail && nPassword === password) {
        navigation.navigate("Home");
        console.log(nEmail, nPassword);
      } else {
        alert("Incorrect Username Or Password");
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../assets/splash1.png")}
        style={styles.Icon}
      />
      <Text style={styles.Text}>Nitafutie Login</Text>
      <CustomerInput
        placeholder={"Enter Email"}
        value={email}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
      />
      {badEmail == true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
          Please Enter Valid Email
        </Text>
      )}

      <CustomerInput
        type={"password"}
        placeholder={"Enter Password"}
        value={password}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
      />
      {badPassword == true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
          Please Enter Valid Password
        </Text>
      )}
      <CustomButton
        title={"Login"}
        bgColor={"#000"}
        textColor={"#fff"}
        onPress={() => {
          login();
        }}
      />
      <Text
        style={styles.Text2}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        Click Here to Register
      </Text>

      <Text />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Icon: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 100,
  },
  Text: {
    marginTop: 30,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "600",
    color: "#000",
  },
  Text2: {
    fontSize: 18,
    fontWeight: "800",
    alignSelf: "center",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
