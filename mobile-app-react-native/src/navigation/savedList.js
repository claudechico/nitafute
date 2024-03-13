import React, { useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { WishlistItems } from "../products/wishlistProduct";
import { removeWishlist } from "../redux/actions/actions";
export const Wishlist = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.Reducers2);
  const dispatch=useDispatch(); 
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return <WishlistItems item={item} onRemoveWishlist={()=>{
dispatch(removeWishlist(index));


          }}/>
        }}
      />
    </View>
  );
};
