import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/Home/HomeScreen";
import LoginPage from "../Screens/Login/LoginPage";
import Navigator1 from "./Navigator";
import { ProductProvider } from "../Screens/Cart/ProductContext";
import PaymentPage from "../Screens/Payment/paymentpage";
import PayPage from "../Screens/Payment/paypage";
import MainPage from "../Screens/Main/MainPage";
import mapLocation from "../Screens/Profile/mapLocation";
import MapLocation from "../Screens/Profile/mapLocation";
import Profilepage from "../Screens/Profile/profilepage";

const Stack = createStackNavigator();

const MainNav: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Navigate"
          component={Navigator1}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Checkout"
          component={PaymentPage}
          options={{
            title: "Checkout Page", // Set the title of the screen
            headerStyle: { backgroundColor: "#D70F64" }, // Set the background color of the header
            headerTintColor: "#fff", // Set the color of the header text
            headerTitleStyle: { fontWeight: "bold" }, // Set the style for the header title
          }}
        />
        <Stack.Screen
          name="Payment"
          component={PayPage}
          options={{
            title: "Payment", // Set the title of the screen
            headerStyle: { backgroundColor: "#D70F64" }, // Set the background color of the header
            headerTintColor: "#fff", // Set the color of the header text
            headerTitleStyle: { fontWeight: "bold" }, // Set the style for the header title
          }}
        ></Stack.Screen>
         <Stack.Screen
          name="Location"
          component={MapLocation}
          options={{headerShown: false}}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;