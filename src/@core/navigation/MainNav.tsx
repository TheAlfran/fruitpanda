import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../page/Home/HomeScreen";
import LoginPage from "../page/Login/LoginPage";
import Navigator1 from "./Navigator";
import { ProductProvider } from "../page/Cart/ProductContext";
import PaymentPage from "../page/Payment/paymentpage";
import PayPage from "../page/Payment/paypage";

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
        <Stack.Screen name="Checkout" component={PaymentPage}></Stack.Screen>
        <Stack.Screen name="Payment" component={PayPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
