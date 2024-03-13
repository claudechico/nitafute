import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CustomerInput } from "../components/customerInput";
import { CustomButton } from "../components/ButtonComponents";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState(false);
  const [ConfirmbadPassword, setBadComfirmPassword] = useState(false);
  const [ConfirmPassword, ConfirmsetPassword] = useState("");
  const [name, setname] = useState("");
  const [badName, setBadName] = useState(false);
  const [mobile, setMobile] = useState("");
  const [badMobile, setBadMobile] = useState(false);
  const validate = async () => {
    let isValid = true;
    if (email == "") {
      setBadEmail(true);
      isValid = false;
    } else {
      setBadEmail(false);
    }
    if (password == "") {
      setBadPassword(true);
      isValid = false;
    } else {
      setBadPassword(false);
    }
    if (name == "") {
      setBadName(true);
      isValid = false;
    } else {
      setBadName(false);
    }
    if (mobile == "") {
      setBadMobile(true);
      isValid = false;
    }
    if (ConfirmPassword == "") {
      setBadComfirmPassword(true);
      isValid = false;
    } else {
      setBadComfirmPassword(false);
    }
    if (password !== ConfirmPassword) {
      setBadComfirmPassword(true);
      isValid = false;
    } else {
      setBadComfirmPassword(false);
    }

    if (isValid) {
      await storeData();
    } else {
      alert("Data not saved");
    }
  };
  const storeData = async () => {
    console.log(storeData);
    try {
      await AsyncStorage.setItem("NAME", name);
      await AsyncStorage.setItem("EMAIL", email);
      await AsyncStorage.setItem("MOBILE", mobile);
      await AsyncStorage.setItem("PASSWORD", password);
      console.log("Data saved successfully");
      navigation.goBack();
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Oops, something went wrong!");
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/splash1.png")}
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            marginTop: 100,
            borderRadius: 50,
          }}
        />
        <Text
          style={{
            marginTop: 50,
            alignSelf: "center",
            fontSize: 30,
            fontWeight: "600",
            color: "#000",
          }}
        >
          Create New Account
        </Text>
        <CustomerInput
          placeholder={"Enter Email"}
          // icon={require("../../assets/email.png")}
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
        />
        {badEmail == true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            PLease Enter Valid Email
          </Text>
        )}
        <CustomerInput
          placeholder={"Enter name"}
          // icon={require("../../assets/user.png")}
          value={name}
          onChangeText={(txt) => {
            setname(txt);
          }}
        />
        {badName == true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            PLease name Cant be Empty
          </Text>
        )}
        <CustomerInput
          placeholder={"Enter Phone"}
          // icon={require("../../assets/phone.png")}
          value={mobile}
          keyboardType={"number-pad"}
          onChangeText={(txt) => {
            setMobile(txt);
          }}
        />
        {badMobile == true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            PLease Enter Valid Phone
          </Text>
        )}
        <CustomerInput
           type={"password"}
          placeholder={"Enter Password"}
          // icon={require("../../assets/padlock.png")}
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
        />
        {badPassword == true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            PLease Enter Valid Password
          </Text>
        )}
        <CustomerInput
          placeholder={"Confirm  Password"}
          type={"password"}
          // icon={require("../../assets/padlock.png")}
          value={ConfirmPassword}
          onChangeText={(txt) => {
            ConfirmsetPassword(txt);
          }}
        />
        {ConfirmbadPassword == true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            PLease enter Correct Password
          </Text>
        )}
        <CustomButton
          title={"Register"}
          bgColor={"#000"}
          textColor={"#fff"}
          onPress={() => {
            validate();
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "800",
            alignSelf: "center",
            marginTop: 20,
            textDecorationLine: "underline",
            marginBottom: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          Already Have Account?
        </Text>
      </View>
    </ScrollView>
  );
};
