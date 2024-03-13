import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Main } from "../navigation/main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "../navigation/profile";
import { Property } from "../navigation/wishlist";
import { Search } from "../navigation/search";
import { useSelector } from "react-redux";
import { Saved } from "../navigation/saved";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Dashboard: "md-home",
  Search: "search",
  Saved: "md-heart",
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

export const Home = () => {
  // const { Reducers, Reducers2 } = useSelector(state => state);
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
        onent={Search}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Search"
        component={Property}
      />

 
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
