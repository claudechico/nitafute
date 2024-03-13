import react, { useState } from "react";
import { View, Text, Image, TextInput, Dimensions } from "react-native";

export const CustomerInput = ({
  type,
  value,
  onChangeText,
  placeholder,
  icon,
  keyboardType,
}) => {

  return (
    <View
      style={{
        width: Dimensions.get('window').width-50,
        height: 60,
        borderWidth: 0.8,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 30,
        flexDirection: "row",
   
      }}
    >
      <Image source={icon} style={{ width: 24, height: 24 }} />
      <TextInput
        value={value}
        keyboardType={keyboardType ? keyboardType : "default"}
        onChangeText={(txt) => {
          onChangeText(txt);
        }}
        placeholder={placeholder}
        secureTextEntry={type ? true : false}
        style={{
          marginLeft: 10,
        }}
      />
    </View>
  );
};
