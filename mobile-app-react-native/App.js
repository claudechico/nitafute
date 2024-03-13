import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigation } from './src/navigation/AppNavigation';
import { MainContainer } from './mainContainer';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';


export default function App() {
  return (
    <>
    <Provider store={store}>

    <MainContainer/>
    </Provider>

      <ExpoStatusBar />
  


     
    </>
   
  );
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
