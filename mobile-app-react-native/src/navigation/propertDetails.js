import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { PropertyDetailsScreen } from "./detalis";
const Nitafutie = createStackNavigator();


export const PropertyDetails = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <Nitafutie.Navigator>
        <Nitafutie.Screen
          name="Details1"
          component={PropertyDetailsScreen}
        />
        <Nitafutie.Screen
          name="Details2"
          component={() => <Text>Another PropertyDetails</Text>}
        />
      </Nitafutie.Navigator>
    </SafeAreaView>
  );
};
