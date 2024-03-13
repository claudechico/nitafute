import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.8,
        borderBottomColor: '#8e8e8e', // Fix the typo here
        backgroundColor: '#fff',
      }}
    >
      <Text
        style={{
          fontWeight: '600',
          fontSize: 20,
          color: '#000',
          marginLeft: 20,
        }}
      >
        Karibu Nitafutie App
      </Text>

      <TouchableOpacity
        style={{
          marginRight: 20,
          justifyContent: 'center',
        }}
      >
     
      </TouchableOpacity>
    </View>
  );
};
