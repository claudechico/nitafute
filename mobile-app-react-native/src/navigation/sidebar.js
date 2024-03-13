import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Sidebar = ({ navigation }) => {
  const navigateToScreen = (route) => () => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToScreen('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToScreen('About')}>
        <Text>About</Text>
      </TouchableOpacity>
      {/* Add more items as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});

export default Sidebar;
