import React from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../screens/listItems";
import { CustomButton } from "../components/ButtonComponents";
import { removeItem } from "../redux/actions/actions";
export const Saved = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.Reducers);

  return (
    <View style={{ flex: 1 }}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => (
            <CartItem
              item={item}
              onRemoveCategory={() => {
                dispatch(removeItem(index));
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Hakuna Matokeo</Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View style={{ marginBottom: 100 }}>
          <CustomButton
            bgColor={"blue"}
            textColor={"#ffff"}
            title={"Fanya Mauzo"}
          />
        </View>
      ) : null}
    </View>
  );
};
