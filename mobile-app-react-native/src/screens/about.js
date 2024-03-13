import React from "react";
import { View, Text,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const About = () => {
  return (
    <ScrollView>

<Image
          source={require("../../assets/header.jpg")}
          style={{
            width: "100%",
            height: 250,
            borderRadius: 5,
            alignSelf: "center",
            marginTop: 20,
          }}
        /> 
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          To be a valuable real estate development company that benchmarks
          world-class real estate products and concepts, across all real estate
          verticals, thereby significantly contributing to building modern
          Tanzania and Creating greater Value for customers,corporate clients
          and investors
        </Text>
      </View>
    </ScrollView>
  );
};
