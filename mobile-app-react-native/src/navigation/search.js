import React from "react";
import { View,Text,SafeAreaView,StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
export const SearchProperties= ()=>{
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
  
return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <Searchbar
        placeholder="Search here"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      </SafeAreaView>
    );


}