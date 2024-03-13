import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SplashScreen } from "../screens/splash";
import { Signup } from "../screens/signup";
import { Login } from "../screens/login";
import { Home } from "../screens/home";
import { Main } from "../navigation/main";
//import { PropertyDetails } from './propertDetails';
import { PropertyDetailsScreen } from "./detalis";
import { TermsConditions } from "../screens/terms";
import { About } from "../screens/about";
import { Contact } from "../screens/contact";
import { Categories } from "../screens/categories";
const Stack = createStackNavigator();
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PropertyDetailsScreen"
          component={PropertyDetailsScreen}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="TermsConditions"
          component={TermsConditions}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="About"
          component={About}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="Contact"
          component={Contact}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="Categories"
          component={Categories}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>



      
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
// });
