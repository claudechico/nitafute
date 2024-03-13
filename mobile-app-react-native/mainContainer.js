import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { ActivityIndicator, Colors } from "react-native-paper";
export const MainContainer = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <AppNavigation />
    </SafeAreaView>
  );
};
