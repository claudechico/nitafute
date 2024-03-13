
import React, { createContext, useState } from "react";
import { View, Text } from "react-native";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = (item) => {
    setFavorites([...favorites, item]);
  };  

  const remove = (item) => {
    const newFavorites = favorites.filter((x) => x.placeId !== item.placeId);
    setFavorites(newFavorites); 
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites: add, 
        removeFromFavorites: remove, 
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
