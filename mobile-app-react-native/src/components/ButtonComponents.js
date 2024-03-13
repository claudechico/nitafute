import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export const CustomButton = ({ title,onPress,bgColor,textColor }) => {
  return (
    <TouchableOpacity
      style={styles.CustomButton}
      
      onPress={()=>{

        onPress();
    
    
    }}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  CustomButton: {
    width: Dimensions.get("window").width - 50,
    height: 60,
    backgroundColor: "blue",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 10,
  },
});
