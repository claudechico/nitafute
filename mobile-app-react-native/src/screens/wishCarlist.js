import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const MyCardlistProduct = ({ item,onaddToCategory,onAddWishlist }) => {
  return (
    <View
      style={{
        width: 200,
    height: 200,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 20,
      }}
    >
      <Image
        source={item.image}
        style={{
          height: 120,
          width: "100%",
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      />

      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        {" "}
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "Space-between",
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          {"TZ" + " " + item.price}
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderRadius: 10,
            paddingLeft: 20,
            paddingRight:20,
            justifyContent:'center',
            alignItems: 'center',
            paddingRight: 15,
            marginLeft: 15,
          }}
        onPress={()=>{

         onaddToCategory(item)
        }}  
        >
          <Text style={{color:'#000',fontSize:15}}>Add to cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          // with: 40,
          // height: 40,
          // backgroundColor: "#fff",
          // position: "absolute",
          // top: 10,
          // right: 10,
          // elevation: 5,
          // alignItems: "center",
        }}

        onPress={()=>{

          onAddWishlist(item)
        }}
      >
        <Image
          source={require("../../assets/heart.png")}
          style={{
            width: 30,
            height: 30,
           
          
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
