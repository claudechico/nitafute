import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Main } from "../navigation/main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "../navigation/profile";
import { Wishlist } from "../navigation/wishlist";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Dashboard: "md-home",
  Property: "md-list",
  Profile: "md-person",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabActiveTintColor={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Main}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="Property"
        component={Wishlist}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
